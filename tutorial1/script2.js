console.log(1/0);
//infinity
console.log(Infinity);
//infinity
console.log("hello"/2);
//nan
console.log(NaN);
//nan
console.log(NaN+1);
//nan
console.log(NaN*3);
//nan
console.log(NaN**0);
//1

let number = 1234567890123456789012345678901234567890n;
//sayının sonuna n eklenirse
//type=bigint olur

let variable1 = "hello";
let variable2 = 'hello';
let variable3 = `hello`;
//string tanımlamanın 3 yolu

let string1 = "username";
let string2 = `hello ${string1}`;
let string3 = `hello ${1+2}`;
console.log(string1);
console.log(string2);
console.log(string3);
//embedding işlemi için backticks kullanılmalıdır

let booleanvalue1 = true;
let booleanvalue2 = false;

let nullvalue = null;
console.log(nullvalue);

let undefinedvalue1;
let undefinedvalue2 = undefined;
console.log(undefinedvalue1);
console.log(undefinedvalue2);

console.log(typeof NaN);            //number
console.log(typeof null);           //object
console.log(typeof undefined);      //undefined 
console.log(typeof alert);          //function
console.log(typeof Math);           //object
console.log(typeof Symbol("id"));   //symbol
console.log(typeof 10n);            //bigint
console.log(typeof 0);              //number
console.log(typeof true);           //boolean
console.log(typeof "hello");        //string

console.log(typeof(2));
console.log(typeof 2);