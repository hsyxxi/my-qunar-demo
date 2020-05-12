import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@ / pages / home / Home'
// import City from '@ / pages / city / City'
// import Detail from '@ / pages / detail / Detail'

Vue.use(Router)
//异步组件按需加载，加载时只加载需要的内容，切换到其他页面在加载该部分
//适用于项目过大的情况，项目较小的话不需要这样拆分
//不需要在上面引用，直接在component里写
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',   //:id表示动态路由，会带着一个id参数
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }],
    //解决滚动行为，每次路由切换时位置都会回到顶部
    scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
})
