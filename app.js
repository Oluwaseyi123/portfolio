const toggleIcon = document.querySelector('.toggle-icon')
const toggle = document.querySelector('.toggle')
toggleIcon.addEventListener('click', nightMode)
let images = document.querySelectorAll('img')
let icons = document.querySelectorAll('i')

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


const form = document.querySelector('form').addEventListener('submit', submitForm)

function submitForm(e){
  e.preventDefault()
  
  const textArea = document.querySelector('textarea')
  const inputs = document.querySelectorAll('input')
  
  if(inputs[1].value== '' || inputs[0].value== '' || textArea.value== ''){
    showMessage('Please fill the form', 'error') 
  }else{
    let form = document.querySelector('form')
    let formData = new FormData(form)
    fetch('/', {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams(formData).toString()
    })
    .then(() => showMessage('Thanks for reaching out. I will be in touch shortly', 'success'))
    .catch((error) => alert(error))
   
       clearInputFields(inputs[0])
       clearInputFields(inputs[1])
       clearInputFields(textArea)

       console.log(inputs[1].value)
       console.log(inputs[0].value)
  }
  
 
}

function showMessage(message, className){
  const messageDiv = document.createElement('div')
  const form = document.querySelector('form')

  const messageParagraph = document.createElement('span')
  messageDiv.appendChild(messageParagraph)

  const groupOne = document.querySelector('.group-one')
  form.insertBefore(messageDiv, groupOne)

  messageParagraph.innerText = message
  messageParagraph.classList.add(className)

  setTimeout(() => {
    messageParagraph.innerText = ''
  }, 2000)
  
}

function clearInputFields(input){
  input.value = ''
}

const navIcon = document.querySelector('.nav-icon')
navIcon.addEventListener('click', toggleNav)

function toggleNav(){
    const barOne = document.querySelector('.bar-one')
    const barTwo = document.querySelector('.bar-two')
    const barThree = document.querySelector('.bar-three')
    const navUl = document.querySelector('.nav-ul')
    const heroSection = document.querySelector('.hero-section')
    barOne.classList.toggle('nav-toggle-one')
    barThree.classList.toggle('nav-toggle-two')
    barTwo.classList.toggle('nav-toggle-three')
    navUl.classList.toggle('nav-toggle')
   
}