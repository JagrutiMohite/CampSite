import Api from '@/services/Api'

export default {
  index (campgroundId) {
    return Api().get(`comments/${campgroundId}`)
  },
  show (commentId) {
    return Api().get(`comments/${commentId}`)
  },
  post (comment) {
    console.log({comment})
    return Api().post('comments', comment)
  }
}
