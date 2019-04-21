import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CampGrounds from '@/components/CampGrounds'
import CreateCampground from '@/components/CreateCampground'
import ViewCampground from '@/components/ViewCampground'
import EditCampground from '@/components/EditCampground'
import Comments from '@/components/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/campgrounds',
      name: 'campgrounds',
      component: CampGrounds
    },
    {
      path: '/campgrounds/create',
      name: 'campgrounds-create',
      component: CreateCampground
    },
    {
      path: '/campgrounds/:campgroundId',
      name: 'campground',
      component: ViewCampground
    },
    {
      path: '/campgrounds/:campgroundId/edit',
      name: 'campground-edit',
      component: EditCampground
    },
    {
      path: '/campgrounds/:campgroundId/comment',
      name: 'campground-comment',
      component: Comments
    }
  ]
})
