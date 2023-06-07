Vue.createApp({
    data() {
        // return {}
        return {
            response: '',
        }
    },
    methods: {
        //檔案多選限制檔案屬性
        doUploadWithAjax() {
            let fileDom = this.$refs.file;
            if (!fileDom || !fileDom.files[0]) {
                return;
            }

            // console.log(fileDom.files);

            //上傳圖片
            let api = 'https://book.niceinfos.com/frontend/api/';
            let form = new FormData();
            form.append('action', 'upload');
            form.append('file', fileDom.files[0]);

            let options = {
                method: 'POST',
                body: form,
            };

            fetch(api, options)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(data);
                    Swal.fire({
                        title: '上傳完成',
                        text: '圖片已上傳',
                        icon: 'success'
                    })
                });
        },


        doPost() {
            let api = 'https://book.niceinfos.com/frontend/api/';

            let params = {
                action: 'demo',
                data: { a: 1, b: 2 }
            };

            let options = {
                method: 'POST',
                body: JSON.stringify(params),
            }

            fetch(api, options)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(data);
                })
        },


        doAjax() {
            console.log('ajax!');
            // Swal.fire({
            //     title: 'doAjax',
            //     text: 'Just test',
            //     icon: 'success'
            // })

            // let api = 'https://book.niceinfos.com/frontend/api/?action=demo';



            //fetch
            //使用 try catch 進行容錯機制
            this.useFetch();
        },
        useFetch() {
            let api = 'https://book.niceinfos.com/frontend/api/?action=demo';
            fetch(api).then(response => {
                // return response.json();
                return response.text();
            }).then(data => {
                data = 'a';
                console.log(typeof data);
                console.log(data);

                try {
                    data = JSON.parse(data);
                } catch (e) {
                    data = {};
                }

                console.log(data);
            })
            console.log('BBBB')
        },
        useXML() {


            let api = 'https://book.niceinfos.com/frontend/api/?action=sleep&a=111';
            //非同步請求
            let request = new XMLHttpRequest();
            request.addEventListener('load', () => {
                this.response = request.responseText;
                console.log('AAAA');
                // 因為回傳資料為字串,需使用反序列化還原成物件
                let response = JSON.parse(request.responseText);
                console.log(response.data);
            });

            request.open('GET', api);
            request.send();
            console.log('BBBB')
        }
    }
}).mount('#app')