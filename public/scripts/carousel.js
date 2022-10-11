let track = document.querySelector("#track");
let slides = Array.from(track.children)
let widthSlide = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => slide.style.left = `${widthSlide * index}px`)
//track.style.transform= `translatex(-${slides[1].style.left})`

slides[0].classList.add("active")
document.querySelector("#btn-next").addEventListener("click", function(e) {
    let current = document.querySelector("#track .slide.active");
    let next = current.nextElementSibling
    if(next) {
        track.style.transform = `translatex(-${next.style.left})`
        current.classList.remove("active")
        next.classList.add("active")
    }
})

slides[0].classList.add("active")
document.querySelector("#btn-prev").addEventListener("click", function(e) {
    let current = document.querySelector("#track .slide.active");
    let next = current.previousElementSibling
    if(next) {
        track.style.transform = `translatex(-${next.style.left})`
        current.classList.remove("active")
        next.classList.add("active")
    }
})