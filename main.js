// // - Дано натуральное число n. Выведите все числа от 1 до n.
// let number = +prompt('Введіть число');
//
// let func = (number) => {
//     for (let i = 1; i <= number; i++) {
//         console.log(i);
//
//     }
// }
//
// func(number);

// // - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// let a = +prompt('A');
// let b = +prompt('B');
//
// let func = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i>= b; i--) {
//             console.log(i);
//
//         }
//     }
// }
//
// func(a, b);

// // - Функція приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array = [0, 10, 2, 56];
//
// function permutationsFunction(array, i) {
//     let number = 0
//     let firstNumber = 0;
//
//     if (i === (array.length - 1)) {
//         firstNumber = array[0];
//         array[0] = array[i];
//         array[i] = firstNumber;
//     } else {
//         number = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = number;
//     }
//     console.log(array)
// }
//
// permutationsFunction(array, 0);

// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// let array = [0, 10, 0, 11];
//
// function zeroFunction(array) {
//     let arrayZero = [];
//     let arrayNew = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             arrayZero.push(array[i]);
//         }
//         if (array[i] !== 0) {
//             arrayNew.push(array[i]);
//         }
//     }
//     arrayNew = arrayNew.concat(arrayZero);
//     for (let j = 0; j < arrayNew.length; j++) {
//         console.log(arrayNew[j]);
//     }
//
// }
//
// zeroFunction(array);