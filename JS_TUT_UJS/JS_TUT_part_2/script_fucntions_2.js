


//function declaration
function calcAge1(birthyear){
    return 2037-birthyear;
}


console.log(calcAge1(1996))



// function expressiom
const calcAge2= function (birthyear) {
    return 2037-birthyear;
}

console.log(calcAge2(1999))



//ARROw function

const calcAge3 = birthyear => 2037-birthyear;
console.log(calcAge3(1996))


// here birthyear is a return value 
const yearsUntilRetirement = (birthyear ,firstname) => {
    const age = 2037 -birthyear;
    return `hi ${firstname} your ret_age = ${age}`

}

console.log(yearsUntilRetirement(1998,"mansoor"))



