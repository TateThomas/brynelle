/* eslint-env browser */
/*jslint devel: true */


const filters = ["type", "location", "lighting"];

var typeFilters = ["weddings", "engagements", "couples", "families", "portraits", "bridals", "friends"];
var locationFilters = ["mountains", "lakes", "downtown", "salt-flats", "antelope-island", "fields", "sand-dunes", "roadside", "studio", "moab", "las-vegas", "goblin-valley", "desert", "little-white-chapel", "parks", "snow", "forest", "utah-lake", "limousine", "fall-trees", "arches", "dead-horse", "mansion"];
var lightingFilters = ["sunrise", "full-sun", "golden-hour", "sunset", "blue-hour", "flash", "indoor"];


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
    
    let filterElement = document.getElementById("filters");
    
    if (filterElement.className == "show") {
        filterElement.className = "hidden";
    }
    else {
        filterElement.className = "show";
    }
    
}


function showHeader() {
    
    $("#header").attr("class", "show");
    
}

function updateScrollY() {

    document.getElementById("photos").style.setProperty('--scroll-y', window.scrollY.toString() + "px");

}


document.onreadystatechange = function(e) {
    
    if (document.readyState === 'complete') {
        showHeader();
    }
    
}

initializeList("type", typeFilters, true);
initializeList("location", locationFilters, true);
initializeList("lighting", lightingFilters, false);

window.onload = function() {
    showHeader();
    database.updateUserPage();
};

window.onscroll = function() {
    updateScrollY();
}

document.getElementById("filters").getElementsByTagName("div")[0].addEventListener('click', toggleFilters);
