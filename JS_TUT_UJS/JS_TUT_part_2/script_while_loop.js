console.log("WHILE")
let rep=1
console.log("while")
while (rep<=10){
    console.log(`rep is equal to${rep}`)
    rep++
}



//while needs no counter like for loop
//below is an exapmle of it

let dice =Math.trunc(Math.random()*6)+1
// console.log(dice)

while(dice !==6){
    console.log(`its a ${dice}`)
    dice=Math.trunc(Math.random()*6)+1
    
}