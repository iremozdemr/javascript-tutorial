let value1 = String(true); 
console.log(value1);  
//true
        
let value2 = String(null); 
console.log(value2);  
//null
  
let value3 = String(undefined);   
console.log(value3); 
//undefined

console.log("6"/"2");       
//3

let value4 = Number("abcde");
console.log(value4);
//nan

let value5 = Number("  ");
console.log(value5); 
//0 

let value6 = Number("123");
console.log(value6);
//123

let value7 = Number(" 123 ");
console.log(value7);  
//123

let value8 = Number("123a");
console.log(value8);  
//nan

let value9 = Number(undefined);
console.log(value9); 
//nan

let value10 = Number(null);
console.log(value10);  
//0

let value11 = Number(true);
console.log(value11);  
//1

let value12 = Number(false);
console.log(value12);  
//0

let value13 = Boolean("hello");
console.log(value13);
//true

let value14 = Boolean("");
console.log(value14);
//false

let value15 = Boolean("1");
console.log(value15);
//true

let value16 = Boolean("0");
console.log(value16);
//true

let value17 = Boolean(1);
console.log(value17);
//true

let value18 = Boolean(0);
console.log(value18);
//false

let value19 = Boolean(null);
console.log(value19);
//false

let value20 = Boolean(undefined);
console.log(value20);
//false

let value21 = Boolean(NaN);
console.log(value21);
//false