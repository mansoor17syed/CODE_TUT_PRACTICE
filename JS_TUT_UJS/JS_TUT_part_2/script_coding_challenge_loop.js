let bills=[22,295,176,440,37,105,10,1100,86,52]

let tips=[]
let totals=[]

function calTips(value){
    if (value>=50 && value<=300){
        tip = value*0.15
        total=tip+value
        // tips.push(tip)
        // totals.push(totals)

    }else{
        tip=value*0.2
        total=tip+value
        
    }
    tips.push(tip)
    totals.push(total)
}



for(let i =0 ;i<bills.length;i++){
    // console.log(bills[i])
    calTips(bills[i])

}


console.log(bills)
console.log(tips)
console.log(totals)


const calAverage=function (arr) {
    let sum =0
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum)
    
}

calAverage(bills)
