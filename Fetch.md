## Метод fetch() - делат сетевые запросы и получать информацию с сервера.
fetch  Всегда возвращает объект Промис и как следсвие мы можем с ним работать через .then и .catch

Как с этим работать  
*fetch(url, {})*
При вызове fetch(url) с одним параметрм url он отработает как GET запрос
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
```
Вторым аргументом выступает бъект с параметрами (метод, заголовки и т д)

## GET
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    // Первая цепочка .then мы можем что-то сделать с ответом,
    // например обработать статус и вернуть ответ с методом json
    .then(response => {
        console.log(response.status);
        return response.json();
    })
    // Вторая цепочка. Можем что-то сделать с массивом постов,
    // например отрендерить на страницу
    .then(data => {
        console.log(data);
    })
    // В цепочке с ошибками обработать ошибки
    .catch(error => console.error(error))
```
Несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:
- response.text() – читает ответ и возвращает как обычный текст,
- response.json() – декодирует ответ в формате JSON,
- response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
- response.blob() – возвращает объект как Blob (бинарные данные с типом),
- response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
- response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям. Мы рассмотрим и такой пример несколько позже.


## POST
Для отправки POST-запроса или запроса с другим методом, нам необходимо использовать fetch параметры:

- method – HTTP метод, например POST,
- body – тело запроса, одно из списка:
    - строка (например, в формате JSON),
    - объект FormData для отправки данных как form/multipart,
    - Blob/BufferSource для отправки бинарных данных,
    - URLSearchParams для отправки данных в кодировке x-www-form-urlencoded, используется редко.
- headers - Заголовки

```javascript
const user = {
    name: 'John',
    surname: 'Smith'
};
const parm = {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(user)
}

fetch('https://reqres.in/api/users/', parm)
    .then(result => {
        console.log(result.status);
        return result.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
```