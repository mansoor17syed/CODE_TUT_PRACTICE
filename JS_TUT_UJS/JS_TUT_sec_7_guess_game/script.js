console.log("MANSOOR")
// const val1= document.querySelector('.message').textContent
// console.log(val1)
// if (val1=='Start guessing...'){
//     console.log("well done")
// }


// document.querySelector('.message').textContent="CORRECT ANSWER"


// //Event Handler in JS

// document.querySelector('.check').addEventListener('click',function () {
//     console.log('number')
//     console.log(document.querySelector('.guess').value)

//     }
// )



let SecNumber = Math.trunc(Math.random()*20)+1
console.log(SecNumber)

let score = 20
let highscore = 0




// document.querySelector('.number').textContent=SecNumber
document.querySelector('.check').addEventListener('click',function () {
        // console.log('number')
        // console.log(document.querySelector('.guess').value)
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess ,typeof guess)
        
        if (!guess) {
            document.querySelector('.message').textContent='No NUMBER'
            
        } else if (guess===SecNumber){
            document.querySelector('.message').textContent='Correct AnsWER'
            document.querySelector('.number').style.width='30rem'
            document.querySelector('.number').textContent=SecNumber
            document.querySelector('body').style.backgroundColor='#60b347'
            if (score>highscore) {
                highscore=score
                document.querySelector('.highscore').textContent=highscore
                
            }
            
        }else if (guess!==SecNumber){
            if (score>1) {
                document.querySelector('.message').textContent=guess>SecNumber?'GUESS HIGH HAI BHAI':"PLEASE GUESS HIGH"
                score--
                document.querySelector('.score').textContent=score
            }else{
                document.querySelector('.message').textContent='YOU LOST LOSSER'
                // score--
                document.querySelector('.score').textContent=0
            }
            
            
        }
        // else if (guess>SecNumber){
        //     if (score>1) {
        //         document.querySelector('.message').textContent='GUESS HIGH HAI BHAI'
        //         score--
        //         document.querySelector('.score').textContent=score
        //     }else{
        //         document.querySelector('.message').textContent='YOU LOST LOSSER'
        //         score--
        //         document.querySelector('.score').textContent=0
        //     }
            
            
        // }else if (guess < SecNumber){
        //     if (score>1) {
        //         document.querySelector('.message').textContent='PLEASE GUESS HIGH'
        //     score--
        //     document.querySelector('.score').textContent=score
        //     }else{
        //         document.querySelector('.message').textContent='YOU LOSSER OUT OF TRIES'
        //     score--
        //     document.querySelector('.score').textContent=0
        //     }  
        // }

        }
)


document.querySelector('.again').addEventListener('click',function () {
    console.log("again clicked")
    SecNumber = Math.trunc(Math.random()*20)+1
    console.log(SecNumber)
    score = 20
    document.querySelector('.score').textContent=score
    document.querySelector('.message').textContent='Start Guessing....'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').textContent ='?'
    document.querySelector('.guess').value =' '

    
})