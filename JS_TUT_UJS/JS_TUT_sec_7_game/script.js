// 'use strict';


const score0=document.querySelector('#score--0') //selecting the element sicne its id we use #

// we can do select the element by ID too.

const score1 = document.getElementById('score--1')

const diceel=document.querySelector('.dice')

const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')

const currentEl0=document.querySelector('#current--0')
const currentEl1=document.querySelector('#current--1')

const Player0El=document.querySelector('.player--0')
const Player1El=document.querySelector('.player--1')

console.log(score0,score1)

score0.textContent=0
score1.textContent=0

diceel.classList.add('hidden')
// const scoress =[0,0]
// let currentScore=0
// let activePlayer=0
// let playing=true

//rolling DICE funtionality

let scoress,currentScore,activePlayer,playing

const init = function (params) {
    scoress =[0,0]
    currentScore=0
    activePlayer=0
    playing=true
    score0.textContent=0
    score1.textContent=0
    currentEl0.textContent=0
    currentEl1.textContent=0
    Player0El.classList.remove('player--winner')
    Player1El.classList.remove('player--winner')
    Player0El.classList.add('player--active')
    Player1El.classList.remove('player--active')
    
}

init()

const switchPlayer=function (params) {
    document.getElementById(`current--${activePlayer}`).textContent=0
    currentScore=0
    activePlayer=activePlayer===0?1:0
    Player0El.classList.toggle('player--active')
    Player1El.classList.toggle('player--active')
    
}

btnRoll.addEventListener('click', function (params) {
    if (playing) {
        

    const dice = Math.trunc(Math.random()*6)+1
    console.log(dice)
    diceel.classList.remove('hidden')
    diceel.src=`dice-${dice}.png`
    if (dice !==1) {
        currentScore=currentScore+dice
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
        

        // currentEl0.textContent=currentScore

    }else{
        switchPlayer()
        // document.getElementById(`current--${activePlayer}`).textContent=0
        // currentScore=0
        // activePlayer=activePlayer===0?1:0
        // Player0El.classList.toggle('player--active')
        // Player1El.classList.toggle('player--active')

    }
}
})



btnHold.addEventListener('click',function (params) {
    if (playing) {

        scoress[activePlayer]+=currentScore
        // console.log("heyyyyyyyyyy",scoress[activePlayer])
        console.log(document.getElementById(`score--${activePlayer}`).textContent)
        document.getElementById(`score--${activePlayer}`).textContent=scoress[activePlayer]

        if (scoress[activePlayer]>=20) {
            playing=false
            diceel.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--acive')
            
        }else{
            switchPlayer()
        }
    }

})

btnNew.addEventListener('click',init) 
// {
    // scoress[0]+=0
    // scoress[1]+=0
    // score0.textContent=0
    // score1.textContent=0
    // currentEl0.textContent=0
    // currentEl1.textContent=0
    // Player0El.classList.remove('player--winner')
    // Player1El.classList.remove('player--winner')
    // Player0El.classList.add('player--active')
    // Player1El.classList.remove('player--active')
    // document.getElementById(`score--${0}`).textContent=0
    // document.getElementById(`score--${1}`).textContent=0
    
    
// })