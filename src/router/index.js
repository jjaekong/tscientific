import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/privacy_policy',
        component: () => import('../views/privacy_policy.vue')
    },
    {
        path: '/privacy_policy_180222',
        component: () => import('../views/privacy_policy_180222.vue')
    },
    {
        path: '/privacy_policy_191129',
        component: () => import('../views/privacy_policy_191129.vue')
    },
    {
        path: '/privacy_policy_200708',
        component: () => import('../views/privacy_policy_200708.vue')
    },
    {
        path: '/privacy_policy_200807',
        component: () => import('../views/privacy_policy_200807.vue')
    },
    {
        path: '/privacy_policy_201116',
        component: () => import('../views/privacy_policy_201116.vue')
    },
    {
        path: '/privacy_policy_210311',
        component: () => import('../views/privacy_policy_210311.vue')
    },
    {
        path: '/data_loss_prevention',
        component: () => import('../views/data_loss_prevention.vue')
    },
    {
        path: '/company',
        component: () => import('../views/company.vue')
    },
    {
        path: '/business',
        component: () => import('../views/business.vue')
    },
    {
        path: '/ir',
        component: () => import('../views/ir.vue')
    },
    {
        path: '/career',
        component: () => import('../views/career.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router