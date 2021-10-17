
const dolScore1=97;
const dolScore2=112;
const dolScore3=81;

const kolScore1=109
const kolScore2=95
const kolScore3=86

const avgDolScore = (dolScore1+dolScore2+dolScore3)/3
const avgKolScore = (kolScore1+kolScore2+kolScore3)/3

console.log(avgDolScore)
console.log(avgKolScore)

if (avgDolScore > avgKolScore && avgDolScore > 100) {
    console.log("DOL WIN")
    
}else if (avgKolScore > avgDolScore && avgKolScore >100) {
    console.log("KOL WIN")
}else if (avgDolScore === avgKolScore && avgDolScore >= 100 && avgKolScore >= 100 ){
    console.log("BOTH WIN")
}else{
    console.log("NO WIN")
}