


const MarkObj={
    F_Name:'Mark',
    Mweight:78,
    MHeight:1.69,
    calcBMI: function () {
        const BMI=this.Mweight/(this.MHeight**2)
        return BMI
        
    },
}


const JohnObj={
    F_Name:'Mark',
    Jweight:92,
    JHeight:1.95,
    calcBMI: function () {
        const BMI=this.Jweight/(this.JHeight**2)
        return BMI
        
    },
}

let markBMI= MarkObj.calcBMI()
let johnBMI=JohnObj.calcBMI()

if (markBMI>johnBMI) {
    console.log(`Makrks BMI is greater ${MarkObj.F_Name} and BMI ${markBMI}`)
    
}else{
    console.log(`Makrks BMI is greater ${JohnObj.F_Name} and BMI ${johnBMI}`)
}


















































