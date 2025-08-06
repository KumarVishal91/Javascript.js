// //objects and dom events --- js vvi
// //objects literals --

// const mySym= Symbol("key1")
// const Jsuser={
//     name:"vishal ",
//     age: 20,
//     location: "ranchi",
//     email: "vishal@gmail.com",
//     lastlogin:["mond","tues"],
//     mySym: "mykey1"
// }

// console.log(Jsuser.email)//to access object 
// console.log(Jsuser["email"])
// console.log(Jsuser.mySym)

// Object.freeze(Jsuser)//access by object
// console.log(Jsuser);

// Jsuser.greeting= function(){
//     console.log("hello js users");

// }
// console.log(Jsuser.greeting());

// const obj1= {1: "a", 2:"b"}
// const obj2= {3:"a", 4: "b"}

// const obj3= Object.assign({},obj1, obj2)
// console.log(obj3);

//--------------------destrucuring of object----------------------
const course={
    coursename:"js in hindi",
    courseInstructor:"hitesh",
    price: "999"
}
//course.courseInstructor
const{price}= course
console.log(price)
// {
//     name:"hitesh",
//     coursename:"js in hindi",
//     price:"free"
// }
//json api 