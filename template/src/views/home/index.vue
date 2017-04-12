<template>
  <div id="homepage">
    <img src="../../assets/logo.png">
    <p>
      <router-link to="/docs">Docs</router-link>
    </p>
    <h1>\{{ msg }}</h1>
    <h2 class="title">\{{ title }}</h2>
    <div class="content">\{{ content }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'exampleAction'
    ])
  },
  computed: {
    ...mapGetters([
      'exampleGetter'
    ]),
    title() {
      return this.exampleGetter.title
    },
    content() {
      return this.exampleGetter.content
    }
  },
  created() {
    this.exampleAction({title: 'This is Title...', content: 'This is Content... Bla Bla Bla...'})
  }
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>

</style>
