import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import('../views/home/home')
const Profile = () => import('../views/profile/profile')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')
const Detail = () => import('../views/detail/detail')

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]


// http://123.207.32.32:8000/api/x6/home/multidata


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router