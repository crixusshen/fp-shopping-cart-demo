/*
 * @Author: shenzhiwei
 * @Date: 2019-01-15 14:28:57
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-01-15 14:31:56
 * @Description: shop api
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // 通过模拟随机值让购买失败
      (Math.random() > 0.5) 
        ? cb()
        : errorCb()
    }, 100)
  }
}
