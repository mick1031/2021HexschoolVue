const template = `
<div class="modal fade" ref="modal" id="productModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col">
            <img :src="tempProduct.imageUrl" style="display: block;max-width: 100%">
          </div>
          <div class="col">
            <div>
              <label>產品名稱</label>
              <p>{{tempProduct.title}}</p>
            </div>
            <div>
              <label>分類</label>
              <p>{{tempProduct.category}}</p>
            </div>
            <div>
              <label>說明</label>
              <p>{{tempProduct.content}}</p>
            </div>
            <div>
              <label>描述</label>
              <p>{{tempProduct.description}}</p>
            </div>
            <div>
              <label>價格</label>
              <p>{{tempProduct.price}}</p>
            </div>
            <div>
              <label>數量</label>
              <div>
                <input type="number" min="1" v-model="qty">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-between">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-primary" @click="$emit('add-cart', tempProduct.id, qty)">加入購物車</button>
      </div>
    </div>
  </div>
</div>
`;

export default {
  template,
  props: [
    "product"
  ],
  data() {
    return {
      status: {},
      tempProduct: {},
      modal: '',
      qty: 1,
    };
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal);
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
}