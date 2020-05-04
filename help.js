// Операторы

console.log('-------');

// Тернарный оператор.
// Условие ? ели True : ели folse;
let a = 3;
let b = 3;
a > b ? console.log(a > b) : console.log(b > a);
console.log('-------');

// Switch case
let c = 10;
switch (c) {
    case 8:
        console.log(`${c} = 8`);
        break;
    case 9:
        console.log(`${c} = 9`);
        break;
    case 10:
        console.log(`${c} = 10`);
    default:
        console.log(`${c} != 8 && != 9 && != 10`);
        break;
}
console.log('-------');

// while
let z = 0;
while (z < 3) {
    console.log(`${z} < 3`);
    z++;
}
console.log('-------');
let ze = 0;
while (ze++ < 3) {
    console.log(`${ze} < 3`);
}
console.log('-------');

// do while
let zer = 0;
do {
    console.log(`${zer} < 3`);
} while (zer++ < 3);
console.log('-------');

// for
let array = ['f', 'g', 'h', 'e', ];
for (let i = 0; i < array.length; i++) {
    console.table(array[i]);
}
console.log('-------');

// for in - для объекта
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
for (let k in obj) {
    console.log(obj[k]);
}
console.log('-------');

// for of - для массива
for (let i of array) {
    console.log(i);
}
console.log('-------');

// function
function mFun(params1, params2) {
    console.log(params1 * params2);
}
mFun(23, 4);
let mValue = mFun(12, 3);

const mFun2 = function (params1, params2) {
    console.log(params1 + params2);
};
mFun2(2, 1);
mValue = mFun2(3, 3);
console.log('-------');

const arrowFun = (x, y) => x + y;
const arrowFun2 = () => console.log('hello world');
const arrowFun3 = (x) => x + 10;
const arrowFun4 = (a) => {
    if (a == 0) {
        return true;
    } else {
        if (a == 1) {
            return false
        }
    }
    a -= 2;
    return arrowFun4(a);
};
console.log(arrowFun4(14))
arrowFun2();
console.log('-------');

// Методы массивов - https://learn.javascript.ru/array-methods


// МЕТОДЫ ОБЪЕКТОВ В JAVASCRIPT - https://www.8host.com/blog/metody-obektov-v-javascript/


/**
 * every/some
 * Эти методы используются для проверки массива.
 * every возвращает true, если вызов callback вернёт true для каждого элемента arr.
 * some возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
 */
const isPositive = (number) => {
    return number > 0;
};

console.log(arr.every(isPositive)); // false, не все положительные
console.log(arr.some(isPositive)); // true, есть хоть одно положительное
console.log('-------');
;



/**
 * Spred
 * Оператор spred делит массив на элементы
 */

const sp = ['1', '2', '3', '4', '5'];
const sp2 = [5, 6, 7, 8];
console.log(...sp2, ...sp);

const spObj = {
    s: 1,
    d: 2,
    c: true
}
const spObj2 = {
    z: 11,
    dd: 22,
    ac: false
}
console.log({
    ...spObj
})
console.log({
    ...spObj,
    ...spObj2
})

/**
 * Rest собирает в массив
 */

const sum = (...rest) => {
    return rest.reduce((acc, index) => (acc + index), 0)
};
const arr5 = [1, 2, 3, 4, 5];
console.log(sum(...arr5));