<template>
  <v-toolbar fixed class="green darken-1" dark>
    <v-toolbar-title class="mr-4">
    <router-link
    class="home"
    tag="span"
    :to="{
      name: 'root'
    }">
    CampSite
    </router-link>
    </v-toolbar-title>
 <v-toolbar-items>
      <v-btn flat dark :to="{name: 'campgrounds'}">
          Browse
        </v-btn>
  </v-toolbar-items>
  <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      :to="{name: 'login'}">
         Login
        </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      :to="{name: 'register'}">
         Sign Up
        </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn"
      @click="logout">
         Log Out
        </v-btn>
  </v-toolbar-items>
<v-spacer></v-spacer>
<v-toolbar-items>
    <v-text-field
     dark
     primary--text
     label="search your camps"
     v-model="search">
    </v-text-field>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'campgrounds'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.home {
    cursor: pointer;
}
.home:hover {
    color: goldenrod;
}
.v-input {
  font-size: 20px;
}
.v-spacer {
  flex-grow: 0.5!important;
}
.primary--text {
  color: goldenrod;
  caret-color: goldenrod;
}
</style>
