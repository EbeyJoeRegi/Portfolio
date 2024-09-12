'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  const submitButton = document.querySelector('.form-btn');
  
  form.addEventListener('input', () => {
    const inputs = form.querySelectorAll('[data-form-input]');
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    submitButton.disabled = !allFilled;
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    
    // Send the form data to Google Apps Script
    fetch(form.action, {
      method: 'POST',
      body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
      alert('Your message has been sent successfully!');
      form.reset(); // Clear the form
      submitButton.disabled = true; // Disable the submit button again
    })
    .catch(error => {
      alert('There was an error submitting your form.');
      console.error('Error:', error);
    });
  });
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

//resume button

function openResume() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  const modal = document.getElementById("resumeModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
