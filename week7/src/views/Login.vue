<template>
  <div class="d-flex align-items-center" style="height: 100vh">
    <div class="mx-auto border p-3 rounded">
      <div class="mb-2">
        <label for="InputAccout" class="form-label">Account</label>
        <input type="text" class="form-control" id="InputAccout" />
      </div>
      <div class="mb-2">
        <label for="InpuPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="InpuPassword" />
      </div>
      <div class="d-flex justify-content-end">
        <router-link to="/admin" class="btn btn-outline-primary">送出</router-link>
      </div>
    </div>
  </div>
</template>
