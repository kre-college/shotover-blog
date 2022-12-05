<template>
  <div class="contacts w-100 mt-5" v-if="config.imageMsg">
    <div class="w-60 f-left">
      <img :src="config.titleImage" class="contacts-title">

      <div
        v-for="enquiries in config.enquiries" :key="enquiries.email"
        class="enquiries mt-6"
      >
        <h3 class="contact-header">{{ enquiries.name }}</h3>
        <h3 class="contact-info">{{ enquiries.email }}</h3>
      </div>

      <div class="adress mt-6">
        <h3 class="contact-header">Adress:</h3>

        <h3 class="contact-info">{{ config.adress.company }}</h3>
        <h3 class="contact-info">{{ config.adress.city }}</h3>
        <h3 class="contact-info">{{ config.adress.country }}</h3>
      </div>
    </div>

    <div class="w-40 f-left">
      <h3 class="img-msg">{{ config.imageMsg }}</h3>

      <img :src="config.image" class="contacts-img">
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
      this.config = config.default.pagesConfig.contacts
    })
  }
}
</script>
