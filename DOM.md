## Получить элемент страницы

querySelector CSS-selector  
querySelectorAll CSS-selector  
getElementById id  
getElementsByName name  
getElementsByTagName tag or '\*'  
getElementsByClassName class

Возвращает статическую коллекцию

```javascript
document.querySelector(".element .link"); // возвращает первый элемент, соответствующий CSS-селектору
document.querySelectorAll(".element"); // возвращает все элементы внутри .element
document.getElementById("id-element"); // можно вызвать только для объекта document
```

Все методы "getElementsBy\*" возвращают живую коллекцию

```javascript
elem.getElementsByTagName(tag); // ищет элементы с данным тегом и возвращает их коллекцию
elem.getElementsByClassName(className); // возвращает элементы, которые имеют данный CSS-класс.
document.getElementsByName(name); // возвращает элементы с заданным атрибутом name
```

## DOM-элементам

Дочерние узлы (или дети) - элементы, которые являются непосредственными детьми узла  
Потомки - все элементы, которые лежат внутри данного, включая детей, их детей и т.д.

## Классы

```javascript
const element = document.querySelector(".element")
// вывести список классов
element.classList;
element.className;

// добавить класс
element.classList.add('class__1', 'calss__2';

// удалить класс
element.classList.remove('element');

//проверить наличие класс
element.classList.contains('element'); // true

// toggle
//Если класса нет добавить. Если есть удалить
element.classList.toggle('toggle');
```

## Атрибуты

```javascript
//Доступ к атрибутам
element.href;
element.id;

// Добавить атрибут
element.setAttribute('id', '1');

// Получить атрибут
element.getAttribute('title');

// Получение кастомных атрибутов
element.dataset);

// Проверить наличие атрибута
element.hasAttribute('id');

// Удаление атрибута
element.removeAttribute('id');
```

## Манипуляция DOM

insertAdjacentHTML() - определяет позицию добавляемого элемента относительно элемента
'beforebegin': до самого element (до открывающего тега).  
'afterbegin': сразу после открывающего тега element (перед первым потомком).  
'beforeend': сразу перед закрывающим тегом element (после последнего потомка).  
'afterend': после element (после закрывающего тега).

```javascript
element.insertAdjacentHTML("afterend", '<div id="1"> One </div>');
```

## Создать DOM элемент

```javascript
let span = document.createElement("span"); // создать тег
span.textContent = " text span test!!!!"; // добавить текст
span.classList.add("span__class"); // добавить класс
element.appendChild(span); // веести елемент в разметку
```

### Создание фрагмента и добовление узлов в DOM

```javascript
const fragment = document.createDocumentFragment();
let div = document.createElement("div");
div.textContent = "Какой-то текст для Дива";
div.classList.add("class__div");
div.style.background = "red";
div.style.border = "solid 4px blue";
div.style.margin = "20px";
fragment.appendChild(div);
```

## Событие

element.addEventListener(event, handler[, options]);

event - Имя события, например "click"  
clickHendler - Ссылка на функцию-обработчик  
options - Дополнительный объект со свойствами

```javascript
const clickHendler = (event) => {
  event.type; // Название события
  event.target; // Ссылка на целевой объект, на котором произошло событие
  event.timeStamp; // Время, когда событие было создано (в миллисекундах)

  event.preventDefault(); // отменяет дейсвие по умолчанию
  event.stopPropagation(); // Остановка распространения события далее по DOM.
};

element.addEventListener("click", clickHendler); // Повесить событие на element
element.removeEventListener("click", clickHendler); // Удалить событие
```
