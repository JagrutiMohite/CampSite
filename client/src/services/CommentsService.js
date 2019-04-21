import Api from '@/services/Api'

export default {
  index (comments) {
    return Api().get('comments', {
      params: comments
    })
  },
  show (commentId) {
    return Api().get('comments', {
      params: {
        commentId: commentId
      }
    })
  },
  post (comment) {
    return Api().post('comments', comment)
  }
}
