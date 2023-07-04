/* eslint-env browser */
/*jslint devel: true */


const filters = ["type", "location", "lighting"];

var typeFilters = ["weddings", "engagements", "couples", "families", "portraits", "elopements"];
var locationFilters = ["mountains", "lakes", "downtown", "salt-flats", "antelope-island", "fields", "sand-dunes", "roadside", "studio", "moab", "las-vegas"];
var lightingFilters = ["sunrise", "full-sun", "golden-hour", "blue-hour", "flash", "indoor"];


function makeListInnerHTML(elementName) {
    
    let nameSplit = elementName.split("-");
    let presentableName = "";
    
    for (let i = 0; i < nameSplit.length; i++) {
        presentableName += nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);
        
        if ((i + 1) < nameSplit.length) {
            presentableName += " ";
        }
    }
    
    return `
        <input type="checkbox" id="${elementName}" name="${elementName}">
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
        newLi.innerHTML = makeListInnerHTML(workingArray[i]);
        currentList.appendChild(newLi);
    }
    
}


function showHeader() {
    
    $("#header").attr("class", "show");
}


initializeList("type", typeFilters, true);
initializeList("location", locationFilters, true);
initializeList("lighting", lightingFilters, false);

//document.getElementById("header").className = "show";
//$("#header").attr("class", "show")
window.onload = function() {
    showHeader();
};
