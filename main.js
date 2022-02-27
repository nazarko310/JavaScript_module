// // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Driver(name, point, experience) {
//     this.name = name;
//     this.point = point;
//     this.experience = experience;
// }
//
// function Car(model, producer, year, maxSpeed) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.driver = [];
//
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${maxSpeed} км на годин`);
//     }
//     this.info = () => {
//         console.log(`Модель - ${model}, Виробник - ${producer}, Рік виробництва - ${year}`);
//     }
//     this.increaseMaxSpeed = (newSpeed) => {
//         if (newSpeed < 0 || newSpeed < this.maxSpeed) {
//             alert('!!!!!!!!');
//         } else {
//             this.maxSpeed = newSpeed;
//         }
//     }
//     this.changeYear = (newValue) => {
//         if (newValue < 1980) {
//             console.log('It`s very old car');
//         } else {
//             this.year = newValue;
//         }
//     }
//
//     this.addDriver = (name, point, experience) => {
//         this.driver.push(new Driver(name, point, experience))
//     }
//
// }

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Driver {
//
//     constructor(name, point, experience) {
//         this.name = name;
//         this.point = point;
//         this.experience = experience;
//     }
// }
//
// class Class {
//     constructor(model, producer, year, maxSpeed) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.driver = [];
//     }
//
//     drive = () => {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info = () => {
//         console.log(`Модель - ${this.model}, Вирбник - ${this.producer}, Рік випуску - ${this.year}`)
//     }
//
//     increaseMaxSpeed = (newSpeed) => {
//         if (newSpeed < 0 || newSpeed < this.maxSpeed) {
//             console.log('!!!!!!');
//         } else {
//             this.maxSpeed = newSpeed;
//
//         }
//     }
//
//     changeYear = (newYear) => {
//         if (newYear < 1990) {
//             console.log('This car is very old');
//         } else {
//             this.year = newYear;
//         }
//     }
//
//     addDriver = (name, point, experience) => {
//         this.driver.push(new Driver(name, point, experience))
//     }
// }

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
//
//
// class Cinderellas {
//
//     constructor(name, age, sizeOfFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfFoot = sizeOfFoot;
//     }
// }
//
// class Prince {
//
//     constructor(name, age, footIfFind) {
//         this.name = name;
//         this.age = age;
//         this.footIfFind = footIfFind;
//     }
// }
//
// let cinderellas = [
//     new Cinderellas('cinderellas1', 10, 12),
//     new Cinderellas('cinderellas2', 12, 14),
//     new Cinderellas('cinderellas3', 14, 16),
//     new Cinderellas('cinderellas4', 11, 13),
//     new Cinderellas('cinderellas5', 14, 11),
//     new Cinderellas('cinderellas6', 16, 9),
//     new Cinderellas('cinderellas7', 11, 15),
//     new Cinderellas('cinderellas8', 12, 14),
//     new Cinderellas('cinderellas9', 13, 13),
//     new Cinderellas('cinderellas10', 10, 10)
// ];
//
// let prince = new Prince('prince', 10, 10);
//
// for (let i = 0; i < cinderellas.length; i++) {
//     const cinderella = cinderellas[i];
//     if (cinderella.sizeOfFoot === prince.footIfFind) {
//         console.log(cinderella);
//     }
// }

// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// console.log(cinderellas.find(value => value.sizeOfFoot === prince.footIfFind));;