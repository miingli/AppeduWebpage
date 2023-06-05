//永久性儲存
//localStorage
const database = {
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value); //序列化
    },
    get(key, def) {  //get 增加預設值參數，修正無 key 時發生型態錯誤
        // return localStorage.getItem(key);
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value); //反序列化
            return value;
        }
        // return value;
        return def;
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}


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
            this.pending.push(value);
            this.pending.pull(value);
            this.itemValue = '';
            this.$refs.itemValue.focus();
            // database.set('todo-pending', this.pending);
            this.update();
            // console.table(this.pending);
        },
        doRemove(index) {
            console.log(index);
        },
        toDone(index) {
            // console.log(index);
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);
            // database.set('todo-pending', this.pending);
            // database.set('todo-done', this.done);
            this.update();
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
            this.update();
        },
        update() {
            database.set('todo-pending', this.pending);
            database.set('todo-done', this.done);
            // console.log(index, value);
            // 把代辦項目搬移到已完成資料內
            // 刪除目前代辦項目
        }
    },
    mounted() {
        // this.pending = database.get('todo-pending');  //還原已儲存資料
        this.pending = database.get('todo-pending', []);
        this.done = database.get('todo-done', []);
    }
}).mount('#app');






