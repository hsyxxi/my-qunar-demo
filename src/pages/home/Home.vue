<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    import {mapState} from 'vuex'
    export default{
        name:'Home',
        data (){
            return {
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        computed:{
            //每次切换城市首页内容也跟着改变：先引入mapState，获取到该城市，在ajax里发送城市参数
            ...mapState(['city'])
        },
        components:{
            //局部组件实现异步组件按需加载，项目很大使才使用
            HomeHeader:()=>import('./components/Header'),
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        methods:{
            getHomeInfo(){
                //ajax中发送城市参数给后台获取相应的数据
                axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res=res.data
                if(res.ret && res.data){
                    const data=res.data
                    this.swiperList=data.swiperList
                    this.iconList=data.iconList
                    this.recommendList=data.recommendList
                    this.weekendList=data.weekendList
                }
            }
        },
        //newwork中显示跳转页面时带参数为变化，因keep-alive内存引起，解决办法如下（方法一，方法二见App.vue）
        mounted (){  //mounted只会第一次加载时执行一次
            this.lastCity=this.city
            this.getHomeInfo()
        },
        activated(){  //页面每次重新显示时activated都会执行一次
            //如果城市不是第一次加载时的城市，则重新调用ajax请求新的数据
            if(this.lastCity !== this.city){
                this.lastCity=this.city
                this.getHomeInfo()
            }
        }
    }
</script>

<style>

</style>