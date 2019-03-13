<template>
<v-layout>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="green darken-1" dark>
      <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
     <input
        type="first name"
        name="first name"
        v-model="FirstName"
        placeholder="First Name" />
        <br>
    <input
        type="last name"
        name="last name"
        v-model="LastName"
        placeholder="Last Name" />
        <br>
     <input
        type="phone"
        name="phone"
        v-model="Phone"
        placeholder="Phone" />
        <br>
    <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
        <br>
     <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password" />
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="green darken-1" @click="register">Register</v-btn>
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
        await AuthenticationService.register({
          FirstName: this.FirstName,
          LastName: this.LastName,
          Phone: this.Phone,
          email: this.email,
          password: this.password
        })
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
