<template>
  <v-flex xs8>
    <panel title="View Your Camp">
      <v-flex>
        <div class="campgrounds-YoutubeId">
           {{campgrounds.YoutubeId}}
        </div>
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
