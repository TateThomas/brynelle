const topElement = document.getElementById("top");
let topButton = `
        <span class="arrow"></span>
        <span class="inner"></span>
`;

topElement.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', function () {

    let topOffset = window.innerHeight * .75;
    let y = window.scrollY;

    if (y > topOffset) {
        topElement.className = "show";
    }
    else {
        topElement.className = "hidden";
    }

});

topElement.innerHTML = topButton;
