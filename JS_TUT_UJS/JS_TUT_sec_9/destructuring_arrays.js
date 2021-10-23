console.log("test_ScuccesS")

const arr = [2,4,6,8]

// destructring the array

const [x,y,z,]=arr

console.log(x,y,z)


// resturant_order={

// }

const [i,,,j]=arr
console.log(i,j)


const arr1=[2,4,[26,8]]
const [a,,[b]]=arr1
console.log(a,b)


// setting default values

// const arr2=[10,12,14,16,18]
const arr2=[10,]
const [p=1,q=1,r=1]=arr2
console.log(p,q,r)