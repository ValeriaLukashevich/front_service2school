import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import GradeSubjectView from "@/components/GradeSubjectView";
import ProfileView from "@/views/ProfileView";
import CreateAccountFirstView from "@/views/CreateAccountFirstView";
import CreateAccountSecondView from "@/views/CreateAccountSecondView";
import AddOfferStageTwoView from "@/views/AddOfferStageTwoView";
import AddOfferStageOneView from "@/views/AddOfferStageOneView";
import AddPictureView from "@/views/AddPictureView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/stageTwo',
    name: 'stageTwoRoute',
    component: AddOfferStageTwoView
  },
  {
    path: '/stageOne',
    name: 'stageOneRoute',
    component: AddOfferStageOneView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/picture',
    name: 'pictureRoute',
    component: AddPictureView
  },
  {
    path: '/loginRequest',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profileRoute',
    component: ProfileView
  },
  {
    path: '/grade-subject',
    name: 'gradeSubjectRoute',
    component: GradeSubjectView
  },
  {
    path: '/new-account1',
    name: 'newAccount1Route',
    component: CreateAccountFirstView
  },
    {
    path: '/new-account2',
    name: 'newAccount2Route',
    component: CreateAccountSecondView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
