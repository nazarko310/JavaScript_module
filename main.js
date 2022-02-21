// // - Дано список імен.
// //     let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//
// let n1 = 'Harry..Potter'
//
// let funcGenerateName = (n1) => {
//     let newArray = [];
//     let arr1 = n1.trim().split('.');
//     for (let i = 0; i < arr1.length; i++) {
//         const arr1Element = arr1[i];
//         if (arr1Element !== "") {
//             newArray.push(arr1Element);
//         }
//     }
//     return newArray.join(' ')
//
// }
//
// console.log(funcGenerateName(n1));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let funcSGenerate = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//     return array;
//
// }
// const newArray = funcSGenerate();

// // створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// newArray.sort((a, b) => a - b)
// console.log(newArray)

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// console.log(newArray.filter(number => number % 2 === 0));

// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// newArray.map(number => console.log(number.toString()));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
//
// let nums = [11, 21, 3];
//
// let direction = prompt('Write direction');
//
// let funcSort = (nums, direction) => {
//     if (direction === 'ascending') {
//        return  nums.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//        return  nums.sort((a, b) => b - a);
//
//     }else {
//         return 'direction is not used'
//     }
// }
//
// console.log(funcSort(nums, direction));

// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let newSortObj = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
//
// console.log(newSortObj);
//
// let filterNewObj = coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// console.log(filterNewObj);
