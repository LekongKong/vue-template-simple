<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
