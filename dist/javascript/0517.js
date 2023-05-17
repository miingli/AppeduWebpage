//抓取DOM //單一
let main = document.querySelector('#main');
console.log(main);
// if.....

//多選
let lis = document.querySelectorAll('#menu li');
console.log(lis);

//控制 //內容
main.innerHTML = 'Superman!';

//單一
let num1 = document.querySelector('#num-1');
let showBtn = document.querySelector('#show-btn');

//事件監聽 
showBtn.addEventListener('click', () => {
    //數值
    num1.value = 'ABC';
});

//99乘法表
const genTable = () => { //genTable產生一張表
    // console.log('123');
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    console.log(n1, n2);
    console.log(n1.value, n2.value);

    if (!n1) {
        return;
    }

    if (n1.value <= 0) {
        return;
    }

    if (!n2) {
        return;
    }

    if (n2.value <= 0) {
        return;
    }

    // console.log('I can!');

    let thead = [];
    thead.push('');

    let result = [];
    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        for (let j = 1; j <= n2.value; j++) {
            result.push(`${i} x ${j} = ${i * j}`); //變數${}
        }
    }
    // console.log(result);

    let table = document.querySelector('#table');
    let theadTr = table.querySelector('thead tr');

    theadTr.innerHTML = '';
    thead.forEach((n, nindex) => {
        theadTr.innerHTML += `<th>${n}</th>`;
        // theadTr.innerHTML = theadTr.innerHTML + `<th>${n}</th>`;
    });

    console.log(thead);
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);