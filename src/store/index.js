/*
 * @Author: shenzhiwei
 * @Date: 2019-01-15 14:53:37
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-01-16 10:02:11
 * @Description: store register
 */
import cart from './modules/cart'
import products from './modules/products'

// init Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
})
