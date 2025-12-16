<template>
  <div class="items-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">{{ $t('itemsPage.header.title') }}</h1>
        <p class="page-subtitle">
          {{ $t('itemsPage.header.subtitle') }}
        </p>
      </div>

      <h2 class="section-title">{{ $t('itemsPage.allCategories') }}</h2>

      <div class="category-grid">
        <router-link
          v-for="card in categoryCards"
          :key="card.title"
          :to="card.to"
          class="category-card"
        >
          <div class="card-top">
            <div class="card-title-wrap">
              <h3 class="card-title">{{ card.title }}</h3>
              <span class="item-count">{{ card.count }}</span>
            </div>
            <p class="card-desc">{{ card.description }}</p>
          </div>
          <div class="card-bottom">
            <span class="explore">{{ $t('itemsPage.exploreCategory') }}</span>
            <span class="arrow">›</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our VEIN Items Database?</h2>
        <p class="section-subtitle">
          The most comprehensive and detailed item database for VEIN survival game, covering every weapon, tool, and resource.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🗡️</div>
            <h3>Complete Weapon Database</h3>
            <p>
              Browse our extensive <router-link :to="getLocalizedPath('/vein-items/weapons')" class="inline-link">weapons collection</router-link> with detailed stats including damage, DPS, weight, and special uses. Find the perfect weapon for your playstyle, whether you prefer melee combat or ranged weapons.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Armor & Protection Guide</h3>
            <p>
              Discover all protective gear in our <router-link :to="getLocalizedPath('/vein-items/armor')" class="inline-link">armor database</router-link>. Learn about helmets, body armor, and protective clothing that can mean the difference between life and death in VEIN's dangerous world.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Tools & Crafting Materials</h3>
            <p>
              Master crafting and construction with our complete <router-link :to="getLocalizedPath('/vein-items/tools')" class="inline-link">tools database</router-link> and <router-link :to="getLocalizedPath('/vein-items/materials')" class="inline-link">materials guide</router-link>. Find every tool you need for building, repairing, and dismantling, plus all crafting components.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💊</div>
            <h3>Medical & Survival Items</h3>
            <p>
              Keep your character alive with our <router-link :to="getLocalizedPath('/vein-items/medical')" class="inline-link">medical items database</router-link>. Find medkits, bandages, antibiotics, and other essential supplies for treating injuries and illnesses in the post-apocalyptic world.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🍖</div>
            <h3>Consumables & Resources</h3>
            <p>
              Never go hungry with our <router-link :to="getLocalizedPath('/vein-items/consumables')" class="inline-link">consumables database</router-link>. Find all food, drinks, and temporary buffs. Plus, locate ammunition for your weapons in our <router-link :to="getLocalizedPath('/vein-items/ammo')" class="inline-link">ammo guide</router-link>.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Detailed Item Stats</h3>
            <p>
              Every item entry includes comprehensive information: damage values, weight, crafting requirements, dismantle yields, and special uses. Make informed decisions about what to carry, craft, or discard based on accurate data.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions About VEIN Items</h2>
        <div class="faq-grid">
          <article class="faq-item">
            <h3>What information is provided for each item?</h3>
            <p>
              Each item in our database includes detailed information such as title, description, image, item type, damage stats (for weapons), weight, crafting requirements, dismantle yields, and special uses. We provide console codes, tool requirements, and any unique properties that affect gameplay.
            </p>
            <p>
              Our goal is to give you all the information needed to make strategic decisions about which items to prioritize, craft, or discard.
            </p>
          </article>
          <article class="faq-item">
            <h3>How are items organized in the database?</h3>
            <p>
              Items are organized into 10 main categories: Weapons, Armor, Clothing, Consumables, Special Items, Materials, Ammo, Medical Items, Tools, and Miscellaneous. Each category has its own dedicated page where you can browse all items of that type.
            </p>
            <p>
              Within each category, items are listed with their key information, making it easy to compare options and find what you're looking for.
            </p>
          </article>
          <article class="faq-item">
            <h3>Do you have information about weapon stats?</h3>
            <p>
              Yes! Our <router-link :to="getLocalizedPath('/vein-items/weapons')" class="inline-link">weapons database</router-link> includes comprehensive stats for every weapon. You'll find damage values, DPS (damage per second), swing time, weight, special uses (like cutting or can opening), and dismantle information.
            </p>
            <p>
              This data helps you choose the best weapon for different situations, whether you need high damage, fast attack speed, or specific utility functions.
            </p>
          </article>
          <article class="faq-item">
            <h3>Can I find crafting recipes for items?</h3>
            <p>
              Many items in our database include crafting information. We list required materials, tools needed, crafting time, and where items can be crafted (Standard Workbench, Advanced Workbench, etc.). Check individual item pages for complete crafting details.
            </p>
            <p>
              For cooking recipes specifically, visit our <router-link :to="getLocalizedPath('/vein-wiki/cooking-recipes')" class="inline-link">cooking recipes guide</router-link> in the Wiki section.
            </p>
          </article>
          <article class="faq-item">
            <h3>How do I know where to find specific items?</h3>
            <p>
              While our items database focuses on item properties and stats, our <router-link :to="getLocalizedPath('/vein-guides/vein-best-loot-locations')" class="inline-link">best loot locations guide</router-link> provides detailed information about where to find specific items in the game world.
            </p>
            <p>
              Combine both resources: use the items database to understand what you need, then check the loot guide to know where to find it.
            </p>
          </article>
          <article class="faq-item">
            <h3>Is the items database updated regularly?</h3>
            <p>
              We update our items database as new items are added to VEIN through game updates. When new weapons, tools, or resources are introduced, we add them to the appropriate category with complete information.
            </p>
            <p>
              If you notice any missing items or outdated information, please let us know so we can keep the database current and comprehensive.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useItemsData } from '../../composables/useItemsData'
import { useLocalizedPath } from '../../composables/useLocalizedPath'

const { locale } = useI18n()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

// 加载所有分类的数据
const { data: weapons, loadData: loadWeapons } = useItemsData('weapons')
const { data: armor, loadData: loadArmor } = useItemsData('armor')
const { data: clothing, loadData: loadClothing } = useItemsData('clothing')
const { data: consumables, loadData: loadConsumables } = useItemsData('consumables')
const { data: special, loadData: loadSpecial } = useItemsData('special')
const { data: materials, loadData: loadMaterials } = useItemsData('materials')
const { data: ammo, loadData: loadAmmo } = useItemsData('ammo')
const { data: medical, loadData: loadMedical } = useItemsData('medical')
const { data: tools, loadData: loadTools } = useItemsData('tools')
const { data: misc, loadData: loadMisc } = useItemsData('misc')

const loadAllItems = async (lang = null) => {
  const currentLang = lang || locale.value || 'en'
  try {
    await Promise.all([
      loadWeapons('weapons', currentLang),
      loadArmor('armor', currentLang),
      loadClothing('clothing', currentLang),
      loadConsumables('consumables', currentLang),
      loadSpecial('special', currentLang),
      loadMaterials('materials', currentLang),
      loadAmmo('ammo', currentLang),
      loadMedical('medical', currentLang),
      loadTools('tools', currentLang),
      loadMisc('misc', currentLang)
    ])
  } catch (error) {
    console.error('Error loading items data:', error)
  }
}

onMounted(async () => {
  // 等待路由守卫设置语言
  await nextTick()
  // 直接从路由路径中提取语言，更可靠
  const currentLang = getCurrentLocale()
  if (import.meta.env.DEV) {
    console.log(`[ItemsView] onMounted - locale.value: ${locale.value}, getCurrentLocale(): ${currentLang}`)
  }
  await loadAllItems(currentLang)
})

// 监听语言变化，重新加载数据
watch(() => locale.value, async (newLocale) => {
  if (import.meta.env.DEV) {
    console.log(`[ItemsView] Language changed to: ${newLocale}`)
  }
  await loadAllItems(newLocale)
}, { immediate: false })

// 计算每个分类的 item 数量
const weaponsCount = computed(() => (weapons.value || []).length)
const armorCount = computed(() => (armor.value || []).length)
const clothingCount = computed(() => (clothing.value || []).length)
const consumablesCount = computed(() => (consumables.value || []).length)
const specialCount = computed(() => (special.value || []).length)
const materialsCount = computed(() => (materials.value || []).length)
const ammoCount = computed(() => (ammo.value || []).length)
const medicalCount = computed(() => (medical.value || []).length)
const toolsCount = computed(() => (tools.value || []).length)
const miscCount = computed(() => (misc.value || []).length)

const categoryCards = computed(() => [
  {
    title: 'Weapons',
    description: 'All weapons available in VEIN game, including melee and ranged weapons.',
    to: getLocalizedPath('/vein-items/weapons'),
    count: `${weaponsCount.value} items`,
  },
  {
    title: 'Armor',
    description: 'Protective gear that keeps survivors alive when raids turn deadly.',
    to: getLocalizedPath('/vein-items/armor'),
    count: `${armorCount.value} items`,
  },
  {
    title: 'Clothing',
    description: 'Outfits and tactical apparel that provide comfort and concealment.',
    to: getLocalizedPath('/vein-items/clothing'),
    count: `${clothingCount.value} items`,
  },
  {
    title: 'Consumables',
    description: 'Food, drinks, and temporary buffs that keep you moving.',
    to: getLocalizedPath('/vein-items/consumables'),
    count: `${consumablesCount.value} items`,
  },
  {
    title: 'Special',
    description: 'Unique items, limited drops, and rare rewards from events.',
    to: getLocalizedPath('/vein-items/special'),
    count: `${specialCount.value} items`,
  },
  {
    title: 'Materials',
    description: 'Crafting components used to build, upgrade, and repair equipment.',
    to: getLocalizedPath('/vein-items/materials'),
    count: `${materialsCount.value} items`,
  },
  {
    title: 'Ammo',
    description: 'Ammunition types for every weapon platform in VEIN game.',
    to: getLocalizedPath('/vein-items/ammo'),
    count: `${ammoCount.value} items`,
  },
  {
    title: 'Medical',
    description: 'Medkits, bandages, and pharmaceuticals to keep squads alive.',
    to: getLocalizedPath('/vein-items/medical'),
    count: `${medicalCount.value} items`,
  },
  {
    title: 'Tools',
    description: 'Utility tools for construction, exploration, and survival tasks.',
    to: getLocalizedPath('/vein-items/tools'),
    count: `${toolsCount.value} items`,
  },
  {
    title: 'Misc',
    description: 'Everything else: quest items, trade goods, and collectibles.',
    to: getLocalizedPath('/vein-items/misc'),
    count: `${miscCount.value} items`,
  },
])
</script>

<style scoped>
.items-view {
  min-height: 100vh;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  padding: 0 0 60px 0;
}

.category-card {
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.6) 0%, rgba(30, 0, 0, 0.4) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.25s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
  border-color: rgba(255, 54, 54, 0.3);
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.8) 0%, rgba(30, 0, 0, 0.6) 100%);
}

.card-title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffd8d8;
  margin: 0;
}

.item-count {
  padding: 4px 10px;
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(255, 54, 54, 0.15);
  border: 1px solid rgba(255, 54, 54, 0.35);
  border-radius: 999px;
}

.card-desc {
  color: rgba(255, 210, 210, 0.7);
  margin: 0 0 16px 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: rgba(255, 210, 210, 0.7);
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 12px;
}

.explore {
  font-weight: 700;
  color: var(--accent);
}

.arrow {
  font-size: 18px;
  line-height: 1;
  color: var(--accent);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 0 20px 0;
  }

  .category-card {
    padding: 10px;
  }

  .card-title {
    font-size: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .card-desc {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .item-count {
    font-size: 12px;
    padding: 3px 8px;
  }

  .explore {
    font-size: 12px;
  }

  .arrow {
    font-size: 14px;
  }

  .card-bottom {
    padding-top: 10px;
    margin-top: 10px;
  }
}

/* Why Choose Us Section */
.why-choose-us-section {
  padding: 60px 0;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), rgba(30, 0, 0, 0.6));
  border-top: 1px solid rgba(255, 54, 54, 0.1);
  border-bottom: 1px solid rgba(255, 54, 54, 0.1);
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 215, 215, 0.7);
  margin: 0 auto 40px;
  max-width: 800px;
  font-size: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.feature-card {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 54, 54, 0.2);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.faq-item {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 54, 54, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.faq-item p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0 0 12px 0;
  font-size: 0.9rem;
}

.faq-item p:last-child {
  margin-bottom: 0;
}

.inline-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 54, 54, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.inline-link:hover {
  color: #fff;
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(255, 54, 54, 0.5);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .why-choose-us-section,
  .faq-section {
    padding: 40px 0;
  }

  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 30px;
    padding: 0 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  .feature-card {
    padding: 24px 20px;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .feature-card h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 0.85rem;
  }

  .faq-grid {
    margin-top: 30px;
    gap: 16px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .faq-item p {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .inline-link {
    font-size: 0.85rem;
    border-bottom-width: 1px;
  }
}
</style>
