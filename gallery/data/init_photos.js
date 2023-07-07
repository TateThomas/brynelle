
function createNewEntry(path, name, priority, type, locationsArray, lighting) {
    
    return new Promise(resolve => {
        
        console.log("START: " + name);
        database.newEntry(path, name, priority, type, locationsArray, lighting);
        console.log("STOP: " + name);
        setTimeout(function() {resolve("complete")}, 2000);
        
    });
    
}


async function enterNewPictures(pictureInfoArray) {
    
    for (let i = 0; i < pictureInfoArray.length; i++) {
        
        await createNewEntry(pictureInfoArray[i][0], pictureInfoArray[i][1], pictureInfoArray[i][2], pictureInfoArray[i][3], pictureInfoArray[i][4], pictureInfoArray[i][5]);
        
    }
    console.log("complete");
    
}


var pictureArray = [
//    ["/images/gallery/0.jpg", "Mustache guy and blonde girl", "d", "weddings", ["goblin-valley", "moab", "desert"], "flash"],
//    ["/images/gallery/1.jpg", "Preston and Malan Engagements", "c", "engagements", ["sand-dunes", "desert"], "full-sun"],
//    ["/images/gallery/2.jpg", "Curly hair guy and bride", "c", "bridals", ["antelope-island"], "full-sun"],
//    ["/images/gallery/3.jpg", "Afro guy and bun girl", "c", "couples", ["mountains", "roadside"], "full-sun"],
//    ["/images/gallery/4.jpg", "Bachelorette party in Salt Lake", "d", "friends", ["salt-lake"], "full-sun"],
//    ["/images/gallery/5.jpg", "Curly hair guy and bride", "c", "bridals", ["antelope-island"], "full-sun"],
//    ["/images/gallery/6.jpg", "Mustache guy and blone girl", "e", "couples", ["goblin-valley", "moab", "desert"], "full-sun"],
//    ["/images/gallery/7.jpg", "Mustache guy and blone girl", "b", "couples", ["goblin-valley", "moab", "desert"], "golden-hour"],
//    ["/images/gallery/8.jpg", "Glasses guy and brown hair girl", "b", "weddings", ["little-white-chapel", "las-vegas", "roadside"], "full-sun"],
//    ["/images/gallery/9.jpg", "Brynelles friend", "d", "portraits", ["antelope-island", "roadside"], "full-sun"],
//    ["/images/gallery/10.jpg", "Short hair guy with blonde girl", "c", "couples", ["las-vegas", "studio"], "indoor"],
//    ["/images/gallery/11.jpg", "Short hair guy with blonde girl", "d", "couples", ["las-vegas", "studio"], "indoor"],
//    ["/images/gallery/12.jpg", "Brynelles friend", "d", "portraits", ["antelope-island", "roadside"], "full-sun"],
//    ["/images/gallery/13.jpg", "Medium hair guy with brown hair girl", "b", "bridals", ["salt-lake", "downtown"], "full-sun"],
//    ["/images/gallery/14.jpg", "Medium hair guy with brown hair girl", "c", "bridals", ["salt-lake", "downtown"], "blue-hour"],
//    ["/images/gallery/15.jpg", "Medium hair guy with brown hair girl", "c", "bridals", ["salt-lake", "downtown"], "blue-hour"],
//    ["/images/gallery/16.jpg", "Medium hair guy with brown hair girl", "d", "bridals", ["salt-lake", "downtown"], "full-sun"],
//    ["/images/gallery/17.jpg", "Cozy Rooftop Session", "b", "couples", ["salt-lake", "downtown"], "sunrise"],
//    ["/images/gallery/18.jpg", "Black jackets couple", "c", "couples", ["parks"], "sunrise"],
//    ["/images/gallery/19.jpg", "Neutrals mountain bridals", "b", "bridals", ["mountains", "forest", "snow"], "full-sun"],
//    ["/images/gallery/20.jpg", "Neutrals mountain bridals", "c", "bridals", ["mountains", "forest", "snow"], "full-sun"],
//    ["/images/gallery/21.jpg", "Snowy cozy couple", "b", "couples", ["mountains", "forest", "snow"], "sunrise"],
//    ["/images/gallery/22.jpg", "Snowy cozy couple", "b", "couples", ["mountains", "forest", "snow"], "sunrise"],
//    ["/images/gallery/23.jpg", "Snowy cozy couple", "d", "couples", ["mountains", "forest", "snow"], "sunrise"],
//    ["/images/gallery/24.jpg", "Black clothed skater couple", "c", "couples", ["salt-flats", "salt-lake"], "golden-hour"],
//    ["/images/gallery/25.jpg", "Black clothed skater couple", "d", "couples", ["salt-flats", "salt-lake"], "golden-hour"],
//    ["/images/gallery/26.jpg", "Black clothed skater couple", "b", "couples", ["salt-flats", "salt-lake"], "golden-hour"],
//    ["/images/gallery/27.jpg", "Black clothed skater couple", "c", "couples", ["salt-flats", "salt-lake"], "golden-hour"],
//    ["/images/gallery/28.jpg", "Elegant colored bridals", "b", "bridals", ["salt-flats", "salt-lake"], "sunset"],
//    ["/images/gallery/29.jpg", "Sparkly bridals", "b", "bridals", ["salt-flats", "salt-lake"], "blue-hour"],
//    ["/images/gallery/30.jpg", "Preston and Malan Bridals", "b", "bridals", ["utah-lake", "lakes"], "sunset"],
//    ["/images/gallery/31.jpg", "Preston and Malan Bridals", "a", "bridals", ["utah-lake", "lakes"], "sunset"],
//    ["/images/gallery/32.jpg", "Sparkly bridals", "c", "bridals", ["limousine", "salt-lake"], "flash"],
//    ["/images/gallery/33.jpg", "Sparkly bridals", "d", "bridals", ["limousine", "salt-lake"], "flash"],
//    ["/images/gallery/34.jpg", "Sparklers wedding", "d", "weddings", ["salt-flats", "salt-lake"], "flash"],
//    ["/images/gallery/35.jpg", "Sparklers wedding", "c", "weddings", ["salt-flats", "salt-lake"], "flash"],
//    ["/images/gallery/36.jpg", "Sparklers wedding", "d", "weddings", ["salt-flats", "salt-lake"], "flash"],
//    ["/images/gallery/37.jpg", "Sparklers wedding", "b", "weddings", ["salt-flats", "salt-lake"], "flash"],
//    ["/images/gallery/38.jpg", "Jackson and Valerie Fall", "c", "couples", ["fall-trees", "forest", "mountains"], "full-sun"],
//    ["/images/gallery/39.jpg", "Ronans Newborn Shoot", "d", "families", ["studio"], "indoor"],
//    ["/images/gallery/40.jpg", "Blonde streak girl with proper boy", "c", "couples", ["fall-trees", "forest", "mountains"], "full-sun"],
//    ["/images/gallery/41.jpg", "Preston and Malan Engagements", "c", "engagements", ["sand-dunes", "desert"], "sunset"],
//    ["/images/gallery/42.jpg", "Preston and Malan Engagements", "b", "engagements", ["sand-dunes", "desert"], "full-sun"],
//    ["/images/gallery/43.jpg", "Preston and Malan Engagements", "d", "engagements", ["sand-dunes", "desert"], "full-sun"],
//    ["/images/gallery/44.jpg", "Goblin valley content retreat wedding", "b", "weddings", ["goblin-valley", "moab", "desert"], "full-sun"],
//    ["/images/gallery/45.jpg", "Goblin valley content retreat wedding", "c", "weddings", ["goblin-valley", "moab", "desert"], "full-sun"],
//    ["/images/gallery/46.jpg", "Goblin valley content retreat wedding", "c", "weddings", ["goblin-valley", "moab", "desert"], "full-sun"],
//    ["/images/gallery/47.jpg", "Arches content retreat couple", "b", "couples", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/48.jpg", "Arches content retreat couple", "c", "couples", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/49.jpg", "Arches content retreat wedding", "b", "weddings", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/50.jpg", "Arches content retreat wedding", "c", "weddings", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/51.jpg", "Arches content retreat wedding", "b", "weddings", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/52.jpg", "Mason and Lindsay Content Retreat Bridals", "c", "bridals", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/53.jpg", "Mason and Lindsay Content Retreat Bridals", "b", "bridals", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/54.jpg", "Mason and Lindsay Content Retreat Bridals", "a", "bridals", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/55.jpg", "Troy and his girl content retreat", "c", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
//    ["/images/gallery/56.jpg", "Troy and his girl content retreat", "a", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
//    ["/images/gallery/57.jpg", "Troy and his girl content retreat", "b", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
//    ["/images/gallery/58.jpg", "Troy and his girl content retreat", "a", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
//    ["/images/gallery/59.jpg", "Las Vegas wedding", "a", "weddings", ["las-vegas"], "full-sun"],
//    ["/images/gallery/60.jpg", "Las Vegas wedding", "d", "weddings", ["las-vegas"], "full-sun"],
//    ["/images/gallery/61.jpg", "Las Vegas wedding", "c", "weddings", ["las-vegas"], "full-sun"],
//    ["/images/gallery/62.jpg", "Las Vegas wedding", "b", "weddings", ["las-vegas"], "full-sun"],
//    ["/images/gallery/63.jpg", "Las Vegas wedding", "b", "weddings", ["las-vegas", "mansion"], "full-sun"],
//    ["/images/gallery/64.jpg", "Emma and her boy engagements", "b", "engagements", ["mountains", "forest"], "full-sun"],
//    ["/images/gallery/65.jpg", "Black lipstick girl", "e", "portraits", ["roadside"], "full-sun"],
//    ["/images/gallery/66.jpg", "Red hair girl wedding", "c", "weddings", ["fields", "fall-trees"], "full-sun"],
//    ["/images/gallery/67.jpg", "Glasses guy with vest girl", "d", "couples", ["arches", "moab", "desert"], "full-sun"],
//    ["/images/gallery/68.jpg", "White boots girl and bun guy", "c", "couples", ["desert"], "full-sun"],
//    ["/images/gallery/69.jpg", "White boots girl and bun guy", "b", "couples", ["desert"], "full-sun"],
//    ["/images/gallery/70.jpg", "Brex and his girl", "b", "couples", ["fields"], "full-sun"]
];

//["/images/gallery/65.jpg", "Mustache guy and blonde girl", "c", "weddings", ["goblin-valley", "moab", "desert"], "flash"],

setTimeout(function() {
    enterNewPictures(pictureArray)
}, 1000);
