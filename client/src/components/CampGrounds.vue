<template>
  <v-layout>
  <v-flex :class="{
    xs12: !isUserLoggedIn,
    xs8: isUserLoggedIn
  }">
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
          <div class="campground-Location">
         <!-- <v-rating
      background-color="green darken-1"
      color="green darken-1"
      v-model="rating"></v-rating> -->
          </div>
          <br>
           <v-btn class="green darken-1"
           :to="{
             name: 'campground',
                  params: {
                    campgroundId: campground.id
                  }
               }" dark>
               View More..
               </v-btn>
         </v-flex>
        </v-layout>
      </div>
    </panel>
  </v-flex>
  <v-flex xs4 class="ml-3" v-if="isUserLoggedIn">
      <campgrounds-bookmarks />
      <recently-viewed-campgrounds class="mt-3" />
    </v-flex>
  </v-layout>
</template>

<script>
import CampGroundsService from '@/services/CampGroundsService'
import CampgroundsBookmarks from './CampgroundsBookmarks'
import RecentlyViewedCampgrounds from './RecentlyViewedCampgrounds'
import {mapState} from 'vuex'

export default{
  data () {
    return {
      campgrounds: null,
      rating: 4
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  components: {
    CampgroundsBookmarks,
    RecentlyViewedCampgrounds
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.campgrounds = (await CampGroundsService.index(value)).data
      }
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
