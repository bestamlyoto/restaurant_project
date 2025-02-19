import { createRouter, createWebHistory } from 'vue-router'
import Home_page from './../components/Home_page.vue'
import About from './../components/About.vue'
import Booking from './../components/Booking.vue'
import Contact from './../components/Contact.vue'
import Feedback from './../components/Feedback.vue'
import Menu from './../components/Menu.vue'
import Order from './../components/Order.vue'
import RestaurantList from './../components/RestaurantList.vue'


// route array of objects :path, component 
const routes = [
  {
    path:'/',
    component: Home_page
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/booking',
    component: Booking
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/feedback',
    component: Feedback
  },
  {
    path:'/menu',
    component: Menu
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/restaurantlist',
    component: RestaurantList
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
