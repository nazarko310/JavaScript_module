// // - створити функцію яка обчислює та повертає площу прямокутника
//
// let a = prompt('Введіть першу сторону')
// let b = prompt('Введіть другу сторону')
//
// let square = (a, b) => a * b;
//
// console.log(square(a, b));

// // - створити функцію яка обчислює та повертає площу кола
//
// let r = +prompt('Введіть радіус');
//
// let squareCircle = (r) => r * 3.14
//
// console.log(squareCircle(r));

// // - створити функцію яка обчислює та повертає площу циліндру
//
// let h = +prompt('Введіть висоту');
// let r = +prompt('Введіть радіус');
//
// let squareCylinder = (h, r) => 2 * 3.14 * h * r;
//
// console.log(squareCylinder(h, r));

// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [1, 2, 3, 4, 5, 6];
//
// let arr = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// }
//
// arr(array);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur ea eius et ex fugiat inventore iste nam, reprehenderit, sequi suscipit, voluptates. Amet aperiam eligendi exercitationem molestias nemo quo reprehenderit.'
//
// let createParagraph = (p) => document.write(`<p>${p}</p>`);
//
// createParagraph(paragraph);

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let li = 'item';
//
// let createItem = (li) => {
//     document.write('<ul>');
//
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${li}</li>`);
//
//     }
//
//     document.write('</ul>');
//
// }
//
// createItem(li);

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let count = +prompt('Введіть к-сть елементів списку');
//
// let createItem = (text, count) => {
//     document.write('<ul>');
//
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//
//
//     }
//
//     document.write('</ul>')
// }
//
// createItem('item', count);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [1, 'Maks', true, 3, 6, 34243, 'Nazar', false];
//
// let createArrayItem = (array) => {
//     document.write('<ul>');
//
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         document.write(`<li>${arrayElement}</li>`);
//
//     }
//
//     document.write('</ul>');
// }
//
// createArrayItem(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//
// let users = [
//     {
//         id: 1,
//         name: 'Nazar',
//         age: 21
//
//     },
//     {
//         id: 2,
//         name: 'Maks',
//         age: 35
//
//     },
//     {
//         id: 3,
//         name: 'Dimas',
//         age: 10
//
//     },
//     {
//         id: 4,
//         name: 'Karina',
//         age: 15
//
//     },
// ]
//
//
// let userCreator = (obj) => {
//     document.write(`<div>`);
//
//     for (const objElement of obj) {
//         document.write('<div>');
//         document.write(`<h1>${objElement.name} №${objElement.id}</h1>`)
//         document.write(`<p>${objElement.age}</p>`);
//         document.write('</div>');
//     }
//
//     document.write(`</div>`);
//
// }
//
// userCreator(users);