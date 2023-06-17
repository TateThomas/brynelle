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

window.onload = function() {
    document.getElementById("top-page").getElementsByTagName("h2")[0].className = "loaded";
    document.getElementById("top-page").getElementsByTagName("h2")[1].className = "loaded";
}

window.onscroll = function() {
    if (document.getElementById("arches").getElementsByTagName("li")[0].className != "done" && (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200)) {
        document.getElementById("arches").getElementsByTagName("li")[0].className = "show";
        setTimeout(function() {
            document.getElementById("arches").getElementsByTagName("li")[1].className = "show";
            setTimeout(function() {
                document.getElementById("arches").getElementsByTagName("li")[2].className = "show";
                setTimeout(function() {
                    document.getElementById("arches").getElementsByTagName("li")[0].className = "done";
                    document.getElementById("arches").getElementsByTagName("li")[1].className = "done";
                    document.getElementById("arches").getElementsByTagName("li")[2].className = "done";
                }, 2000);
            }, 200);
        }, 200);
    }
    if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
        document.getElementById("header").className = "show";
    }
    else {
        document.getElementById("header").className = "hidden";
    }
}

setInterval(changeImage, 5000);