const inputYear='1991'
const NewInputYear=Number(inputYear)

console.log(inputYear)
console.log(NewInputYear)



//type coercion
// automatic type cobersion while executing JS DOMSettableTokenList.


console.log('23'+3) //here o/p is 233
// string conatination hapens when you use +

console.log('23'-10-'3') //here output is 10
// here type coercion happens it automaticlly converts all the values to int

console.log(23-'10'-'2') //here output is 11
// here type coercion happens it automaticlly converts all the values to int


let n=1+'1' //o/p '11'
n -= 1 //here the string are conerted to ints and performe dopertions.
console.log(n)