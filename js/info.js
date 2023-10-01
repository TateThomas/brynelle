
const infoObj = {
    "payment": {
        "how does payment work?": ["payment details", "you will pay a 30% deposit of your shoot amount to book your session and then the remaining 70% at least 1-3 days before."],
        "travel fees?": ["travel fee", "on in state sessions travel rates will apply if the location exceeds 30 minutes of drive time from my location. i will always tell you up front what the exact travel fee amount is and will include it in your overall session cost (no hidden fees)."]
    },
    "planning": {
        "do you just do couples and weddings?": ["photoshoots other than couples/weddings", "no! i loveeee doing all types of sessions! (portraits, seniors, families, newborns, maternity, and more)."],
        "do you help with the planning process?": ["do you help plan", "of course! i love to help out my couples when it comes to recommendations/guidance for their wedding. if i’m your photographer, i consider us best friends so let’s chat, give me a call, message me anytime, or let’s meet up and talk (preferably somewhere with yummy treats)."],
        "do you have a second shooter?": ["second shooter", "i do offer having a second shooter. with an additional cost, a second shooter can provide a different perspective throughout the photos taken. although i wish i could be everywhere all at once, having a second shooter gives us more images and allllll the different angles at every moment. i have so many talented photographer friends who would also go above and beyond to capture it all."],
        "do you offer help with wedding day timeline?": ["help with wedding day timeline", "YES 100%, timeline is key for a smooth wedding day and to ensure there is set aside time for specific photos. let’s talk!"],
        "what is the best lighting?": ["best lighting", "my favorites are of course sunrise and sunset, however i can do any lighting situation. take a look at my gallery page and use the filters to determine what lighting you think will work best with your vision!"]
    },
    "day of shoot": {
        "what should i wear to our session?": ["what should i wear", "i have a what to wear guide i can send over!"],
        "what if we need to cancel/reschedule our shoot or wedding?": ["cancelling/rescheduling shoots", "If you’ve already put a deposit down on a certain date then have to move or cancel it, i will not legally be able to refund the deposit and a new deposit will have to be made in order to hold a new date."],
        "what if there is bad weather?": ["bad weather", "rain/shine/snow i’ve created beautiful images in all weather conditions and sometimes bad weather can make for more unique and artful images. if the weather is an emergency or you are not comfortable with it we can reschedule. however a new deposit fee will have to be paid in order to save a different date."],
    },
    "process": {
        "How long does it typically take to receive the final edited photos?": ["when to expect to recieve your photos", "2 weeks for regular shoots, 5-6 weeks for weddings"],
        "how many images are included?": ["how many images are included", "different session types will vary. i don’t believe in giving a cut off number of images because i want you to have as many captured moments as possible. i can ensure that you will have a TON of images from our session."],
        "do you give raw images?": ["raw images", "i do not. 1/2 of being a photographer is the editing, giving my raw photos would not be giving out my completed work. i am happy to discuss any concerns you may have with this, and come up with a solution that will help you feel more comfortable with not receiving the raw images."],
        "do you photoshop to alter appearance?": ["do you photoshop", "i believe that capturing authenticity and you can’t get that with manipulating people’s appearance. what i mean by that is i will not be changing body shape or removing prominent things such as braces or certain people from images. however if you are insecure about a particular thing, let me know and i’ll be more mindful with posing. in some cases I will be able to remove blemishes and smooth the skin, lets talk about it i want you to feel SO GOOD getting these pictures back!"],
        "how do you deliver the photos?": ["how are photos delivered", "all photos will be delivered in an online downloadable gallery in high resolution. that way you can have them digitally and then you will have the option to print them off to have a physical copy forever and ever."]
    }
};
const pictureList = [
    ["./images/info/mountains", "Hand drawn mountain landscape with a sun, all contained within an arch"],
    ["./images/info/shell", "Hand drawn picture of a pink shell, all contained within a cirlce"],
    ["./images/info/palm-tree", "Hand drawn picture of a pink palm tree contained within an arch"],
    ["./images/info/wave", "Hand drawn picture of an ocean wave with a sun behind it, all contained within a circle"]
];


function openInfo(elem) {

    elem.addEventListener('click', function () {

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
                                    <h3 name="${elemId}"><span>${question[0]}</span></h3>
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
                                <p>${answer[1]}</p>
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
        let setHTML, sublistId, imgPath;

        elemId = infoGroups[i].replaceAll(" ", "-").toLowerCase();

        groupHTML = `<h2>${infoGroups[i]}</h2>`;

        for (let j = 0; j < questionsList.length; j++) {

            sublistId = `${infoGroups[i].replaceAll(" ", "-").toLowerCase()}-${j}`;
            contentsSublistHTML += contentsSublistHTMLtemplate(infoGroup[questionsList[j]], sublistId);
            imgPath = pictures[nthPicture % pictures.length][0];

            if ((j % rowsPerPic) == 0) {
                setHTML = "";
            }

            if ((((j % rowsPerPic) == (rowsPerPic - 1)) || ((j + 1) == questionsList.length)) && toggle) {

                groupHTML += `
                <div class="set">
                    <div class="picture">
                        <picture>
                            <source type="image/avif" srcset="${imgPath}.avif">
                            <source type="image/webp" srcset="${imgPath}.webp">
                            <source type="image/jpg" srcset="${imgPath}.jpg">
                            <img src="${imgPath}.webp" alt="${pictures[nthPicture % pictures.length][1]}">
                        </picture>
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
                        <picture>
                            <source type="image/avif" srcset="${imgPath}.avif">
                            <source type="image/webp" srcset="${imgPath}.webp">
                            <source type="image/jpg" srcset="${imgPath}.jpg">
                            <img src="${imgPath}.webp" alt="${pictures[nthPicture % pictures.length][1]}">
                        </picture>
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

    let infoY = allInfoElem.getBoundingClientRect().y;
    let contentsY = contents.getBoundingClientRect().y;
    let extraDistance = 125;
    if (window.innerWidth <= 1025) {
        extraDistance = 100;
    }

    let distanceFromBottomInfo = infoY + allInfoElem.clientHeight - window.innerHeight;
    let distanceFromBottomContents = contentsY + contents.clientHeight - window.innerHeight;
    let computedDistance1 = infoElem.getBoundingClientRect().y - extraDistance;

    if ((infoY + extraDistance) > 0) {
        const contentLists = contents.querySelectorAll(".show");
        for (let i = 0; i < contentLists.length; i++) {
            contentLists[i].className = "hidden";
        }
    }
    else if (computedDistance1 > 0) {
        contents.style.top = "0px";
    }
    else if (((contentsY - extraDistance) > 0) || ((distanceFromBottomContents < distanceFromBottomInfo) && (computedDistance1 <= 0))) {
        contents.style.top = `${-1 * computedDistance1}px`;
    }
    else {
        contents.style.top = `${infoElem.clientHeight - contents.clientHeight + 1}px`;
    }

}


function highlightElements(elem) {

    const elemId = event.currentTarget.getAttribute("name");
    const targetElem = document.getElementById(elemId);
    const targetElemText = targetElem.getElementsByTagName("h2")[0];

    targetElemText.style.transition = "background-color 0s";
    targetElemText.style.backgroundColor = "rgba(250, 232, 215, .5)";
    targetElem.className = targetElem.className.replace("hidden", "show");

    setTimeout(function () {

        targetElemText.style.transition = "background-color 1.25s";
        targetElemText.style.backgroundColor = "transparent";

        setTimeout(function () {
            targetElemText.style.transition = "background-color 0s";
        }, 1250);

    }, 2000);

}


window.onload = function () {

    initInfo(infoObj, pictureList, 5);

    const contentsElem = document.getElementById("contents");
    const contentTags = contentsElem.getElementsByTagName("h3");
    const contentLists = contentsElem.querySelectorAll(".hidden");

    for (let i = 0; i < contentTags.length; i++) {
        contentTags[i].addEventListener('click', highlightElements);
    }

    for (let j = 0; j < contentLists.length; j++) {

        contentLists[j].addEventListener('click', function () {

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

    contentsElem.addEventListener('click', function () {

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

window.onscroll = function () {

    contentsFollow();

};
