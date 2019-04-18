<template>
  <v-flex xs12>
    <panel title="Comments">
      <v-flex>
        <div class="Cooments">
           {{Comments}}
          </div>
      </v-flex>
    </panel>
    </v-flex>
</template>

<script>
export default {
  props: [
    'comments'
  ]
}
</script>
<style scoped>
</style>
