// Header adjustment for <768px
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // add hamburger icon
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else {
        menu.classList.add("active");
        // add X icon
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleMenu, false);

// Account Page, hide and show elements when, and if required.
var logForm = document.getElementById("loginForm");
var regForm = document.getElementById("registerForm");
var remLog = document.getElementById("removeLog");
var remReg = document.getElementById("removeReg");

function login() {
    remLog.style.display = "none";
    remReg.style.display = "block";
    logForm.style.display = "flex";
    regForm.style.display = "none";
}

function register() {
    remReg.style.display = "none";
    remLog.style.display = "block";
    regForm.style.display = "flex";
    logForm.style.display = "none";
}

// Preview images for the same product slider
var prodImg = document.getElementById("prodImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
    prodImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    prodImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    prodImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    prodImg.src = smallImg[3].src;
}
'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}