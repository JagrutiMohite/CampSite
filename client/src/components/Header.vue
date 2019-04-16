<template>
  <v-toolbar fixed class="green darken-1" dark>
    <v-toolbar-title class="mr-4">
    <span
    class="home"
    @click="navigateTo({name: 'root'})">
    CampSite
    </span>
    </v-toolbar-title>
 <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name: 'campgrounds'})">
          Browse
        </v-btn>
  </v-toolbar-items>
  <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'login'})">
         Login
        </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({name: 'register'})">
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

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'campgrounds'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
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
