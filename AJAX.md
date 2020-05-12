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

Только настраивает запрос

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

## Функция для работы с AJAX

Функция возвращает объект из двух методов get и post

Метод get принимает два параметра:
- url - урл запроса
- cb - callback который работает с результатом

Метод post принимает 4 параметра те жа url cb и:
- headers - объект заголовков для POST запроса
- object - объект для отправки на сервер

```javascript

function httpResponse() {
    return {
        get(url, cb) {
            try { // В случаи успеха работает try
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener("load", () => { //
                    if (Math.floor(xhr.status / 100) !== 2) { // если статус не 20* вернет ошибку
                        cb(`Error: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText); // Парсит JSON
                    cb(null, response);
                });
                xhr.addEventListener('error', () => { // Обрабатывает ошибку
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });
                xhr.send();
            } catch (error) { // В случаи ошибки работает catch
                cb(error);
            }
        },
        post(url, cb, headers, object) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener("load", () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });
                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value); // Отправляет заголовки
                    });
                }
                xhr.send(JSON.stringify(object));
            } catch (error) {
                cb(error);
            }
        }
    };
}
```
Как с эим работать
```javascript
const http = httpResponse();

// Описывает работу callback
function cbResponse(error, responce) {
    if (error) {
        console.log('Error :', err)
    }
    console.log(responce)
}

// Метод get
const url = "https://jsonplaceholder.typicode.com/posts";
http.get(url, cbResponse)

// Метод post
const object = {
    userId: 1,
    title: "sunt aut",
    body: "ut quas totam↵nostrum rerum est autem sunt",
}

// Объект headers может передавать не один заголовок
const headers = {
    // 'Authorization':'Basic xxxxxxxxxxxxx',
    // 'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
    "Content-type": "application/json; charset=UTF-8"
}
http.post(url, cbResponse, headers, object)

```