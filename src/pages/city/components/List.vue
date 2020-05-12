<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    import {mapState,mapMutations} from 'vuex'
    export default {
        name:'CityList',
        props:{
            cities:Object,
            hot:Array,
            letter:String
        },
        computed:{
            ...mapState({
                //将state里的公共属性city映射到计算属性里的currentCity上
                currentCity:'city'
            })
        },
        methods:{
            handleCityClick(city){
                /**派发一个名为changeCity的action,将city传过去
                // this.$store.dispatch('changeCity',city) **/
                //this.$store.commit('changeCity',city)  
                this.changeCity(city)  
                //点击选择城市后跳转到首页
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        mounted(){
            this.scroll=new Bscroll(this.$refs.wrapper,{click: true})
        },
        watch:{
            letter (){
                if(this.letter){
                    const element=this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
.border-bottom
    &:before
        border-color:#ccc
.list
    overflow:hidden
    position:absolute
    top:1.59rem
    left:0
    right:0
    bottom:0
    .title
        line-height:.54rem
        background:#eee
        padding-left:.2rem
        color:#666
        font-size:.26rem
    .button-list
        padding:.1rem .6rem .1rem .1rem
        overflow:hidden
        .button-wrapper
            float:left
            width:33.33%
            .button
                text-align:center
                margin:.1rem
                padding:.1rem 0
                border:.02rem solid #ccc
                border-radius:.06rem
    .item-list
        .item
            line-height:.76rem
            padding-left:.2rem
</style>