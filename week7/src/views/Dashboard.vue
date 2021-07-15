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
            text-white
            text-decoration-none
            text-custom
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
            <router-link class="nav-link px-2 text-white" to="/admin/product">
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
          <router-link to="/" class="btn btn-warning">登出</router-link>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
</script>

<style lang="less">
</style>
