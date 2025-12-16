<template>
  <div class="map-view">
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <p class="eyebrow">{{ $t('mapPage.hero.eyebrow') }}</p>
          <h1 class="hero-title">{{ $t('mapPage.hero.title') }}</h1>
          <p class="hero-description">
            {{ $t('mapPage.hero.description') }}
          </p>
          <div class="hero-actions">
            <router-link to="/vein-map-detail" class="btn-interactive-map">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ $t('mapPage.hero.button') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="region-overview">
      <div class="container">
        <h2 class="section-title">{{ $t('mapPage.overview.title') }}</h2>
        <div class="region-grid">
          <div class="region-card">
            <h3>{{ $t('mapPage.overview.snapshot.title') }}</h3>
            <ul>
              <li><strong>{{ $t('mapPage.overview.snapshot.setting') }}</strong> {{ $t('mapPage.overview.snapshot.settingValue') }}</li>
              <li><strong>{{ $t('mapPage.overview.snapshot.biome') }}</strong> {{ $t('mapPage.overview.snapshot.biomeValue') }}</li>
              <li><strong>{{ $t('mapPage.overview.snapshot.settlements') }}</strong> {{ $t('mapPage.overview.snapshot.settlementsValue') }}</li>
              <li><strong>{{ $t('mapPage.overview.snapshot.version') }}</strong> {{ $t('mapPage.overview.snapshot.versionValue') }}</li>
            </ul>
          </div>
          <div class="region-card">
            <h3>{{ $t('mapPage.overview.viewing.title') }}</h3>
            <div class="method">
              <h4>{{ $t('mapPage.overview.viewing.utility.title') }}</h4>
              <p>{{ $t('mapPage.overview.viewing.utility.description') }}</p>
              <ul>
                <li>{{ $t('mapPage.overview.viewing.utility.detail1') }}</li>
                <li>{{ $t('mapPage.overview.viewing.utility.detail2') }}</li>
              </ul>
            </div>
            <div class="method">
              <h4>{{ $t('mapPage.overview.viewing.inventory.title') }}</h4>
              <p>{{ $t('mapPage.overview.viewing.inventory.description') }}</p>
              <ul>
                <li>{{ $t('mapPage.overview.viewing.inventory.detail1') }}</li>
                <li>{{ $t('mapPage.overview.viewing.inventory.detail2') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="town-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('mapPage.towns.title') }}</h2>
          <p>{{ $t('mapPage.towns.subtitle') }}</p>
        </div>
        <div class="town-grid">
          <div class="town-card">
            <h3>{{ $t('mapPage.towns.dannemora.name') }}</h3>
            <p>{{ $t('mapPage.towns.dannemora.description') }}</p>
            <ul>
              <li>{{ $t('mapPage.towns.dannemora.highlight1') }}</li>
              <li>{{ $t('mapPage.towns.dannemora.highlight2') }}</li>
              <li>{{ $t('mapPage.towns.dannemora.highlight3') }}</li>
            </ul>
          </div>
          <div class="town-card">
            <h3>{{ $t('mapPage.towns.lyonMountain.name') }}</h3>
            <p>{{ $t('mapPage.towns.lyonMountain.description') }}</p>
            <ul>
              <li>{{ $t('mapPage.towns.lyonMountain.highlight1') }}</li>
              <li>{{ $t('mapPage.towns.lyonMountain.highlight2') }}</li>
              <li>{{ $t('mapPage.towns.lyonMountain.highlight3') }}</li>
            </ul>
          </div>
          <div class="town-card">
            <h3>{{ $t('mapPage.towns.redford.name') }}</h3>
            <p>{{ $t('mapPage.towns.redford.description') }}</p>
            <ul>
              <li>{{ $t('mapPage.towns.redford.highlight1') }}</li>
              <li>{{ $t('mapPage.towns.redford.highlight2') }}</li>
              <li>{{ $t('mapPage.towns.redford.highlight3') }}</li>
            </ul>
          </div>
          <div class="town-card">
            <h3>{{ $t('mapPage.towns.saranac.name') }}</h3>
            <p>{{ $t('mapPage.towns.saranac.description') }}</p>
            <ul>
              <li>{{ $t('mapPage.towns.saranac.highlight1') }}</li>
              <li>{{ $t('mapPage.towns.saranac.highlight2') }}</li>
              <li>{{ $t('mapPage.towns.saranac.highlight3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="poi-section">
      <div class="container">
        <div class="section-header">
          <h2>{{ $t('mapPage.poi.title') }}</h2>
          <p>
            {{ $t('mapPage.poi.description') }}
          </p>
        </div>

        <!-- Settlements & Housing -->
        <div class="poi-group">
          <div class="poi-group-header">
            <h3>{{ $t('mapPage.poi.groups.settlements.title') }}</h3>
            <p>{{ $t('mapPage.poi.groups.settlements.description') }}</p>
          </div>
          <div class="poi-layout">
            <div class="poi-category-list">
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.settlements.categories.towns.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.settlements.categories.towns.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.towns.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.settlements.categories.towns.item3') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.settlements.categories.towns.item4') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.settlements.categories.towns.item5') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.settlements.categories.towns.item6') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.towns.item7') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.settlements.categories.assistedLiving.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.assistedLiving.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.assistedLiving.item2') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.settlements.categories.mobileHomes.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.mobileHomes.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.settlements.categories.mobileHomes.item2') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Businesses & Services -->
        <div class="poi-group">
          <div class="poi-group-header">
            <h3>{{ $t('mapPage.poi.groups.businesses.title') }}</h3>
            <p>{{ $t('mapPage.poi.groups.businesses.description') }}</p>
          </div>
          <div class="poi-layout">
            <div class="poi-category-list">
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.automotive.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.automotive.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.automotive.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.automotive.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.automotive.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.automotive.item5') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.construction.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.construction.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.construction.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.construction.item3') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.dining.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.dining.item6') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.farming.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.farming.item7') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.lodging.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item10') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item11') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.lodging.item12') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.logging.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.logging.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.logging.item2') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.markets.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.markets.item8') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.medical.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.medical.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.medical.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.medical.item3') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.religious.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.religious.item9') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item10') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item11') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item12') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item13') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item14') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.businesses.categories.otherBusinesses.item15') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Public Utilities & Services -->
        <div class="poi-group">
          <div class="poi-group-header">
            <h3>{{ $t('mapPage.poi.groups.utilities.title') }}</h3>
            <p>{{ $t('mapPage.poi.groups.utilities.description') }}</p>
          </div>
          <div class="poi-layout">
            <div class="poi-category-list">
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item10') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item11') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item12') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item13') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item14') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item15') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item16') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item17') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item18') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item19') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item20') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.utilitiesCivic.item21') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.lookouts.item6') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.parks.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.parks.item7') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.powerStations.item10') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.quarantine.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.quarantine.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.quarantine.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.quarantine.item3') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.schools.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.schools.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.schools.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.schools.item3') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.utilities.categories.eventLocations.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.eventLocations.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.utilities.categories.eventLocations.item2') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Landforms & Natural Features -->
        <div class="poi-group">
          <div class="poi-group-header">
            <h3>{{ $t('mapPage.poi.groups.landforms.title') }}</h3>
            <p>{{ $t('mapPage.poi.groups.landforms.description') }}</p>
          </div>
          <div class="poi-layout">
            <div class="poi-category-list">
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.mountains.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.mountains.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.mountains.item2') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.mountains.item3') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.mountains.item4') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.mountains.item5') }}</span></span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.hills.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item2') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item3') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item4') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item5') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item6') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.hills.item7') }}</span></span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.caves.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item1') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item10') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item11') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item12') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item13') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.caves.item14') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.forests.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.forests.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.forests.item2') }}</span></span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.islands.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.islands.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.islands.item2') }}</span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.lakes.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item2') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item3') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item5') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item6') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item7') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item8') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item9') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.lakes.item10') }}</span></span>
                </div>
              </div>
              <div class="poi-category-item">
                <h4 class="category-title">{{ $t('mapPage.poi.groups.landforms.categories.rivers.title') }}</h4>
                <div class="poi-items">
                  <span class="poi-item"><span class="star">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item1') }}</span><span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item2') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item3') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item4') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item5') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item6') }}<span class="item-separator"> · </span></span>
                  <span class="poi-item">{{ $t('mapPage.poi.groups.landforms.categories.rivers.item7') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 监听语言变化，强制组件更新
// 虽然 $t() 是响应式的，但某些情况下需要强制触发更新
watch(() => locale.value, () => {
  // 语言变化时，Vue 会自动重新渲染使用 $t() 的内容
  // 这里只是确保响应式系统检测到变化
})
</script>

<style scoped>
.map-view {
  min-height: 100vh;
}

.page-hero {
  padding: 80px 0 60px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.page-hero-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: rgba(255, 210, 210, 0.65);
  font-size: 0.75rem;
  margin-bottom: 12px;
  font-weight: 500;
}

.hero-title {
  font-size: 3.2rem;
  margin: 0 0 20px;
  color: var(--text);
  font-weight: 700;
  background: linear-gradient(135deg, rgba(255, 230, 230, 0.95), rgba(255, 200, 200, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 30px;
}

.hero-actions {
  margin-top: 30px;
}

.btn-interactive-map {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.2), rgba(255, 100, 100, 0.15));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: rgba(255, 230, 230, 0.95);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 54, 54, 0.2);
}

.btn-interactive-map:hover {
  background: linear-gradient(135deg, rgba(255, 54, 54, 0.3), rgba(255, 100, 100, 0.25));
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(255, 54, 54, 0.3);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.region-overview {
  padding: 0 0 60px 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.region-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.region-card {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.7), rgba(30, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.region-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 54, 54, 0.15);
  border-color: rgba(255, 255, 255, 0.15);
}

.region-card h3 {
  margin: 0 0 20px;
  font-size: 1.5rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.region-card ul {
  padding-left: 20px;
  color: rgba(255, 210, 210, 0.82);
  line-height: 1.8;
  margin: 0;
  list-style: none;
}

.region-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.region-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
}

.region-card ul li strong {
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.method {
  margin-bottom: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.method:first-of-type {
  border-top: none;
  padding-top: 0;
}

.method h4 {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: rgba(255, 230, 230, 0.9);
  font-weight: 600;
}

.method p {
  margin: 0 0 12px;
  color: rgba(255, 210, 210, 0.75);
  line-height: 1.6;
  font-size: 0.95rem;
}

.method ul {
  padding-left: 20px;
  margin: 0;
  list-style: none;
}

.method ul li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  color: rgba(255, 210, 210, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
}

.method ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.town-section {
  padding: 60px 0;
  background: linear-gradient(180deg, transparent, rgba(18, 0, 0, 0.2));
}

.section-header {
  margin-bottom: 40px;
  text-align: center;
}

.section-header h2 {
  font-size: 2.5rem;
  margin: 0 0 12px;
  color: var(--text);
  font-weight: 700;
}

.section-header p {
  color: rgba(255, 210, 210, 0.75);
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

.town-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.town-card {
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.65), rgba(20, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.town-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(255, 54, 54, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.town-card h3 {
  margin: 0 0 14px;
  font-size: 1.6rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.town-card > p {
  margin: 0 0 16px;
  color: rgba(255, 210, 210, 0.8);
  line-height: 1.7;
  font-size: 0.95rem;
}

.town-card ul {
  padding-left: 20px;
  color: rgba(255, 210, 210, 0.8);
  margin: 0;
  list-style: none;
}

.town-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 1.6;
}

.town-card ul li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.85rem;
}

.poi-section {
  padding: 60px 0 100px;
}

.poi-group {
  margin-bottom: 60px;
}

.poi-group:last-child {
  margin-bottom: 0;
}

.poi-group-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 54, 54, 0.3);
}

.poi-group-header h3 {
  margin: 0 0 10px;
  font-size: 2rem;
  color: var(--text);
  font-weight: 700;
}

.poi-group-header p {
  margin: 0;
  color: rgba(255, 210, 210, 0.75);
  line-height: 1.7;
  font-size: 1rem;
}

.poi-layout {
  width: 100%;
}

.poi-category-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.poi-category-item {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.6), rgba(25, 0, 0, 0.4));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.poi-category-item:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(255, 54, 54, 0.1);
}

.category-title {
  margin: 0 0 12px;
  font-size: 1.1rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.poi-items {
  color: rgba(255, 210, 210, 0.78);
  font-size: 0.9rem;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.poi-item {
  display: inline;
}

.item-separator {
  color: rgba(255, 255, 255, 0.3);
  margin: 0 4px;
}

.star {
  position: relative;
}

.star::after {
  content: ' *';
  color: var(--accent);
  font-weight: 600;
  margin-left: 2px;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .page-hero {
    padding: 60px 0 40px;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .region-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .town-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }


  .section-header h2 {
    font-size: 2.2rem;
  }

  .poi-group-header h3 {
    font-size: 1.8rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .page-hero {
    padding: 40px 0 30px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .hero-description {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin-bottom: 20px;
  }

  .hero-actions {
    margin-top: 20px;
  }

  .btn-interactive-map {
    padding: 12px 20px;
    font-size: 14px;
  }

  .btn-icon {
    width: 18px;
    height: 18px;
  }

  .eyebrow {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }

  .region-overview {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .region-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .region-card {
    padding: 20px;
  }

  .region-card h3 {
    font-size: 20px;
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .region-card ul {
    font-size: 12px;
    line-height: 1.6;
  }

  .region-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method {
    margin-bottom: 20px;
    padding-top: 16px;
  }

  .method h4 {
    font-size: 16px;
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .method ul li {
    font-size: 12px;
    margin-bottom: 6px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-section {
    padding: 40px 0;
  }

  .section-header {
    margin-bottom: 30px;
    text-align: left;
  }

  .section-header h2 {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .section-header p {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .town-card {
    padding: 20px;
  }

  .town-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-card > p {
    font-size: 12px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .town-card ul {
    font-size: 12px;
  }

  .town-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-section {
    padding: 40px 0 60px;
  }

  .poi-group {
    margin-bottom: 40px;
  }

  .poi-group-header {
    margin-bottom: 24px;
    padding-bottom: 16px;
  }

  .poi-group-header h3 {
    font-size: 20px;
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-group-header p {
    font-size: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-category-item {
    padding: 16px;
  }

  .category-title {
    font-size: 16px;
    margin-bottom: 10px;
    padding-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .poi-items {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .item-separator {
    margin: 0 2px;
  }
}
</style>

