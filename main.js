// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


function findClass() {
    let newArray = [];
    let querySelector = document.querySelectorAll('body *');
    for (let i = 0; i < querySelector.length; i++) {
        const classList = querySelector[i].classList
        if (classList != '') {
            for (let j = 0; j < classList.length; j++) {
                const classListElement = classList[j];
                    newArray.push(classListElement);
            }
        }
    }
    console.log(newArray);
}

findClass();
