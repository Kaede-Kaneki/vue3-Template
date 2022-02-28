import { createRouter, createWebHistory,  } from 'vue-router'

const routes = (s => [
  ...s.keys().map(k => s(k).default).flat(),
  { path: '/:pathMatch(.*)', redirect: '/' }
])(require.context('./modules/', true, /\.js$/))

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta
  document.title = title || '后台管理'
  next()
})

export default router
