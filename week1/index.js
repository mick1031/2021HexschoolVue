
let indexPage = {
    data: [],

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

    getDataFromInput() {
        const obj = {
            id: Math.floor(Date.now()),
            title: document.getElementById('title').value.trim(),
            origin_price: parseInt(document.getElementById('origin_price').value) || 0,
            price: parseInt(document.getElementById('price').value) || 0,
            is_enabled: false
        };
        return obj;
    },

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

    clearInput() {
        document.getElementById('title').value = "";
        document.getElementById('origin_price').value = "";
        document.getElementById('price').value = "";
    },

    updateIsEnabled(id) {
        let model = this.data.filter(m => m.id === id)[0];
        model.is_enabled = !model.is_enabled;
        this.renderProductList();
    },

    deleteRow(id) {
        this.data = this.data.filter(m => m.id !== id);
        this.renderProductList();
    },

    deleteAll() {
        this.data = [];
        this.renderProductList();
    },

    renderProductList() {
        let html = "";
        this.data.forEach(row => {
            html += this.template(row);
        })
        document.getElementById("productList").innerHTML = html;
        document.getElementById("productCount").innerHTML = this.data.length;
    },

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

    init() {

        document.getElementById("addProduct").addEventListener("click", () => { this.createProduct() });
        
        document.getElementById("clearAll").addEventListener("click", () => { this.deleteAll() });

        document.querySelector("#productList").addEventListener("click", (event) => {
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
