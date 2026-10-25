
const accountId=121425
var name="Abhishek"
let accountCity="Pune"
accountEmail="abhishek@gmail.com"


//accountId=123454 Not allowed bcz const value never been change thought the code.
name="Tushar"
accountCity="Mumbai"
accountEmail="abc@gmail.com"

var accountState    // it contains by default undefined bcz of GEC.
let accountSt       // it contains by default undefined bcz of GEC.

console.log(accountId);

/*
Avoid using var keyword 
var is keyword in js to initialize variable but it has problem of block scope and functional scope
if we reassign in any scope variable declared with var keyword its value will be change. 

This is problem to came out of this problem let is introduced to JS engines.
*/

console.table([accountId,accountCity,name,accountEmail,accountState,accountSt])

// For documentation:
// You can use MDN and tc9 ECMA-> which is stadanrd maintained  