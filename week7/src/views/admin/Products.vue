<template>
Product
{{products}}
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products/all`;
    this.$http
      .get(url)
      .then((result) => {
        console.log(result);
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
