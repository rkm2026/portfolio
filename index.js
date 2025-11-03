// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

document.addEventListener('DOMContentLoaded', () => {
  const scrollIndicator = document.querySelector('.home-hero__mouse-scroll-cont');

  scrollIndicator.addEventListener('click', () => {
    // Scroll smoothly to the next section
    const nextSection = document.getElementById('about'); // Replace 'section' with your actual next section selector
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('DlmJuCEgJTKWGmoSX'); // Replace with your EmailJS User ID
});



document.querySelector('.contact__form').addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  emailjs
    .send('service_crsho4c', 'template_9o2a6g9', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    })
    .then(
      () => {
        alert('Message sent successfully!');
        form.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('Error:', error);
      }
    );
});

// const dynamicText = document.getElementById("dynamic-text");

// // Titles to cycle through
// const titles = [
//   "Software Engineer ",
//   "Frontend Developer ",
//   "API Developer ",
//   "Tech Enthusiast ",
// ];

// let index = 0; // Current title index
// let charIndex = 0; // Current character index
// let isDeleting = false; // Whether we are deleting characters

// function typeEffect() {
//   const currentTitle = titles[index];

//   // Update text content
//   if (isDeleting) {
//     dynamicText.textContent = currentTitle.substring(0, charIndex--);
//   } else {
//     dynamicText.textContent = currentTitle.substring(0, charIndex++);
//   }

//   // Determine if switching to deleting mode
//   if (!isDeleting && charIndex === currentTitle.length) {
//     isDeleting = true;
//     setTimeout(typeEffect, 1000); // Pause before deleting
//     return;
//   }

//   // Determine if switching to the next title
//   if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     index = (index + 1) % titles.length; // Go to the next title
//   }

//   setTimeout(typeEffect, isDeleting ? 50 : 100); // Adjust typing speed
// }

// // Start the typing effect
// typeEffect();

const titles = [
  "Software Engineer",
  "Frontend Developer",
  "API Developer",
  "Tech Enthusiast",
];

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt; // Update the text in the span

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  // Move the cursor after each character is typed or deleted
  this.el.innerHTML = this.txt + '<span class="cursor">|</span>'; // Add the cursor dynamically

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var element = document.getElementById('dynamic-text');
  if (element) {
    new TxtType(element, titles, 2000);
  }
};

