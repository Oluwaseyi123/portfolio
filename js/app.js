const toggleIcon = document.querySelector('.toggle-icon')
const toggle = document.querySelector('.toggle')
toggleIcon.addEventListener('click', nightMode)
let images = document.querySelectorAll('img')
const svg = document.querySelector('svg')
let icons = document.querySelectorAll('i')

console.log(innerWidth)
function nightMode(){
    const textarea = document.querySelector('textarea')
    toggle.classList.toggle('mode')
    images.forEach((image) => {
        image.classList.toggle('body-night')
    })
    document.documentElement.classList.toggle('body-night')
    toggleIcon.classList.toggle('night')
    svg.classList.toggle('body-night')
}
 
const fadeIn = document.querySelectorAll('.fade-in')
const appearOptions = { 
  threshold: 0.2,
  rootMargin: "0px 0px -5px 0px"
}
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add('active')
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions)

fadeIn.forEach(fade => {
appearOnScroll.observe(fade)
})

const navIcon = document.querySelector('.nav-icon')
navIcon.addEventListener('click', showNav)
let image_tracker = 'orange';


function showNav(e) {
 // navIcon.src = 'images/close.svg'
  const navUL = document.querySelector('.nav-ul')
  if(image_tracker == 'orange'){
     navIcon.src = 'images/close.svg'
     navUL.classList.add('show-nav')
     image_tracker = 'blue'

  }else{
    navIcon.src = 'images/nav-icon.svg'
    navUL.classList.remove('show-nav')
    image_tracker = 'orange';
  }
 
}