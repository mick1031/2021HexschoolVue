<template>
{{product}}
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;
    const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then((result) => {
        if (result.data.success) {
          this.product = result.data.product;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
