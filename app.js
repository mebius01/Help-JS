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

El();

/**
 * method - "GET" or "POST" 
 * url - "https://jsonplaceholder.typicode.com/todos/"
 * cb - (error, response) => {}
 * object - {}
 */
function GetAjax(method, url, cb, object) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener("load", () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
        });

        if (object) {
            xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xhr.send(JSON.stringify(object));
        } else {
            xhr.send();
        }
    } catch (error) {
        cb(error);
    }

}

GetAjax("GET", "https://jsonplaceholder.typicode.com/users", (err, response) => {
    if (err) {
        console.log(err, response);
        return;
    }
    console.log(response);
});