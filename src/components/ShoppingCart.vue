<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p :class="{ hide: !!products.length }"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <p><button class="weui-btn weui-btn_mini weui-btn_primary" :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout: {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
const { mapGetters, mapState } = Vuex

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),

    // 变异值
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products)
    }
  },
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
</style>

