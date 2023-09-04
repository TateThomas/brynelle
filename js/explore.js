/* eslint-env browser */
/*jslint devel: true */


const filters = ["type", "location", "lighting"];

var typeFilters = ['elopements', 'engagements', 'bridals', 'couples', 'friends', 'portraits', 'weddings', 'families'];
var locationFilters = ['goblin-valley', 'moab', 'sand-dunes', 'antelope-island', 'utah-mountains', 'roadside', 'fall-trees', 'little-white-chapel', 'las-vegas', 'studio', 'downtown', 'parks', 'forest', 'snow', 'salt-flats', 'utah-lake', 'lakes', 'utah-county', 'arches', 'dead-horse', 'luxury-venue', 'fields', 'eagle-mountain', 'tibble-fork', 'salt-lake'];
var lightingFilters = ["sunrise", "full-sun", "cloudy", "shaded", "sunset", "blue-hour", "flash", "indoor"];
var database = new Database();


function makeListInnerHTML(elementName, listName) {

    let nameSplit = elementName.split("-");
    let presentableName = "";

    for (let i = 0; i < nameSplit.length; i++) {
        presentableName += nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);

        if ((i + 1) < nameSplit.length) {
            presentableName += " ";
        }
    }

    return `
        <input type="checkbox" id="${elementName}" class="${listName}" name="${elementName}">
        <label for="${elementName}">${presentableName}</label>
    `;

}


function initializeList(listId, filterArray, sortBool) {

    let currentList = document.getElementById(listId).getElementsByTagName("ul")[0];
    let workingArray;

    if (sortBool === true) {
        workingArray = filterArray.sort();
    }
    else {
        workingArray = filterArray;
    }

    for (let i = 0; i < workingArray.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = makeListInnerHTML(workingArray[i], listId);
        currentList.appendChild(newLi);
    }

}


function toggleFilters() {

    const filterElement = document.getElementById("filters");

    if (filterElement.className == "show") {
        filterElement.className = "hidden";
    }
    else {
        filterElement.className = "show";
    }

}


function removeAllFilters(e) {

    const checkedBoxArray = document.querySelectorAll(`#${e.currentTarget.classList[1]} input:checked`);
    let filterType, filterSpecifier;

    for (let i = 0; i < checkedBoxArray.length; i++) {

        checkedBoxArray[i].checked = false;

        filterType = checkedBoxArray[i].parentElement.parentElement.parentElement.id;
        filterSpecifier = checkedBoxArray[i].id;

        database.updateFilters(filterType, filterSpecifier, false);

    }

}


function setUpFilterTabListeners() {

    const buttonArray = document.querySelectorAll(".amount");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('click', removeAllFilters);
    }

}


function filtersTabFollow() {

    const filterElem = document.getElementById("filters");
    const filterTabElem = document.getElementById("tab");
    const extraDistance = 25;
    let startingTop = parseInt(getComputedStyle(document.getElementById("tab")).getPropertyValue("--starting-top"));

    let filterY = filterElem.getBoundingClientRect().y;

    let distanceFromStarting = filterY - extraDistance;
    let maxDistance = filterElem.clientHeight - filterTabElem.clientWidth - startingTop + 20;

    if (distanceFromStarting >= 0) {
        filterTabElem.style.setProperty("--follow-distance", "0px");
    }
    else if (((distanceFromStarting + maxDistance) > 0) && (distanceFromStarting < 0)) {
        filterTabElem.style.setProperty("--follow-distance", `${-1 * distanceFromStarting}px`);
    }
    else {
        filterTabElem.style.setProperty("--follow-distance", `${maxDistance}px`);
    }

}


function expandedFollow() {

    const expandedElem = document.querySelector(".expanded div.container");
    if ((expandedElem != null) && (expandedElem.classList[1] == "small")) {
        expandedElem.style.setProperty("top", (-1 * expandedElem.parentElement.getBoundingClientRect().y) + "px");
    }

}


function loadMorePhotos() {

    const photosElem = document.getElementById("photos");
    let distanceFromBottom = photosElem.getBoundingClientRect().y + photosElem.clientHeight - window.innerHeight;
    const imageHeight = parseInt(window.getComputedStyle(photosElem).getPropertyValue("--image-height"));
    const totalRows = parseInt(window.getComputedStyle(photosElem).getPropertyValue("--total-rows"));
    const distanceMultiplier = 1.5;

    if ((distanceFromBottom - (imageHeight * distanceMultiplier)) <= 0) {

        console.log("loaded");
        photosElem.style.setProperty("--total-rows", totalRows + 5);

    }

}


initializeList("type", typeFilters, true);
initializeList("location", locationFilters, true);
initializeList("lighting", lightingFilters, false);

window.onscroll = function () {

    expandedFollow();
    filtersTabFollow();
    loadMorePhotos();

};

window.onload = function () {

    document.getElementById("filters").getElementsByTagName("img")[0].addEventListener('click', toggleFilters);

    setUpFilterTabListeners();
    expandedFollow();
    filtersTabFollow();
    setTimeout(loadMorePhotos, 500);

}

var myInterval = setInterval(function () {

    if (document.getElementById("photos").className == "not-loaded") {
        console.log("here");
        database.changeSortingMethod();
        database.updateUserPage();
    }
    else {
        console.log("complete");
        clearInterval(myInterval);
    }

}, 100);
