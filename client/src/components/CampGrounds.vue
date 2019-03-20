<template>
  <v-layout column>
  <v-flex xs8>
    <panel title="CampGrounds">
      <div v-for="camp in campgrounds"
        :key="camp.CampName">
        {{camp.CampName}} -
        {{camp.Price}} -
        {{camp.Image}} -
        {{camp.Location}} -
        {{camp.Description}} -
        {{camp.YoutubeId}} -
        {{camp.Comment}} -
        {{camp.FirstName}} -
        {{camp.LastName}}
      </div>
    </panel>
  </v-flex>
  </v-layout>
</template>

<script>
import CampGroundsService from '@/services/CampGroundsService'
export default{
  data () {
    return {
      campgrounds: null
    }
  },
  async mounted () {
    this.campgrounds = await CampGroundsService.index()
  }
}
</script>

<style scoped>
</style>
