<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <!-- 使用递归组件，先判断是否有children这个子级数组 -->
            <div v-if="item.children" class="item-children">
                <!-- 如果有的话调用自身组件，循环item.children这个子级数组的内容，:list是最外层的数据名 -->
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailList',
    props:{
        list:Array
    }
}
</script>
<style lang="stylus" scoped>
.item-title-icon
    position:relative
    left:.06rem
    top:.06rem
    display: inline-block;
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem
    background-size: .4rem 3rem
.item-title
    line-height:.8rem
    font-size:.32rem
    padding:0 .2rem
.item-children
    padding:0 .2rem
</style>