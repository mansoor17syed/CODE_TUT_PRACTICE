console.log("MY_CODE")


// NORMAL FUNCTIOn
function avgScore(scr1,scr2,scr3) {
    const scrore= (scr1+scr2+scr3)/3
    return scrore
    
}

// ARROW FUNCTION
// const calcAvg= (a,b,c) => (a+b+c)/3;
// console.log(calcAvg(3,4,5))





const avgScoreDol = avgScore(85,54,41)
const avgScoreKol = avgScore(23,34,27)
console.log(avgScoreDol,avgScoreKol)



function  checkWinner(scoreDol,scoreKol) {
    if (scoreDol / 2 > scoreKol ) {
        console.log(`DOL wins ${scoreDol} vs ${scoreKol}`);
        
    }else if(scoreKol /2 > scoreDol){
        console.log(`KOL wins ${scoreKol} vs ${scoreDol}`)

    }
}


checkWinner(avgScoreDol,avgScoreKol)








