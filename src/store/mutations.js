//为了提高维护性拆分mutations，在隔壁index.js里引入
export default {
    changeCity(state, city) {
        state.city = city
        //这里也要使用try
        try {
        localStorage.city = city
        } catch (e) {}
    }
}