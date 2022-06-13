/* eslint-env browser */
/*jslint devel: true */

var getImage = document.getElementById("top-page").getElementsByTagName("img");
var counter = 0;

function changeImage() {
    "use strict";
    if (counter > (getImage.length - 1)) {
        counter = 0;
    }
    
    getImage[counter].className = "hidden";
    if (counter === (getImage.length - 1)) {
        getImage[0].className = "show";
    } else {
        getImage[counter + 1].className = "show";
    }

    counter += 1;
}

setInterval(changeImage, 3000);

var burger = document.getElementById("burger");
var links = document.getElementById("links");

burger.onclick = function () {
    
    "use strict";
    if (burger.getElementsByTagName("span")[0].className === "open") {
        burger.getElementsByTagName("span")[0].className = "";
        burger.getElementsByTagName("span")[1].className = "";
        burger.getElementsByTagName("span")[2].className = "";
        links.className = "";
    } else {
        burger.getElementsByTagName("span")[0].className = "open";
        burger.getElementsByTagName("span")[1].className = "open";
        burger.getElementsByTagName("span")[2].className = "open";
        links.className = "open";
    }
    
};

alert(window.screen.width);
alert(window.screen.height);