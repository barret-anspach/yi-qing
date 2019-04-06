import Vue from 'vue'
import Router from 'vue-router'
import Introduction from './views/Introduction.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'introduction',
            component: Introduction
        },
        {
            path: '/consult',
            name: 'consult',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "consult" */ './views/Consult.vue')
        },
        {
            path: '/result',
            name: 'result',
            component: () => import(/* webpackChunkName: "result" */ './views/Result.vue')
        }
    ]
})
