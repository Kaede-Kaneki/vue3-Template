export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('src/views/Home'),
        meta: {
            depth:1,
            title: '首页',
            keepAlive:true
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ 'src/views/About')
    }
]
