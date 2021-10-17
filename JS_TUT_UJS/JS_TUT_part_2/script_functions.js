// FUNCTIONS

// A function is a group of reusable code which can be called anywhere 
// in your program. This eliminates the need of writing the same code 
// again and again. It helps programmers in writing modular codes. 
// Functions allow a programmer to divide a big program into a number 
// of small and manageable functions.

// syntax
// function functionname(parameter-list) {
//     statements
//  }

// Function definition
function Logger(){
    console.log("My name is Mansoor");
}

// Fucntion Call/running invoking
Logger();
// console.log()
Logger();



function fruitJuice(apples,oranges){
    console.log(apples,oranges)
    const juice =  `Juice with ${apples} Apples and ${oranges} Oranges`;
    return juice
}


console.log(fruitJuice(2,4))



