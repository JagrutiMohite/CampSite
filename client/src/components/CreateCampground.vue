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
        <v-text-field
        color="green darken-1"
        label="Location"
        multi-line
        required
        :rules="[required]"
        v-model="campground.Location"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="Description"
        multi-line
        required
        :rules="[required]"
        v-model="campground.Description"
        ></v-text-field>
        <br>
        <v-text-field
        color="green darken-1"
        label="Suggestion"
        multi-line
        required
        :rules="[required]"
        v-model="campground.Comment"
        ></v-text-field>
        <br>
        <div class="danger-alert" v-if="error">
          {{error}}
        </div>
        <v-btn class="green darken-1" @click="create" dark>Add New CAMP</v-btn>
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
    async create () {
      const areAllFieldsFilledIn = Object
        .keys(this.campground)
        .every(key => !!this.campground[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill all the required fields.'
        return
      }
      try {
        await CampGroundsService.post(this.campground)
        this.$router.push({
          name: 'campgrounds'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
