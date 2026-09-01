import { execFile } from 'node:child_process'
import { stat } from 'node:fs/promises'
import { promisify } from 'node:util'
import { resolve } from 'node:path'

const execFileAsync = promisify(execFile)
const modifiedAtCache = new Map<string, Date>()

async function gitModifiedAt(relativePath: string) {
  try {
    const { stdout: status } = await execFileAsync('git', ['status', '--porcelain', '--', relativePath], {
      cwd: process.cwd()
    })
    if (status.trim()) return

    const { stdout } = await execFileAsync('git', ['log', '-1', '--format=%cI', '--', relativePath], {
      cwd: process.cwd()
    })
    const value = stdout.trim()
    if (value) return new Date(value)
  } catch {
    // 部署环境可能未提供 Git 历史；此时使用内容文件自身的修改时间。
  }
}

export async function lastModified(...relativePaths: string[]) {
  const dates = await Promise.all(relativePaths.map(async (relativePath) => {
    const cached = modifiedAtCache.get(relativePath)
    if (cached) return cached

    // Sitemap is fully generated at build time; do not trace every source file into the server bundle.
    const contentPath = resolve(/* turbopackIgnore: true */ process.cwd(), relativePath)
    const modifiedAt = await gitModifiedAt(relativePath) ?? (await stat(contentPath)).mtime
    modifiedAtCache.set(relativePath, modifiedAt)
    return modifiedAt
  }))
  return new Date(Math.max(...dates.map((date) => date.getTime())))
}
