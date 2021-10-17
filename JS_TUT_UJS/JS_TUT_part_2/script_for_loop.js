/* The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}

Let’s learn the meaning of these parts by example. The loop below runs alert(i) 
for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

Let’s examine the for statement part-by-part:
part 		
begin 	i = 0 	Executes once upon entering the loop.
condition 	i < 3 	Checked before every loop iteration. If false, the loop stops.
body 	alert(i) 	Runs again and again while the condition is truthy.
step 	i++ 	Executes after the body on each iteration. */


for(let rep=1;rep<=10;rep++){
    // console.log(`mansoor ${rep}`)
    console.log(`mansoor`)
}




const person1=['syed','mansoor',1996,'Programmer'];

let newArray=[]
let newArray1=[]

for (let i=0;i<person1.length;i++){
    //reading an array
    console.log(person1[i])

    //writing to an array methos 1
    newArray.push(typeof person1[i])

    //writing to array method 2
    newArray1[i]=typeof person1[i]

}

console.log(newArray)
console.log(newArray1)



const years=[1996,1989,1999,1947,1950,1965];
let ages = []

for (i=0;i<years.length;i++){
    age=2021-years[i]
    // console.log(age)
    ages.push(age)
}


console.log(years)
console.log(ages)





// Continue to the next iteration
// The continue directive is a “lighter version” of break. 
// It doesn’t stop the whole loop. Instead, it stops the current iteration 
// and forces the loop to start a new one (if the condition allows).
// We can use it if we’re done with the current iteration 
// and would like to move on to the next one.
// The loop below uses continue to output only odd values:

for (i =0 ;i<=10;i++){
    if (i%2==0) continue;
    console.log(i)
}



// to print only strings
const demoData=['syed','mansoor',1996,'bob',1898,'mob',1878,1934];

for(let i=0;i<demoData.length;i++){
    if (typeof  demoData[i] !==  'string') continue;
    console.log(demoData[i])
}



// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.
// For example, the loop below asks the user for a series of numbers,
//  “breaking” when no number is entered:


const demoData1=['syed','mansoor',1996,'bob',1898,'mob',1878,1934];
for(let i=0;i<demoData1.length;i++){
    if (typeof  demoData1[i] ===  'number') break;
    console.log(demoData1[i])
}

