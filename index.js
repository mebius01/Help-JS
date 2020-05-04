// /**
//  * Работа с узлами потомками и родителями
//  */

// получить потомка
let menu = document.querySelector(".menu");
console.log(menu);
console.log(menu.firstChild);
console.log(menu.firstElementChild);

// получить родителя
let item = document.querySelector(".menu__item");
console.log(item);
console.log(item.parentElement);
console.log(item.parentNode);

// выбрать все элементы и вернуть массив из них
let link = document.querySelectorAll(".menu__link");
console.log(link);
console.log(Array.from(link));
console.log([...link]);

/**
 * Работа с классами
 */
// вывести список классов
console.log(menu.classList);
console.log(menu.className);

// добавить класс
menu.classList.add('class__1', 'calss__2');
console.log(menu.classList);

// удалить класс
menu.classList.remove('menu');
console.log(menu.classList);

//проверить наличие класс
console.log(menu.classList.contains('menu')); // false or true

// toggle
//Если класса нет добавить
menu.classList.toggle('toggle');
console.log(menu.classList);
// Если класс есть удалить
menu.classList.toggle('toggle');
console.log(menu.classList);

/**
 * Работа с Атрибутами
 */
let element = [...link][0];
//Доступ к атрибутам html
console.log(element.href);

// Добавить атрибут
element.setAttribute('id', '1');

// Получить атрибут
console.log(element.getAttribute('title'));

// Получение кастомных атрибутов
console.log(element.dataset);

// Проверить наличие атрибута
console.log(element.hasAttribute('id'));

// Удаление атрибута
element.removeAttribute('id');


/**
 * Манипуляция DOM
 */
let lorem3 = document.querySelector('.lorem3');
// lorem3.innerHTML = '<b>TEXT</b>';
// lorem3.textContent = 'text content';

// Добавить HTML в DOM 
// может принимать 4 параметра afterbegin afterend beforebegin
lorem3.insertAdjacentHTML('afterbegin', '<b>TEXT afterbegin</b>');
lorem3.insertAdjacentHTML('afterend', '<b>TEXT afterend</b>');
lorem3.insertAdjacentHTML('beforebegin', '<b>TEXT beforebegin</b>');
lorem3.insertAdjacentHTML('beforeend', '<b>TEXT beforeend</b>');

// Создать DOM элемент
let span = document.createElement('span'); // создать тег
span.textContent = ' text span test!!!!'; // добавить текст
span.classList.add('span__class'); // добавить класс
lorem3.appendChild(span); // веести елемент в разметку

// Создание фрагмента и добовление узлов в DOM
const fragment = document.createDocumentFragment();
const num = ['div 1', 'div 2', 'div 3', 'div 4'];
num.forEach((item) => {
    let div = document.createElement('div');
    div.textContent = item;
    div.classList.add('num');
    div.style.background = 'red';
    div.style.border = 'solid 4px blue';
    div.style.margin = '20px';
    fragment.appendChild(div);
});

// document.body.appendChild(fragment);


/**
 * Событие
 */

const btn = document.querySelector('.event__btn');
// addEventListener три аргумента событие, функцию и объект настройками
const clickHendler = (event) => {
    event.preventDefault(); // отменяет дейсвие по умолчанию
    console.log('CLICK link');
};

btn.addEventListener("click", clickHendler);

// удалить событие
btn.removeEventListener('click', clickHendler);

/**
 * Всплытие и погружение событие
 */

const contDiv = document.querySelector('.container');
const contLink = document.querySelector('.container__link');

const clickLinkHendler = (event) => {
    event.preventDefault(); // отменяет дейсвие по умолчанию
    // event.stopPropagation();
    console.log('CLICK link');
};

const clickDivHendler = (event) => {
    event.preventDefault(); // отменяет дейсвие по умолчанию
    // event.stopPropagation();
    console.log('CLICK Div');
};

document.body.addEventListener('click', event => {
    console.log('click body');
})

contLink.addEventListener('click', clickLinkHendler);
contDiv.addEventListener('click', clickDivHendler);