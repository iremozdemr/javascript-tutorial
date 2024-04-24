let userName1 = "a";
let userName2 = "a";

function showMessage1(){
    userName1 = "b";
    let message = "hello "+ userName1;
    console.log(message);
}
//fonksiyon global variable'ları değiştirebilir

function showMessage2(){
    let userName2 = "c";
    let message = "hello "+ userName2;
    console.log(message);
}
//fonksiyon global variable'ları değiştiremez

console.log(userName1);
showMessage1();
console.log(userName1);

console.log(userName2);
showMessage2();
console.log(userName2);