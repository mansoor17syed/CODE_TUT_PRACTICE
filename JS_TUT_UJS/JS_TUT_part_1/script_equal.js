

// below returns true
const age =18

if (age == 18) {
    console.log("hey")
}


// below returns true
const age1 ="18"

if (age1 == 18) {
    console.log("hey")
}

// below returns true
const age2 =18

if (age2 === 18) {
    console.log("hey")
}


// below returns false
const age3 ="18"

if (age3 === 18) {
    console.log("hey")
}


// the below snippet will take  inout and conert it to a string values 
// and comapre it to a 23 its type coercion [loosely equal]
const fav=  prompt("whats your fav number")
console.log(fav)
console.log(typeof fav)

if (fav == 23) {
    console.log("Nice👌")
    
}



// the below snippet will take  inout and check with the values 
// and comapre it to a 23  [strictly equal]
const fav1 =  Number(prompt("whats your fav number"))
console.log(fav1)
console.log(typeof fav1)

if (fav1 === 23) {
    console.log("Nice👌")
    
}





const favu1 = Number(prompt("Enter your number"))
console.log(favu1)

if (favu1 === 23) {
    console.log("cool 23 is nice number")
    
}else if (favu1 === 7) {
    console.log("cool 7 is nice number")  
}else{
    console.log("cool number Please ")  
}




const favu2=Number(prompt("Enter a Number"))
console.log(favu2)

if (favu2 !== 23) {
    console.log("how about 23")
}





























