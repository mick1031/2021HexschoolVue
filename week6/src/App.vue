<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center
          justify-content-lg-start
        "
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-white text-decoration-none
          "
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap" />
          </svg>
        </a>
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
            <router-link to="/" class="nav-link px-2 text-white">
              前台-首頁
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link px-2 text-white">
              前台-品牌介紹
              </router-link>
          </li>
          <li>
            <router-link to="/products" class="nav-link px-2 text-white">
              前台-產品
            </router-link>
          </li>
          <li>
            <router-link to="/cart" class="nav-link px-2 text-white">
              前台-購物車
            </router-link>
          </li>
          <li>
            <router-link to="/admin/products" class="nav-link px-2 text-white">
              後台-產品頁
            </router-link>
          </li>
          <li>
            <router-link to="/admin/order" class="nav-link px-2 text-white">
              後台-訂單
            </router-link>
          </li>
          <li>
            <router-link to="/admin/coupon" class="nav-link px-2 text-white">
              後台-優惠券
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/all";
</style>
