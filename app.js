// Функция создает елемент разметки, добавляет класс и контент
function accCreateElement(el, arrClass, cont) {
    const element = document.createElement(el);
    if (arrClass) {
        arrClass.forEach(item => {
            element.classList.add(item);
        });
    }
    if (cont) {
        element.append(cont);
    }
    return element;
}

function accAppendChild(el, arrChild) {
    arrChild.forEach(item => {
        el.appendChild(item);
    })
    return el;
}

function El() {
    const div = accCreateElement("div");
    const ul = accCreateElement("ul", ["ul__contaner"]);
    const li1 = accCreateElement("li", ["li__item"], "item 1");
    const li2 = accCreateElement("li", ["li__item"], "item 2");
    const li3 = accCreateElement("li", ["li__item"], "item 3");
    const li4 = accCreateElement("li", ["li__item"], "item 4");
    accAppendChild(ul, [li1, li2, li3, li4]);
    div.appendChild(ul);
    console.log(div);
}

// El();

console.log('Request data..');

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data..');
        const backEndData = {
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
    const pro2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifide = true;
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