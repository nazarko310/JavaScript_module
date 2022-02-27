// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function UserCreator(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new UserCreator(1, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(2, 'Masha', 'Petrin', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(3, 'Petro', 'Vozniuk', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(4, 'Katia', 'Malush', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(5, 'Karina', 'Jobden', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(6, 'Tom', 'Fredos', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(7, 'Dimas', 'Kofgre', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(8, 'Vika', 'Dfrefe', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(9, 'Nazar', 'Ffref', 'vasia@gmail.com', '+380688745331'),
//     new UserCreator(10, 'Igor', 'Efrefr', 'vasia@gmail.com', '+380688745331')
// ]

// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(value => value.id % 2 === 0));

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id - b.id));

//  // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//  // створити пустий масив, наповнити його 10 об'єктами Client
//
//  class Client {
//      constructor(id, name, surname, email, phone, order) {
//          this.id = id;
//          this.name = name;
//          this.surname = surname;
//          this.email = email;
//          this.phone = phone;
//          this.order = order;
//      }
//  }
//
//
//  let clients = [
//      new Client(1, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV']),
//      new Client(2, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop']),
//      new Client(3, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop', 'Laptop']),
//      new Client(4, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop', 'Laptop', 'Laptop']),
//      new Client(5, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop', 'Laptop', 'Laptop']),
//      new Client(6, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop', 'Laptop']),
//      new Client(7, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV', 'Laptop', 'Laptop']),
//      new Client(8, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV']),
//      new Client(9, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV']),
//      new Client(10, 'Vasia', 'Kalinin', 'vasia@gmail.com', '+380688745331', ['Nokia', 'Laptop', 'TV'])
// ]

// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// console.log(clients.sort((a, b) => a.order.length - b.order.length))