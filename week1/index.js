
let indexPage = {
    data: [],

    // 表單
    domTitle: document.getElementById('title'),
    domOriginPrice: document.getElementById('origin_price'),
    domPrice: document.getElementById('price'),

    // 產品列表
    domProductList: document.getElementById("productList"),
    domProductCount: document.getElementById("productCount"),

    // 列表內按鈕
    domAddProduct: document.getElementById("addProduct"),
    domClearAll:document.getElementById("clearAll"),

    // 新增產品
    createProduct() {
        const model = this.getDataFromInput();
        const validResult = this.vaild(model);

        if (validResult.status) {
            this.data.push(model);
            this.clearInput();
            this.renderProductList();
        } else {
            alert(validResult.message);
        }
    },

    // 從輸入表單取得資料
    getDataFromInput() {
        const obj = {
            id: Math.floor(Date.now()),
            title: this.domTitle.value.trim(),
            origin_price: parseInt(this.domOriginPrice.value) || 0,
            price: parseInt(this.domPrice.value) || 0,
            is_enabled: false
        };
        return obj;
    },

    // 驗證資料
    vaild(model) {
        const obj = {
            status: !model.title == "",
            message: ""
        };

        if (!obj.status) {
            obj.message = "請輸入產品標題";
        }

        return obj;
    },

    // 清空表單
    clearInput() {
        this.domTitle.value = "";
        this.domOriginPrice.value = "";
        this.domPrice.value = "";
    },

    // 更新產品狀態
    updateIsEnabled(id) {
        let model = this.data.filter(m => m.id === id)[0];
        model.is_enabled = !model.is_enabled;
        this.renderProductList();
    },

    // 刪除單筆產品
    deleteRow(id) {
        this.data = this.data.filter(m => m.id !== id);
        this.renderProductList();
    },

    // 刪除全部
    deleteAll() {
        this.data = [];
        this.renderProductList();
    },

    // 渲染產品列表
    renderProductList() {
        let html = "";
        this.data.forEach(row => {
            html += this.template(row);
        })
        this.domProductList.innerHTML = html;
        this.domProductCount.innerHTML = this.data.length;
    },

    // 產品列表-單行框架
    template(model) {
        const html = `
            <tr>
                <td>${model.title}</td>
                <td width="120">
                    ${model.origin_price}
                </td>
                <td width="120">
                    ${model.price}
                </td>
                <td width="100">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="${model.id}" ${model.is_enabled ? 'checked' : ''} data-action="status" data-id="${model.id}">
                    <label class="form-check-label" for="${model.id}">${model.is_enabled ? '啟用' : '未啟用'}</label>
                    </div>
                </td>
                <td width="120">
                    <button type="button" class="btn btn-sm btn-danger move" data-action="remove" data-id="${model.id}"> 刪除 </button>
                </td>
            </tr>
        `;
        return html;
    },

    // 初始化
    init() {
        
        this.domAddProduct.addEventListener("click", () => { this.createProduct() });
        
        this.domClearAll.addEventListener("click", () => { this.deleteAll() });

        this.domProductList.addEventListener("click", (event) => {
            const action = event.target.getAttribute("data-action");
            const id = parseInt(event.target.getAttribute("data-id"));

            if (action === "status") {
                this.updateIsEnabled(id);
            } else if (action === "remove") {
                this.deleteRow(id);
            }

        })


    }
};

indexPage.init();
