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
    if (document.getElementById("arches").getElementsByTagName("li")[0].className != "done" && (document.body.scrollTop >= 370 || document.documentElement.scrollTop >= 370)) {
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
    
    if (document.body.scrollTop >= 850 || document.documentElement.scrollTop >= 850) {
        document.getElementById("header").className = "show";
    }
    else {
        document.getElementById("header").className = "hidden";
    }
    
    if (document.body.scrollTop >= 900 || document.documentElement.scrollTop >= 900) {
        document.getElementById("break").className = "show";
    }
    
    if (document.body.scrollTop >= 2800 || document.documentElement.scrollTop >= 2800) {
        document.getElementById("lower-page-gradient").className = "hidden";
    }
    else {
        document.getElementById("lower-page-gradient").className = "";
    }
}

const button1 = document.querySelectorAll(".shadow-scroll")[0];
button1.addEventListener("mousemove", (e) => {
    const { x, y } = button1.getBoundingClientRect();
    button1.style.setProperty("--x", e.clientX - x);
    button1.style.setProperty("--y", e.clientY - y);
});

const button2 = document.querySelectorAll(".shadow-scroll")[1];
button2.addEventListener("mousemove", (e) => {
    const { x, y } = button2.getBoundingClientRect();
    button2.style.setProperty("--x", e.clientX - x);
    button2.style.setProperty("--y", e.clientY - y);
});

setInterval(changeImage, 5000);
