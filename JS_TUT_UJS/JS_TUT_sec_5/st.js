console.log("Mansoor")
console.log("hey")

const data1=[17,21,23]
const data2=[27,12,5,0,4]


function tempsPrint(arr) {
    let str=''
    for (i=0;i<arr.length;i++){
        str+=`${arr[i]}C in ${i+1} days... `
    }
    console.log(str)
}

tempsPrint(data2)