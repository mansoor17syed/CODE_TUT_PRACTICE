// As we know from the chapter Data types, 
// there are eight data types in JavaScript. 
// Seven of them are called “primitive”, 
// because their values contain only a single thing 
// (be it a string or a number or whatever).
// In contrast, objects are used to store keyed
//  collections of various data and more complex entities. 
//  In JavaScript, objects penetrate almost every aspect of the language. 
//  So we must understand them first before going in-depth anywhere else.

// An object can be created with figure brackets {…} with an optional list 
// of properties. A property is a “key: value” pair, where key is a string 
// (also called a “property name”), and value can be anything.

// We can imagine an object as a cabinet with signed files. 
// Every piece of data is stored in its file by the key. 
// It’s easy to find a file by its name or add/remove a file.


const person1 = {
    firstname: 'Syed',
    lastname: 'Syed',
    age: 25,
    job: 'S/W',
    friends: ['mob','tom','jerry'],

}

console.log(person1)

// TO access values we can do it two ways

// using DOT Notation basically age is a property
console.log(person1.age)

// using bracket notation 
console.log(person1['firstname'])


// const IntrestedIN = prompt("Please insert the intrested feild")
// console.log(person1[IntrestedIN])



//Methods in Objects
const person_1={
    F_Name:"syed",
    L_Name:"Mansoor",
    birthyear:1996,
    Job:"Programmer",
    hasLicense:false,
    // calCAge: function (birth) {
    //     return 2037-birth

    calCAge: function () {
            return 2037- this.birthyear //here we have used this keyword 
            //so it basically points to the calling object and ultimatey its 
            //same person_1(name of the object)
    },

    calCAges: function () {
        this.age = 2037- this.birthyear //here we have used this keyword 
        //so it basically points to the calling object and ultimatey its 
        //same person_1(name of the object)
        return this.age
    },

    summary: function () {
        if (this.hasLicense) {
            return `${this.L_Name} is a ${this.calCAges()} year old 
            ${this.Job} and has a driver license`
            
        }else{
            return `${this.L_Name} is a ${this.calCAges()} year old 
            ${this.Job} and has NO driver license`
        }
        
    },

    get_summary: function () {
        return `${this.L_Name} is a ${this.calCAges()} year old 
            ${this.Job} and has ${this.hasLicense ? "a" : "NO"}  NO driver license`
        
    }

}



console.log(person_1.calCAges())
console.log(person_1.age)
console.log(person_1.summary())
console.log(person_1.get_summary())
// console.log(person_1['calCAge'](1889))




// let user = new Object(F_Name:"Mansoor",);

























