// 1) В html создать 12 div
// 2) С помощью js найти эти div
// 3) Всем четным div добавить текст "Я четный элемент №(добавить сюда номер по порядку)"
// 4) Всем нечетным div добавить текст "Я нечетный элемент №(добавить сюда номер по порядку)"

var divLists = document.body.getElementsByTagName('div');

for (i = divLists.length - 1; i >= 0; i--){
    var count = i + 1;
    if(i%2){
        divLists[i].innerText = 'Я четный элемент №' + count / 2;
    } else {
        divLists[i].innerText = 'Я нечетный элемент №' + (count + 1) / 2;
    }
}

console.dir(divLists);