let localData1 = localStorage.getItem('item1');
let tovars = '';
if (localData1 == null) {
    tovars = 'Не выбрано'
}
else {
    let arrayOfStrings1 = localData1.split(',')
    for (var i = 0; i < arrayOfStrings1.length; i++) {
        tovars +=`<li>${arrayOfStrings1[i]}</li>`;
    }
}
document.querySelector('.tovar-list').innerHTML = tovars;
