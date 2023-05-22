//99乘法表

const genTable = () => { //genTable產生一張表
    // console.log('123');

    let n1 = document.querySelector('#n1'); // 數字1 的 DOM
    let n2 = document.querySelector('#n2'); // 數字2 的 DOM

    console.log(n1, n2);
    console.log(n1.value, n2.value);

    // 如果沒有數字1
    if (!n1) {
        //就回傳
        return;
    }

    // 如果數字1 小於等於 0
    if (n1.value <= 0) {
        //就回傳
        return;
    }

    // 如果沒有數字2
    if (!n2) {
        //就回傳
        return;
    }

    // 如果數字2 小於等於 0
    if (n2.value <= 0) {
        //就回傳
        return;
    }

    // console.log('I can!');



    //重構

    // 抓取 table、thead、tbody 的 DOM
    let table = document.querySelector('#table');
    let thead = table.querySelector('thead');
    let tbody = table.querySelector('tbody');

    // 初始化(清掉) UI介面
    thead.innerHTML = '';
    tbody.innerHTML = '';

    // 初始化(清掉) thead UI介面
    // HTML 內容初始化(清掉)
    //會初始化是因為要把變數弄得乾淨，不要被外在因素干擾
    let theadHTML = '<tr><th></th>';

    // 將 n1 的數字跑 for(迴圈只到上限) 產生 thead
    // 填入 thead 資料
    for (let i = 1; i <= n1.value; i++) {
        theadHTML += `<th>${i}</th>`;
    }

    // 關閉 thead
    theadHTML += '</tr>';
    // 更新 thead 內容
    thead.innerHTML = theadHTML;

    // tbody的UI介面， 內容資料產生 
    let result = {};
    for (let i = 1; i <= n2.value; i++) {
        result[i] = [];
        for (let j = 1; j <= n1.value; j++) {
            result[i].push(i * j);
        }
    }

    // 產生 UI介面
    let tbodyHTML = '';
    for (let row in result) {
        tbodyHTML = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyHTML += `<td>${value}</td>`;
        });

        tbodyHTML += '</tr>';
        tbody.innerHTML += tbodyHTML;
    }

    console.log(result);

    return;



    // let thead = [];
    // thead.push('');

    // let result = {};
    // for (let i = 1; i <= n2.value; i++) {
    //     thead.push(i);
    //     result[i] = [];   //宣告i是二維陣列
    //     for (let j = 1; j <= n1.value; j++) {
    //         // result.push(`${i} x ${j} = ${i * j}`);   //變數${}
    //         result[i].push(i * j);
    //     }
    // }
    // // console.log(result);


    // // let table = document.querySelector('#table');
    // let theadTr = table.querySelector('thead tr');

    // theadTr.innerHTML = '';
    // thead.forEach((n, nindex) => {
    //     theadTr.innerHTML += `<th>${n}</th>`;
    //     // theadTr.innerHTML = theadTr.innerHTML + `<th>${n}</th>`;
    // });

    // // console.log(thead);


    // // let tbody = table.querySelector('tbody');
    // let tbodyTr = '';
    // tbody.innerHTML = '';

    // for (let row in result) {   //一直迴圈跑到結束
    //     tbodyTr = `<tr><td>${row}</td>`;    //``字串跟變數放在一起
    //     let columns = result[row];   //把這一列的數字丟到欄
    //     columns.forEach(value => {
    //         tbodyTr += `<td>${value}</td>`;
    //     });

    //     tbodyTr += '</tr>';
    //     tbody.innerHTML += tbodyTr;
    // }
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);



//控制
//CSS
let uid = document.querySelector('#uid');

let doing = document.querySelector('#doing');

doing.addEventListener('click', () => {
    uid.style.color = 'blue';
    uid.style.fontSize = '100px';
    uid.style.backgroundColor = 'Orange'; //小駝峰
});



//Class
let addClass = document.querySelector('#add-class');

addClass.addEventListener('click', () => {
    uid.classList.add('active');  //附加
});

let removeClass = document.querySelector('#remove-class');

removeClass.addEventListener('click', () => {
    uid.classList.remove('active');  //移除
});



let mobileIcon = document.querySelector('#mobile-icon');

mobileIcon.addEventListener('click', () => {
    //如果有active要移除，否則沒有active就再加上去
    if (mobileIcon.classList.contains('active')) {   //確認名稱存在
        mobileIcon.classList.remove('active');   //移除
    } else {
        mobileIcon.classList.add('active');   //附加
    }
});