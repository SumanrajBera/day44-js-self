let left = document.querySelector(".larrow")
let right = document.querySelector(".rarrow")
let cardGrp = document.querySelector(".cardGrp")

let current = 1;
let n = cardGrp.children.length;

function updateCarousel() {
    cardGrp.style.transition = "all .5s ease"
    cardGrp.style.transform = `translatex(-${current * 100}%)`;
}

cardGrp.addEventListener("transitionend", function () {
    cardGrp.style.transition = "none"
    if (current === 0) {
        current = n - 2
        cardGrp.style.transform = `translatex(-${current * 100}%)`;
        void cardGrp.offsetWidth; // Neat trick to force browser do animations now
    }
    else if (current === n - 1) { 
        current = 1 
        cardGrp.style.transform = `translatex(-${current * 100}%)`;
        void cardGrp.offsetWidth; 
    }
})

left.addEventListener("click", function () {
    if (current === 0) return
    current--;
    updateCarousel()
})

right.addEventListener("click", function () {
    if (current === n - 1) return
    current++;
    updateCarousel()
})