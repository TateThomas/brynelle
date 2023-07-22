
function Photo(imageObject, objId, dateIndex, photoshootIndex, priorityString, priorityInt, typeString, locationObject, lightingString) {
    
    this.image = imageObject;
    this.id = objId;
    this.picture = objId;
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
            
                $.getJSON(dataProperties[i][1], function(data) {
                    obj[dataProperties[i][0]] = data;
                });

                if (obj[dataProperties[i][0]] == undefined) {
                    obj[dataProperties[i][0]] = dataProperties[i][2];
                }
                
                setTimeout(function() {resolve("complete")}, 1);
            
            });
            
        }
        
        async function loadImages() {

            for (let i = 0; i < dataProperties.length; i++) {
                await loadJSON(i);
                
            }
            
            obj.changeSortingMethod();
            obj.setUpSortingSelector();
            obj.setUpFiltersSelector();
            obj.totalPhotosCurrentlyVisible = obj.ids.length;
            obj.updateUserPage();
            
            let searchParameters = new URLSearchParams(window.location.search);
            if (searchParameters.get("filterType") != undefined) {
                obj.updateFilters(searchParameters.get("filterType").replaceAll('\"', ''), searchParameters.get("filterSpecifier").replaceAll('\"', ''), true);
                document.getElementById(searchParameters.get("filterSpecifier").replaceAll('\"', '')).checked = true;
            }
            
        }
        
        const obj = this;
        const dataProperties = [
            ["ids", "./data/json/ids.json", []],
            ["pictures", "./data/json/pictures.json", []],
            ["dates", "./data/json/dates.json", []],
            ["photoshoots", "./data/json/photoshoots.json", []],
            ["priorities", "./data/json/priorities.json", {}],
            ["types", "./data/json/types.json", {}],
            ["locations", "./data/json/locations.json", {}],
            ["lightings", "./data/json/lightings.json", {}]
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
    
    
    parseDate(dateString) {
        /* Algorithm from https://stackoverflow.com/questions/43083993/javascript-how-to-convert-exif-date-time-data-    to-timestamp
        */
        
        let dateArray = dateString.split(/\D/);
        return new Date(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4], dateArray[5]);
        
    }
    
    
    newEntry(imagePath, photoshootName, priorityLevel, photoType, locationsArray, photoLighting) {
        
        function initPropertyArrayIf(thisObj, property, key) {
            
            if (thisObj[property][key] == undefined) {
                thisObj[property][key] = [];
            }
            
        }
        
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
            photoElement.src = imagePath;
            
            ensurePhotoIsLoaded().then(function() {
                
                ensureExifIsDone(photoElement).then(function(datesId) {
                    let photoObject = obj.createImage(imagePath, newId, locationFilters, locationsArray[0], obj.dates[datesId].date.toDateString());
                    obj.ids.push(new Photo(photoObject, objId, datesId, photoshootId, priority, priorityId, type, location, lighting));
                    obj.totalPhotosCurrentlyVisible += 1;
                    obj.changeSortingMethod();
                });
            });
            
        }
        
        var newId = this.ids.length;
        
        this.pictures.push(imagePath);
        
        let photoshootsId = this.pushToSortedArray(this.photoshoots,
                                                   { "shoot": photoshootName,
                                                     "parentId": newId },
                                                  "shoot",
                                                  "photoshoot");
        
        initPropertyArrayIf(this, "priorities", priorityLevel);
        let priorityId = this.pushToSortedArray(this.priorities[priorityLevel],
                               { "photoshoot": photoshootName,
                                 "parentId": newId },
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
        
        finishSetUp(this, newId, photoshootsId, priorityLevel, priorityId, photoType, locationsObject, locationsFilterObject, photoLighting);
        
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
                if (newClassName !=element.className) {
                    obj.totalPhotosCurrentlyVisible += 1;
                    element.className = newClassName;
                }
            }
            else{
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
        
        document.getElementById("photos").getElementsByTagName("h4")[0].innerHTML = `${this.totalPhotosCurrentlyVisible} photo${(this.totalPhotosCurrentlyVisible > 1) ? "s" : ""}`;
        //this.updateUserPage();
        
    }
    
    
    setUpFiltersSelector() {
        
        let boxes = document.getElementById("filters").getElementsByTagName("input");
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('change', (event) => {
                this.updateFilters(event.currentTarget.className, event.currentTarget.id, event.currentTarget.checked);
                document.getElementById("photos").style.setProperty("--total-rows", 5);
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
        
        switch(obj.currentSortingMethod) {
                
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
        
        document.getElementById("photos").style.setProperty("--total-rows", 5);
        
    }
    
    
    setUpSortingSelector() {
        
        document.getElementById("sort-by").getElementsByTagName("select")[0].onchange = this.changeSortingMethod;
        
    }
    
    
    createImage(imagePath, imageId, locationObject, location, date) {
        
        return {
            "filters": {
                "type": false,
                "location": locationObject,
                "lighting": false
            },
            "html": `
                <div class="img${imageId} show normal">
                    <div>
                        <h3>${location.replace("-", " ")}</h3>
                    </div>
                    <img src='${imagePath}'>
                    <div>
                        <h3>${date}</h3>
                    </div>
                </div>
                `
        };
        
    }
    
    
    updateUserPage() {
        
        function expandImage() {
            
            if (this.classList[2] == "expanded") {
                this.className = this.className.replace("expanded", "normal");
            }
            else {
                this.className = this.className.replace("normal", "expanded");
            }
            
        }
        
        let photos = document.getElementById("photos");
        let newHTML = `<h4>${this.totalPhotosCurrentlyVisible} photo${(this.totalPhotosCurrentlyVisible > 1) ? "s" : ""}</h4>`;
        
        if (this.currentPictures.length > 0) {
            
            for (let i = 0; i < this.currentPictures.length; i++) {
                newHTML += this.ids[this.currentPictures[i].parentId].image.html;
            }
            photos.innerHTML = newHTML;
            
            let images = document.getElementById("photos").getElementsByTagName("div");
            for (let i = 0; i < images.length; i++) {
                images[i].addEventListener('click', expandImage);
            }
            
            document.getElementById("photos").className = "loaded";
            
        }
        else {
            //photos.innerHTML = '<h2>An error occurred, please refresh.</h2>';
            return;
        }
        
    }
    
    
}


var database = new Database();
