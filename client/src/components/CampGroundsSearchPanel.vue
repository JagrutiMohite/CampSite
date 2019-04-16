<template>
    <v-text-field
     flat
     class="green darken-1"
     dark
     label="search"
     v-model="search">
    </v-text-field>
</template>

<script>
import CampGroundsService from '@/services/CampGroundsService'
export default{
  data () {
    return {
      search: ''
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.campgrounds = (await CampGroundsService.index()).data
  }
}
</script>

<style scoped>
.campground-Location{
  font-size: 21px;
  color: rgb(248, 184, 106)
}
.campground-CampName{
font-size: 50px;
font-style: italic;
color: yellowgreen
}
.campground-Image {
  width: 100%
}
</style>
