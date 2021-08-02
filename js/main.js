'esversion: 6';

let clicksDone = false;

//price mode swap

let modeSwapMenu = document.querySelector("div.mode_swap");
let priceTypes = document.querySelectorAll("div.mode_swap span");
let animationBg = document.querySelector("span.blue_back");
let priceCards = document.querySelectorAll("div.price_card")

modeSwapMenu.addEventListener("click", function(event) {
    if (priceTypes[0].classList.contains("active")) {
        priceTypes[0].classList.remove("active");
        priceTypes[1].classList.add("active");
        animationBg.style.left = "140px";
        priceCards.forEach(function(el) {
            if (el.classList.contains("monthly")) el.style.display = "none";
            else el.style.display = "block";
        });
    } else {
        priceTypes[1].classList.remove("active");
        priceTypes[0].classList.add("active");
        animationBg.style.left = "0";
        priceCards.forEach(function(el) {
            if (el.classList.contains("annually")) el.style.display = "none";
            else el.style.display = "block";
        });
    }
});

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

//client review slider auto rotating

function prevSlideAuto() {
    if (clicksDone==false) {
        sliderItems.forEach(function(item) {
            percentage = parseInt(parseInt(window.getComputedStyle(item, null).getPropertyValue("left"))/parseInt(window.getComputedStyle(item, null).getPropertyValue("width")))*100;
            item.style.left = (percentage+100)+"%";
            item.style.visibility = (item.style.left=="0%") ? "visible" : "hidden";
        });
    }
}

function nextSlideAuto() {
    if (clicksDone==false) {
        sliderItems.forEach(function(item) {
            percentage = parseInt(parseInt(window.getComputedStyle(item, null).getPropertyValue("left"))/parseInt(window.getComputedStyle(item, null).getPropertyValue("width")))*100;
            item.style.left = (percentage-100)+"%";
            item.style.visibility = (item.style.left=="0%") ? "visible" : "hidden";
        });
    }
}

function autoSlide() {
        if (window.getComputedStyle(sliderItems[0], null).getPropertyValue("left")=="0px") {
            for (let i = 0; i<3; i++) {
                setTimeout(function() {
                    nextSlideAuto();
                }, 10000*i);
            }
        }
        if (window.getComputedStyle(sliderItems[3], null).getPropertyValue("left")=="0px") {
            console.log(2);
            for (let i = 0; i<3; i++) {
                setTimeout(function() {
                    prevSlideAuto();
                }, 10000*i);
            }
        }
}

autoSlide();

setInterval(autoSlide, 30000);

//accordion

accordionOpenBtns = document.querySelectorAll("svg.icon-plus");

accordionOpenBtns.forEach(function(item) {
    item.addEventListener("click", openAccordion);
});

function openAccordion() {
    console.log(this.parentElement.children[1]);
    this.style.display = "none";
    this.parentElement.children[1].style.display = "block";
    setTimeout(() => {
        this.parentElement.classList.add("opened");
        this.parentElement.children[1].style.marginTop = '40px';
    }, 4);
    setTimeout(()=> {
        this.parentElement.classList.add("animated");
    }, 100);
}

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

