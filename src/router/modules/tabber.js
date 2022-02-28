export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('src/views/admin/index'),
        meta: {
            depth:1,
            title: '首页',
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('src/views/About')
    }
]
