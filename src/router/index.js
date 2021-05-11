import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/pages/FirstPage.vue'
import SecondPage from '@/components/pages/SecondPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
