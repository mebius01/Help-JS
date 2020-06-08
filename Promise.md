## Promise (обещание)
Предоставляют удобный способ организации асинхронного кода.

*Promise* это специальный объект, который содержит своё состояние:  
- pending - ожидание выполнения промиса
- fulfilled - выполнено успешно
- rejected - выполнено с ошибкой

На promise можно навешивать колбэки двух типов:  
- onFulfilled – срабатывают, когда promise в состоянии выполнен успешно.
- onRejected – срабатывают, когда promise в состоянии выполнен с ошибкой.

Способ использования, в общих чертах, такой:  
- Код, которому надо сделать что-то асинхронно, создаёт объект promise и возвращает его.
- Внешний код, получив promise, навешивает на него обработчики.
- По завершении процесса асинхронный код переводит promise в состояние fulfilled (с результатом) или rejected (с ошибкой). При этом автоматически вызываются соответствующие обработчики во внешнем коде.

Методы:
- then() - Метод принимает два колбэка случаев выполнения и отказа
- catch() - Выполняется когда Promise вернул ошибку
- finally() - Выполняется когда Promise был выполнен, в не зависимости успешно или с ошибкой, указанная функция будет выполнена
- all([...]) - Выполнит промис только тогда. когда все промисы были выполненны.
- race([...]) - Возвращает первый выполненный промис
- Promise.resolve Возвращает выполненое обещание
- Promise.reject(reason) - Возвращает шибку

Как это работает  
*setTimeout* - ємулирует задержку при работе с сервером

```javascript

console.log('Request data..');

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data..'); // Запрос на получение данных
        const backEndData = { // Сами данные
            server: 'aws',
            port: 2000,
            status: 'Ok'
        };
        // Передать backEndData в resolve и получить эти данные в pro.then(data)
        resolve(backEndData);
    }, 2000);
});

// Когда выполнится промис
pro.then((data) => {
    const pro2 = new Promise((resolve, reject) => { // Вызываем новый Промис
        setTimeout(() => {
            data.modifide = true; // Пример модификацияи данных
            resolve(data);
        }, 2000);
    });
    pro2.then(modifideData => {
        console.log('Promis resolve!', modifideData);
    });
});

pro.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifide = true;
            // resolve(data); // resolve - Успех Промиса
            reject(data); // reject - Провал Промиса
        }, 2000);
    });
}).then(modifideData => {
    console.log('Promis resolve!', modifideData);
    modifideData.newData = "new Data";
    return modifideData; // Не обязательно вызывать Промис, можно просто отдавать данные
}).then(data => {
    console.log("New Data", data);
}).catch(error => {
    console.error("Error :", error); // Метод catch обрабатывает ошибки и вызывается в любом месте
}).finally(() => {
    console.log("Finally"); // Метод finally вызывается в любом случаи не зависимо от шибок
});

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

sleep(2000).then(() => console.log("Promice 4000"));
sleep(3000).then(() => console.log("Promice 8000"));


// Промисами могут быть запросы на сервер, и что бы собрать все данные с разных Промисов и выполнить Promise.all
Promise.all([sleep(12000), sleep(6000)]).then(() => {
    console.log("Выполнится только после s(2), s(3)");
});

// Выполнится когда один из промисов выполнится
Promise.race([sleep(12000), sleep(6000)]).then(() => {
    console.log("Выполнится только после первого удачного промиса s(6)");
});

```

## Async/await

*async* - перед функцией гарантирует, что эта функция в любом случае вернёт промис  
*await* - заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
