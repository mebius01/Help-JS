## Объекты
```javascript
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};           // синтаксис "литерал объекта"

let user = {
    name: "John",
    age: 30
};
```
```javascript
// присваивание значения свойству
user["employed"] = true;

// получение значения свойства
user["employed"]; // true

// удаление свойства
delete user["employed"];

// Перебор
for (let key in user) {
    // ключи
    key; // "name"
    // значения ключей
    user[key]; // "John"
}

function makeUser(name, age) {
    return {
        name, // то же самое, что и name: name
        age   // то же самое, что и age: age
  };
}

// проверка значения
"name" in user;
```