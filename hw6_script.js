//Рядом с каждым заданием номер строки, где оно выполнено
//Создать элемент, 21
//удалить элемент, 25
//навигация по дереву, 23-24 
//работа с атрибутом тега, 28 
//использование переменной arguments 39
//Cписок вложенных элементов 25
//последний узел 24
//следующий элемент 25
//вставка перед элементом 24
//поиск элемента по селектору 23
//переключение класса 29
//клавиатура 34
//capture/bubble phase 37
//предотвращение стандартного действия 38
//active/passive event 34
//add event 34
//remove event 35

function start() {
let newEl = document.createElement("p");
newEl.textContent = "Новый элемент";
let art = document.querySelector("article");
art.insertBefore(newEl, art.lastChild);
art.removeChild(art.children[1].nextElementSibling);

let p = document.querySelector("p");
p.setAttribute("align", "center");
p.classList.toggle("fff")



inp = document.querySelector("input");
inp.addEventListener('keypress', counter, passive = true);
inp.removeEventListener('keypress', counter, passive = true);

inp.parentNode.addEventListener('keypress', function(event) {
						event.preventDefault();
						console.log(arguments);
					}, capture = true);
}

function counter(){
	count = document.getElementById("counter");
	let a = Number(count.textContent);
	count.textContent = a+1;
}