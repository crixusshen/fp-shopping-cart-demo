/*
 * @Author: shenzhiwei
 * @Date: 2019-01-15 14:28:39
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-01-15 14:38:08
 * @Description: products store
 */
import shop from '../../api/shop'

// state 初始化
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
