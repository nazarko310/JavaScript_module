// // 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let array = [];
// for (const i = 0; i < 11; i++) {
//     let number = Math.floor(Math.random() * 11);
//     array.push(number)
//
// }
// console.log(array)
// let sum = 0
// for (const j = 0; j < array.length; j++) {
//     sum += array[j]
//
// }
// console.log(sum)

// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// const book = {
//     name: 'Witcher',
//     countOfPage: 80,
//     genre: 'fantasy'
// }

//
// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//
// const book = {
//     name: 'Witcher',
//     countOfPage:80,
//     genre: 'fantasy',
//     authors: 'Andjei Sapkowski'
// }

// // 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
// let books = [
//     {
//         name: 'Witcher',
//         countOfPage: 80,
//         genre: 'fantasy',
//         authors: 'Andjei Sapkowski'
//     },
//     {
//         name: 'Witcher',
//         countOfPage: 80,
//         genre: 'fantasy',
//         authors: 'Andjei Sapkowski'
//     },
//     {
//         name: 'Witcher',
//         countOfPage: 80,
//         genre: 'fantasy',
//         authors: 'Andjei Sapkowski'
//     }
// ]
//
// for (const book of books) {
//     console.log(book)
// }

//
// // 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let s = width * height;
// console.log(`Площа прямокутна рівна ${s} см`)

// // 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // результат помістіть у змінну v.
//
// let h = 10;
// let d = 4;
//
// let v = 3.14 * Math.pow((d / 2), 2) * h;
//
// console.log(`Об'єм цилідра рівни ${Math.round(v)} м`);

// // 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// // Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
// let n = 3;
// let m = 4;
//
// let c = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
//
// console.log(`Гіпотенуза рівна ${c}`);