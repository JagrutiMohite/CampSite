import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('campgrounds', {
      params: {
        search: search
      }
    })
  },
  show (campgroundId) {
    return Api().get(`campgrounds/${campgroundId}`)
  },
  post (campground) {
    return Api().post('campgrounds', campground)
  },
  put (campground) {
    return Api().put(`campgrounds/${campground.id}`, campground)
  }
}
