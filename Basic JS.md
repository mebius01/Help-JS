## Типы

### Восемь типов данных, typeof

```javascript
typeof undefined // "undefined" значение не присвоено
typeof 0 // "number"
typeof 1234567890123456789012345678901234567890n // "bigint" Очень большое число
typeof true // "boolean"
typeof "string" // "string"
typeof Symbol() // "symbol" представляет собой уникальный идентификатор
typeof {key: 'value'} // "object"
typeof null // "object" это официально признанная ошибка в языке. Это отдельный тип
typeof function(){} // "function"
```
### Строковое преобразование
```javascript
let value = true;
value = String(value); // теперь value это строка "true"
```
### Численное преобразование
```javascript
let str = "123";
let num = Number(str);  // становится числом 123

Number("123z");   // NaN (ошибка чтения числа в "z")
Number(true);     // 1
Number(false);    // 0
Number(null);     // 0
Number(undefined) // NaN

parseFloat('20.20px'); // 20.2
parseInt('20.20px'); // 20
```

### Логическое преобразование
```javascript
Boolean(1);         // true
Boolean(0);         // false
Boolean("Привет!"); // true
Boolean("");        // false
```
### Преобразование в массив
```javascript
Array('12'); //["12"]
Array(12);   // [empty × 12]
```

## Шаблонные строки
```javascript
let name = 'Ivan';
let age = 23;
let templateString = `Test template string Name = ${name}, Age = ${age}`;
```
## Массивы
```javascript
let arr = new Array();
let arr = [1,2,3];

arr[0]; // 1
arr[1]; // 2

arr[0] = "Hello"
arr[0] // Hello

arr.push(...items) – добавляет элементы в конец  
arr.pop() – извлекает элемент из конца  
arr.shift() – извлекает элемент из начала  
arr.unshift(...items) – добавляет элементы в начало  
```
## Методы массивов

### splice изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
Удаляет 0 элементов по индексу 2 и вставляет "drum"
```javascript
let arr = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = arr.splice(2, 0, 'drum');
// arr равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено
```
Удаляет 1 элемент по индексу 3
```javascript
let arr = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
let removed = arr.splice(3, 1);
// removed равен ["mandarin"]
// arr равен ["angel", "clown", "drum", "sturgeon"]
```
Удаляет 1 элемент по индексу 2 и вставляет "trumpet"
```javascript
let arr = ['angel', 'clown', 'drum', 'sturgeon'];
let removed = arr.splice(2, 1, 'trumpet');
// arr равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]
```
Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"
```javascript
let arr = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = arr.splice(0, 2, 'parrot', 'anemone', 'blue');
// arr равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed равен ["angel", "clown"]
```
Удаляет 2 элемента начиная с индекса 2
```javascript
let arr = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
let removed = arr.splice(arr.length - 3, 2);
// arr равен ["parrot", "anemone", "sturgeon"]
// removed равен ["blue", "trumpet"]
```
Удаляет 1 элемент по индексу -2
```javascript
let arr = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = arr.splice(-2, 1);
// arr равен ["angel", "clown", "sturgeon"]
// removed равен s ["mandarin"]
```
Удаляет все элементы после индекса 2 (включительно)
```javascript
let arr = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = arr.splice(2);
// arr равен ["angel", "clown"]
// removed равен ["mandarin", "sturgeon"]
```
### slice возвращает новый массив, в который копирует элементы
```javascript
let arr = ["t", "e", "s", "t"];
arr.slice(0, 3) // ["t", "e", "s"]
```
### concat создаёт новый массив, в который копирует данные из других массивов
```javascript
arr.concat([4,5,6,7], [7,6,5,4]) // ["t", "e", "s", "t", 4, 5, 6, 7, 7, 6, 5, 4]
```
### forEach позволяет запускать функцию для каждого элемента массива
```javascript
arr.forEach(function(item, index, arr) {
  // ... делать что-то с item
});
```
### filtr ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true
```javascript
let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});
```
### map Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
```javascript
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
```
### sort сортирует массив на месте, меняя в нём порядок элементов
```javascript
console.log(arr4.sort((a, b) => (b - a))); // сортировка числового массива
```
### Reduce используются для вычисления какого-нибудь единого значения на основе всего массива
Принимает два аргумента callback и стартовое значение
Сам callback хранит переменнуя в которой результат предидущей итерации index и сам массив

```javascript
const arr = [4, 8, 23, 14, 67, 21, 161, 3, 4, 5, 6, 7];
const arrReduce = arr.reduce(function(acc, item) {return acc + item}, 0); // 323
```
### find возвращает значение первого найденного в массиве элемента
```javascript
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
```
### indexOf/lastIndexOf и includes
arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.  
arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.  
arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

### reverse меняет порядок элементов
```javascript
arr.reverse();
```
### Spred Оператор spred делит массив на элементы
```javascript
const sp = ['1', '2', '3', '4', '5'];
const sp2 = [5, 6, 7, 8];
console.log(...sp2, ...sp); // 5 6 7 8 "1" "2" "3" "4" "5"
```

## Операторы

### if
Оператор if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.
```javascript
if (1 > 0) console.log('1 > 0');

if (1 > 0) {
    console.log('1 > 0')
};
```
### if else
```javascript
if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
}

if (усдловие) {
    дейсвие;
} else if (условие) {
        дейсвие;
    } else if (условие) {
            дейсвие;
        }
```

### switch case
```javascript
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
```
### Тернарный оператор
Условие ? ели True : ели folse;
```javascript
let a = 3;
let b = 3;
a > b ? console.log(a > b) : console.log(b > a);
```

### Логические операторы
ИЛИ - || Запинается true. Если одно из условий true вернет true Если все true вернет первое true
И - && Запинается на false. Если одно из условий false вернет false Если все true Вернет последнее true
Не !

```javascript
0 || 2 || 3; // 2
3 && 2 && 1; // 1
```
## Циклы
### while
```javascript
let z = 0;
while (z < 3) {
    console.log(`${z} < 3`);
    z++;
}
// 0 < 3
// 1 < 3
// 2 < 3

let ze = 0;
while (ze++ < 3) {
    console.log(`${ze} < 3`);
}
// 1 < 3
// 2 < 3
// 3 < 3
```

### do while
```javascript
let z = 0;
do {
    console.log(`${z} < 3`);
} while (z++ < 3);
// 0 < 3
// 1 < 3
// 2 < 3
// 3 < 3
```

### for
```javascript
let array = ['f', 'g', 'h', 'e', ];
for (let i = 0; i < array.length; i++) {
    console.table(array[i]);
}
// f
// g
// h
// e
```

### for in - для объекта
```javascript
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
for (let k in obj) {
    console.log(obj[k]);
}
// 1
// 2
// 3
// 4
```

### for of - для массива
```javascript
arr = [1,2,3,4,5]
for (let i of arr) {
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
```
## function
Функции, начинающиеся с…

"get…" – возвращают значение,  
"calc…" – что-то вычисляют,  
"create…" – что-то создают,  
"check…" – что-то проверяют и возвращают логическое значение, и т.д.  

showMessage(..)     // показывает сообщение  
getAge(..)          // возвращает возраст (в каком либо значении)  
calcSum(..)         // вычисляет сумму и возвращает результат  
createForm(..)      // создаёт форму (и обычно возвращает её)  
checkPermission(..) // проверяет доступ, возвращая true/false  

### Function Declaration
```javascript
function sum(a, b) {
  return a + b;
}
```
### Function Expression
```javascript
let sum = function(a, b) {
  return a + b;
}
```

### Анонимные функции
Если после function есть имя — функция именованная, во всех остальных случая анонимная
```javascript
element.addEventListener('click', function(a, b) { return  a+ b; })
const myFunc = function() { };
```
### Стрелочные функции
```javascript
const Fun = () => {};
const arrowFun = (x, y) => x + y;
arrowFun(1,2) // 3

const arrowFun2 = () => console.log('hello world');
arrowFun2() // hello world

const arrowFun3 = (x) => x + 10;
arrowFun3(2) // 12

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
arrowFun4(4) // true
```

