// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.!!!!!!
//
// function createSentence(stringOne, stringTwo, stringThree) {
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length === 1) {
//             console.log(arguments);
//         } else {
//
//         }
//     }
// }
//
// createSentence('One', 'Two', 'three');

// // створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
//
// let arrayOne = [1, 2, 3, 4];
// let arrayTwo = [2, 3, 4, 5];
//
// function createArray(arrayOne, arrayTwo) {
//     let arrayNew = [];
//
//     for (let i = 0; i < arrayOne.length; i++) {
//         for (let j = 0; j < arrayTwo.length; j++) {
//             if (i === j) {
//                 arrayNew.push(arrayOne[i] + arrayTwo[i]);
//             }
//         }
//     }
//     console.log(arrayNew);
// }
//
// createArray(arrayOne, arrayTwo);

// // Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let data = [{
//     name: 'Dimas',
//     age: '13'
// },
//     {
//         model: 'Camry'
//     }
// ]
//
// function logObject(data) {
//     for (const element of data) {
//         console.log(Object.keys(element));
//     }
// }
//
// logObject(data);
//

// // Cтворити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// let data = [
//     {
//         name: 'Dimas',
//         age: '13'
//     },
//     {
//         model: 'Camry'
//     }
// ]
//
// function logObject(data) {
//
//     for (const element of data) {
//
//         console.log(Object.values(element));
//     }
// }
//
// logObject(data);
