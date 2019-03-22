import Api from '@/services/Api'

export default {
  index () {
    return Api().get('campgrounds')
  },
  show (campgroundId) {
    return Api().get(`campgrounds/${campgroundId}`)
  },
  post (campground) {
    return Api().post('campgrounds', campground)
  }
}
