import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '@/views/BerandaView.vue'
import SejarahLontarView from '@/views/SejarahLontarView.vue'
import CollectionLontar from '@/views/CollectionLontarView.vue'
import DetailLontarView from '@/views/DetailLontarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BerandaView
    },
    {
      path: '/SejarahLontar',
      name: 'sejarah-lontar',
      component: SejarahLontarView
    },
    {
      path: '/KoleksiLontar',
      name: 'koleksi-lontar',
      component: CollectionLontar
    },
    {
      path: '/DetailLontar/:id',
      name: 'detail-lontar',
      props: true,
      component: DetailLontarView
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
