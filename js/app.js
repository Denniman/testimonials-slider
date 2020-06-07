const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slides = document.querySelectorAll('.slide')
let index = 0

funcDisplay(index)

function funcDisplay(index) {
    slides.forEach(slide => {
        slide.style.display = 'none'
    })
    slides[index].style.display = 'flex'
}

function nextSlide() {
    index++

    if (index > slides.length -1) {
        index = 0
    }
    funcDisplay(index)
}

function nextSlide() {
    index--

    if (index < 0) {
        index = slides.length - 1
    }
   funcDisplay(index)
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', nextSlide)
