/**
 * index.js 系统的路由配置入口
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '../views/AppLayout'

import Documentation from './documentation'
import Usage from './usage'
import Samples from './icons'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'AppLayout',
    component: AppLayout,
    redirect: '/docs',
    children: [Documentation, Usage, Samples]
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'checked',
  linkExactActiveClass: 'active',
  routes
})

export default router
