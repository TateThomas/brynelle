
function headerAnimation() {

    const header = document.getElementById("header");
    const info = document.getElementById("top-page").querySelector(".info");
    const iconBreak1 = document.getElementById("icons").getElementsByTagName("h1")[0];
    const ig = document.getElementById("ig");

    let distanceFromInfo = info.getBoundingClientRect().y - header.clientHeight;
    let distanceFromPhotos = iconBreak1.getBoundingClientRect().y + iconBreak1.clientHeight - header.clientHeight;
    let distanceFromIg = ig.getBoundingClientRect().y - header.clientHeight;

    let extraDistance = 100;

    if ((distanceFromInfo - extraDistance) > 0) {
        header.className = "hidden";
    }
    else if ((distanceFromPhotos > 0) && ((distanceFromInfo - extraDistance) <= 0)) {
        header.className = "show";
    }
    else if (((distanceFromIg - extraDistance) > 0) && (distanceFromPhotos <= 0)) {
        header.className = "hidden";
    }
    else {
        header.className = "show";
    }

}


function scrollFunctions() {

    headerAnimation();

}


window.onscroll = scrollFunctions;
