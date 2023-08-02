
function createNewEntry(path, date, name, alt, priority, type, locationsArray, lighting) {
    
    return new Promise(resolve => {
        
//        console.log("START: " + name);
        database.newEntry(path, date, name, alt, priority, type, locationsArray, lighting);
//        console.log("STOP: " + name);
        setTimeout(function() {resolve("complete")}, 0);
        
    });
    
}


async function enterNewPictures(pictureInfoArray) {
    
    for (let i = 0; i < pictureInfoArray.length; i++) {
        
        await createNewEntry(pictureInfoArray[i][0], pictureInfoArray[i][1], pictureInfoArray[i][2], pictureInfoArray[i][3], pictureInfoArray[i][4], pictureInfoArray[i][5], pictureInfoArray[i][6], pictureInfoArray[i][7]);
        
    }
//    console.log("complete");
    
}


var pictureArray = [
    ["/images/gallery/0", "2021,11,21,6,51,45", "Goblin Valley Flash", "Groom spinning bride in goblin valley flash shoot", "d", "elopements", ["goblin-valley", "moab", "desert"], "flash"],
    ["/images/gallery/1", "2022,4,9,19,43,39", "P and M Engagements", "Couple holding hands walking down sand dunes", "c", "engagements", ["sand-dunes", "desert"], "sunset"],
    ["/images/gallery/2", "2022,5,2,18,32,14", "P and A Bridals", "Bride and groom hugging", "c", "bridals", ["antelope-island", "layton"], "sunset"],
    ["/images/gallery/3", "2022,10,16,18,19,42", "H and A Couples Session", "Couple dancing on hiking trail", "c", "couples", ["utah-mountains", "roadside", "fall-trees"], "cloudy"],
    ["/images/gallery/4", "2023,4,15,10,7,5", "City Girls Content Day", "Girls running and laughing on a rooftop", "d", "friends", ["salt-lake"], "full-sun"],
    ["/images/gallery/5", "2022,5,2,18,44,48", "P and M Engagements", "Groom helping bride down rock", "c", "engagements", ["antelope-island"], "blue-hour"],
    ["/images/gallery/6", "2021,11,21,17,52,39", "Goblin Valley Bridals 2021", "Groom holding bride", "e", "bridals", ["goblin-valley", "moab", "desert"], "blue-hour"],
    ["/images/gallery/7", "2021,11,21,18,06,32", "Goblin Valley Bridals 2021", "Groom kissing brides forehead", "b", "bridals", ["goblin-valley", "moab", "desert"], "blue-hour"],
    ["/images/gallery/8", "2022,6,23,11,48,33", "Little White Chapel Elopement", "Couple dancing in downtown", "b", "elopements", ["little-white-chapel", "las-vegas", "roadside"], "full-sun"],
    ["/images/gallery/9", "2023,4,21,19,3,23", "M Senior", "Girl laughing in the road", "d", "portraits", ["antelope-island", "roadside", "layton"], "cloudy"],
    ["/images/gallery/10", "2022,6,23,22,46,38", "Fremont Street Bridals", "Groom kissing bride against wall", "c", "bridals", ["las-vegas", "studio"], "indoor"],
    ["/images/gallery/11", "2022,6,23,22,55,46", "Fremont Street Bridals", "Blurry couple walking away from each other", "d", "bridals", ["las-vegas", "studio"], "indoor"],
    ["/images/gallery/12", "2023,4,21,19,29,28", "M Senior", "Girl squatting with a soft smile", "d", "portraits", ["antelope-island", "roadside", "layton"], "blue-hour"],
    ["/images/gallery/13", "2022,2,4,8,8,46", "City Bridals 2022", "Groom lifting bride in the air", "b", "bridals", ["salt-lake", "downtown", "new-york-rooftop"], "sunrise"],
    ["/images/gallery/14", "2022,2,4,8,18,8", "City Bridals 2022", "Bride jumping on groom and swinging", "c", "bridals", ["salt-lake", "downtown"], "sunrise", "new-york-rooftop"],
    ["/images/gallery/15", "2022,2,4,8,20,43", "City Bridals 2022", "Couple holding hands looking opposite directions", "c", "bridals", ["salt-lake", "downtown", "new-york-rooftop"], "sunrise"],
    ["/images/gallery/16", "2022,2,4,8,23,41", "City Bridals 2022", "Bride and groom putting their heads and noses together", "d", "bridals", ["salt-lake", "downtown", "new-york-rooftop"], "sunrise"],
    ["/images/gallery/17", "2022,2,4,8,56,40", "M and E Couple Session", "Couple holding hands and looking at each other", "b", "couples", ["salt-lake", "downtown", "england", "london"], "sunrise"],
    ["/images/gallery/18", "2022,2,4,9,37,8", "M and E Couple Session", "Guy leaning over girl to kiss her", "c", "couples", ["salt-lake", "new-york", "seattle", "parks"], "sunrise"],
    ["/images/gallery/19", "2022,2,4,11,5,18", "Snowy Bridals 2022", "Couple walking in the snow on the mountain", "b", "bridals", ["salt-lake", "utah-mountains", "forest", "snow"], "full-sun"],
    ["/images/gallery/20", "2022,2,4,11,15,19", "Snowy Bridals 2022", "Groom lifting bride in the forest", "c", "bridals", ["salt-lake", "utah-mountains", "forest", "snow"], "full-sun"],
    ["/images/gallery/21", "2022,2,4,11,33,15", "Snowy Engagements 2022", "Couple playing in the snow", "b", "engagements", ["salt-lake", "utah-mountains", "forest", "snow"], "full-sun"],
    ["/images/gallery/22", "2022,2,4,11,33,50", "Snowy Engagements 2022", "Couple playing in the snow", "b", "engagements", ["salt-lake", "utah-mountains", "forest", "snow"], "full-sun"],
    ["/images/gallery/23", "2022,2,4,11,36,58", "Snowy Engagements 2022", "Couple in the snow lifting girl up","d", "engagements", ["salt-lake", "utah-mountains", "forest", "snow"], "full-sun"],
    ["/images/gallery/24", "2022,2,4,17,6,48", "L and M Engagements", "Couple sitting and looking at each other", "c", "engagements", ["salt-flats", "salt-lake"], "sunset"],
    ["/images/gallery/25", "2022,2,4,17,8,30", "L and M Engagements", "Couple sitting back to back and looking at each other", "d", "engagements", ["salt-flats", "salt-lake"], "sunset"],
    ["/images/gallery/26", "2022,2,4,17,23,39", "L and M Engagements", "Couple sitting on the ground holding hands", "b", "engagements", ["salt-flats", "salt-lake"], "sunset"],
    ["/images/gallery/27", "2022,2,4,17,57,38", "L and M Engagements", "Girl hugging from behind looking at each other", "c", "engagements", ["salt-flats", "salt-lake"], "sunset"],
    ["/images/gallery/28", "2022,2,4,18,20,49", "Salt Flats Bridals 2022", "Groom lifting bride for a kiss", "b", "bridals", ["salt-flats", "salt-lake"], "sunset"],
    ["/images/gallery/29", "2022,2,4,19,6,32", "M and T Exit", "Groom kissing brides head", "b", "bridals", ["salt-flats", "salt-lake"], "blue-hour"],
    ["/images/gallery/30", "2022,10,1,18,37,22", "P and M Bridals", "Bridal couple doing first look by the lake", "b", "bridals", ["utah-lake", "lakes", "utah-county"], "blue-hour"],
    ["/images/gallery/31", "2022,10,1,18,37,59", "P and M Bridals", "Bride and groom hugging", "a", "bridals", ["utah-lake", "lakes", "utah-county"], "blue-hour"],
    ["/images/gallery/32", "2022,2,4,19,19,6", "M and T Exit", "Couple in limo drinking champagne", "c", "bridals", ["salt-lake", "limousine"], "flash"],
    ["/images/gallery/33", "2022,2,4,19,26,40", "M and T Exit", "Couple gazing into each others eyes", "d", "bridals", ["salt-lake", "limousine"], "flash"],
    ["/images/gallery/34", "2022,2,4,19,32,07", "Salt Flats Wedding Exit", "Bridal couple running to their getaway car with sparklers", "d", "weddings", ["salt-flats", "salt-lake"], "flash"],
    ["/images/gallery/35", "2022,2,4,19,33,8", "Salt Flats Wedding Exit", "Bridal couple hugging with sparklers", "c", "weddings", ["salt-flats", "salt-lake"], "flash"],
    ["/images/gallery/36", "2022,2,4,19,36,5", "Salt Flats Wedding Exit", "Groom leaning in to kiss the bride", "d", "weddings", ["salt-flats", "salt-lake"], "flash"],
    ["/images/gallery/37", "2022,2,4,19,37,18", "Salt Flats Wedding Exit", "Groom and bride laughing", "b", "weddings", ["salt-flats", "salt-lake"], "flash"],
    ["/images/gallery/38", "2022,10,8,17,11,35", "J and V Couples Session 2022", "Boy holding hand and leading girl", "c", "couples", ["utah-mountains", "fall-trees", "forest"], "cloudy"],
    ["/images/gallery/39", "2022,3,5,18,20,2", "R and P Newborn Session", "Couple holding baby and admiring him", "d", "families", ["studio","layton"], "indoor"],
    ["/images/gallery/40", "2022,10,8,17,31,43", "B and C Couple Shoot", "Couple sitting down and holding each other and gazing into each others eyes", "c", "couples", ["utah-mountains", "fall-trees", "forest"], "cloudy"],
    ["/images/gallery/41", "2022,4,9,18,57,22", "P and M Engagements", "Couple sitting and hugging", "c", "engagements", ["sand-dunes", "desert"], "sunset"],
    ["/images/gallery/42", "2022,4,9,19,0,37", "P and M Engagements", "Guy hugging girl from behind and swaying", "b", "engagements", ["sand-dunes", "desert"], "sunset"],
    ["/images/gallery/43", "2022,4,9,19,1,27", "P and M Engagements", "Girl being lifted up on guys back", "d", "engagements", ["sand-dunes", "desert"], "sunset"],
    ["/images/gallery/44", "2023,5,25,19,30,23", "A and K Goblin Valley Bridals", "Guy hugging girl from behind", "b", "bridals", ["goblin-valley", "moab", "desert"], "cloudy"],
    ["/images/gallery/45", "2023,5,25,20,4,43", "A and K Goblin Valley Bridals", "Bride sitting on rock and groom looking in the distance", "c", "bridals", ["goblin-valley", "moab", "desert"], "cloudy"],
    ["/images/gallery/46", "2023,5,25,20,20,11", "A and K Goblin Valley Bridals", "Groom lifting Bride while admiring each other", "c", "bridals", ["goblin-valley", "moab", "desert"], "cloudy"],
    ["/images/gallery/47", "2023,5,26,17,4,41", "A and C Arches Engagements", "Guy picking girl up while she kicks her legs back", "b", "engagements", ["arches", "moab", "desert"], "full-sun"],
    ["/images/gallery/48", "2023,5,26,17,13,14", "A and C Arches Engagements", "Girl hugging guy from behind while they look separate ways", "c", "engagements", ["arches", "moab", "desert"], "full-sun"],
    ["/images/gallery/49", "2023,5,26,17,36,42", "S and C Arches Bridals", "Couple holding hands and walking while looking down", "b", "bridals", ["arches", "moab", "desert"], "full-sun"],
    ["/images/gallery/50", "2023,5,26,17,51,49", "S and C Arches Bridals", "Groom kissing side of brides forhead while she looks off into the distance", "c", "bridals", ["arches", "moab", "desert"], "full-sun"],
    ["/images/gallery/51", "2023,5,26,18,41,11", "S and C Arches Bridals", "Groom holding and looking at bride while she holds her bouquet and looks off into the distance", "b", "bridals", ["arches", "moab", "desert"], "cloudy"],
    ["/images/gallery/52", "2023,5,26,19,56,48", "M and L Arches Bridals", "Groom kissing brides cheek while holding bouquet", "c", "bridals", ["arches", "moab", "desert"], "sunset"],
    ["/images/gallery/53", "2023,5,26,19,2,17", "M and L Arches Bridals", "Bride and groom hugging while touching each others foreheads together", "b", "bridals", ["arches", "moab", "desert"], "sunset"],
    ["/images/gallery/54", "2023,5,26,19,23,1", "M and L Arches Bridals", "Groom holding brides hand and leading her", "a", "bridals", ["arches", "moab", "desert"], "sunset"],
    ["/images/gallery/55", "2023,5,27,6,19,22", "T and L Dead Horse Bridals", "Couple hugging and admiring each other", "c", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
    ["/images/gallery/56", "2023,5,27,6,30,52", "T and L Dead Horse Bridals", "Couple holding each others hand with groom looking at bride", "a", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
    ["/images/gallery/57", "2023,5,27,6,34,10", "T and L Dead Horse Bridals", "Groom touching brides chin with bride smiling", "b", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
    ["/images/gallery/58", "2023,5,27,6,47,13", "T and L Dead Horse Bridals", "Bride and groom holding each other and gazing into each others eyes", "a", "bridals", ["dead-horse", "moab", "desert"], "sunrise"],
    ["/images/gallery/59", "2023,5,13,16,55,6", "G and B Las Vegas Wedding", "Bride and groom looking at each other with bridal party cheering", "a", "weddings", ["las-vegas", "luxury-venue"], "full-sun"],
    ["/images/gallery/60", "2023,5,13,17,9,12", "G and B Las Vegas Wedding", "Bride and groom forehead to forhead while giggling", "d", "weddings", ["las-vegas", "luxury-venue"], "full-sun"],
    ["/images/gallery/61", "2023,5,13,17,10,1", "G and B Las Vegas Wedding", "Groom kissing brides forhead while bride is smiling", "c", "weddings", ["las-vegas", "luxury-venue"], "full-sun"],
    ["/images/gallery/62", "2023,5,13,17,17,29", "G and B Las Vegas Wedding", "Bride and groom jumping in and all white bouncy house", "b", "weddings", ["las-vegas", "luxury-venue"], "full-sun"],
    ["/images/gallery/63", "2023,5,13,17,58,30", "G and B Las Vegas Wedding", "Bride and groom dancing", "b", "weddings", ["las-vegas", "luxury-venue"], "full-sun"],
    ["/images/gallery/64", "2023,5,21,10,4,40", "E and R Engagements", "Boy chasing girl", "b", "engagements", ["utah-mountains", "fields"], "full-sun"],
    ["/images/gallery/65", "2021,10,2,17,47,0", "R Portrait Session 2021", "Girl holding neck while looking up and smiling", "e", "portraits", ["eagle-mountain", "utah-county"], "full-sun"],
    ["/images/gallery/66", "2021,10,14,17,8,42", "S Wedding Day", "Bride holding bouque while smiling and looking off into the distance", "c", "weddings", ["this-is-the-place", "salt-lake"], "cloudy"],
    ["/images/gallery/67", "2021,11,20,8,52,48", "Moab Cozy Engagements 2021", "Couple hugging with boy whispering something funny", "d", "engagements", ["arches", "moab", "desert"], "sunrise"],
    ["/images/gallery/68", "2021,11,21,9,23,8", "A and H Engagements Session", "Guy lifting girl in the air while she lifts her arm up and kicks her leg", "c", "engagements", ["moab", "desert", "roadside"], "sunrise"],
    ["/images/gallery/69", "2021,11,21,9,22,46", "A and H Engagements Session", "Guy lifting girl up while she has her head and arm up", "b", "engagements", ["moab", "desert", "roadside"], "sunrise"],
    ["/images/gallery/70", "2022,7,20,6,39,9", "B and S Couples Session", "Couple sitting in grass with boy kissing girls forhead", "b", "couples", ["utah-mountains", "fields", "ogden"], "sunrise"]
];

//["/images/gallery/65", "Mustache guy and blonde girl", "c", "weddings", ["goblin-valley", "moab", "desert"], "flash"],

setTimeout(function() {
    enterNewPictures(pictureArray)
}, 50);
