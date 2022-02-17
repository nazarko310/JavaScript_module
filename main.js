// // створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numberOne = +prompt('Введіть перше число');
// let numberTwo = +prompt('Введіть друге число');
// let numberThree = +prompt('Введіть третє число');
//
// let createMinNumber = (numberOne, numberTwo, numberThree) => {
//     if (numberOne < numberTwo && numberOne < numberThree) {
//         console.log(numberOne);
//     } else if (numberTwo < numberOne && numberTwo < numberThree) {
//         console.log(numberTwo);
//     } else {
//         console.log(numberThree);
//     }
//
// }
//
// createMinNumber(numberOne, numberTwo, numberThree);

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numberOne = +prompt('Введіть перше число');
// let numberTwo = +prompt('Введіть друге число');
// let numberThree = +prompt('Введіть третє число');
//
// let createMaxNumber = (numberOne, numberTwo, numberThree) => {
//     if (numberOne > numberTwo && numberOne > numberThree) {
//         console.log(numberOne);
//     } else if (numberTwo > numberOne && numberTwo > numberThree) {
//         console.log(numberTwo);
//     } else {
//         console.log(numberThree);
//     }
//
// }
//
// createMaxNumber(numberOne, numberTwo, numberThree);

// // - створити функцію яка повертає найбільше число з масиву
//
// let array = [1, 324, 4534, 6757, 453];
//
// let arrayCreateMax = (array) => Math.max.apply(null, array)
//
// console.log(arrayCreateMax(array));

// // - створити функцію яка повертає найменьше число з масиву
//
// let array = [1, 324, 4534, 6757, 453];
//
// let arrayCreateMin = (array) => (Math.min.apply(null, array))
//
// console.log(arrayCreateMin(array));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 324, 4534, 6757, 453];
// let sum = 0;
//
// let arraySum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// console.log(arraySum(array));

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let array = [1, 324, 4534, 6757, 453];
// let sum = 0;
// let average;
//
// let createArrayAverage = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         average = sum / arr.length;
//     }
//     return average;
// }
//
// console.log(createArrayAverage(array));

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let array = [489498, 5894, 4849, 4478, 2326, 484, 484, 468];
//
// let arrayMaxMin = (array) => {
//     let min = array[0];
//     let max = min;
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i];
//         }
//         if (min > array[i]) {
//             min = array[i];
//         }
//
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(arrayMaxMin(array));

// // - створити функцію яка заповнює масив рандомними числами
// let array = [];
//
// let createArray = (arr) => {
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random() * 100))
//
//     }
//     console.log(arr)
// }
//
// createArray(array);

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let limit = +prompt('введіть ліміт');
//
// let array = [];
//
// let createArray = (arr) => {
//     for (let i = 0; i < limit; i++) {
//         arr.push(Math.round(Math.random() * 100))
//
//     }
//     console.log(arr)
// }
//
// createArray(array);

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let array = [1, 2, 3];
//
// let reverseArray = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//
//     }
// }
//
// reverseArray(array);