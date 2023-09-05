
function Photo(imageObject, objId, dateIndex, photoshootIndex, altText, priorityString, priorityInt, typeString, locationObject, lightingString) {

    this.image = imageObject;
    this.id = objId;
    this.picture = objId;
    this.altText = altText;
    this.date = dateIndex;
    this.photoshoot = photoshootIndex;
    this.priority = priorityString;
    this.priorityId = priorityInt;
    this.type = typeString;
    this.location = locationObject;
    this.lighting = lightingString;

}


class Database {


    ids;
    pictures;
    dates;
    photoshoots;
    priorities;
    types;
    locations;
    lightings;

    currentPictures;
    currentFilters;
    currentSortingMethod;
    totalPhotosCurrentlyVisible;


    constructor() {

        this.currentPictures = [];
        this.currentFilters = {
            "type": [],
            "location": [],
            "lighting": []
        };

        this.loadData();

    }


    loadData() {

        function loadJSON(i) {

            return new Promise(resolve => {

                $.getJSON(dataProperties[i][1], function (data) {
                    obj[dataProperties[i][0]] = data;
                });

                if (obj[dataProperties[i][0]] == undefined) {
                    obj[dataProperties[i][0]] = dataProperties[i][2];
                }

                setTimeout(function () { resolve("complete") }, 10);

            });

        }

        async function loadImages() {

            for (let i = 0; i < dataProperties.length; i++) {
                await loadJSON(i);

            }

            obj.totalPhotosCurrentlyVisible = obj.ids.length;
            await obj.setUpSortingSelector();
            obj.totalPhotosCurrentlyVisible = obj.ids.length;
            await obj.setUpFiltersSelector();
            obj.totalPhotosCurrentlyVisible = obj.ids.length;
            await obj.changeSortingMethod();
            obj.totalPhotosCurrentlyVisible = obj.ids.length;
            await obj.updateUserPage();

            setTimeout(function () {

                let searchParameters = new URLSearchParams(window.location.search);
                if (searchParameters.get("filterType") != undefined) {
                    obj.updateFilters(searchParameters.get("filterType").replaceAll('\"', ''), searchParameters.get("filterSpecifier").replaceAll('\"', ''), true);
                    document.getElementById(searchParameters.get("filterSpecifier").replaceAll('\"', '')).checked = true;
                }

            }, 10);

        }

        const obj = this;
        const dataProperties = [
            ["ids", "../js/database/json/ids.json", []],
            ["pictures", "../js/database/json/pictures.json", []],
            ["dates", "../js/database/json/dates.json", []],
            ["photoshoots", "../js/database/json/photoshoots.json", []],
            ["priorities", "../js/database/json/priorities.json", {}],
            ["types", "../js/database/json/types.json", {}],
            ["locations", "../js/database/json/locations.json", {}],
            ["lightings", "../js/database/json/lightings.json", {}]
        ];

        loadImages();

    }


    postData(property) {
        /* "Pseudo" function, no need to implement actual post method, website is static.
           Used for building up the website.
        */

        console.log(JSON.stringify(this[property]));

    }


    pushToSortedArray(array, object, targetProperty, photoObjectProperty) {
        /* Algorithm from https://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-    array-of-numbers
        */

        let low = 0,
            high = array.length;

        while (low < high) {
            let mid = (low + high) >>> 1;
            if (array[mid][targetProperty] < object[targetProperty]) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }

        array.splice(low, 0, object);

        for (let i = low + 1; i < array.length; i++) {
            this["ids"][array[i].parentId][photoObjectProperty] = i;
        }

        return low;

    }


    /*
    parseDate(dateString) {
         Algorithm from https://stackoverflow.com/questions/43083993/javascript-how-to-convert-exif-date-time-data-    to-timestamp
        
        
        let dateArray = dateString.split(/\D/);
        return new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
        
    }
    */


    newEntry(imagePath, photoDateInfo, photoshootName, altInfo, priorityLevel, photoType, locationsArray, photoLighting) {

        function initPropertyArrayIf(thisObj, property, key) {

            if (thisObj[property][key] == undefined) {
                thisObj[property][key] = [];
            }

        }

        /*
        function finishSetUp(obj, objId, photoshootId, priority, priorityId, type, location, locationFilters, lighting) {
            
            function waitFor(resolve, reject) {
                
                if (photoElement.complete) {
                        resolve("complete");
                    }
                    else {
                        setTimeout(waitFor.bind(this, resolve, reject), 500);
                    }
                
            }
            
            function ensurePhotoIsLoaded() {
                
                return new Promise(waitFor);
                
            }
            
            function ensureExifIsDone(photoElem) {
                return new Promise(function(resolve, reject) {
                    let datesId;
                    EXIF.getData(photoElem, function() {
                        let photoDateObj = obj.parseDate(this.exifdata.DateTimeOriginal);
                        datesId = obj.pushToSortedArray(obj.dates,
                                                        { "date": photoDateObj,
                                                          "dateUTC": photoDateObj.getTime(),
                                                          "parentId": newId },
                                                        "dateUTC",
                                                        "date");
                    });
                    setTimeout(function() {
                        resolve(datesId);
                    }, 600);
                });
            }
            
            
            let photoElement = new Image();
            photoElement.src = imagePath + ".JPG";
            
            ensurePhotoIsLoaded().then(function() {
                
                ensureExifIsDone(photoElement).then(function(datesId) {
                    let photoObject = obj.createImage(imagePath, photoshootName, newId, locationFilters, locationsArray[0], obj.dates[datesId].date.toDateString());
                    obj.ids.push(new Photo(photoObject, objId, datesId, photoshootId, priority, priorityId, type, location, lighting));
                    obj.totalPhotosCurrentlyVisible += 1;
                    obj.changeSortingMethod();
                });
            });
            
        }
        */

        var newId = this.ids.length;

        this.pictures.push(imagePath);

        let dateInfoArray = photoDateInfo.split(",");
        let dateObj = new Date(dateInfoArray[0], parseInt(dateInfoArray[1]) - 1, dateInfoArray[2], dateInfoArray[3], dateInfoArray[4], dateInfoArray[5]);
        let datesId = this.pushToSortedArray(this.dates,
            {
                "date": dateObj,
                "dateUTC": dateObj.getTime(),
                "parentId": newId
            },
            "dateUTC",
            "date");

        let photoshootsId = this.pushToSortedArray(this.photoshoots,
            {
                "shoot": photoshootName,
                "parentId": newId
            },
            "shoot",
            "photoshoot");

        initPropertyArrayIf(this, "priorities", priorityLevel);
        let priorityId = this.pushToSortedArray(this.priorities[priorityLevel],
            {
                "photoshoot": photoshootName,
                "parentId": newId
            },
            "photoshoot",
            "priorityId");

        initPropertyArrayIf(this, "types", photoType);
        this.types[photoType].push(newId);

        let locationsObject = {};
        let locationsFilterObject = {};
        for (let i = 0; i < locationsArray.length; i++) {
            initPropertyArrayIf(this, "locations", locationsArray[i]);
            locationsObject[locationsArray[i]] = this.locations[locationsArray[i]].length;
            locationsFilterObject[locationsArray[i]] = false;
            this.locations[locationsArray[i]].push(newId);
        }

        initPropertyArrayIf(this, "lightings", photoLighting);
        this.lightings[photoLighting].push(newId);

        //        finishSetUp(this, newId, photoshootsId, priorityLevel, priorityId, photoType, locationsObject, locationsFilterObject, photoLighting);

        let photoObject = this.createImage(imagePath, altInfo, newId, locationsFilterObject, locationsArray[0], this.dates[datesId].date.toDateString());

        this.ids.push(new Photo(photoObject, newId, datesId, photoshootsId, altInfo, priorityLevel, priorityId, photoType, locationsObject, photoLighting));

        this.totalPhotosCurrentlyVisible += 1;
        this.changeSortingMethod();

    }


    updateFilters(filterType, filterSpecifier, checked) {

        function updateCurrentFilters(obj) {

            if (checked) {
                obj.currentFilters[filterType].push(filterSpecifier);
            }
            else {
                obj.currentFilters[filterType].splice(obj.currentFilters[filterType].indexOf(filterSpecifier), 1);
            }

        }

        function changeVisibilityOnImage(obj, photoId, condition) {

            if (condition) {
                obj.ids[photoId].image.html = obj.ids[photoId].image.html.replace("hidden", "show");
            }
            else {
                obj.ids[photoId].image.html = obj.ids[photoId].image.html.replace("show", "hidden");
            }

        }

        function changeVisibilityOnHTML(obj, photoId, condition) {

            let element = document.querySelector(`.img${photoId}`);
            if (condition) {
                let newClassName = element.className.replace("hidden", "show");
                if (newClassName != element.className) {
                    obj.totalPhotosCurrentlyVisible += 1;
                    element.className = newClassName;
                }
            }
            else {
                let newClassName = element.className.replace("show", "hidden");
                if (newClassName != element.className) {
                    obj.totalPhotosCurrentlyVisible -= 1;
                    element.className = newClassName;
                }
            }

        }

        function determineVisibility(obj, photoId) {

            let visibilityBool = true;
            let locationsVisibility = false;

            let photoLocationsArray = Object.keys(obj.ids[photoId].image.filters.location);

            for (let j = 0; j < photoLocationsArray.length; j++) {
                if (obj.ids[photoId].image.filters.location[photoLocationsArray[j]]) {
                    locationsVisibility = true;
                    break;
                }
            }

            if ((!obj.ids[photoId].image.filters.type && (obj.currentFilters.type.length > 0)) || (!obj.ids[photoId].image.filters.lighting && (obj.currentFilters.lighting.length > 0)) || (!locationsVisibility && (obj.currentFilters.location.length > 0))) {
                visibilityBool = false;
            }

            return visibilityBool;

        }

        if (((this.currentFilters[filterType].length == 1) && !checked) || (this.currentFilters[filterType].length == 0)) {

            updateCurrentFilters(this);

            for (let i = 0; i < this.currentPictures.length; i++) {

                let currentId = this.currentPictures[i].parentId;

                if ((filterType == "location") && (this.ids[currentId].location[filterSpecifier] != undefined)) {
                    this.ids[currentId].image.filters.location[filterSpecifier] = checked;
                }
                else if (this.ids[currentId][filterType] == filterSpecifier) {
                    this.ids[currentId].image.filters[filterType] = checked;
                }
                else {
                    let visible = determineVisibility(this, currentId);

                    changeVisibilityOnHTML(this, currentId, visible);
                    changeVisibilityOnImage(this, currentId, visible);
                }

            }

        }
        else if ((this[filterType + "s"][filterSpecifier] == undefined) || (this[filterType + "s"][filterSpecifier].length == 0)) {

            updateCurrentFilters(this);
            this[filterType + "s"][filterSpecifier] = [];

        }
        else {

            updateCurrentFilters(this);

            for (let i = 0; i < this[filterType + "s"][filterSpecifier].length; i++) {

                let currentId = this[filterType + "s"][filterSpecifier][i];

                if (filterType == "location") {
                    this.ids[currentId].image.filters.location[filterSpecifier] = checked;
                }
                else {
                    this.ids[currentId].image.filters[filterType] = checked;
                }

                let visible = determineVisibility(this, currentId);
                changeVisibilityOnHTML(this, currentId, visible);
                changeVisibilityOnImage(this, currentId, visible);

            }

        }

        document.getElementById("photos").getElementsByTagName("h4")[0].innerHTML = `${this.totalPhotosCurrentlyVisible} photo${(this.totalPhotosCurrentlyVisible != 1) ? "s" : ""}`;
        //this.updateUserPage();

        const filterKeys = Object.keys(this.currentFilters);
        const tabElem = document.getElementById("tab");
        const amountElem = document.querySelector(`.amount.${filterType}`);
        const topDistance = parseInt(getComputedStyle(tabElem).getPropertyValue("--starting-top"));
        let offset = 31;
        let secondOffset = 10;
        const filterCount = this.currentFilters[filterType].length;

        for (let i = 0; i < filterKeys.length; i++) {
            if ((filterKeys[i] != filterType) && (this.currentFilters[filterKeys[i]].length > 0)) {
                offset -= 1;
            }
        }

        if (filterCount == 0) {
            amountElem.className = amountElem.className.replace("show", "hidden");
            tabElem.style.setProperty("--starting-top", `${topDistance - offset}px`);
        }
        else if ((filterCount == 1) && checked) {
            amountElem.className = amountElem.className.replace("hidden", "show");
            tabElem.style.setProperty("--starting-top", `${topDistance + offset}px`);
        }
        else if ((filterCount == 10) && checked) {
            tabElem.style.setProperty("--starting-top", `${topDistance + secondOffset}px`);
            amountElem.className = amountElem.className.replace("hidden", "show");
        }
        else if ((filterCount == 9) && !checked) {
            tabElem.style.setProperty("--starting-top", `${topDistance - secondOffset}px`);
            amountElem.className = amountElem.className.replace("hidden", "show");
        }
        else {
            amountElem.className = amountElem.className.replace("hidden", "show");
        }
        amountElem.querySelector(".number").innerHTML = filterCount.toString();

    }


    setUpFiltersSelector() {

        let boxes = document.getElementById("filters").getElementsByTagName("input");

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('change', (event) => {

                this.updateFilters(event.currentTarget.className, event.currentTarget.id, event.currentTarget.checked);

                document.getElementById("photos").style.setProperty("--total-rows", 10);

            });
        }

    }


    changeSortingMethod() {

        let obj;
        if (database == undefined) {
            obj = this;
        }
        else {
            obj = database;
        }

        obj.currentSortingMethod = document.getElementById("sort-by").getElementsByTagName("select")[0].value;
        let newList = [];

        switch (obj.currentSortingMethod) {

            case "featured":
                let prioritiesPropertyArray = Object.keys(obj.priorities).sort();
                for (let i = 0; i < prioritiesPropertyArray.length; i++) {
                    newList.push(...obj.priorities[prioritiesPropertyArray[i]]);
                }
                break;

            case "most-recent":
                newList = [...obj.dates].reverse();
                break;

            case "least-recent":
                newList = obj.dates;
                break;

            case "photoshoot":
                newList = obj.photoshoots;
                break;

        }

        obj.currentPictures = newList;
        obj.updateUserPage();

        document.getElementById("photos").style.setProperty("--total-rows", 10);

    }


    setUpSortingSelector() {

        document.getElementById("sort-by").getElementsByTagName("select")[0].onchange = this.changeSortingMethod;

    }


    createImage(imagePath, altText, imageId, locationObject, location, date) {

        let dateArray = date.split(" ");

        return {
            "filters": {
                "type": false,
                "location": locationObject,
                "lighting": false
            },
            "html": `
                <div class="img${imageId} show normal">
                    <div class="container small" style="left: 0px; top: 0px;">
                        <div>
                            <h3>${location.replaceAll("-", " ")}</h3>
                        </div>
                        <picture>
                            <source type="image/avif" srcset="${imagePath}.avif">
                            <source type="image/webp" srcset="${imagePath}.webp">
                            <source type="image/jpg" srcset="${imagePath}.jpg">
                            <img src='${imagePath}.avif' alt="${altText}" loading="lazy">
                        </picture>
                        <div>
                            <h3>${dateArray[1]} ${parseInt(dateArray[2])} ${dateArray[3]}</h3>
                        </div>
                    </div>
                </div>
                `
        };

    }


    updateUserPage() {

        function expandImage() {

            let { x, y } = this.parentElement.getBoundingClientRect();

            if (this.parentElement.classList[2] == "expanded") {

                this.className = this.className.replace("big", "small");

                this.style.setProperty("position", "absolute");
                this.style.setProperty("left", `${-1 * x}px`);
                this.style.setProperty("top", `${-1 * y}px`);

                let obj = this;
                setTimeout(function () {
                    if (obj.classList[1] == "small") {
                        obj.parentElement.className = obj.parentElement.className.replace("expanded", "normal");
                        obj.style.setProperty("--transition-time", ".45s");
                        obj.style.setProperty("left", "0px");
                        obj.style.setProperty("top", "0px");
                    }
                }, 1);

            }
            else {

                this.parentElement.className = this.parentElement.className.replace("normal", "expanded");

                this.style.setProperty("left", `${-1 * x}px`);
                this.style.setProperty("top", `${-1 * y}px`);
                this.style.setProperty("--width", `${document.body.clientWidth}px`);

                let obj = this;
                setTimeout(function () {
                    if (obj.parentElement.classList[2] == "expanded") {
                        obj.className = obj.className.replace("small", "big");
                        obj.style.setProperty("--transition-time", "0s");
                        obj.style.setProperty("position", "fixed");
                        obj.style.setProperty("left", "0px");
                        obj.style.setProperty("top", "0px");

                        obj.style.setProperty("--img-position", obj.getElementsByTagName("picture")[0].getBoundingClientRect().y + "px");
                    }
                }, 450);

            }

        }

        let photos = document.getElementById("photos");
        let newHTML = `<h4>${this.totalPhotosCurrentlyVisible} photo${(this.totalPhotosCurrentlyVisible != 1) ? "s" : ""}</h4>`;

        if (this.currentPictures.length > 0) {

            for (let i = 0; i < this.currentPictures.length; i++) {
                newHTML += this.ids[this.currentPictures[i].parentId].image.html;
            }
            photos.innerHTML = newHTML;

            let images = document.querySelectorAll("#photos div.container");
            for (let i = 0; i < images.length; i++) {
                images[i].addEventListener('click', expandImage);
            }

            document.getElementById("photos").className = "loaded";

        }

    }


}


//var database = new Database();
