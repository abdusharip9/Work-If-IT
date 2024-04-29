"use strict"

document.getElementById("nice");

// men qo'shildim
// abdusharip's codes
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

const scrollBtn =document.querySelector('.scrollToTop-btn')
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
})
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

window.addEventListener('scroll', () => {
  let reveals = document.querySelectorAll('.reveal')

  for(let i = 0; i < reveals.length; i++){
      let windowHeight = window.innerHeight
      let revealTop = reveals[i].getBoundingClientRect().top
      let revalPoint = 50

      if(revealTop < windowHeight - revalPoint){
          reveals[i].classList.add('active')
      }
  }
})
// abdusharip's codes