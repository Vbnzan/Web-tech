"use strict";
let numberOfVictims = 0 //Обьявили глобальную переменную


function virus() {
  alert( 'Здравствуйте, я молдавский вирус. По причине ужасной бедности моего создателя и низкого уровня развития технологий в нашей стране я не способен причинить какой-либо вред Вашему компьютеру. Поэтому очень прошу Вас, пожалуйста, сами сотрите какой-нибудь важный для Вас файл, а потом разошлите меня по почте другим адресатам. Заранее благодарю за понимание и сотрудничество.' );
  numberOfVictims += 1;
}

{
	var a = 1
	let b = 2
	console.log("Мы внутри \n a = %d \n b = %d", a, b);
}
console.log("Мы снаружи \n a = %d (вытекло)", a);

try{
	console.log("b:%d", b);
}
catch(error){
	console.log("%s (b не вытекло)", error.name);
}

{
	let a = 1;
	let b = '1';
	console.log("a==b? - %s", a==b);
	console.log("a===b? - %s", a===b);
}


//тут сразу пункты 4,5,8
{
	let arr = ['1', 42, Math, ,virus];
	for(let i of arr){
		console.log("%s \n", typeof(i));
	}
}

{
	console.log("Молдавский вирус уже заразил %d компьютеров! Мухаха", numberOfVictims);
}

{
	let summ = (a,b) => (a+b);
	console.log("%d", summ(1,3));
	console.log("%s", summ("одно ","яблоко"));
}

{
	console.log("%d", Math.sqrt(4));
	console.log("%d", Math.sqrt(144));
}
