import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,ts,tsx}'],
  },

  globalIgnores(['**/.next/**', '**/.next-audit/**', '**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...nextVitals,

  // Node.js scripts / build-time files
  {
    files: [
      'eslint.config.{js,mjs}',
      'scripts/**/*.{js,mjs}',
    ],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Content data files may contain irregular whitespace by design
  {
    files: ['src/data/**/*.{js,mjs}'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },

  // This third-party-compatible collector is preserved byte-for-byte in public/.
  {
    files: ['public/collet-data.js'],
    rules: { 'no-unused-vars': 'off' },
  },
])
