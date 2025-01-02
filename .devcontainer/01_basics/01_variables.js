const accountId=12345
let accountEmail="shubham@gmail.com"
var accountPassword="1234"
accountCity="Kanpur"
let accountState;
// accountId=23  // not allowed

accountEmail="abc@gmail.com"
accountPassword="1231212"
accountCity="Lucknow"

console.log(accountId)

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])