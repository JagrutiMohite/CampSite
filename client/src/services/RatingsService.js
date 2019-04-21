import Api from '@/services/Api'

export default {
  index (rating) {
    return Api().get('ratings', {
      params: {
        search: rating
      }
    })
  },
  post (rating) {
    return Api().post('ratings', {
      params: rating
    })
  },
  delete (ratingId) {
    return Api().get(`ratings/${ratingId}`)
  }
}
