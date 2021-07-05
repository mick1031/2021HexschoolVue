import productModal from "./productModel.js";

const WEB_APP_API = 'https://vue3-course-api.hexschool.io/';
const WEB_APP_PATH = 'mick1031';

const app = Vue.createApp({
    data() {
        return {
            loadingStatus: {
                itemId: "",
                quantityId: "",
                deleteId: "",
                submit: false,
            },
            cart: {},
            products: [],
            product: {},
            user: {
                name: "",
                email: "",
                tel: "",
                address: "",
            },
            message: "",
        };
    },
    methods: {
        displayDetail(id) {
            axios.get(`${WEB_APP_API}api/${WEB_APP_PATH}/product/${id}`)
                .then((response) => {
                    this.product = response.data.product;
                    this.$refs.userProductModal.openModal();
                })
        },
        getProducts() {
            axios.get(`${WEB_APP_API}api/${WEB_APP_PATH}/products/all`)
                .then((response) => {
                    this.products = response.data.products;
                })
        },
        getCarts() {
            axios.get(`${WEB_APP_API}api/${WEB_APP_PATH}/cart`)
                .then((response) => {
                    this.cart = response.data.data;
                })
        },
        addCart(product_id, qty) {
            this.loadingStatus.itemId = product_id;
            let item = {
                product_id,
                qty: parseInt(qty),
            };
            axios.post(`${WEB_APP_API}api/${WEB_APP_PATH}/cart`, { data: item })
                .then((response) => {
                    this.loadingStatus.itemId = '';
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingStatus.itemId = '';
                })

        },
        updateCart(row) {
            this.loadingStatus.quantityId = row.id;
            let item = {
                product_id: row.product_id,
                qty: parseInt(row.qty),
            };

            axios.put(`${WEB_APP_API}api/${WEB_APP_PATH}/cart/${row.id}`, { data: item })
                .then((response) => {
                    console.log(response);
                    this.loadingStatus.quantityId = '';
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingStatus.quantityId = '';
                })
        },
        clearCarts() {
            axios.delete(`${WEB_APP_API}api/${WEB_APP_PATH}/carts`)
                .then((response) => {
                    console.log(response);
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        deleteCart(id) {
            this.loadingStatus.deleteId = id;
            axios.delete(`${WEB_APP_API}api/${WEB_APP_PATH}/cart/${id}`)
                .then((response) => {
                    this.loadingStatus.deleteId = '';
                    console.log(response);
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingStatus.deleteId = '';
                })
        },
        onSubmit() {
            this.loadingStatus.submit = true;
            const detail = {
                user: this.user,
                message: this.message
            };

            axios.post(`${WEB_APP_API}api/${WEB_APP_PATH}/order`, {data: detail})
                .then((response) => {
                    this.loadingStatus.submit = false;
                    this.$refs.form.resetForm();
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingStatus.submit = false;
                })
        },
    },
    mounted() {
        this.getProducts();
        this.getCarts();
    }
});

VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');

// Activate the locale
VeeValidate.configure({
    generateMessage: VeeValidateI18n.localize('zh_TW'),
    validateOnInput: true, // 調整為輸入字元立即進行驗證
});

Object.keys(VeeValidateRules).forEach(rule => {
    if (rule == "default") {
        return;
    }
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});

app.component("userProductModal", productModal);
app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);


app.mount("#app");

