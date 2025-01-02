// Primitive

// 7 types - Numbers , String , Boolean , null , undefined , BigInt , Symbol

let userEmail; // let userEmail=undefined both are same

const id = Symbol(123)
const anotherid = Symbol(123)

// console.log(id === anotherid); // false as symbol take each attribte unique

const bigNumber = 1658451638476358456341658463n
// console.log(typeof bigNumber);

// console.log(bigNumber); // represent same no. and n is added in last in output too



// Reference (Non-Primitive)

// Array , Objects , Functions


const hereos = ["shaktiman" , "nagraj" , "bheem"];
const myobj={
    name:"Shubham",
    age : 20,
}
const fun=function () {
    console.log("Hello World");
    
}

// console.log(fun)

// console.log(typeof bigNumber)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non Primitive)

let myname = "Shubham";
let othername = myname;
othername="Anurag";

console.log(myname);
console.log(othername);

let obj1={
    email : "abc@ai ",
    age : 20
}

let obj2 = obj1
obj2.email = "rahul@gamil.com"

console.log(obj1.email);
console.log(obj2.email);