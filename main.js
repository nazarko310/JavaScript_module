// // - Знайти та вивести довижину настипних стрінгових значень
//
// let stringOne = 'hello world'
// let stringTwo = 'lorem ipsum'
// let stringThree = 'javascript is cool'
//
// console.log(stringOne.length);
// console.log(stringTwo.length);
// console.log(stringThree.length);

// // Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let stringOne = 'hello world'
// let stringTwo = 'lorem ipsum'
// let stringThree = 'javascript is cool'
//
// console.log(stringTwo.toUpperCase());
// console.log(stringOne.toUpperCase());
// console.log(stringThree.toUpperCase());

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
//
// let stringOne = 'HELLO WORLD'
// let stringTwo = 'LOREM IPSUM'
// let stringThree = 'JAVASCRIPT IS COOL'
//
// console.log(stringOne.toLowerCase());
// console.log(stringTwo.toLowerCase());
// console.log(stringThree.toLowerCase());

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
//
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Каждый охотник желает знать';
// // let arr = stringToarray(str);
// // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (str) => {
//     document.writeln(str.split(' '));
// }
//
// stringToArray(str);

// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
//
// let length = +prompt('Введіть ширину');
//
// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         if (arrElement.length === length) {
//             document.writeln(arrElement);
//         }else {
//            console.log('oops')
//         }
//
//     }
// }
//
// delete_characters(str, length);

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //     let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     document.writeln(str.split(' ').join('-').toUpperCase());
// }
// insert_dash(str);

 // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

 let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit';

 let funcToUpperCase = (str) => {
     console.log(str.charAt(0).toUpperCase());

 }

 funcToUpperCase(str);

// // Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit';
//
// let capitalize = (str) => {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         let firstLetter = arr[i].charAt(0).toUpperCase();
//         let newStr = arr[i].replace(arr[i].charAt(0), firstLetter);
//         console.log(newStr.join(''))
//
//     }
// }
//
// capitalize(str)