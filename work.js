// popup

// Get all the buttons that open the modal
var btns = document.querySelectorAll(".case-study__link");

// Get all the modals
var modals = document.querySelectorAll(".modal");

// Get all the close buttons
var closeBtns = document.querySelectorAll(".close");

// Function to open a specific modal
function openModal(modalIndex) {
    modals[modalIndex].style.display = "block";
}

// Function to close a specific modal
function closeModal(modalIndex) {
    modals[modalIndex].style.display = "none";
}

// Attach click event listeners to each button to open the corresponding modal
btns.forEach(function (btn, index) {
    btn.onclick = function () {
        openModal(index);
    };
});

// Attach click event listeners to each close button to close the corresponding modal
closeBtns.forEach(function (closeBtn, index) {
    closeBtn.onclick = function () {
        closeModal(index);
    };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    modals.forEach(function (modal, index) {
        if (event.target === modal) {
            closeModal(index);
        }
    });
};


//slider
const sliderCount = 2; // Change this number based on the number of sliders you have

let slideIndex = [];
let timeouts = [];

for (let i = 0; i < sliderCount; i++) {
    slideIndex.push(0);
    showSlides(i);
}

function showSlides(sliderIndex) {
    const slides = document.getElementById(`slider${sliderIndex + 1}`).getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex[sliderIndex]++;
    if (slideIndex[sliderIndex] > slides.length) {
        slideIndex[sliderIndex] = 1;
    }
    slides[slideIndex[sliderIndex] - 1].style.display = "block";

    timeouts[sliderIndex] = setTimeout(() => {
        showSlides(sliderIndex);
    }, 4000); // Change the delay here
}

// Example function to stop a particular slider
function stopSlider(sliderIndex) {
    clearTimeout(timeouts[sliderIndex]);
}
