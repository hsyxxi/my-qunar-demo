//为了提高维护性拆分state，在隔壁index.js里引入
//使用localStorage必须加一个try,防止有些浏览器禁用了localStorage导致报错
let defaultCity = "长沙"
try {
    if (localStorage.city) {
    defaultCity = localStorage.city
    }
} catch (e) {}

export default{
    city: defaultCity
}