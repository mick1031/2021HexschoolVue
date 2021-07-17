<template>
  <div class="d-flex align-items-center" style="height: 100vh">
    <div class="mx-auto border p-3 rounded">
      <div class="mb-2">
        <label for="InputAccout" class="form-label">Account</label>
        <input
          type="text"
          class="form-control"
          id="InputAccout"
          v-model="user.username"
        />
      </div>
      <div class="mb-2">
        <label for="InpuPassword" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="InpuPassword"
          v-model="user.password"
        />
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-primary" @click="signin()">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signin() {
      const url = `${process.env.VUE_APP_URL}admin/signin`;
      this.$http.post(url, this.user).then((result) => {
        if (result.data.success) {
          const { token, expired } = result.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
          this.$router.push('/admin');
        }
      });
    },
  },
};
</script>
