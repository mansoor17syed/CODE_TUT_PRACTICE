console.log("SPREAD")

const arr=[6,7,8]
const badarr=[3,4,5,arr[0],arr[1],arr[2]]
console.log(badarr)

// using spread

const goodarr=[3,4,5,...arr]
const goodarr1=[...arr,3,4,5]

console.log(goodarr)
console.log(goodarr1)


const restaurant ={
    namer:"Maansoor_caFe",
    locations:"Bangalore",
    categories:['Indian',"Italian",'North_Indian',"Thai"],
    startmenu:['chips','bread','cokkies','vada'],
    mainmenu:['thali','biryani','pizza','curry']
}



const fullmenu =[...restaurant.mainmenu,...restaurant.startmenu]
console.log(fullmenu)