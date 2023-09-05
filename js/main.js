/* eslint-env browser */
/*jslint devel: true */


const topPageImages = document.getElementById("top-page").getElementsByTagName("img");

const archesAnimationDelay = 2400;
const buttonLeft = document.querySelectorAll(".shadow-scroll")[0];
const buttonRight = document.querySelectorAll(".shadow-scroll")[1];
var timeOut = 0;
const buttonSpeed = 4;
const slider = document.querySelector("#my-work-content div.content");
var sliderInterval;
//let mouseDown = false;
//let startX, scrollLeft, scrollX, scrollVelocity, scrollTime;
const travelLocations = document.getElementById("travel").getElementsByTagName("ul")[0].children;
const travelImages = document.getElementById("travel").querySelectorAll(".pictures")[0].getElementsByTagName("div");
const moreTravelFactor = .35;

var currentY = 0;
var counter = 0;


function changeImage() {

    "use strict";

    topPageImages[counter % topPageImages.length].className = "hidden";
    topPageImages[(counter + 1) % topPageImages.length].className = "show";

    counter += 1;

}


function archesAnimation(delayTimer) {

    const arches = document.getElementById("arches");
    let distanceFromBottom = arches.getBoundingClientRect().y - window.innerHeight + arches.clientHeight;  // distance of bottom of arches to bottom of screen

    if ((arches.className != "done") && (distanceFromBottom <= 0)) {

        arches.className = "show";

        setTimeout(function () {
            arches.className = "done";
        }, delayTimer);

    }

}


function headerAnimation() {

    const header = document.getElementById("header");
    const arches = document.getElementById("arches").getElementsByTagName("li")[0];
    let distanceFromArches = arches.getBoundingClientRect().y - header.clientHeight;
    let extraDistance = 100;

    if ((distanceFromArches - extraDistance) <= 0) {
        header.className = "show";
    }
    else {
        header.className = "hidden";
    }

}


function breakAnimation() {

    const breakElem = document.getElementById("break");
    let distanceFromBottom = breakElem.getBoundingClientRect().y - window.innerHeight;
    let extraDistance = 300;

    if ((distanceFromBottom + extraDistance) <= 0) {
        breakElem.className = "show";
    }

}

/*
function myWorkAnimation(animationExecuteHeight) {
    
    if (window.scrollY >= animationExecuteHeight) {
        document.getElementById("my-work").getElementsByTagName("h2")[0].className = "show";
    }
    
}
*/


function shadowButtonScrollFix() {

    buttonLeft.style.setProperty("--y", parseInt(buttonLeft.style.getPropertyValue("--y")) + (window.scrollY - currentY));
    buttonRight.style.setProperty("--y", parseInt(buttonRight.style.getPropertyValue("--y")) + (window.scrollY - currentY));

    currentY = window.scrollY;

}


function lowerLineAnimation() {


    const lowerGradient = document.getElementById("lower-page-gradient");
    const aboutMe = document.getElementById("about-me");
    const myWork = document.getElementById("my-work");
    const lowerPage = document.getElementById("lower-page").getElementsByTagName("div")[0];
    const paddingSize = parseInt(window.getComputedStyle(lowerPage).getPropertyValue("--lower-page-padding"));

    let aboutMeY = aboutMe.getBoundingClientRect().y;
    let myWorkY = myWork.getBoundingClientRect().y;
    let lowerPageY = lowerPage.getBoundingClientRect().y;
    let gradientSolidY = lowerGradient.querySelector(".solid").getBoundingClientRect().y;

    let aboutMeDistance = aboutMeY - window.innerHeight;
    let gradientDistance = gradientSolidY - window.innerHeight;
    let myWorkDistance = myWorkY - window.innerHeight;
    let bottomDistance = lowerPageY + lowerPage.clientHeight - window.innerHeight;

    const extraDistance1 = parseInt(aboutMe.clientHeight * .65);
    const extraDistance2 = parseInt(myWork.clientHeight * .3);
    const gradientDistanceAboutMe = gradientDistance - (aboutMeDistance + aboutMe.clientHeight - paddingSize);
    const extraBottomDistance = 200;

    let invisibleWidth = parseInt(window.getComputedStyle(lowerGradient).getPropertyValue("--invisible-width"));

    if ((gradientDistanceAboutMe <= 0) && ((aboutMeDistance + extraDistance1) <= 0) && (invisibleWidth == 0)) {

        lowerGradient.style.setProperty("--invisible-height", `${parseInt(.3 * aboutMe.clientHeight)}px`);
        lowerGradient.style.setProperty("--invisible-height-two", `${-1 * (aboutMeDistance + extraDistance1)}px`);

    }
    else if (((myWorkDistance + extraDistance2) > 0) && (gradientDistanceAboutMe > 0) && (invisibleWidth == 0)) {

        lowerGradient.style.setProperty("--invisible-height", `${parseInt(.3 * aboutMe.clientHeight)}px`);
        lowerGradient.style.setProperty("--invisible-width", `${lowerPage.clientWidth - 2}px`);

    }
    else if (((bottomDistance + extraBottomDistance) > 0) && ((myWorkDistance + extraDistance2) <= 0) && (window.getComputedStyle(lowerGradient).getPropertyValue("opacity") != "0")) {

        lowerGradient.style.setProperty("--invisible-height", `${parseInt(.5 * aboutMe.clientHeight)}px`);
        lowerGradient.style.setProperty("--invisible-width", `${lowerPage.clientWidth - 2}px`);
        lowerGradient.style.setProperty("--invisible-height-two", `${-1 * (aboutMeDistance + extraDistance1)}px`);

    }
    else if ((bottomDistance + extraBottomDistance) <= 0) {

        lowerGradient.style.setProperty("--invisible-height-two", `${lowerPage.clientHeight}px`);
        lowerGradient.style.setProperty("--invisible-width", `${lowerPage.clientWidth - 2}px`);
        lowerGradient.style.setProperty("opacity", 0);

    }

}


function setAutoScrollInterval() {

    sliderInterval = setInterval(function () {
        mySiema.next();
    }, 5000);

}


function travelAnimation() {

    const travelElem = document.getElementById("bottom-page");
    let distanceFromBottom = travelElem.getBoundingClientRect().y - window.innerHeight;
    let extraDistance = parseInt(travelElem.clientHeight * .25);

    if ((distanceFromBottom + extraDistance) <= 0) {
        travelElem.getElementsByTagName("h2")[0].className = "show";
    }

}


function travelPictureAnimation() {

    const travelElem = document.getElementById("bottom-page");
    let distanceFromBottom = travelElem.getBoundingClientRect().y - window.innerHeight;
    let extraDistance = parseInt(travelElem.clientHeight * .75);

    if (((distanceFromBottom + extraDistance) <= 0) && (travelLocations[0].className == "0")) {
        travelLocations[0].className = "0 show";
        travelImages[0].className = "0 show";

        for (let i = 0; i < travelLocations.length; i++) {
            travelLocationListener(travelLocations[i]);
        }
    }

}


function travelLocationListener(elem) {

    elem.addEventListener('click', function () {

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


function moreTravelBackgroundAnimation(factor) {

    const moreTravelElem = document.getElementById("more-travel");
    let distanceFromBottom = moreTravelElem.getBoundingClientRect().y - window.innerHeight;
    let distanceFromTop = moreTravelElem.getBoundingClientRect().y + moreTravelElem.clientHeight;

    if ((distanceFromBottom <= 0) && (distanceFromTop >= 0)) {

        moreTravelElem.getElementsByTagName("img")[0].style.top = (factor * -1 * distanceFromBottom) + "px";

    }

}

function scrollFunctions() {

    archesAnimation(archesAnimationDelay);
    headerAnimation();
    // breakAnimation();
    //    myWorkAnimation(myWorkAnimationHeight);
    shadowButtonScrollFix();
    lowerLineAnimation();
    travelAnimation();
    travelPictureAnimation();
    moreTravelBackgroundAnimation(moreTravelFactor);

}


window.onload = function () {

    document.getElementById("top-page").getElementsByTagName("h2")[0].className = "loaded";
    document.getElementById("top-page").getElementsByTagName("h2")[1].className = "loaded";

    scrollFunctions();
    setAutoScrollInterval();

}


window.onscroll = scrollFunctions;


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

buttonLeft.addEventListener("click", function () {

    mySiema.prev();
    clearInterval(sliderInterval);

    setTimeout(setAutoScrollInterval(), 5000);

});

buttonRight.addEventListener("click", function () {

    mySiema.next();
    clearInterval(sliderInterval);

    setTimeout(setAutoScrollInterval(), 5000);

});

$("#my-work-content div.content").bind('mousedown touchstart', function () {

    clearInterval(sliderInterval);

    buttonLeft.style.setProperty("width", 0);
    buttonRight.style.setProperty("width", 0);
    buttonRight.style.setProperty("margin-left", 'var(--button-width)');

});

$("#my-work-content div.content").bind('mouseup mouseleave touchend', function () {

    clearInterval(sliderInterval);
    setAutoScrollInterval();

    if (buttonLeft.style.getPropertyValue('width') == '0px') {

        buttonLeft.style.setProperty("width", 'var(--button-width)');
        buttonRight.style.setProperty("width", 'var(--button-width)');
        buttonRight.style.setProperty("margin-left", 0);

    }

});


setInterval(changeImage, 5000);

