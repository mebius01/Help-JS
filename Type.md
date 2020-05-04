* Восемь типов данных, typeof

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