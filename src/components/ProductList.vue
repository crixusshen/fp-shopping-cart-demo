<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
    {{ product.title }} - {{ product.price }}
    <br>
    <button
      :class="{ 'weui-btn': true, 'weui-btn_mini': true, 'weui-btn_primary': true }" 
      :disabled="!product.inventory"
      @click="addProductToCart(product)"
    >
      {{ product.inventory ? "Add to cart" : "No inventory" }}
    </button>
    </li>
  </ul>
</template>

<script>
const { mapState, mapActions } = Vuex

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created() {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
