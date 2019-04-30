<template>
<v-layout>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
    <div class="pl-4 pr-4 pt-2 pb-2">
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
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn class="green darken-1" @click="login" dark>Login</v-btn>
         <template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>
<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

        </div>
    </panel>
  </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
// import GSignInButton from 'vue-google-signin-button'
// import FBSignInButton from 'vue-facebook-signin-button'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      googleSignInParams: {
        client_id: '1049214946580-1do66p91nm6hv4g2t1idh2t0buqg4q9f.apps.googleusercontent.com'
      },
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    onSignInSuccess (googleUser) {
      this.$router.push({
        name: 'root'
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
    /* onSignInSuccess (response) {
      FB.api('/me', dude => {
        console.log(`Good to see you, ${dude.name}.`)
      })
    }
     async facebookLogin () {
      const m = await facebook.Login()
      console.log({m})
      this.user = { FirstName: m.name, Email: m.email }
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
