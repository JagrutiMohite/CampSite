<template>
<div>
<v-layout>
  <v-flex xs6>
    <panel title="CampGround Name">
        <v-flex>
          <div class="campgrounds-CampName">
            {{campgrounds.CampName}}
          </div>
          </v-flex>
    </panel>
    <br>
    <panel title="CampGround Description">
        <v-flex>
            <div class="campgrounds-Description">
             {{campgrounds.Description}}
           </div>
        </v-flex>
    </panel>
    <br>
    <panel title="CampGround Suggestion">
        <v-flex>
            <div class="campgrounds-Comment">
             {{campgrounds.Comment}}
           </div>
        </v-flex>
    </panel>
  </v-flex>
  <v-flex xs6 class='ml-4'>
    <panel title="CampGrounds Image">
        <v-flex>
            <img class="campgrounds-Image" :src="campgrounds.Image"/>
            <div class="campgrounds-Location">
             {{campgrounds.Location}}
           </div>
        </v-flex>
    </panel>
    <br>
    <panel title="Edit Campground">
        <v-flex>
    <div class="text-xs-center">
      <v-rating
      v-if="isUserLoggedIn"
      background-color="green darken-1"
      color="green darken-1"
      v-model="rating"></v-rating>
    </div>
          <div class="campgrounds-edit">
            <v-btn
            class="green darken-1"
            dark
              :to="{
                  name: 'campground-edit',
                  params () {
                    return {
                    campgroundId: campground.id
                    }
                  }
                }">Edit Campground</v-btn>
            </div>
            <div class="campgrounds-edit">
            <v-btn
            v-if="isUserLoggedIn && !bookmark"
            class="green darken-1"
            dark
            @click="setAsBookmark">
            Set Bookmark</v-btn>
            <v-btn
            v-if="isUserLoggedIn && bookmark"
            class="green darken-1"
            dark
            @click="unsetAsBookmark">
            Unset As Bookmark</v-btn>
            </div>
        </v-flex>
    </panel>
    <br>
    <panel title="Price">
        <v-flex>
           <div class="campgrounds-Price">
            {{campgrounds.Price}}
            </div>
        </v-flex>
    </panel>
    <br>
    <panel title="User Name">
        <v-flex>
           <div class="campgrounds-FirstName">
           {{campgrounds.FirstName}}
           </div>
           <div class="campgrounds-LastName">
           {{campgrounds.LastName}}
           </div>
        </v-flex>
    </panel>
  </v-flex>
    </v-layout>
 <v-layout class="mt-3">
  <v-flex xs12>
    <youtube :youtubeId="campgrounds.YoutubeId" />
  </v-flex>
  </v-layout>
  <v-layout class="mt-3">
  <v-flex xs12>
    <panel title="Comments">
      <v-flex>
     <v-btn
            class="green darken-1"
            dark
              :to="{
                  name: 'campground-comment',
                  params () {
                    return {
                    CommentId: commentId
                    }
                  }
                }">Add Comments</v-btn>
  </v-flex>
    </panel>
  </v-flex>
  </v-layout>
  </div>
</template>

<script>
import CampGroundsService from '@/services/CampGroundsService'
import Youtube from './Youtube'
import Comments from './Comments'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
import CommentsService from '@/services/CommentsService'
import CampgroundHistoryService from '@/services/CampgroundHistoryService'

export default{
  data () {
    return {
      campgrounds: {},
      bookmark: null,
      rating: 4,
      comments: {
        Text: null,
        UserFirstName: null,
        UserId: null
      }
    }
  },
  props: [
    'campground'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  watch: {
    async campgrounds () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          campgroundId: this.campgrounds.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        const bookmark = {
          campgroundId: this.campgrounds.id
        }
        this.bookmark = (await BookmarksService.post(bookmark)).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Youtube,
    Comments
  },
  async mounted () {
    const campgroundId = this.route.params.campgroundId
    this.campgrounds = (await CampGroundsService.show(campgroundId)).data
    this.comments = (await CommentsService.index(campgroundId)).data
    this.comment = await CommentsService.show(this.comment)
    this.$router.push({
      name: 'campground'
    })
    if (this.isUserLoggedIn) {
      CampgroundHistoryService.post({
        campgroundId: campgroundId,
        userId: this.user.id
      })
    }
  }
}
</script>

<style scoped>
.campgrounds-FirstName{
    font-size: 18px;
    font-style: italic;
}
.campgrounds-LastName{
    font-size: 18px;
    font-style: italic;
}
.campgrounds-Price{
    font-size: 30px;
}
.campgrounds-Comment{
    font-size: 18px;
}
.campgrounds-Description{
    font-size: 20px;
}
.campgrounds-Location{
  font-size: 21px;
  color: rgb(248, 184, 106)
}
.campgrounds-CampName{
font-size: 45px;
font-style: italic;
color: yellowgreen
}
.campgrounds-Image{
    width: 100%;
    height: 100%;
}
</style>
