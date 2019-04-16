<template>
  <v-flex xs12>
    <panel title="View Your Camp">
      <v-flex>
        <youtube
          :video-id="youtubeId"
          :player-width="800"
          :player-height="300">
        </youtube>
      </v-flex>
    </panel>
    </v-flex>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>
<style scoped>
</style>
