/**
 * 
 * Комент
 * 
 */
// Преобразования типов
let value = 10;
value = (40).toString();
value = '20';
value = Number('20');
value = parseFloat('20.20px');
value = parseInt('20.20px');
value = String(10);
value = Boolean('false');
value = Array('12');
value = Object('10');
console.log(typeof value, value);

// Шаблонные строки
let name = 'Den';
let age = 23;
let templateString = `Test template string
Name = ${name},
Age = ${age}`;
console.log(templateString);
console.log('-------');

// Операторы
/**
 * ИЛИ - || Запинается true. Если одно из условий true вернет true Если все true вернет первое true
 * И - && Запинается на false. Если одно из условий false вернет false Если все true Вернет последнее true
 * Не !
 */
value = 0 || 2 || 3;
value = 3 && 2 && 1;
console.log(value);
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
 * froEach
 * Этой функции он передаёт три параметра callback(item, i, arr):
 * item – очередной элемент массива.
 * i – его номер.
 * arr – массив, который перебирается.
 */
const arr = ['1', '2', '3', 11, 22, 30, 12];
arr.forEach((item, i, arr) => {
    console.log(item);
});

/**
 * filtr
 * Он создаёт новый массив, в который войдут только те элементы arr,
 * для которых вызов callback(item, i, arr) возвратит true.
 */
const arr2 = arr.filter(item => item > 20 || typeof item == 'string');
console.log(arr2);
console.log('-------');


/**
 * map
 * Он создаёт новый массив, который будет состоять из результатов вызова 
 * callback(item, i, arr) для каждого элемента arr.
 * 
 */
const arr3 = arr.map((item, i) => {
    return {
        [i]: item
    };
});
console.log(arr3);
console.log('-------');

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

/**
 * Reduce
 * Принимает два аргумента callback и стартовое значение 
 * Сам калбек хранит переменнуя = результат предидущей итерации 
 * index и сам массив
 */
const arr4 = [4, 8, 23, 14, 67, 21, 161, 3, 4, 5, 6, 7];
const arrReduce = arr4.reduce((acc, item) => (acc + item), 0);
console.log(arrReduce)
console.log('-------');


/**
 * Метод find() возвращает значение первого найденного в массиве элемента,
 */
const arrFind = arr4.find(item => item === 6);
console.log(arrFind)
console.log('-------');


/**
 * Sort
 */

console.log(arr4.sort((a, b) => (b - a)));
console.log('-------');

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