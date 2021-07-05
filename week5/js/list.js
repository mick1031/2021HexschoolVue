import productModal from "./productModel.js";

const WEB_APP_API = 'https://vue3-course-api.hexschool.io/';
const WEB_APP_PATH = 'mick1031';

const app = Vue.createApp({
    data() {
        return {
            loadingStatusItem: "",
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
            let item = {
                product_id,
                qty: parseInt(qty),
            };
            axios.post(`${WEB_APP_API}api/${WEB_APP_PATH}/cart`, { data: item })
                .then((response) => {
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error)
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
            axios.delete(`${WEB_APP_API}api/${WEB_APP_PATH}/cart/${id}`)
                .then((response) => {
                    console.log(response);
                    this.getCarts();
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        onSubmit() {

            this.$refs.form.resetForm()
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

