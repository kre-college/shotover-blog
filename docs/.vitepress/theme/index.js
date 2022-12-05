import DefaultTheme from 'vitepress/theme'

import Footer from '../components/Footer.vue'
import './custom.css'

export default {
  ...DefaultTheme,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Footer', Footer)
  }
}
