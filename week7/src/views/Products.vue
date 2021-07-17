<template>
  Products
  <div v-for="item in products" :key="item.id">
    <h2>
      {{ item.title }}
      <button class="btn btn-primary" @click="goToProduct(item)">more</button>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    goToProduct(product) {
      this.$router.push(`/product/${product.id}`);
    },
  },
  created() {
    const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products`;
    this.$http
      .get(url)
      .then((result) => {
        if (result.data.success) {
          this.products = result.data.products;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
