// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// // {
// //     id: 1,
// //         name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //     street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: {
// //         lat: '-37.3159',
// //             lng: '81.1496'
// //     }
// // },
// //     phone: '1-770-736-8031 x56442',
// //         website: 'hildegard.org',
// //     company: {
// //     name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// // }
// // }
//
// class Address {
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
//
// class Geo {
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
//
// class Company {
//     constructor(name, catchPhrase, bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// class User {
//
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new Geo('-37.3159', '81.1496')),
//     '1-770-736-8031 x56442', 'hildegard.org', new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'))
// console.log(user)

// // -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// //     -назва тегу ()
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту
// // інформацію брати з htmlbook.ru
// //
// // Таким чином описати теги
// // -a
// // -div
// // -h1
// // -span
// // -input
// // -form
// // -option
// // -select
// // Приклад результуючого об'єкту
// // {
// //     titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //     attrs: [
// //     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //     {/*some props and values*/},
// //     {/*...*/},
// //     {/*...*/},
// // ]
// //
// // }
//
// class Tag {
//
//     constructor(name, action, attrs) {
//         this.name = name;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
//
// class Attribute {
//
//     constructor(titleOfAttr, actionOfAttr) {
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;
//     }
//
// }
//
//
// let tags = [
//     new Tag('a', 'Створює посилання або якорь',
//         [new Attribute('href', 'Задає адресу документа, на який слід перейти'),
//             new Attribute('rel', 'Відносини між посилаються і поточним документами'),
//             new Attribute('type', 'Вказує MIME-тип документа, на який веде посилання')
//         ]),
//     new Tag('div', 'Блоковий елемент і призначений для виділення фрагмента документа з метою зміни виду вмісту',
//         [
//             new Attribute('align', 'Задає вирівнювання вмісту тега div'),
//             new Attribute('title', 'Додає підказку до вмісту')
//         ]),
//     new Tag('h1', 'Найбільш важливий заголовок першого рівня', new Attribute('align', 'Визначає вирівнювання заголовка')),
//     new Tag('span', 'Призначений для визначення малих елементів документа', new Attribute('-', 'Для цього тега доступні універсальні атрибути і події')),
//     new Tag('input', 'Дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем',
//         [
//             new Attribute('type', 'Повідомляє браузеру, до якого типу належить елемент форми'),
//             new Attribute('name', 'Ім`я поля, призначене для того, щоб обробник форми міг його ідентифікувати'),
//             new Attribute('value', 'Значення елемента'),
//         ]),
//     new Tag('form', 'Встановлює форму на веб-сторінці', [
//         new Attribute('method', 'Метод протоколу HTTP'),
//         new Attribute('action', 'Адреса програми або документа, який обробляє дані форми')
//     ]),
//     new Tag('option', 'Визначає окремі пункти списку, що створюється за допомогою контейнера',[
//         new Attribute('label', 'Вказівка мітки пункту списку'),
//         new Attribute('selected', 'Заздалегідь встановлює певний пункт списку виділеним')
//     ]),
//     new Tag('select', 'Дозволяє створити елемент інтерфейсу у вигляді списку',[
//         new Attribute('size', 'Кількість відображуваних рядків списку'),
//         new Attribute('name', 'Ім`я елемента для відправки на сервер або звернення через скрипти')
//     ])
//
// ]
// console.log(tags)