<template>
  <div id="app">
    <!-- keep-alive表示将每次加载的页面放入内存中，反复切换时不会重新渲染
      如果不写keep-alive标签，则Network的XHR中可以发现每次切换页面都重新执行钩子函数，又渲染了一次 -->
    <keep-alive exclude="Detail">
      <!-- exclude="Detail"表示除了Detail之外其他页面都会被缓存，只有Detail不被缓存，每次进入都会重新发送ajax -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
