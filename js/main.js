'esversion: 6';

let clicksDone = false;

let counterDone = false;

let partnerInfoOpened = false;

let globalX = 0;
let globalY = 0;

//clients review slider

let sliderNextBtn = document.querySelectorAll(".controls .forward");
let sliderPrevBtn = document.querySelectorAll(".controls .backward");
let sliderItems = document.querySelectorAll(".slider .slider_item");

function nextSlide() {
    if (!this.classList.contains("deactivated")) {
        sliderItems.forEach(function(item) {
            percentage = parseInt(parseFloat(window.getComputedStyle(item, null).getPropertyValue("left"))/parseFloat(window.getComputedStyle(item, null).getPropertyValue("width")))*100;
            item.style.left = (percentage-100)+"%";
            item.style.visibility = (item.style.left=="0%") ? "visible" : "hidden";
            clicksDone = true;
        });
    }
}

function prevSlide() {
    if (!this.classList.contains("deactivated")) {
        sliderItems.forEach(function(item) {
            percentage = parseInt(parseFloat(window.getComputedStyle(item, null).getPropertyValue("left"))/parseFloat(window.getComputedStyle(item, null).getPropertyValue("width")))*100;
            item.style.left = (percentage+100)+"%";
            item.style.visibility = (item.style.left=="0%") ? "visible" : "hidden";
            clicksDone = true;
        });
    }
}

sliderNextBtn.forEach(function(item) {
    item.addEventListener("click", nextSlide);
});

sliderPrevBtn.forEach(function(item) {
    item.addEventListener("click", prevSlide);
});
//mobile menu animation

let mobileMenuOpenButton = document.querySelector(".icon-menu");
let mobileMenu = document.querySelector(".mobile_menu");
let mobileNav = document.querySelector("nav.mobile");
let animBlock = document.querySelector(".animBlock");
let animBlockWrapper = document.querySelector(".animBlockWrapper");
let closeMenuBtn = document.querySelector("svg.icon-cancel.men");

let mobileMenuLinks = document.querySelectorAll("nav.mobile a");


mobileMenuOpenButton.onclick = function() {

    document.querySelector("html").style.scrollBehavior = "auto";

    document.querySelector("body").style.overflowY = "hidden";
    mobileMenu.style.display = "flex";
    setTimeout(() => {
        mobileMenu.classList.add("active");
        scrollBan();
    }, 10);
    
    setTimeout(() => {
        animBlockWrapper.style.display = "block";
        animBlock.style.animation = "whiteBlock .3s cubic-bezier(.23,.45,.38,.84)";
        setTimeout(() => {
            animBlockWrapper.style.display = "none";
            animBlock.style.animation = "";
            mobileNav.classList.add("active");
            closeMenuBtn.classList.add("active");
        }, 300);
    }, 600);
}

closeMenuBtn.onclick = function() {
    window.scrollTo(0, 0);
    document.querySelector("html").style.scrollBehavior = "smooth";
    mobileMenu.classList.remove("active");
    mobileNav.classList.remove("active");
    closeMenuBtn.classList.remove("active");
    document.querySelector("body").style.overflowY = "hidden";
    scrollAllow();
    setTimeout(() => {
        mobileMenu.style.display = "none";
    }, 500);

    
}

mobileMenuLinks.forEach((item) => {
    item.onclick = function() {
        document.querySelector("html").style.scrollBehavior = "smooth";
        setTimeout(() => {
            scrollAllow();
            mobileMenu.classList.remove("active");
            mobileMenu.style.position = "absolute";
            mobileNav.classList.remove("active");
            closeMenuBtn.classList.remove("active");
            document.querySelector("body").style.overflowY = "hidden";
            setTimeout(() => {
                mobileMenu.style.display = "none";
                mobileMenu.style.position = "";
            }, 1000);
        }, 100);
    }
});

//counter animation
let globalIntervals = [];
let tempInterval;
let countingBlocks = Array.from(document.querySelectorAll(".jackpot_items .jackpot .logo"));

const INCREMENTS = [1, 63, 31];
const INTERVALS = [600, 100, 50];

function startCountingAnimation(animatedBlock, index) {
    let animationValue = animatedBlock.dataset.value;
    tempInterval = setInterval(increaseCounter, INTERVALS[index], animatedBlock, animationValue, INCREMENTS[index]);
    tempInterval.maximum = animationValue;
    globalIntervals.push(tempInterval);
}

function increaseCounter(block, maxValue, increment) {
    block.textContent = parseInt(block.textContent) + increment;
    if (parseInt(block.textContent)+increment>maxValue) {
        block.textContent = maxValue;
        clearInterval(countingBlocks.findIndex((item) => {
            return item.dataset.value==maxValue;
        })+2);
    }
}

//counter start
window.addEventListener("scroll", function() {
    if (document.querySelector(".jackpot_items").getBoundingClientRect().top-window.innerHeight<=0 && !counterDone) {
        counterDone = true;
        countingBlocks.forEach((item, index) => {
            startCountingAnimation(item, index);
        });
    }
});

//dark mode

let darkThemeButton = document.querySelector(".dark_theme_button");
let header = document.querySelector("header");
const darkmode =  new Darkmode();
let extenededBg = document.querySelector(".bg_extended img");
let logo = document.querySelector("#topPanel span.logo img");
let partnerInfoImg = document.querySelector(".partner_card img");

document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('body').classList.contains("darkmode--activated")) darkModeToggle();
    window.scrollBy(0, 1);
});

darkThemeButton.addEventListener("click", function() {
    darkModeToggle();
    darkmode.toggle();
});

function darkModeToggle() {
    changeHeaderBackgrounds();
    darkThemeButtonChange();
    logoChange();
    changePartnersLogos();
    
    header.classList.toggle("dark");
}

function changePartnersLogos() {
    Array.from(document.querySelectorAll(".logo_wrapper.changeable img")).forEach(function(item) {
        if (header.classList.contains("dark")) item.src = item.src.replace("/svg_dark", "/svg", 1);
        else item.src = item.src.replace("/svg", "/svg_dark", 1);
    });
}

function changeHeaderBackgrounds() {
    Array.from(document.querySelectorAll(".bg img")).forEach(function(item) {
        if (header.classList.contains("dark")) item.src = item.src.replace("/dark/Layer5.svg", "/Layer5.svg", 1);
        else item.src = item.src.replace("/Layer5.svg", "/dark/Layer5.svg", 1);
    });
}

function darkThemeButtonChange() {
    darkThemeButton.classList.toggle("light");
    if (header.classList.contains("dark")) darkThemeButton.firstElementChild.firstElementChild.setAttribute("xlink:href", "symbol-defs.svg#icon-moon");
    else darkThemeButton.firstElementChild.firstElementChild.setAttribute("xlink:href", "symbol-defs.svg#icon-sun");
}

function logoChange() {
    console.log(logo);
    if (header.classList.contains("dark")) logo.src = logo.src.replace("/dark/logo.svg", "logo.svg", 1);
    else logo.src = logo.src.replace("logo.svg", "/dark/logo.svg", 1);
}


//partnersInfo


let partnerLinks = document.querySelectorAll(".reason .logo_wrapper a");
partnerLinks.forEach((item) => {
    item.addEventListener("click", openPartnerInfo);
});

function openPartnerInfo(e) {
    if(partnerInfoOpened==false) document.querySelector(".logo_wrapper.animated").classList.remove("animated");
}

function scrollBan() {
    if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    window.addEventListener('DOMMouseScroll', preventDefault, false);
}

function scrollAllow() {
    if (window.addEventListener) // older FF
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = null; // modern standard
    window.onmousewheel = document.onmousewheel = null; // older browsers, IE
    window.ontouchmove  = null; // mobile
    window.addEventListener('DOMMouseScroll', null, false);
}

function preventDefault(e) {
    console.log(1);
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

function scrollBan() {
    if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    window.ontouchstart = preventDefault;
    window.addEventListener('DOMMouseScroll', preventDefault, false);
}

function scrollAllow() {
    if (window.addEventListener) // older FF
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
    window.onwheel = null; // modern standard
    window.onmousewheel = document.onmousewheel = null; // older browsers, IE
    window.ontouchstart = null;
    window.ontouchmove  = null; // mobile
    window.addEventListener('DOMMouseScroll', null, false);
}
