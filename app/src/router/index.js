import Vue from 'vue'
import VueRouter from 'vue-router'
import UploadFile from '../views/Menu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: UploadFile,
    meta: { title: 'Benic laboratory', desc: 'A laboratory to verify elemental technologies.' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach((to) => {
  document.title = to.meta.title
  document.description = to.meta.description
})
export default router
