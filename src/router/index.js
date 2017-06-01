import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Channel from '@/components/Channel'
import Ranking from '@/components/Ranking'
import Person from '@/components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Index',
      component: Index
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    }
  ]
})
