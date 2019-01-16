<template>
  <div class="container">
    <h1>Shopping Cart FP Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <br>
    <hr>
    <ShoppingCart/>
  </div>
</template>
<script>
import ProductList from '../../components/ProductList.vue'
import ShoppingCart from '../../components/ShoppingCart.vue'

export default {
  components: { ProductList, ShoppingCart }
};
</script>
<style lang="scss">
.container {
  width: 100%;
  padding: 0 50px;
  background: white;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
