function retireAge(year) {
    return 65 - year 

    
}


function yearsUntilRetirement(year,FName) {
    
    const age = 2021 -year
    const retireagee = retireAge(age)

    if (retireagee > 0) {
        return `Hi ${FName} your age is ${age} and you will retire
     after ${retireagee}`
        
    }else{
        return `Hi ${FName} your age is ${age} and you retired since ${retireagee}`
    }
    

    
}

console.log(yearsUntilRetirement(1946,"Mansoor"))










