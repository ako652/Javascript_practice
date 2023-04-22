// Calculate the Number of Days Between Two Dates
let date1 = "11/01/2021";
let date2 = "8/05/2022";

// expected outcome: 276
const time1 =new Date(date1).getTime()
const time2 =new Date(date2).getTime()

const timeDifference = time2 - time1
const days =Math.round(timeDifference/(1000*60*60*24))
console.log(days)