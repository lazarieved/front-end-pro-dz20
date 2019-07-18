// 1) В html создать 12 div
// 2) С помощью js найти эти div
// 3) Всем четным div добавить текст "Я четный элемент №(добавить сюда номер по порядку)"
// 4) Всем нечетным div добавить текст "Я нечетный элемент №(добавить сюда номер по порядку)"

for (var i=1; i<=12; i++){
    var count = i;
    if(!(i%2)){
        var newDiv=document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.innerText = 'Я четный элемент №' + count;
    } else {
        var newDiv=document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.innerText = 'Я нечетный элемент №' + count;
    }
}

var searchDivs = document.body.getElementsByTagName('div');

console.dir(searchDivs);
