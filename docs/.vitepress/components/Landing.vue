<template>
  <div class="landing w-100 f-left" v-if="config.title">
    <div class="w-100 f-left mb-18">
      <div class="w-55 f-left mt-5 pl-130">
        <h1 class="shotover-title w-100 f-left">{{ config.title }}</h1>
        <h2 class="shotover-subtitle w-100 f-left">
          <span style="color: #91AAE5">{{ config.subtitle1 }}</span> <span style="color: #AADEF6">{{ config.subtitle2 }}</span>
        </h2>

        <h3 class="shotover-motto w-100 f-left">{{ config.motto }}</h3>
        
        <a class="landing-action-btn" :href="config.actionBtnLink">
          <span class="landing-action-btn-text">{{ config.actionBtnText }}</span>
        </a>
      </div>

      <div class="w-45 f-left landing-title-img">
        <img class="w-80 ml-20" :src="config.titleImg">
      </div>
    </div>

    <div class="w-100 f-left p-130 mb-24">
      <div class="w-43 f-left">
        <h2 class="landing-description-title">
          {{ config.description.title }}
        </h2>
      </div>

      <div class="w-57 f-left">
        <p class="landing-description mt-1">
          {{ config.description.text }}
        </p>
      </div>
    </div>

    <div class="w-100 f-left mb-22">
      <h2 class="landing-docs-title pl-130" v-html="config.documentation.title"></h2>

      <div class="docs-container w-100 f-left p-105">
        <a v-for="doc in config.documentation.items" :key="doc.link" :href="doc.link" class="docs-block">
          <h3 class="w-100 f-left doc-name mb-2">{{ doc.name }}</h3>
          <p class="text-left doc-desc">{{ doc.description }}</p>

          <div class="f-left doc-action-btn mb-2">
            <p class="f-left">Learn more</p>
            <img class="f-left doc-arrow" src="/landing/arrowRight.png">
          </div>
        </a>
      </div>
    </div>

    <div class="w-100 f-left p-130 landing-problems">
      <h2 class="landing-problems-title" v-html="config.problemsSection.title"></h2>
      <p class="w-65 mb-8 problems-description">
        {{ config.problemsSection.description1 }}
      </p>

      <div class="w-100 f-left p-90 mb-2">
        <div
          v-for="(problem, id) in config.problemsSection.items" :key="id"
          class="f-left problem-card"
          :class="{'mt-15': id === 1}"
          :style="`background-color: ${problem.color}; ${id === 2 ? 'margin-top: -150px' : ''}`"
        >
          <span class="f-left w-80">{{ problem.description }}</span>
          <img class="f-right problem-img" v-if="problem.image" :src="problem.image">
        </div>
      </div>

      <p class="w-50 problems-description">
        {{ config.problemsSection.description2 }}
      </p>
    </div>

    <div class="w-100 f-left mb-8 p-130 landing-proxy">
      <h2 class="landing-proxy-title">
        Shotover Proxy
      </h2>

      <div class="proxy-item" style="top: 280px; left: -109px">pscale connect</div>
      <div class="proxy-item" style="top: 280px; left: 160px">pscale disconnect</div>
      <div class="proxy-item" style="top: 375px; left: -7px">pscale service token</div>
      <div class="proxy-item" style="top: 460px; left: -7px">pscale connect</div>
      <div class="proxy-item" style="top: 555px; left: -109px">pscale connect</div>
      <div class="proxy-item" style="top: 555px; left: 155px">pscale connect</div>

      <div class="proxy-item" style="top: 260px; right: 140px">pscale disconnect</div>
      <div class="proxy-item" style="top: 260px; right: -120px">pscale connect</div>
      <div class="proxy-item" style="top: 355px; right: -17px">pscale service token</div>
      <div class="proxy-item" style="top: 440px; right: -17px">pscale connect</div>
      <div class="proxy-item" style="top: 535px; right: 150px">pscale connect</div>
      <div class="proxy-item" style="top: 535px; right: -120px">pscale connect</div>
    </div>

    <div class="name-description w-100 f-left">
      <div class="p-130">
        <h2 class="landing-title w-50 f-left">
          {{ config.name.title }}
        </h2>

        <p class="landing-description w-50 f-left">
          {{ config.name.description }}
        </p>
      </div>

      <img :src="config.name.image">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {}
    }
  },

  mounted () {
    import('../config').then(config => {
      this.config = config.default.pagesConfig.landing
    })
  }
}
</script>
