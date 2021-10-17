// 'use strict';


const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnCloseModal=document.querySelector('.close-modal')
const btnsOpenModal=document.querySelectorAll('.show-modal')

const closeModal = function (params) {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function (params) {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i=0 ; i<btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i].textContent)
    btnsOpenModal[i].addEventListener('click',openModal)
    // btnsOpenModal[i].addEventListener('click',function () {
    //     modal.classList.remove('hidden')
    //     overlay.classList.remove('hidden')
    // })
    
}

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
// btnCloseModal.addEventListener('click',function (params) {
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
    
// })

// overlay.addEventListener('click',function (params) {
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
    
// })


document.addEventListener('keydown',function (e) {
    console.log(e.key)
    if (e.key==='Tab') {
        if (!modal.classList.contains('hidden')) {
            closeModal()
            
        }
        
    }
})