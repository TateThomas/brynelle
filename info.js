
const infoObj = {
    "Question Group 1": {
        "Question 1": "Answer 1",
        "Question 2": "Answer 2",
        "Question 3": "Answer 3",
        "Question 4": "Answer 4",
        "Question 5": "Answer 5",
        "Question 6": "Answer 6",
        "Question 7": "Answer 7",
        "Question 8": "Answer 8",
        "Question 9": "Answer 9",
        "Question 10": "Answer 10",
        "Question 11": "Answer 11",
        "Question 12": "Answer 12"
    },
    "Question Group 2": {
        "Question 1": "Answer 1",
        "Question 2": "Answer 2",
        "Question 3": "Answer 3",
        "Question 4": "Answer 4",
        "Question 5": "Answer 5",
        "Question 6": "Answer 6",
        "Question 7": "Answer 7",
        "Question 8": "Answer 8",
        "Question 9": "Answer 9"
    },
    "Question Group 3": {
        "Question 1": "Answer 1",
        "Question 2": "Answer 2",
        "Question 3": "Answer 3",
        "Question 4": "Answer 4",
        "Question 5": "Answer 5",
    }
};
const pictureList = [
    "images/info/leaf.jpg",
    "images/info/flower.jpg",
    "images/info/moon.jpg",
];


function openInfo(elem) {
    
    elem.addEventListener('click', function() {
    
        if (elem.classList[1] == "hidden")
            elem.className = elem.className.replace("hidden", "show");
        else {
            elem.className = elem.className.replace("show", "hidden");
        }
        
    });
    
}


function contentsHTMLtemplate(question, elemId, sublistHTML) {
    
    return `
                    <li class="hidden">
                        <span onclick="location.href='#${elemId}'">
                            <h3 name="${elemId}"><span>${question}</h3></span>
                            <ul>
                                ${sublistHTML}
                            </ul>
                        </span>
                    </li>
    `;
    
}

function contentsSublistHTMLtemplate(question, elemId) {
    
    return `
                            <li>
                                <span onclick="location.href='#${elemId}'">
                                    <h3 name="${elemId}"><span>${question}</h3></span>
                                </span>
                            </li>
    `;
    
}


function questionHTMLtemplate(question, answer, elemId) {
    
    return `
                        <div id="${elemId}" class="dropdown hidden">

                            <div>
                                <div class="container">
                                    
                                    <h2>${question}</h2>
                                    
                                    <div class="icon">
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <p>${answer}</p>
                            </div>

                            <span></span>

                        </div>
    `;
    
}


function initInfo(info, pictures, rowsPerPic) {
    
    const contents = document.getElementById("contents").getElementsByTagName("ul")[0];
    const infoElem = document.getElementById("groups");
    
    const infoGroups = Object.keys(info);
    let toggle = true;
    let nthPicture = 0;
    let contentsHTML = "";
    let finalHTML = "";
    let groupHTML = "";
    let elemId;
    
    for (let i = 0; i < infoGroups.length; i++) {
        
        const infoGroup = info[infoGroups[i]];
        const questionsList = Object.keys(infoGroup);
        let contentsSublistHTML = "";
        let setHTML, sublistId;
        
        elemId = infoGroups[i].replaceAll(" ", "-").toLowerCase();
        
        groupHTML = `<h2>${infoGroups[i]}</h2>`;
        
        for (let j = 0; j < questionsList.length; j++) {
            
            sublistId = `${infoGroups[i].replaceAll(" ", "-").toLowerCase()}-${j}`;
            contentsSublistHTML += contentsSublistHTMLtemplate(questionsList[j], sublistId);
            
            if ((j % rowsPerPic) == 0) {
                setHTML = "";
            }
            
            if ((((j % rowsPerPic) == (rowsPerPic - 1)) || ((j + 1) == questionsList.length)) && toggle) {
                
                groupHTML += `
                <div class="set">
                    <div class="picture">
                        <img src="${pictures[nthPicture % pictures.length]}">
                    </div>
                    <div class="questions">
                        ${setHTML + questionHTMLtemplate(questionsList[j], infoGroup[questionsList[j]], sublistId)}
                    </div>
                </div>
                `;
                
                toggle = false;
                nthPicture += 1;
                
            }
            else if ((((j % rowsPerPic) == (rowsPerPic - 1)) || ((j + 1) == questionsList.length)) && !toggle) {
                
                groupHTML += `
                <div class="set">
                    <div class="questions">
                        ${setHTML + questionHTMLtemplate(questionsList[j], infoGroup[questionsList[j]], sublistId)}
                    </div>
                    <div class="picture">
                        <img src="${pictures[nthPicture % pictures.length]}">
                    </div>
                </div>
                `;
                
                toggle = true;
                nthPicture += 1;
                
            }
            else if ((j % rowsPerPic) == 0) {
                
                setHTML = questionHTMLtemplate(questionsList[j], infoGroup[questionsList[j]], sublistId);
                
            }
            else {
                
                setHTML += questionHTMLtemplate(questionsList[j], infoGroup[questionsList[j]], sublistId);
                
            }
            
        }
        
        finalHTML += `
            <div id="${elemId}" class="group">
                ${groupHTML}
            </div>
        `;
        
        contentsHTML += contentsHTMLtemplate(infoGroups[i], elemId, contentsSublistHTML);
        
    }
    
    contents.innerHTML = contentsHTML;
    infoElem.innerHTML = infoElem.innerHTML + finalHTML;
    
    const dropdowns = document.querySelectorAll(".dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
        openInfo(dropdowns[i]);
    }
    
}


function contentsFollow() {
    
    const allInfoElem = document.getElementById("info");
    const infoElem = allInfoElem.getElementsByTagName("div")[0];
    const contents = document.getElementById("contents");
    
    let distanceFromBottomInfo = allInfoElem.getBoundingClientRect().y + allInfoElem.clientHeight - window.innerHeight;
    let distanceFromBottomContents = contents.getBoundingClientRect().y + contents.clientHeight - window.innerHeight;
    let extraDistance = 125;
    
    let computedDistance1 = infoElem.getBoundingClientRect().y - extraDistance;
    
    if ((allInfoElem.getBoundingClientRect().y + extraDistance) > 0) {
        const contentLists = contents.querySelectorAll(".show");
        for (let i = 0; i < contentLists.length; i++) {
            contentLists[i].className = "hidden";
        }
    }
    else if (computedDistance1 > 0) {
        contents.style.top = "0px";
    }
    else if (((contents.getBoundingClientRect().y - extraDistance) > 0) || ((distanceFromBottomContents < distanceFromBottomInfo) && (computedDistance1 <= 0))) {
        contents.style.top = `${-1 * computedDistance1}px`;
    }
    else {
        contents.style.top = `${infoElem.clientHeight - contents.clientHeight}px`;
    }
    
}


function highlightElements(elem) {
    
    const elemId = event.currentTarget.getAttribute("name");
    const targetElem = document.getElementById(elemId);
    const targetElemText = targetElem.getElementsByTagName("h2")[0];
    
    targetElemText.style.transition = "background-color 0s";
    targetElemText.style.backgroundColor = "rgba(244, 239, 233, .95)";
    targetElem.className = targetElem.className.replace("hidden", "show");
    
    setTimeout(function() {
        
        targetElemText.style.transition = "background-color 1.25s";
        targetElemText.style.backgroundColor = "transparent";
        
        setTimeout(function() {
            targetElemText.style.transition = "background-color 0s";
        }, 1250);
        
    }, 2000);
    
}


window.onload = function() {
    
    initInfo(infoObj, pictureList, 5);
    
    const contentsElem = document.getElementById("contents");
    const contentTags = contentsElem.getElementsByTagName("h3");
    const contentLists = contentsElem.querySelectorAll(".hidden");
    
    for (let i = 0; i < contentTags.length; i++) {
        contentTags[i].addEventListener('click', highlightElements);
    }
    
    for (let j = 0; j < contentLists.length; j++) {
        
        contentLists[j].addEventListener('click', function() {
            
            if (contentLists[j].className == "hidden") {
                
                contentLists[j].className = "show";
                
                for (let k = 0; k < contentLists.length; k++) {
                    if (k != j) {
                        contentLists[k].className = "hidden";
                    }
                }
                
            }
            
        });
        
    }
    
    contentsElem.addEventListener('click', function() {
        
        for (let i = 0; i < contentLists.length; i++) {
            
            let hoveredElems, elemName, comparisonName;
            
            hoveredElems = document.getElementById("contents").querySelector("li:hover");
            comparisonName = contentLists[i].getElementsByTagName("h3")[0].getAttribute("name");
            
            try {
                elemName = hoveredElems.getElementsByTagName("h3")[0].getAttribute("name");
            }
            catch {
                elemName = null;
            }
            
            if ((elemName == null) || (elemName != comparisonName)) {
                contentLists[i].className = "hidden";
            }
        }
        
    });
    
};

window.onscroll = function() {
    
    contentsFollow();
    
};
