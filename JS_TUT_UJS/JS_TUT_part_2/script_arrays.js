

console.log("mansoor")
// ARRAY's
// Objects allow you to store keyed collections of values. That’s fine.

// But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

// It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

// There exists a special data structure named Array, to store ordered collections.

// 1 way to creats a array
const friends = ["tom",'jerry','bob','pop',1999]
console.log(friends)

// 2 way to create a array
const years = new Array(1996,1997,1998,1999)
console.log(years)


console.log(friends.length)

// to chaneg the exsisting Element

friends[2]="mob"
console.log(friends)

// mix values 

const mansoor = ['syed','mansoor','1996',friends]
console.log(mansoor)

// // mix of values
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// // get the object at index 1 and then show its name
// alert( arr[1].name ); // John

// // get the function at index 3 and run it
// arr[3](); // hello




//ARRAY METHODS

const fruits = ['apple','banana','orange']
console.log(fruits)

// to add elements in the end
fruits.push('berries')
console.log(fruits)

// to add elements in the beginning
fruits.unshift('mango')
console.log(fruits)


//to remove elements use pop
// this will remove the last iterm
fruits.pop()
console.log(fruits)


//to remove elements use shift
// this will remove the first iterm
fruits.shift()
console.log(fruits)

// this will give the index of the elemet here apple
console.log(fruits.indexOf('apple'))

// this will give return true is element present else false if not
console.log(fruits.includes('orange'))





















