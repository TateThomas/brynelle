/* eslint-env browser */
/*jslint devel: true */


const topPageImages = document.getElementById("top-page").getElementsByTagName("img");
const archesAnimationValues = {
    "height": 370,
    "delay": 2400
}
const headerAnimationHeight = 850;
const breakAnimationHeight = 950;
const myWorkAnimationHeight = 2200;
const lineAnimationHeights = {
    "show": 1600,
    "more": 2000,
    "hidden": 3100
}
const buttonLeft = document.querySelectorAll(".shadow-scroll")[0];
const buttonRight = document.querySelectorAll(".shadow-scroll")[1];
var counter = 0;


function changeImage() {
    
    "use strict";
    
    topPageImages[counter % topPageImages.length].className = "hidden";
    topPageImages[(counter + 1) % topPageImages.length].className = "show";

    counter += 1;
    
}


function archesAnimation(animationExecuteHeight, delayTimer) {
    
    const arches = document.getElementById("arches");
    if ((arches.className != "done") && (window.scrollY >= animationExecuteHeight)) {
        
        arches.className = "show";
        
        setTimeout(function() {
            arches.className = "done";
        }, delayTimer);
        
    }
    
}


function headerAnimation(animationExecuteHeight) {
    
    const header = document.getElementById("header");
    if (window.scrollY >= animationExecuteHeight) {
        header.className = "show";
    }
    else {
        header.className = "hidden";
    }
    
}


function breakAnimation(animationExecuteHeight) {
    
    if (window.scrollY >= animationExecuteHeight) {
        document.getElementById("break").className = "show";
    }
    
}


function myWorkAnimation(animationExecuteHeight) {
    
    if (window.scrollY >= animationExecuteHeight) {
        document.getElementById("my-work").getElementsByTagName("h2")[0].className = "show";
    }
    
}


function lowerLineAnimation(showHeight, moreHeight, hiddenHeight) {
    
    const lowerGradient = document.getElementById("lower-page-gradient");
    if (window.scrollY < showHeight) {
        lowerGradient.className = "";
    }
    else if ((window.scrollY >= showHeight) && (window.scrollY < moreHeight)) {
        lowerGradient.className = "show";
    }
    else if ((window.scrollY >= moreHeight) && (window.scrollY < hiddenHeight)) {
        lowerGradient.className = "more";
    }
    else {
        lowerGradient.className = "hidden";
    }
    
}


window.onload = function() {
    
    document.getElementById("top-page").getElementsByTagName("h2")[0].className = "loaded";
    document.getElementById("top-page").getElementsByTagName("h2")[1].className = "loaded";
    
}


window.onscroll = function() {
    
    archesAnimation(archesAnimationValues.height, archesAnimationValues.delay);
    headerAnimation(headerAnimationHeight);
    breakAnimation(breakAnimationHeight);
    myWorkAnimation(myWorkAnimationHeight);
    lowerLineAnimation(lineAnimationHeights.show, lineAnimationHeights.more, lineAnimationHeights.hidden);
    
}


buttonLeft.addEventListener("mousemove", (e) => {
    
    const { x, y } = buttonLeft.getBoundingClientRect();
    buttonLeft.style.setProperty("--x", e.clientX - x);
    buttonLeft.style.setProperty("--y", e.clientY - y);
    
});

buttonRight.addEventListener("mousemove", (e) => {
    
    const { x, y } = buttonRight.getBoundingClientRect();
    buttonRight.style.setProperty("--x", e.clientX - x);
    buttonRight.style.setProperty("--y", e.clientY - y);
    
});


setInterval(changeImage, 5000);

