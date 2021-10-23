console.log("heLLO")

const restaurant ={
    namer:"Maansoor_caFe",
    locations:"Bangalore",
    categories:['Indian',"Italian",'North_Indian',"Thai"],
    startmenu:['chips','bread','cokkies','vada'],
    mainmenu:['thali','biryani','pizza','curry']
}


const {namer,locations}=restaurant
console.log(namer,locations)


// mutatin variables

let a=111
let b =222
const obj = {
    a:2,
    b:4,
    c:6
};
// ({a,b}  =  obj1)
({a, b} = obj);
// console.log(a,b)
console.log(a, b);

// let a = 100, b = 200;
// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40
// };
 
// ({a, b} = obj);
// console.log(a, b);