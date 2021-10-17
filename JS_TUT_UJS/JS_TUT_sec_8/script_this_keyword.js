console.log("hey")

const jonas={
    year:1996,
    calcAge: function (params) {
        console.log(this)
        console.log(2021-this.year)
        
    }
}

jonas.calcAge()


const tom = {
    year:1991
}

tom.calcAge=jonas.calcAge
tom.calcAge()