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
        console.log(image)
        image.classList.toggle('body-night')
    })
    document.documentElement.classList.toggle('body-night')
    toggleIcon.classList.toggle('night')
    svg.classList.toggle('body-night')

    console.log('night mode')
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

function showNav(e) {
  
  console.log(navIcon.childNodes)
 
}