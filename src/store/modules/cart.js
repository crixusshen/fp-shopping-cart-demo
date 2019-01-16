/*
 * @Author: shenzhiwei
 * @Date: 2019-01-15 14:39:43
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-01-15 22:48:48
 * @Description: cart store
 */
import shop from '../../api/shop'

// state 初始化
const state = {
  items: [],
  // 购物车结算状态：successful/failed
  checkoutStatus: '-'
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items]
    // 重置结算状态
    commit('setCheckoutStatus', null)
    // 清空购物车
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),  // // 标识 结算成功
      () => {
        // 标识 结算失败
        commit('setCheckoutStatus', 'failed')
        // 回退到发送请求前的购物车
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    // 有库存继续下面的流程
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
