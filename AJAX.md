## AJAX XMLHttpRequest

```javascript
// Создаём новый объект XMLHttpRequest
const xhr = new XMLHttpRequest();

// Кофигурируем запрос
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// Повешать событие на успешный ответ Обрабатывает ответ
xhr.addEventListener("load", () => {
  const response = JSON.parse(xhr.responseText);
  console.log(response);
});

// Повешать событие на ошибку Обрабатывает ошибки
xhr.addEventListener("error", () => {
  console.log("ERROR");
});

// Отправляем GET запрос
xhr.send();
```

### xhr.open()

Настраивает запрос, а коммуникация инициируется методом send

xhr.open(method, url, async, body);

- method = GET or POSR
- url = адрес запроса
- async = true or folse (true - асинхронно, false - синхронно)
- body = Тело запроса {'foo': 'bar'} только с POST.

### xhr.send()

Именно этот метод открывает соединение и отправляет запрос на сервер.

- xhr.send([body]) - для POST
- xhr.send() - для GET

### xhr.abort()

Прерывает выполнение запроса

### Список событий

- loadstart - запрос начат.
- progress - браузер получил очередной пакет данных, можно прочитать текущие полученные данные в responseText.
- abort - запрос был отменён вызовом xhr.abort().
- error - произошла ошибка.
- load - запрос был успешно (без ошибок) завершён.
- timeout - запрос был прекращён по таймауту.
- loadend - запрос был завершён (успешно или неуспешно)
