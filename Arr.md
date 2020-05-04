## Массивы
```javascript
let arr = new Array();
let arr = [1,2,3];
arr.isArray([])); // true

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
### slice
Возвращает новый массив, в который копирует элементы

```javascript
let arr = ["t", "e", "s", "t"];
arr.slice(0, 3) // ["t", "e", "s"]
```
### concat
Создаёт новый массив, в который копирует данные из других массивов

```javascript
arr.concat([4,5,6,7], [7,6,5,4]) // ["t", "e", "s", "t", 4, 5, 6, 7, 7, 6, 5, 4]
```
### forEach
Позволяет запускать функцию для каждого элемента массива

```javascript
arr.forEach(function(item, index, arr) {
  // ... делать что-то с item
});
```
### filtr
Ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true

```javascript
let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});
```
### map
Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции

```javascript
let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
```
### sort
Сортирует массив на месте, меняя в нём порядок элементов

```javascript
console.log(arr4.sort((a, b) => (b - a))); // сортировка числового массива
```
### reduce
Используются для вычисления какого-нибудь единого значения на основе всего массива
Принимает два аргумента callback и стартовое значение
Сам callback хранит переменнуя в которой результат предидущей итерации index и сам массив

```javascript
const arr = [4, 8, 23, 14, 67, 21, 161, 3, 4, 5, 6, 7];
const arrReduce = arr.reduce(function(acc, item) {return acc + item}, 0); // 323
```
### find
Возвращает значение первого найденного в массиве элемента

```javascript
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
```
### indexOf/lastIndexOf и includes
* arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.  
* arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.  
* arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

### reverse
Меняет порядок элементов

```javascript
arr.reverse();
```
### Spred
Делит массив на элементы

```javascript
const sp = ['1', '2', '3', '4', '5'];
const sp2 = [5, 6, 7, 8];
console.log(...sp2, ...sp); // 5 6 7 8 "1" "2" "3" "4" "5"

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
console.log({...spObj, ...spObj2}) // {s: 1, d: 2, c: true, z: 11, dd: 22, ac: false}
```