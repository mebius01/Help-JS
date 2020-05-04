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


/**
 

/**
 * Манипуляция DOM
 */


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
});

contLink.addEventListener('click', clickLinkHendler);
contDiv.addEventListener('click', clickDivHendler);