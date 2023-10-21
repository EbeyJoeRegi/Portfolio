const sections = document.querySelectorAll(".transition");

const sectionOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3, // Adjust this value based on when you want the transition to occur
};

const sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // When a section comes into view, set its opacity to 1 to reveal it
    }
  });
}, sectionOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

//contact
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});