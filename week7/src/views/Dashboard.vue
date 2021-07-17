<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
        <router-link
          to="/admin"
          class="
            d-flex
            align-items-center
            mb-0
            text-white text-decoration-none text-custom
            me-lg-3
            h1
          "
        >
          SOAP
        </router-link>
        <ul
          class="
            nav
            col-12 col-lg-auto
            me-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li>
            <router-link class="nav-link px-2 text-white" to="/admin/products">
              產品頁面
            </router-link>
          </li>
          <li>
            <router-link class="nav-link px-2 text-white" to="/admin/order">
              訂單頁面
            </router-link>
          </li>
          <li>
            <router-link class="nav-link px-2 text-white" to="/admin/coupon">
              優惠券頁面
            </router-link>
          </li>
          <li>
            <router-link class="nav-link px-2 text-white" to="/admin/blog">
              貼文頁面
            </router-link>
          </li>
        </ul>
        <div class="text-end">
          <button type="button" class="btn btn-warning" @click="logout()">
            登出
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    logout() {
      const url = `${process.env.VUE_APP_URL}logout`;
      this.$http
        .post(url)
        .then((result) => {
          console.log(result);
          if (result.data.success) {
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const url = `${process.env.VUE_APP_URL}api/user/check`;
    this.$http.defaults.headers.common.Authorization = `${token}`;
    this.$http
      .post(url)
      .then((result) => {
        if (result.data.success) {
          this.check = true;
        } else {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="less">
</style>
