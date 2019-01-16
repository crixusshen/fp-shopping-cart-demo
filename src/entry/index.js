import index from '../pages/index/index.vue';

import store from '../store'

var app = new Vue({
  template: '<index/>',
  components: {
    'index': index,
  },
  mounted: function () {
    console.log('page mounted');
  },
  store
})
app.$mount()
