const toggleIcon = document.querySelector('.toggle-icon')
const toggle = document.querySelector('.toggle')
toggleIcon.addEventListener('click', nightMode)
let images = document.querySelectorAll('img')
let icons = document.querySelectorAll('i')

console.log(innerWidth)
function nightMode(){
    const textarea = document.querySelector('textarea')
    toggle.classList.toggle('mode')
    images.forEach((image) => {
        console.log(image)
        image.classList.toggle('body-night')
    })
    // icons.forEach((icon) => {
    //     console.log(icon)
    //     icon.classList.toggle('body-night')
    // })
    document.documentElement.classList.toggle('body-night')
    toggleIcon.classList.toggle('night')
    console.log('night mode')


}

// html[theme='dark-mode '] {
//     filter: invert(1) hue-rotate(180deg);
// }