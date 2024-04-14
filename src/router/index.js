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
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
      component: CollectionLontar
    },
    {
      path: '/DetailLontar/:id',
      name: 'detail-lontar',
      props: true,
      component: DetailLontarView
    }
  ]
})

export default router
