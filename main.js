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

setInterval(changeImage, 5000);