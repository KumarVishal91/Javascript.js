console.log("vishal")
//variables-var let const
//declare and intialize 
//scope (global , block , functional)
// reassignment and redeclaration
// var a=12;
// var a=13;
// var b=12;
// const c=11;
// {
//     var b=13;
// }
//Temporal Dead Zone--- space jha tk let const aata hai

// console.log(a);
// var a=12;
//Hoisting impact per type ---

// let a=10;
// {
//     let a=20;
//     console.log("inside", a)
// }
// console.log("outside ",a)


//primitive -- copy krne pr real copy mil jaye 
//refernce -- refernce milega parents ka
let a=12;
let b=a;
a=a+2;
let arr=[1,2,3];
let c=arr;

console.log(a)
console.log(b)

//string, number , boolean, null, undefined, symbol, bigint
// array, object , function
