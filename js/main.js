'esversion: 6';

let clicksDone = false;

let counterDone = false;

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
let closeMenuBtn = document.querySelector("svg.icon-cancel");

let mobileMenuLinks = document.querySelectorAll("nav.mobile a");


mobileMenuOpenButton.onclick = function() {
    mobileMenu.style.display = "flex";
    setTimeout(() => {
        mobileMenu.classList.add("active");
        document.querySelector("html").style.overflowY = "hidden";
    }, 10);
    
    setTimeout(() => {
        animBlockWrapper.style.display = "block";
        animBlock.style.animation = "whiteBlock .7s cubic-bezier(.23,.45,.38,.84)";
        setTimeout(() => {
            animBlockWrapper.style.display = "none";
            animBlock.style.animation = "";
            mobileNav.classList.add("active");
            closeMenuBtn.classList.add("active");
        }, 700);
    }, 1100);
}

closeMenuBtn.onclick = function() {
    mobileMenu.classList.remove("active");
    mobileNav.classList.remove("active");
    closeMenuBtn.classList.remove("active");
    document.querySelector("html").style.overflowY = "scroll";
    setTimeout(() => {
        mobileMenu.style.display = "none";
    }, 1000);
}

mobileMenuLinks.forEach((item) => {
    item.onclick = function() {
        setTimeout(() => {
            mobileMenu.classList.remove("active");
            mobileMenu.style.position = "absolute";
            mobileNav.classList.remove("active");
            closeMenuBtn.classList.remove("active");
            document.querySelector("html").style.overflowY = "scroll";
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

const INCREMENTS = [1, 1, 267];
const INTERVALS = [150, 100, 25];

function startCountingAnimation(animatedBlock, index) {
    let animationValue = animatedBlock.dataset.value;
    tempInterval = setInterval(increaseCounter, INTERVALS[index], animatedBlock, animationValue, INCREMENTS[index]);
    tempInterval.maximum = animationValue;
    globalIntervals.push(tempInterval);
}

function increaseCounter(block, maxValue, increment) {
    block.textContent = parseInt(block.textContent) + increment;
    if (parseInt(block.textContent)+increment>=maxValue) {
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


