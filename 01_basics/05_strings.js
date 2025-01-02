let name = "Shubham"
let age = 33
// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Raj_Kumar_Rao")

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('K'))

const newString = gameName.substring(0,5)
// console.log(newString)

const anotherString = gameName.slice (-8,-2)
// console.log(anotherString)

const url = "https://how are you is everything ok"
console.log(url.replaceAll(" ","_"))
console.log(url.includes("how"))
console.log(url.split(" "));
