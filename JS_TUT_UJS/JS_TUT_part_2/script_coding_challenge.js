


function calCTip(bill) {
    if (bill <=300 && bill >=50){
        console.log("15% tip")
        tip=bill*0.15
        return tip
    }else{
        console.log("20% tip")
        tip=bill*0.20
        return tip
    }
    
}


const tips= [125,555,44]
console.log(calCTip(tips[0]))
// console.log()
console.log(calCTip(tips[1]))
console.log(calCTip(tips[2]))








