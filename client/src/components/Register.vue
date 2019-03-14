<template>
<v-layout>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="green darken-1" dark>
      <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
      <form
        name="CampSite-form"
        autocomplete="off">
     <v-text-field
       color="green darken-1"
        type="first name"
        name="first name"
        v-model="FirstName"
        label="First Name"></v-text-field>
        <br>
    <v-text-field
        color="green darken-1"
        type="last name"
        name="last name"
        v-model="LastName"
        label="Last Name"></v-text-field>
        <br>
     <v-text-field
        color="green darken-1"
        type="phone"
        name="phone"
        v-model="Phone"
        label="Phone"></v-text-field>
        <br>
    <v-text-field
        color="green darken-1"
        type="email"
        name="email"
        v-model="email"
        label="Email"></v-text-field>
        <br>
     <v-text-field
      color="green darken-1"
        type="password"
        name="password"
        v-model="password"
        label="Password"></v-text-field>
      </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="green darken-1" @click="register" dark>Register</v-btn>
        </div>
      </div>
  </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      FirstName: '',
      LastName: '',
      Phone: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          FirstName: this.FirstName,
          LastName: this.LastName,
          Phone: this.Phone,
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
