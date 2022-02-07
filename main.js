// // 1. Створити пустий масив та :
// //     a. заповнити його 50 парними числами за допомоги циклу.
// //     b. заповнити його 50 непарними числами за допомоги циклу.
// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
//
// let array = [];
//
// // a. заповнити його 50 парними числами за допомоги циклу.
// // for (let i = 0; i < 50; i++) {
// //     array[0] = 2;
// //     array[i+1] = array[i] + 2
// //     console.log(array[i])
// // }
//
// // // b. заповнити його 50 непарними числами за допомоги циклу.
// //
// // for (let i = 0; i < 50; i++) {
// //     array[0] = 1;
// //     array[i+1] = array[i] + 2
// //     console.log(array[i])
// // }
//
// // // Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// //
// // for (let i = 0; i < 20; i++) {
// //     let arrayElement = array[i];
// //
// //     arrayElement = Math.floor(Math.random() * 10)
// //     console.log(arrayElement)
// //
// // }
//
// // // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// //
// // for (let i = 0; i < 20; i++) {
// //     let arrayElement = array[i];
// //
// //     arrayElement = Math.floor(Math.random() * (732 - 8))
// //     console.log(arrayElement)
// //
// // }

// let array = []

// // 2. Вивести за допомогою console.log кожен третій елемен
//
// for (let i = 0; i < 20; i++) {
//     let arrayElement = array[i];
//
//     arrayElement = Math.floor(Math.random() * 10)
//
//     if (i % 3 === 0) {
//         console.log(arrayElement);
//     }
//
// }

// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
// for (let i = 0; i < 20; i++) {
//     let arrayElement = array[i];
//
//     arrayElement = Math.floor(Math.random() * 10)
//
//     if ((i % 3 === 0) && (arrayElement % 2 === 0)) {
//         console.log(arrayElement);
//     }
//
// }

// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArray = [];
// for (let i = 1; i < 21; i++) {
//     let arrayElement = array[i];
//
//     arrayElement = Math.floor(Math.random() * 10) + 1
//
//     if ((i % 3 === 0) && (arrayElement % 2 === 0)) {
//         newArray.push(arrayElement);
//     }
//
// }
// console.log(newArray)

// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < array.length; i++) {
//     // const arrayElement = array[i];
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// // Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//
// }
//     let average = sum / array.length;
//     console.log(average)

// // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = []
// let arrayNew = []
// for (let i = 0; i < 5; i++) {
//     let arrayElement = array[i];
//
//     arrayElement = Math.floor(Math.random() * 10) + 1
//
//     arrayNew.push(arrayElement * 5);
//
// }
//     console.log(arrayNew)

// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let array = ['string', 2, 3, 'string', true, 'string', 484];
// let arrayNew = [];
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//
//     if (typeof arrayElement === "number") {
//         arrayNew.push(arrayElement);
//     }
//
// }
// console.log(arrayNew)

// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false },
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const userWithId = usersWithId[i];
//     usersWithCities.push(userWithId);
//     for (let k = 0; k < usersWithCities.length; k++) {
//         let userWithCity = usersWithCities[k];
//         for (let j = 0; j < citiesWithId.length; j++) {
//             let cityWithId = citiesWithId[j];
//             if (userWithCity.id === cityWithId.user_id) {
//                 userWithCity.address = cityWithId;
//
//             }
//         }
//     }
// }
//
// console.log(usersWithCities)

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (arrayElement % 2 === 0) {
//         console.log(arrayElement);
//     }
//
// }

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//
// let arrayNew = [];
//
// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i];
//     arrayNew.push(arrayElement);
// }
// console.log(arrayNew);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     str += arrayElement;
// }
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
//
// let str = '';
//
// let i = 0;
// while (i < array.length) {
//     str += array[i];
//     i++;
// }
// console.log(str);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let array = ['a', 'b', 'c'];
// let str = '';
//
// for (const arrayElement of array) {
//     str += arrayElement;
//
// }
// console.log(str);