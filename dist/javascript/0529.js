//分數等級轉換-計算等級
const toLevel = (number) => {
    // >= 90 甲
    if (number >= 90) {
        return '甲';
    }
    // >= 80 乙
    if (number >= 80) {
        return '乙';
    }
    // >= 70 丙
    if (number >= 70) {
        return '丙';
    }
    // >= 60 丁
    if (number >= 60) {
        return '丁';
    }

    // < 60 不及格
    return '不及格';
}

const calcLevel = () => {
    let number = document.querySelector('#number');

    if (!number) {
        alert('沒有輸入文字框');
        return;
    }

    if (!number.value) {
        alert('請輸入分數');
        return;
    }

    let response = document.querySelector('#response');

    // 修正為計算等級
    response.innerHTML = `您的等級為: ${toLevel(number.value)}`;
    number.value = '';
    number.focus();
}


let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);

let number = document.querySelector('#number');

number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        calcLevel();
    }
})



//電子鐘
const update = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (ss < 10) {
        ss = '0' + ss;
    }

    let time = '' + hh + mm + ss;

    for (let i = 0; i < 6; i++) {
        let dom = document.querySelector(`#c-${i + 1}`);
        dom.innerHTML = time[i];
    }
}

update();

setInterval(() => {
    update();
}, 1000);
