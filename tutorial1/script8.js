function myFunction1(userName){
    console.log("hello " + userName);
}

function myFunction2(userName="anonymous"){
    console.log("hello " + userName);
}
//parametrede default value tanımlama

myFunction1();
//hello undefined
myFunction2();
//hello anonymouss