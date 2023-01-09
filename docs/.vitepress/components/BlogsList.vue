<template>
  <div class="blog w-100 pt-3 f-left">
    <div class="w-100 f-left">
      <h1 class="blog-title mb-8">{{ config.title }}</h1>

      <div v-for="post in posts" :key="post.__pageData.relativePath" class="w-100 f-left mb-6">
        <div class="post-img-sm f-left" :style="`background-image: url('${post.__pageData.frontmatter.pathToImage}')`"></div>

        <div class="post-info f-left pl-6">
          <h2 class="post-title" style="color: var(--vp-c-text-1) !important">{{ post.__pageData.title }}</h2>

          <p class="post-description">{{ post.__pageData.description }}</p>

          <p class="post-date">{{ processData(post.__pageData.frontmatter.dateAdded) }}</p>

          <a class="post-btn" :href="base(`${post.__pageData.relativePath.split('.md')[0]}.html`)">
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="blog-filters">
    <h3 class="f-left w-100">Categories</h3>
    <p
      @click="applyCategory(c)"
      v-for="c in config.categories" :key="c"
      :class="{'active': selectedCategory === c}"
      class="post-category f-left w-100"
    >{{ c }}</p>

    <!-- <h3 class="f-left w-100">Archive</h3> -->
  </div>
</template>

<script>
import { withBase } from 'vitepress'

export default {
  data () {
    return {
      config: {},
      base: null,

      posts: [],
      currentPage: 1,
      postsCountOnPage: 20,
      selectedCategory: ''
    }
  },

  mounted () {
    document.getElementById('VPSidebarNav').style.display = 'none'
    this.base = withBase

    import('../config').then(config => {
      this.config = config.default.themeConfig.blog
      this.getPosts()
    })
  },

  beforeUnmount () {
    document.getElementById('VPSidebarNav').style.display = 'block'
  },

  methods: {
    async getPosts () {
      this.posts = []

      for (let i = (this.currentPage - 1) * this.postsCountOnPage; this.posts.length !== this.postsCountOnPage && i < this.config.posts.length; i++) {
        await import(/* @vite-ignore */this.config.posts[i]).then(post => {
          if (
            post.__pageData.frontmatter.categories.includes(this.selectedCategory) ||
            this.selectedCategory === '' ||
            (this.selectedCategory === 'uncategorized' && post.__pageData.frontmatter.categories.length === 0)
          ) {
            this.posts.push(post)
          }
        })
      }
    },

    processData (data) {
      const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
      const dataParts = data.split('-')

      return `${months[+dataParts[1]]} ${dataParts[2]}, ${dataParts[0]}`
    },

    applyCategory (category) {
      this.selectedCategory === category ? this.selectedCategory = '' : this.selectedCategory = category
      this.currentPage = 1

      this.getPosts()
    }
  }
}
</script>
