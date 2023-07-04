
function Photo(idInt, pictureIndex, dateIndex, photoshootIndex, priorityString, typeString, locationObject, lightingString) {
    
    this.id = idInt;
    this.picture = pictureIndex;
    this.date = dateIndex;
    this.photoshoot = photoshootIndex;
    this.priority = priorityString;
    this.type = typeString;
    this.location = locationObject;
    this.lighting = lightingString;
    
}


class Database {
    
    
    photos;
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
    
    
    constructor() {
        
        this.loadData();
        
    }
    
    
    loadData() {
        
        let obj = this;
        
        $.getJSON("./data/json/photos.json", function(data) {
            obj.photos = data;
        });
        
        $.getJSON("./data/json/pictures.json", function(data) {
            obj.pictures = data;
        });
        
        $.getJSON("./data/json/dates.json", function(data) {
            obj.dates = data;
        });
        
        $.getJSON("./data/json/photoshoots.json", function(data) {
            obj.photoshoots = data;
        });
        
        $.getJSON("./data/json/priorities.json", function(data) {
            obj.priorities = data;
        });
        
        $.getJSON("./data/json/types.json", function(data) {
            obj.types = data;
        });
        
        $.getJSON("./data/json/locations.json", function(data) {
            obj.locations = data;
        });
        
        $.getJSON("./data/json/lightings.json", function(data) {
            obj.lightings = data;
        });
        
    }
    
    
    updateData() {
        
    }
    
    
    newEntry() {
        
    }
    
    
    updateFilters() {
        
    }
    
    
    changeSortingMethod() {
        
    }
    
    
    static createPhotoElement() {
        
    }
    
    
    updateUserPage() {
        
    }
    
    
}



var database = new Database();
