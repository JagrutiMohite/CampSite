<template>
  <v-flex xs12>
   <panel title="Recently Viewed Camps">
       <v-data-table
      :headers="headers"
      :items="histories"
      hide-actions
      :pagination.sync="pagination"
    >
     <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.CampName }}</td>
        <td class="text-xs-left">{{ props.item.Location }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
   </panel>
  </v-flex>
</template>

<script>
import {mapState} from 'vuex'
import CampgroundHistoryService from '@/services/CampgroundHistoryService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Camp Name',
          value: 'CampName'
        },
        {
          text: 'Location',
          value: 'Location'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ]),
    pages () {
      if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await CampgroundHistoryService.index()).data
    }
  }
}

</script>
<style>

</style>
