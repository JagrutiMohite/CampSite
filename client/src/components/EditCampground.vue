<template>
  <v-layout>
   <v-flex xs6>
    <panel title="Camp Details">
        <v-text-field
        color="green darken-1"
        label="FirstName"
        required
        :rules="[required]"
        v-model="campground.FirstName"
        value: campgrounds.FirstName
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="LastName"
        required
        :rules="[required]"
        v-model="campground.LastName"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="CampName"
        required
        :rules="[required]"
        v-model="campground.CampName"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="Price"
        required
        :rules="[required]"
        v-model="campground.Price"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="Image"
        required
        :rules="[required]"
        v-model="campground.Image"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="YoutubeId"
        required
        :rules="[required]"
        v-model="campground.YoutubeId"
        ></v-text-field>
        <br>
    </panel>
  </v-flex>
  <v-flex xs6>
    <panel title="Add Metadata" class="ml-2">
        <v-textarea
        color="green darken-1"
        label="Location"
        required
        :rules="[required]"
        v-model="campground.Location"
        ></v-textarea>
        <br>
        <v-textarea
        color="green darken-1"
        label="Description"
        required
        :rules="[required]"
        v-model="campground.Description"
        ></v-textarea>
        <br>
        <v-textarea
        color="green darken-1"
        label="Suggestion"
        required
        :rules="[required]"
        v-model="campground.Comment"
        ></v-textarea>
        <br>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>
        <v-btn class="green darken-1" @click="save" dark>SAVE EDITED CAMP</v-btn>
        <br>
    </panel>
  </v-flex>
  </v-layout>
</template>

<script>
import CampGroundsService from '@/services/CampGroundsService'
export default{
  data () {
    return {
      campground: {
        CampName: null,
        Price: null,
        Image: null,
        Location: null,
        Description: null,
        YoutubeId: null,
        Comment: null,
        FirstName: null,
        LastName: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      const areAllFieldsFilledIn = Object
        .keys(this.campground)
        .every(key => !!this.campground[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields.'
        return
      }
      const campgroundId = this.$store.state.route.params.campgroundId
      try {
        await CampGroundsService.put(this.campground)
        this.$router.push({
          name: 'campground',
          params: {
            campgroundId: campgroundId
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async mounted () {
      try {
        const campgroundId = this.$store.state.route.params.campgroundId
        this.campground = (await CampGroundsService.show(campgroundId)).data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
