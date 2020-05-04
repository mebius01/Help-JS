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

