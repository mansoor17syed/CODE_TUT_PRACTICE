console.log("MANSOOR")

// SCOPE:-

// var is used globally
// let is used within a block
// const is used when you dont want to change the value


// IF ELSE :-

let age = 4;

if (age <18) {

    console.log("Pleasee drink water")
}
else{
    console.log("Go ahaead and pick a cool drink")
}


// MULTIPLE IF ELSE :-

let color = "yellow"

if (color=="RED") {
    console.log("stop the vehicle") 
}
else if (color=='yellow') {
    console.log("slow down")
}
else if (color=='green'){
    console.log("please keep moving")
}
else{
    console.log("No Signal")
}




// SWITCH CASE:-

const trophies = 3

switch (trophies) {
    case 2:
        console.log("TWO TROPHIES")
        break;
    case 4:
        console.log("4 TROPHIES win")
        break;
    case 5:
        console.log("5 TROPHIES winners")
        break;
    case 7:
        console.log("7 TROPHIES champs")
        break;

    default:
        console.log("NO TROPHIES")
        break;
}
