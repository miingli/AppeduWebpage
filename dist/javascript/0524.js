//控制
//dataset
const lazyLoad = () => {
    let images = document.querySelectorAll('.image-block img');
    images.forEach(img => {
        let src = img.dataset.src;
        if (src) {
            img.src = src;
        }
    });
}


setTimeout(() => {
    lazyLoad();   //懶加載:網頁跑完後，自己的東西再加入
}, 5000)


//互動初體驗-打招呼
const sayHi = () => {
    let name = document.querySelector('#name');

    if (!name) {
        alert('沒有輸入文字框');
        return;
    }

    if (!name.value) {
        alert('請輸入姓名');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `Hi!, ${name.value}`;
    name.value = '';
    name.focus();
}


let hi = document.querySelector('#hi');

hi.addEventListener('click', sayHi);


//事件類型
//change

// hi.addEventListener('click', sayHi);

let name = document.querySelector('#name');

name.addEventListener('change', () => {
    if (!name.value) {
        alert('請輸入姓名');
        name.focus();
    }
})


//blur焦點移出時觸發
name.addEventListener('blur', () => {
    console.log(`blur: ${name.value}`);
})

//keypress:鍵盤按下時觸發
name.addEventListener('keypress', () => {
    console.log(`keypress: ${name.value}`);
})


//keyup:鍵盤放開時觸發
name.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        sayHi();
    }
})