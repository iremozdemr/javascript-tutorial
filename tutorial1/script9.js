sayHi1();
//sayHi2(); error
//sayHi3(); error

function sayHi1(){
    console.log("hi");
}
//tanımlanmadan önce
//fonksiyon çağrılabilir

let sayHi2 = function(){
    console.log("hi");
}
//tanımlanmadan önce
//fonksiyon çağrılamaz

let sayHi3 = sayHi1;
//tanımlanmadan önce
//fonksiyon çağrılamaz

sayHi1();
sayHi2();
sayHi3();

console.group(sayHi1);
console.group(sayHi2);
console.group(sayHi3);
//fonksiyonların kodunu gösterir