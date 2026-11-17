
function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function fontePoppins(){
    document.body.style.fontFamily = "'Poppins', sans-serif";
}

function fonteMono(){
    document.body.style.fontFamily = "'Courier New', monospace";
}

function fonteTech(){
    document.body.style.fontFamily = "'Trebuchet MS', sans-serif";
}

let currentIndex = 0;

function moveSlide(direction){

    const track = document.getElementById("carouselTrack");
    const slides = document.querySelectorAll(".carouselTrack img");

    const visibleSlides = window.innerWidth <= 768 ? 1 : 3;

    const maxIndex = slides.length - visibleSlides;

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = maxIndex;
    }

    if(currentIndex > maxIndex){
        currentIndex = 0;
    }

    const slideWidth = slides[0].offsetWidth + 20;

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
