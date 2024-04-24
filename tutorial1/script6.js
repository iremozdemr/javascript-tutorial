let user;
console.log(user ?? "anonymous");
//user null ise anonymous yazar
//user undefined ise anonymous yazar

let firstName;
let lastName;
let userName;
console.log(firstName ?? lastName ?? userName ?? "anonymous");

let a;
let b;
let c = 2;
console.log(a ?? b ?? c ?? "null");
console.log(a ?? b ?? c);

let x = 0;
let y = 100;
console.log(x ?? y); //0
console.log(x || y); //100
//?? sıfırı değer olarak kabul eder
//|| sıfırı değer olarak kabul etmez