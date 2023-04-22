let string = "Javascript";
//Rotate the String n Times in the Left Direction
// expected outcome: vascriptja

const firstOutput =string.slice(2,4)
const secondOutput = string.slice(4,10)
const thirdOutput = string.slice(0,2)
const NLeftDirection = firstOutput + secondOutput + thirdOutput.toLocaleLowerCase()
console.log(NLeftDirection)