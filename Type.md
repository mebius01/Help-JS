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

### Тернарный оператор.
Условие ? ели True : ели folse;
```javascript
let a = 3;
let b = 3;
a > b ? console.log(a > b) : console.log(b > a);
```

## Логические операторы
ИЛИ - || Запинается true. Если одно из условий true вернет true Если все true вернет первое true
И - && Запинается на false. Если одно из условий false вернет false Если все true Вернет последнее true
Не !

```javascript
0 || 2 || 3; // 2
3 && 2 && 1; // 1
```
