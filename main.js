// // a) додає клас з назвою групи, елементу з ід main_header
//
// let mainHeader = document.getElementById('main_header');
//
// mainHeader.classList.add('dec-2021');

// // b) робить шириниу елементу ul 400px
//
// let ulTagName = document.getElementsByTagName('ul');
//
// for (let i = 0; i < ulTagName.length; i++) {
//     const ulTagNameElement = ulTagName[i];
//
//     ulTagNameElement.style.width = '400px';
//
// }

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkListElements = document.getElementsByClassName('linkList');
//
// for (let i = 0; i < linkListElements.length; i++) {
//     const linkListElement = linkListElements[i];
//
//     linkListElement.style.width = '50%';
//
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let listElementTwo = document.getElementsByClassName('listElement2');
//
// for (let i = 0; i < listElementTwo.length; i++) {
//     console.log(listElementTwo[i].innerText);
//
// }

// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
//
// let li = document.getElementsByTagName("li");
//
// for (let i = 0; i < li.length; i++) {
//     const liElement = li[i];
//     liElement.style.backgroundColor = 'gray';
// }

// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let a = document.getElementsByTagName('a');
//
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
//
//     aElement.classList.add('anchor');
// }

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let a = document.getElementsByTagName('a');
//
// for (let i = 0; i < a.length; i++) {
//     const aElement = a[i];
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
//  let a = document.getElementsByTagName('a');
//
//  for (let i = 0; i < a.length; i++) {
//      const aElement = a[i];
//
//      aElement.classList.add(`element__${aElement.innerText}`)
//
//  }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let bgColor = prompt('Введіть колір фону');
//
// let subHeader = document.getElementsByClassName('sub-header');
//
// for (let i = 0; i < subHeader.length; i++) {
//     const subHeaderElement = subHeader[i];
//
//     subHeaderElement.style.backgroundColor = bgColor;
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let bgColor = prompt('Введіть колір фону');
//
// let subHeader = document.getElementsByClassName('sub-header');
//
// for (let i = 0; i < subHeader.length; i++) {
//     const subHeaderElement = subHeader[i];
//
//     if (subHeaderElement.innerText === 'content 2 segment') {
//         subHeaderElement.style.backgroundColor = bgColor;
//     }
//
// }

// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let text = prompt('Введіть текст');
//
// let contentOne = document.getElementsByClassName('content_1');
//
// for (let i = 0; i < contentOne.length; i++) {
//     const contentOneElement = contentOne[i];
//
//     contentOneElement.innerText = text;
// }

// // l) отримати елементи p та змінити їм padding на 20px
//
// let textP = document.getElementsByTagName('p');
//
// for (let i = 0; i < textP.length; i++) {
//     const textPElement = textP[i];
//
//     textPElement.style.padding = '20px';
// }

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let textTwo = document.getElementsByClassName('text2');
//
//  for (let i = 0; i < textTwo.length; i++) {
//      const textTwoElement = textTwo[i];
//
//      textTwoElement.innerText = 'dec-2021';
//  }

