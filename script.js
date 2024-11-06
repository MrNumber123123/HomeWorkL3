const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slides = document.querySelector('.slider-image')
const bottom = document.querySelector('.bottom')

let currentSlideIndex = 0
const paginationCircles = []
let sliderWidth = slider,clientWidth

window.addEventListener('resize', ()=> {
    sliderWidth = slider,clientWidth
})

function createPagination() {
    const div = document.createAttributeElement('div')
    div.classList.add('padgination-circle')
    bottom.appendChild(div)
    paginationCircles.push(div)
}
function addPagination() {
    slides.forEach(createPagination)
    paginationCircle[0].classList.add('activeSlider')
    paginationCircle.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlider(index))
    })
}
// adadActiveSliderClass
// adadActiveSliderClass
// showSlide
// nextSlide
// prevSlide
function changeSlider(sliderIndex) {
 //
}