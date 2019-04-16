<template>
  <v-layout column>
  <v-flex xs8>
    <panel title="CampGrounds">
        <v-btn
        slot="action"
        :to="{name: 'campgrounds-create'}"
        class="orange accent-2"
        dark
        absolute
        medium
        right
        middle
        fab>
        <v-icon>add</v-icon>
       </v-btn>
      <div v-for="campground in campgrounds"
        :key="campground.id">
        <v-layout>
         <v-flex xs6>
           <img class="campground-Image" :src="campground.Image"/>
         </v-flex>
         <v-flex xs6>
          <div class="campground-CampName">
            {{campground.CampName}}
          </div>
          <div class="campground-Location">
            {{campground.Location}}
          </div>
          <br>
           <v-btn class="green darken-1"
           @click="navigateTo({
             name: 'campground',
                  params: {
                    campgroundId: campground.id
                  }
               })" dark>
               View More..
               </v-btn>
         </v-flex>
        </v-layout>
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
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.campgrounds = (await CampGroundsService.index(value)).data
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
