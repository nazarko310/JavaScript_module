// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
//
//
// let array = [1, 2, 3, 4, 5];
// console.log(array);
//
// let arrayOne = ['Vitaliy', 'Karina', 'Masha', 'Maks', 'Dimas'];
// console.log(arrayOne);
//
// let arrayTwo = ['Vitaliy', 'Karina', 1, 'Masha', 55, 'Maks', 'Dimas', 648, 48, true, false, 489, 484];
// console.log(arrayTwo);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array = [];
//
// array[0] = 2;
// array[1] = 'Vasia';
// array[2] = true;
// array[3] = 'Maks';
//
// console.log(array)

//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hallo world</div>')
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>Hello I'm № ${i}</div>`)
//
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 1;
// while (i < 21) {
//     document.write(`<h1>Hello</h1>`)
//     i++;
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 1;
// while (i < 21) {
//     document.write(`<h1>Hello № ${i}</h1>`)
//     i++;
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
//
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = ['Vasia', 'Katia', 'Petro', 'Bart', 'Karina', 'Dimas', 'Nazar', 'Vitaliy', 'Masha', 'Marta'];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
//
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array = ['Vasia', 1, 'Petro', 'Bart', true, 435, false, 'Vitaliy', 'Masha', 10];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
//
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let array = ['Vasia', 1, 'Petro', 'Bart', true, 435, false, 'Vitaliy', 'Masha', 10];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//
//     if (typeof arrayElement === "boolean") {
//         console.log(arrayElement);
//     }
//
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let array = ['Vasia', 1, 'Petro', 'Bart', true, 435, false, 'Vitaliy', 'Masha', 10];
//
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//
//     if (typeof arrayElement === "number") {
//         console.log(arrayElement);
//     }
//
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let array = ['Vasia', 1, 'Petro', 'Bart', true, 435, false, 'Vitaliy', 'Masha', 10];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//
//     if (typeof arrayElement === "string") {
//         console.log(arrayElement);
//     }
//
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let array = [];
//
// array[0] = 1;
// array[1] = true;
// array[2] = 'Vasia';
// array[3] = 'Katia';
// array[4] = 4535;
// array[5] = 67575;
// array[6] = 'Karina';
// array[7] = false;
// array[8] = 489;
// array[9] = 'Dima';
// array[10] = 'Masha';
//
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement);
//
// }

// // Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     document.write(`<div>${i}</div>`);
//     console.log(i);
//
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//
// }

// // Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 1; i < 101; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//
// }