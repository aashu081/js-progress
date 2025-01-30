let score ="33"
console.log(typeof score)
console.log(typeof(score))
let valInNumber= Number(score) //this will make sure it is a number
console.log(typeof valInNumber)
let a ="aashu123"
//ye na to number hai na string hai to yahan par agar isko number me convert karenege to aygea not a  number NaN
// let b=Number(a)
// console.log(typeof b)

let valueinnumber= Number(a)
console.log(typeof a)
console.log(valueinnumber)

// to dekhiye ji agar hum string ki jagah kuch aur likhenge to kya hoga
let val=null
let valinnum1=Number(val)
console.log(valinnum1)
// so for null it gave answer 0

let val2=undefined
let valinnum2=Number(val2)
console.log(valinnum2)
// for undefined it gave answer not a number
let val3=true
let valinnum3=Number(val3)
console.log(valinnum3)
//for boolean it will answer in terms of 0 or1 
