
function cutFruits(fruit) {
    return fruit*4;
    
}



function fruitProcessor(apples,oranges) {
    const appleCut = cutFruits(apples)
    const orangeCut = cutFruits(oranges)

    const juice = `Juice with ${apples} apples cut into ${appleCut} and 
    ${oranges} oranges cut into ${orangeCut} `
    return juice
    
}

console.log(fruitProcessor(4,6))