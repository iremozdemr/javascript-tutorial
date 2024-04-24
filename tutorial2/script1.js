let array1 = [];
let array2 = new Array();

let list = ["a",2,true,"a"];

console.log(list);
console.log(list.toString());
console.log(list.join("*"));

console.log(list.length);

console.log(list[0]);
console.log(list.at(0));

console.log(list.indexOf("a"));
console.log(list.indexOf("x"));
console.log(list.lastIndexOf("a"));
console.log(list.lastIndexOf("x"));

console.log(list.includes("a"));
console.log(list.includes(1+1));

let array = ["a","b","c","d","e"];

let newLength1 = array.push("f");
//sona element ekler
//yeni uzunluğu döner
let poppedElement = array.pop();
//sondan element siler
//silinen elementi döner
let shiftedElement = array.shift();
//ilk indexteki elementi siler ve diğerlerini kaydırır
//ilk elementi döner
let newLength2 = array.unshift("a");
//ilk indexe element ekler
//yeni uzunluğu döner 
console.log(newLength1);
console.log(poppedElement);
console.log(shiftedElement);
console.log(newLength2);