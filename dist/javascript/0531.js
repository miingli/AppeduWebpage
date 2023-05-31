const init = () => {
    let addBtn = document.querySelector('#add-btn');
    let itemName = document.querySelector('#item-name');

    // addBtn.addEventListener('click', () => {

    // 新增項目統一收納
    const doAddItem = () => {
        let value = itemName.value;

        if (!value) {
            // alert('請輸入項目名稱');

            Swal.fire({
                title: '新增錯誤',
                text: '請輸入項目名稱',
                icon: 'error',
            }).then(() => {
                setTimeout(() => {
                    itemName.focus();
                }, 500)
            })
            return;
        }
        // console.log(value);
        let ul = document.querySelector('#pending-item');

        // 正規作法
        // let li = document.createElement('li');
        // let checkbox = document.createElement('input');
        // let label = document.createElement('label');
        // checkbox.type = 'checkbox';
        // label.innerHTML = value;
        // li.appendChild(checkbox);
        // li.appendChild(label);

        // ul.appendChild(li);

        // 簡單作法
        ul.innerHTML += `
        <li>
            <input type="checkbox">
            <label for="">${value}</label>
        </li>
        `;
    }

    addBtn.addEventListener('click', () => {
        doAddItem();
    });

    itemName.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            // let value = itemName.value;

            // if (!value) {
            //     alert('請輸入項目名稱');
            //     itemName.focus();
            //     return;
            // }

            // console.log(value);
            doAddItem();
        }
    });


};

init();

// Vue.createApp({
let vm = Vue.createApp({
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {

        doAddItem() {
            let value = this.itemValue;
            if (!value) {
                Swal.fire({
                    title: '新增錯誤',
                    text: '請輸入項目名稱',
                    icon: 'error',
                }).then(() => {
                    setTimeout(() => {
                        this.$refs.itemValue.focus();
                    }, 500)
                })
                return;
            }
            // console.log(value);
            this.pending.push(value);
        }
    }


}).mount('#app');