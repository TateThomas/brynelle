
const prevButton = document.querySelector("div.prev");
const nextButton = document.querySelector("div.next");
const pictures = document.querySelector("div.pictures > ul");
const descArray = document.querySelectorAll("ul.desc > li");
const transitionTime = pictures
const totalPictures = pictures.getElementsByTagName("li").length;
let currentPicture = 0;
let offsetPicture = 2;
let transform = 0;


function changePicture(direction) {
    
    descArray[currentPicture].className = descArray[currentPicture].className.replace("show", "hidden");
    
    offsetPicture += direction;
    currentPicture = (currentPicture + direction) % totalPictures;
    if (currentPicture < 0) {
        currentPicture = totalPictures - 1;
    }
    
    pictures.style.setProperty("--current-picture", offsetPicture);
    descArray[currentPicture].className = descArray[currentPicture].className.replace("hidden", "show");
    
    if ((currentPicture == 8) && (direction == -1)) {
    
        transform -= 1;
        
        if (transform < 0) {
            pictures.style.setProperty("transform", "translateY(var(--negative-height))".repeat(totalPictures * (transform * -1)));
        }
        else if (transform == 0) {
            pictures.style.setProperty("transform", "");
        }
        else {
            pictures.style.setProperty("transform", "translateY(var(--element-height))".repeat(totalPictures * transform));
        }
        
    }
    else if ((currentPicture == 0) && (direction == 1)) {
        
        transform += 1;
        
        if (transform < 0) {
            pictures.style.setProperty("transform", "translateY(var(--negative-height))".repeat(totalPictures * (transform * -1)));
        }
        else if (transform == 0) {
            pictures.style.setProperty("transform", "");
        }
        else {
            pictures.style.setProperty("transform", "translateY(var(--element-height))".repeat(totalPictures * transform));
        }
        
    }
    
}


prevButton.addEventListener('click', function() {
    changePicture(-1);
});

nextButton.addEventListener('click', function() {
    changePicture(1);
});


window.onload = function() {
    
    const pictureArray = pictures.getElementsByTagName("li");
    const firstPic = pictureArray[0].cloneNode(true);
    const secondPic = pictureArray[1].cloneNode(true);
    const secondToLastPic = pictureArray[totalPictures - 2].cloneNode(true);
    const lastPic = pictureArray[totalPictures - 1].cloneNode(true);
    
    pictures.insertBefore(lastPic, pictureArray[0]);
    pictures.insertBefore(secondToLastPic, lastPic);
    pictures.appendChild(firstPic);
    pictures.appendChild(secondPic);
    
}
