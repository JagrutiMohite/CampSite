<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <div>
      <v-flex class="ml-5 mt-5 mr-5 mb-4">
        <router-view/>
      </v-flex>
      </div>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert {
  color: red
}
</style>
