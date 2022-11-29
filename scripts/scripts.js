let slideIndex = 1;
let play = true

function playSlideShow(e) {
    e.preventDefault()
    let delay = document.getElementById('delay').value
    play = true
    if(!delay) {
        delay = 3000
    }

    const interval = setInterval(() => {
        if (!play) return clearInterval(interval)
        showSlides(++slideIndex)
    }, delay)

    e.target.style.display = 'none'
    let stopBtn = document.getElementById('stop-btn')
    stopBtn.style.display = 'block'
}

function stopSlideShow(e) {
    e.preventDefault()
    play = false
    e.target.style.display = 'none'
    let playBtn = document.getElementById('play-btn')
    playBtn.style.display = 'block'
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex)
    const interval = setInterval(() => {
        if (!play) {return clearInterval(interval)}
        showSlides(++slideIndex)
    }, 3000)
})

