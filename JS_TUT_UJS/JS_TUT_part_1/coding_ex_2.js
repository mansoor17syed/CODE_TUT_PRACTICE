
const MarkWeight=95
const MarkHeight=1.88

const JohnWeight=85
const JohnHeight=1.76


const MarkBMI=MarkWeight/MarkHeight**2
const JohnBMI=JohnWeight/JohnHeight**2

if (MarkBMI>JohnBMI) {
    console.log(`Mark's BHI is higher than John ${MarkBMI}`)
    
}
else{
    console.log(`John's BHI is higher than Mark ${JohnBMI}`)
}