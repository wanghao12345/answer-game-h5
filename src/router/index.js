import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
        toolBar: true
      },
      component: resolve => require(['@/page/home'], resolve)
    },
    {
      path: '/video',
      name: 'Video',
      meta: {
        title: '视频',
        toolBar: true
      },
      component: resolve => require(['@/page/video'], resolve)
    },
    {
      path: '/test',
      name: 'Test',
      meta: {
        title: '视频',
        toolBar: true
      },
      component: resolve => require(['@/page/test'], resolve)
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  next()
})

export default router
