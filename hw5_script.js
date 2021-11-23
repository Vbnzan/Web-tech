"use strict"
console.log("Started");

//Это для красоты
let numberOfVictims = 0 //Обьявили глобальную переменную

function virus() {
  alert( 'Здравствуйте, я молдавский вирус. По причине ужасной бедности моего создателя и низкого уровня развития технологий в нашей стране я не способен причинить какой-либо вред Вашему компьютеру. Поэтому очень прошу Вас, пожалуйста, сами сотрите какой-нибудь важный для Вас файл, а потом разошлите меня по почте другим адресатам. Заранее благодарю за понимание и сотрудничество.' );
  numberOfVictims += 1;
}

//Задание:

class Bibki {
  constructor(N) {
    this.a = 5+N;
    this.name = "bibki";
  }
  what(N) {
    this.a -= N;
    console.log(this.a + " " +this.name);    
  }
  when(){return "always!"}
}

{
let e = new Bibki(4);
e.what(3);
console.log(e.when());
}

{
let protomassiv = ["1", 37, 2344];
let massiv = Object.create(protomassiv);
console.log(massiv.length);
console.log(massiv); //Содержимое пропало, а длина осталась прежней, прикольно
massiv.push("v");
console.log(massiv.length);
console.log(massiv);

//пункт 2

let proto_n = {
  isElementaryPartisiple: true}


Object.setPrototypeOf(massiv,proto_n);
console.log(massiv.length); //все еще работает
console.log(massiv.isElementaryPartisiple);
console.log(Object.getPrototypeOf(massiv) === proto_n);
} 

//пункт 3
class Sepulki extends Bibki {
  when() {
    if(this.a == 5) {return "Not today"}
    else {return super.when()};
  }
}

{
  let e = new Sepulki(0);
  console.log(e.when());
  let a = new Sepulki(1);
  console.log(a.when());
}

//пункт 4
    {
      let p = {};
    
      Object.defineProperty(p, 'pp', {
        value: 420,
        enumerable: false,
        configurable: true,
        writable: true
      });
    
      console.log(p.pp);


      Object.defineProperty(p, 'unchangable', {
        value: 1488,
        writable: false
      });

      try {p.unchangable = 420}
      catch(error)
      {console.log(error.name)}
      console.log(p.unchangable);

      Object.defineProperty(p, 'TrulyUnchangable', {
        set: function(value) {
          console.log("Ты што это делаешь???");
          console.log("Я ЗАПРЕЩАЮ менять это свойство!");
        }
      });

      p.TrulyUnchangable = 1;
      console.log(p.TrulyUnchangable);
    }

//пункт 5
{
  let e = new Sepulki(0);
  try {e.length()}
  catch(error) {console.log(error.name)}
}
//пункт 6
{
let a = "asdf";
String.prototype.lenSquaredPlus = function(value) {
  return this.length * this.length + value
}
console.log(a.lenSquaredPlus(0));
}

//пункт 7
{
let Mixin = { 
  spam() {for (var i = 0; i < 100; i++) {console.log(this.name)}}
}

Object.assign(Bibki.prototype, Mixin);
new Bibki(0).spam();
}
{
class Ssss {
  #b = 42;
  constructor(a) 
  {
      this._a = a;
  }
  change(n) {this._a += n * this.#b}
  get a () {return this._a}
}
let S = new Ssss(0);
S.change(3);
console.log(S.a);

}