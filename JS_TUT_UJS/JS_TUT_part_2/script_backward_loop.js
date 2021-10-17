const array1=[
    'syed',
    'mansoor',
    2037-2021,
    'program'

]


console.log(array1)

for(i=1;i<=array1.length;i++){
    console.log(array1.length-i,array1[array1.length-i])
    // console.log(array1[i])
}


// other way to bacmkward

for(let i=array1.length-1;i>=0;i--){
    console.log(i,array1[i])
}