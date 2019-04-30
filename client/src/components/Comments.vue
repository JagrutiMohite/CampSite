<template>
  <v-flex xs12>
    <panel title="Comments">
      <v-flex>
      <v-container fluid grid-list-md>
    <v-textarea
          outline
          name="input-10-5"
          rows="10"
          label="User Comments"
          v-model="comment.Text"
        ></v-textarea>
        <div class="campground-comment">
          <v-btn dark class="green darken-1" @click="save">Submit Your Comment</v-btn>
      </div>

  </v-container>
      </v-flex>
    </panel>
    </v-flex>
</template>

<script>
import CommentsService from '@/services/CommentsService'

export default {
  data () {
    return {
      comment: {
        Text: '',
        UserFirstName: '',
        campgroundId: this.$store.state.route.params.campgroundId,
        userId: this.$store.state.user.id
      }
    }
  },
  methods: {
    async save () {
      try {
        await CommentsService.post(this.comment)
        this.$router.push({
          name: 'campground'
        })
      } catch (err) {
        console.log(err)
      }
    },
    async mounted () {
    }
  }
}
</script>
<style scoped>
</style>
