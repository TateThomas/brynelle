/* eslint-env browser */
/*jslint devel: true */


const topPageImages = document.getElementById("top-page").getElementsByTagName("img");
const archesAnimationValues = {
    "height": 370,
    "delay": 2400
};
const headerAnimationHeight = 850;
const breakAnimationHeight = 1000;
const myWorkAnimationHeight = 2300;
const lineAnimationHeights = {
    "show": 1700,
    "more": 2100,
    "hidden": 3200
};
const buttonLeft = document.querySelectorAll(".shadow-scroll")[0];
const buttonRight = document.querySelectorAll(".shadow-scroll")[1];
const travelAnimationHeight = 3250;
const travelPictureAnimationHeight= 3750;
const travelLocations = document.getElementById("travel").getElementsByTagName("ul")[0].children;
const travelImages = document.getElementById("travel").querySelectorAll(".pictures")[0].getElementsByTagName("div");
const moreTravelBackgroundImage = document.getElementById("more-travel").getElementsByTagName("img")[0];
const moreTravelAnimationValues = {
    "start": 4000,
    "end": 5300,
    "factor": .2
};

var currentY = 0;
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


function shadowButtonScrollFix() {
    
    buttonLeft.style.setProperty("--y", parseInt(buttonLeft.style.getPropertyValue("--y")) + (window.scrollY - currentY));
    
    buttonRight.style.setProperty("--y", parseInt(buttonRight.style.getPropertyValue("--y")) + (window.scrollY - currentY));
    
    currentY = window.scrollY;
    
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


function travelAnimation(animationExecuteHeight) {
    
    if (window.scrollY >= animationExecuteHeight) {
        document.getElementById("bottom-page").getElementsByTagName("h2")[0].className = "show";
    }
    
}


function travelPictureAnimation(animationExecuteHeight) {
    
        if ((window.scrollY >= animationExecuteHeight) && (travelLocations[0].className == "0")) {
            travelLocations[0].className = "0 show";
            travelImages[0].className = "0 show";
            
            for (let i = 0; i < travelLocations.length; i++) {
                travelLocationListener(travelLocations[i]);
            }
        }
    
}


function travelLocationListener(elem) {
    
    elem.addEventListener('click', function() {
        
            let elemIndex = parseInt(elem.className[0]);
            for (let i = 0; i < travelLocations.length; i++) {
                if (travelLocations[i].className[2] == 's') {
                    var currentIndex = parseInt(travelLocations[i].className[0]);
                }
            }

            travelLocations[currentIndex].className = currentIndex + " hidden";
            travelImages[currentIndex].className = currentIndex + " hidden";

            elem.className = elemIndex + " show";
            travelImages[elemIndex].className = elemIndex + " show"
        
    });
    
}


function moreTravelBackgroundAnimation(animationStartHeight, animationEndHeight, factor) {
    
    if ((window.scrollY >= animationStartHeight) && (window.scrollY < animationEndHeight)) {
        
        moreTravelBackgroundImage.style.top = (factor * (window.scrollY - animationStartHeight)) + "px";
        
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
    shadowButtonScrollFix();
    lowerLineAnimation(lineAnimationHeights.show, lineAnimationHeights.more, lineAnimationHeights.hidden);
    travelAnimation(travelAnimationHeight);
    travelPictureAnimation(travelPictureAnimationHeight);
    moreTravelBackgroundAnimation(moreTravelAnimationValues.start, moreTravelAnimationValues.end, moreTravelAnimationValues.factor);
    
}


buttonLeft.addEventListener("mousemove", (e) => {
    
    const { x, y } = buttonLeft.getBoundingClientRect();
    buttonLeft.style.setProperty("--x", e.clientX - x);
    buttonLeft.style.setProperty("--y", e.clientY - y);
    currentY = window.scrollY;
    
});

buttonRight.addEventListener("mousemove", (e) => {
    
    const { x, y } = buttonRight.getBoundingClientRect();
    buttonRight.style.setProperty("--x", e.clientX - x);
    buttonRight.style.setProperty("--y", e.clientY - y);
    currentY = window.scrollY;
    
});


setInterval(changeImage, 5000);

