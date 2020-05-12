import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'   //
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state, //state:state键和值一样直接简化为state
    /**异步
    actions:{   
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        }
    },  
    **/
    mutations
    /**类似计算属性，对state做计算时使用
    getters:{     使用见header.vue
        doubleCity(state){
            return state.city + '' + state.city
        }
    }  
    **/
})