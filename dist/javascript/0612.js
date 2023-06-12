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
            this.update();
        },
        doRemove(index) {
            console.log(index);
        },
        toDone(index) {
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);
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
        },


        doSaveCloud() {
            Swal.fire({
                title: '儲存到雲端',
                text: '請輸入 UID',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: '儲存',
                cancelButtonText: '先不要'
            }).then(response => {
                if (response.value) {
                    let api = 'https://book.niceinfos.com/frontend/api/';

                    // 使用表單物件
                    // let form = new FormData;
                    // form.append('action', 'todo');
                    // form.append('uid', response.value);
                    // form.append('data', {
                    //     pending: this.pending,
                    //     done: this.done
                    // });

                    let params = {
                        action: 'todo',
                        uid: response.value,
                        data: {
                            pending: this.pending,
                            done: this.done
                        }
                    }

                    // console.log(params);
                    fetch(api, {
                        method: 'POST',
                        body: JSON.stringify(params)
                    }).then(response => {
                        return response.text();
                    }).then(text => {
                        setTimeout(() => {
                            let data = JSON.parse(text);
                            console.log(data);
                            Swal.fire({
                                title: '儲存完畢',
                                text: '資料已儲存',
                                icon: 'success'
                            })
                            // }, 5000);
                        }, 2000);
                    })

                    Swal.fire({
                        title: '資料儲存中',
                        text: '請勿關閉或重新整理視窗',
                        showConfirmButton: false
                    })
                }
            });
        },
        // doLoadCloud() {
        //     console.log('load');
        async doLoadCloud() {
            let response = await Swal.fire({
                title: '載入雲端資料',
                text: '請輸入 UID',
                input: 'text'
            });

            if (response.value) {
                let api = 'https://book.niceinfos.com/frontend/api/';
                // fetch(`${api}?action=todo&uid=${response.uid}`).then(response => {
                fetch(`${api}?action=todo&uid=${response.value}`).then(response => {
                    return response.text();
                }).then(text => {
                    // console.log(text);
                    let response = JSON.parse(text);
                    if (response.data.pending) {
                        this.pending = response.data.pending;
                    }

                    if (response.data.done) {
                        this.done = response.data.done;
                    }

                    this.update();
                })
            }
        }
    },
    mounted() {
        this.pending = database.get('todo-pending', []);
        this.done = database.get('todo-done', []);
    }
}).mount('#app');


//jQuery
//$ 衝突處理方法

// let $ = 'Hello';

// 使用 closure 避免 $ 被複寫
(($) => {
    // innerHTML
    //     let uid = $('#uid').html();
    //     console.log(uid);
    // })(jQuery)


    //jquery 單選多選
    let account = $('#account').val();
    // let account = undefined;
    // try {
    //     let account = document.querySelector('#account').value;
    // } catch (e) { }


    // console.log($);


    //jquery 單選多選
    let items = $('.item');
    // let items = document.querySelectorAll('.item');
    items.each((index, item) => {
        console.log(index, $(item).html());
    })

    //事件綁定
    $('#account').on('keyup', (e) => {
        console.log(e);
    })



    //class 控制
    // $('#account').addClass('active');

    // setTimeout(() => {
    //     $('#account').removeClass('active');
    // }, 3000);


    setInterval(() => {
        console.log($('#account').hasClass('active'));
        $('#account').toggleClass('active');
    }, 1000)


    //屬性控制
    setTimeout(() => {
        $('#agree').prop('checked', true);
    }, 3000)

})(jQuery)






