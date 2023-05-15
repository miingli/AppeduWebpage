let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2; //整數+浮點數(小數點)
let num4 = '10';
let num5 = num1 + num4; //當數字遇到字串
let num6 = num1 - num4;
let num7 = num1 * num4;
let num8 = num1 / num4;
let num9 = num1 % num4;
let num10 = num1 + 'a';
//顯示型態typeof
console.log(num1, num2, num3, typeof num4, num5, num6, num7, num8, num9, num10);

let num11 = parseInt(num1, 10) + parseInt(num4, 10);
//偷雞法前面加上 【+】 轉為數字
let num12 = +num1 + +num4;
let num13 = +num1 + +'a';
console.log(num11, num12, num13);

// 字元 char ,強型態語言時,一次只能塞一個
let s1 = 'S1 \t S1';
// 字串 string 
let s2 = "S2 \t S2";
console.log(s1); //S1 	 S1
console.log(s2); //S2 	 S2

// escape \跳脫字元
// \n -> 換行
// \r\n -> win換行
// \t -> tab

console.log(num1, num1.toString(), typeof num1, typeof num1.toString());

//布林值 boolean
let b1 = true;
let b2 = false;
let b3 = 1;
let b4 = 0;
let b5 = 's';
let b6 = '';
let b7 = -1;
let b8 = 2;

if (b7) {
    console.log('Yes');
} else {
    console.log('No');  //false、0、''因為都沒有東西
}

//陣列array
let students = [1, 2, 3, 4]

console.log(students); //1, 2, 3, 4
console.log(students.join('::')); //增加、轉字串1::2::3::4::5

students.push(5); //加一個數字5
console.log(students); //1, 2, 3, 4, 5

console.log(students[0]); //編號0是1

let index = students.indexOf(2);  //尋找數字2的編號在哪
console.log(index); //編號1

students.splice(index, 1); //刪掉編號1的數字2
console.log(students); //1, 3, 4, 5


//陣列array
let nums = [40, 50, 80, 75];

console.log('原始分數');
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);  //第一位學生(編號)、幾分
    nums[index] = snum + 20; //告訴每位學生(編號)的分數都加20
})

console.log('加分');
nums.forEach((snum, index) => {
    console.log(`第 ${index + 1} 位學生: ${snum}`);  //進行每位學生(編號)的分數都加20
});

//迴圈for
let students100 = [];
for (let sindex = 0; sindex < 100; sindex++) {
    students100[sindex] = Math.ceil(Math.random() * 100);
}
console.table(students100);


//函數:宣告
const a1 = function () {   //第一種宣告
    console.log('Origin function');
}
const a2 = () => {  //第二種宣告
    console.log('Arror function');
}


nums.forEach(function (snum, index) {
    console.log(`第 ${index + 1} 位學生: ${snum}`);
})

const add20 = function (snum, index) {
    console.log(`具名函數--第 ${index + 1} 位學生: ${snum}`);
}
//呼叫
nums.forEach(add20);


//先宣告我想做這樣
const addNum = (originNum, addNum) => {

    originNum = +originNum;
    addNum = +addNum;
    // let originNum = 40;
    // let addNum = 20;

    let total = originNum + addNum;
    // 判斷是否真的是數字

    console.log(`In function: ${total}`); // 判斷是否超過100分
    return total;
}

//函數與變數 //進行施作宣告的內容
let student = [40, 50, 80, 75];
let adds = 30;
student.forEach((s, index) => {
    students[index] = addNum(s, adds);
    console.log(s);
});
console.table(students);


//物件object
let studentss = [];
students.push({
    name: 'David',
    num: 40
});

students.push({
    name: 'John',
    num: 50
});

students.push({
    name: 'Helen',
    num: 80
});

students.push({
    name: 'Mary',
    num: 20
});

let add = 30;
students.forEach((student, index) => {
    console.log(`Student ${student.name}: ${student.num}`);
    student.num = addNum(student.num, add);
    students[index] = student;
})
console.table(students);


//執行後遞增n++、遞增後執行++n
let n = 1;
let n2 = n++;
let n3 = ++n;

console.log(n);
console.log(n2);
console.log(n3);


//99乘法表
for (let start = 1; start <= 9; start++) {
    // console.log(start);
    for (let end = 1; end <= 9; end++) {
        console.log(`${start} * ${end} = ${start * end}`)
    }
}

