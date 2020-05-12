<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'HomeWeekend',
        props:{
            list:Array
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    line-height :.6rem
    background:#eee
    text-indent .2rem
.item-img-wapper
    overflow:hidden
    height:0
    padding-bottom:37%
    .item-img
        width :100%
.item-info
    padding:.1rem
    .item-title
        line-height :.44rem
        font-size .30rem
        ellipsis()
    .item-desc
        line-height :.4rem
        color :#ccc
        font-size:.25rem
        ellipsis()
</style>