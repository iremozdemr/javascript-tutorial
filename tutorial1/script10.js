function add(num1,num2){
    return num1+num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function calculator(num1,num2,method){
    return method(num1,num2);
}

let result1 = calculator(2,3,add);
let result2 = calculator(2,3,multiply);

console.log(result1);
console.log(result2);