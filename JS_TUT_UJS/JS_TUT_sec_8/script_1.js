const firstNmae= 'syed' //global scope

function calcAge(birthyear){
    const age=2021-birthyear  //age variable is functional scope variable
    console.log(firstNmae)


    function printAge(){
        const outputs = `hey ${firstNmae} you are ${age} years old born in ${birthyear}`
        console.log(outputs)
    }

    if(birthyear>=1991 && birthyear<=1996){
        //var are functin scoped so they simple skip the block and let you access until the functonal block
        //so you can access the vaiable on line 27 too
        var str1='hey Mate wassup'


        //str1 is blocked scope const and let are blocked scope you cannot access it out of the block
        // so line number 26 would throw an error
        const str2=`oh , and you're a millenial ${firstNmae}` 
        
        console.log(str2)

    }
    // console.log(str2)
    console.log(str1)

    printAge()
    return age

}

calcAge(1996)