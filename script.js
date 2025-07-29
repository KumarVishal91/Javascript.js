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

let a=10;
{
    let a=20;
    console.log("inside", a)
}
console.log("outside ",a)
