
function createNewEntry(path, date, name, alt, priority, type, locationsArray, lighting) {

    return new Promise(resolve => {

        // console.log("START: " + name);
        database.newEntry(path, date, name, alt, priority, type, locationsArray, lighting);
        // console.log("STOP: " + name);
        setTimeout(function () { resolve("complete") }, 10);

    });

}


async function enterNewPictures(pictureInfoArray) {

    for (let i = 0; i < pictureInfoArray.length; i++) {

        await createNewEntry(pictureInfoArray[i][0], pictureInfoArray[i][1], pictureInfoArray[i][2], pictureInfoArray[i][3], pictureInfoArray[i][4], pictureInfoArray[i][5], pictureInfoArray[i][6], pictureInfoArray[i][7]);

    }
    //    console.log("complete");

}


var pictureArray = [
    ["/images/gallery/0", "2021,11,21,6,51,45", "Goblin Valley Bridals 2021", "Groom spinning bride in goblin valley flash shoot", "d", "bridals", ["goblin-valley", "moab", "desert", "utah", "arizona"], "flash"],
    ["/images/gallery/1", "2022,4,9,19,43,39", "P and M Engagements", "Couple holding hands walking down sand dunes", "c", "engagements", ["sand-dunes", "desert", "utah", "california"], "sunset"],
    ["/images/gallery/2", "2022,5,2,18,32,14", "P and A Bridals", "Bride and groom hugging", "c", "bridals", ["antelope-island", "layton", "utah"], "sunset"],
    ["/images/gallery/3", "2022,10,16,18,19,42", "H and A Couples Session", "Couple dancing on hiking trail", "c", "couples", ["utah-mountains", "roadside", "fall-trees", "utah"], "cloudy"],
    ["/images/gallery/4", "2023,4,15,10,7,5", "City Girls Content Day", "Girls running and laughing on a rooftop", "d", "friends", ["salt-lake", "utah"], "full-sun"],
    ["/images/gallery/5", "2022,5,2,18,44,48", "P and A Bridals", "Groom helping bride down rock", "c", "bridals", ["antelope-island", "layton", "utah"], "blue-hour"],
    ["/images/gallery/6", "2021,11,21,17,52,39", "Goblin Valley Bridals 2021", "Groom holding bride", "e", "bridals", ["goblin-valley", "moab", "desert", "utah", "arizona"], "blue-hour"],
    ["/images/gallery/7", "2021,11,21,18,06,32", "Goblin Valley Bridals 2021", "Groom kissing brides forehead", "b", "bridals", ["goblin-valley", "moab", "desert", "utah", "arizona"], "blue-hour"],
    ["/images/gallery/8", "2022,6,23,11,48,33", "Little White Chapel Elopement", "Couple dancing in downtown", "b", "elopements", ["little-white-chapel", "las-vegas", "nevada", "roadside"], "full-sun"],
    ["/images/gallery/9", "2023,4,21,19,3,23", "M Senior April", "Girl laughing in the road", "d", "portraits", ["antelope-island", "roadside", "layton", "utah"], "cloudy"],
    ["/images/gallery/10", "2022,6,23,22,46,38", "Fremont Street Bridals", "Groom kissing bride against wall", "c", "bridals", ["las-vegas", "nevada", "studio"], "indoor"],
    ["/images/gallery/11", "2022,6,23,22,55,46", "Fremont Street Bridals", "Blurry couple walking away from each other", "d", "bridals", ["las-vegas", "nevada", "studio"], "indoor"],
    ["/images/gallery/12", "2023,4,21,19,29,28", "M Senior April", "Girl squatting with a soft smile", "d", "portraits", ["antelope-island", "roadside", "layton", "utah"], "blue-hour"],
    ["/images/gallery/13", "2022,2,4,8,8,46", "City Bridals 2022", "Groom lifting bride in the air", "b", "bridals", ["salt-lake", "downtown", "new-york-rooftop", "new-york-city", "seattle", "utah"], "sunrise"],
    ["/images/gallery/14", "2022,2,4,8,18,8", "City Bridals 2022", "Bride jumping on groom and swinging", "c", "bridals", ["salt-lake", "downtown", "new-york-rooftop", "new-york-city", "seattle", "utah"], "sunrise", "new-york-rooftop"],
    ["/images/gallery/15", "2022,2,4,8,20,43", "City Bridals 2022", "Couple holding hands looking opposite directions", "c", "bridals", ["salt-lake", "downtown", "new-york-rooftop", "new-york-city", "seattle", "utah"], "sunrise"],
    ["/images/gallery/16", "2022,2,4,8,23,41", "City Bridals 2022", "Bride and groom putting their heads and noses together", "d", "bridals", ["salt-lake", "downtown", "new-york-rooftop", "new-york-city", "seattle", "utah"], "sunrise"],
    ["/images/gallery/17", "2022,2,4,8,56,40", "M and E Couple Session", "Couple holding hands and looking at each other", "b", "couples", ["salt-lake", "downtown", "england", "london", "utah"], "sunrise"],
    ["/images/gallery/18", "2022,2,4,9,37,8", "M and E Couple Session", "Guy leaning over girl to kiss her", "c", "couples", ["salt-lake", "new-york", "seattle", "parks", "utah"], "sunrise"],
    ["/images/gallery/19", "2022,2,4,11,5,18", "Snowy Bridals 2022", "Couple walking in the snow on the mountain", "b", "bridals", ["salt-lake", "utah-mountains", "forest", "snow", "utah"], "full-sun"],
    ["/images/gallery/20", "2022,2,4,11,15,19", "Snowy Bridals 2022", "Groom lifting bride in the forest", "c", "bridals", ["salt-lake", "utah-mountains", "forest", "snow", "utah"], "shaded"],
    ["/images/gallery/21", "2022,2,4,11,33,15", "Snowy Engagements 2022", "Couple playing in the snow", "b", "engagements", ["salt-lake", "utah-mountains", "forest", "snow", "utah"], "full-sun"],
    ["/images/gallery/22", "2022,2,4,11,33,50", "Snowy Engagements 2022", "Couple playing in the snow", "b", "engagements", ["salt-lake", "utah-mountains", "forest", "snow", "utah"], "full-sun"],
    ["/images/gallery/23", "2022,2,4,11,36,58", "Snowy Engagements 2022", "Couple in the snow lifting girl up", "d", "engagements", ["salt-lake", "utah-mountains", "forest", "snow", "utah"], "full-sun"],
    ["/images/gallery/24", "2022,2,4,17,6,48", "L and M Engagements", "Couple sitting and looking at each other", "c", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/25", "2022,2,4,17,8,30", "L and M Engagements", "Couple sitting back to back and looking at each other", "d", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/26", "2022,2,4,17,23,39", "L and M Engagements", "Couple sitting on the ground holding hands", "b", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/27", "2022,2,4,17,57,38", "L and M Engagements", "Girl hugging from behind looking at each other", "c", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/28", "2022,2,4,18,20,49", "Salt Flats Bridals 2022", "Groom lifting bride for a kiss", "b", "bridals", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/29", "2022,2,4,19,6,32", "M and T Exit", "Groom kissing brides head", "b", "bridals", ["salt-flats", "salt-lake", "utah"], "blue-hour"],
    ["/images/gallery/30", "2022,10,1,18,37,22", "P and M Bridals", "Bridal couple doing first look by the lake", "b", "bridals", ["utah-lake", "lakes", "utah-county", "utah"], "blue-hour"],
    ["/images/gallery/31", "2022,10,1,18,37,59", "P and M Bridals", "Bride and groom hugging", "a", "bridals", ["utah-lake", "lakes", "utah-county", "utah"], "blue-hour"],
    ["/images/gallery/32", "2022,2,4,19,19,6", "M and T Exit", "Couple in limo drinking champagne", "c", "bridals", ["salt-lake", "limousine", "utah"], "flash"],
    ["/images/gallery/33", "2022,2,4,19,26,40", "M and T Exit", "Couple gazing into each others eyes", "d", "bridals", ["salt-lake", "limousine", "utah"], "flash"],
    ["/images/gallery/34", "2022,2,4,19,32,07", "Salt Flats Wedding Exit", "Bridal couple running to their getaway car with sparklers", "d", "weddings", ["salt-flats", "salt-lake", "utah"], "flash"],
    ["/images/gallery/35", "2022,2,4,19,33,8", "Salt Flats Wedding Exit", "Bridal couple hugging with sparklers", "c", "weddings", ["salt-flats", "salt-lake", "utah"], "flash"],
    ["/images/gallery/36", "2022,2,4,19,36,5", "Salt Flats Wedding Exit", "Groom leaning in to kiss the bride", "d", "weddings", ["salt-flats", "salt-lake", "utah"], "flash"],
    ["/images/gallery/37", "2022,2,4,19,37,18", "Salt Flats Wedding Exit", "Groom and bride laughing", "b", "weddings", ["salt-flats", "salt-lake"], "flash", "utah"],
    ["/images/gallery/38", "2022,10,8,17,11,35", "J and V Couples Session 2022", "Boy holding hand and leading girl", "c", "couples", ["utah-mountains", "fall-trees", "forest", "utah"], "cloudy"],
    ["/images/gallery/39", "2022,3,5,18,20,2", "R and P Newborn Session", "Couple holding baby and admiring him", "d", "families", ["studio", "layton", "utah"], "indoor"],
    ["/images/gallery/40", "2022,10,8,17,31,43", "B and C Couple Shoot", "Couple sitting down and holding each other and gazing into each others eyes", "c", "couples", ["utah-mountains", "fall-trees", "forest", "utah"], "cloudy"],
    ["/images/gallery/41", "2022,4,9,18,57,22", "P and M Engagements", "Couple sitting and hugging", "c", "engagements", ["sand-dunes", "desert", "utah"], "sunset"],
    ["/images/gallery/42", "2022,4,9,19,0,37", "P and M Engagements", "Guy hugging girl from behind and swaying", "b", "engagements", ["sand-dunes", "desert", "utah"], "sunset"],
    ["/images/gallery/43", "2022,4,9,19,1,27", "P and M Engagements", "Girl being lifted up on guys back", "d", "engagements", ["sand-dunes", "desert", "utah"], "sunset"],
    ["/images/gallery/44", "2023,5,25,19,30,23", "A and K Goblin Valley Bridals", "Guy hugging girl from behind", "b", "bridals", ["goblin-valley", "moab", "desert", "utah"], "cloudy"],
    ["/images/gallery/45", "2023,5,25,20,4,44", "A and K Goblin Valley Bridals", "Bride sitting on rock with groom standing and looking in the distance", "d", "bridals", ["goblin valley", "moab", "desert", "utah"], "sunset"],
    ["/images/gallery/46", "2023,5,25,20,20,11", "A and K Goblin Valley Bridals", "Groom lifting Bride while admiring each other", "c", "bridals", ["goblin-valley", "moab", "desert", "utah"], "cloudy"],
    ["/images/gallery/47", "2023,5,26,17,4,41", "A and C Arches Engagements", "Guy picking girl up while she kicks her legs back", "b", "engagements", ["arches", "moab", "desert", "utah"], "full-sun"],
    ["/images/gallery/48", "2023,5,26,17,13,14", "A and C Arches Engagements", "Girl hugging guy from behind while they look separate ways", "c", "engagements", ["arches", "moab", "desert", "utah"], "full-sun"],
    ["/images/gallery/49", "2023,5,26,17,36,42", "S and C Arches Bridals", "Couple holding hands and walking while looking down", "b", "bridals", ["arches", "moab", "desert", "utah"], "full-sun"],
    ["/images/gallery/50", "2023,5,26,17,51,49", "S and C Arches Bridals", "Groom kissing side of brides forhead while she looks off into the distance", "c", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/51", "2023,5,26,18,41,11", "S and C Arches Bridals", "Groom holding and looking at bride while she holds her bouquet and looks off into the distance", "b", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/52", "2023,5,26,19,56,48", "M and L Arches Bridals", "Groom kissing brides cheek while holding bouquet", "c", "bridals", ["arches", "moab", "desert", "utah"], "sunset"],
    ["/images/gallery/53", "2023,5,26,19,2,17", "M and L Arches Bridals", "Bride and groom hugging while touching each others foreheads together", "b", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/54", "2023,5,26,19,23,1", "M and L Arches Bridals", "Groom holding brides hand and leading her", "a", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/55", "2023,5,27,6,19,22", "T and L Dead Horse Bridals", "Couple hugging and admiring each other", "c", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunrise"],
    ["/images/gallery/56", "2023,5,27,6,30,52", "T and L Dead Horse Bridals", "Couple holding each others hand with groom looking at bride", "a", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunrise"],
    ["/images/gallery/57", "2023,5,27,6,34,10", "T and L Dead Horse Bridals", "Groom touching brides chin with bride smiling", "b", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunrise"],
    ["/images/gallery/58", "2023,5,27,6,47,13", "T and L Dead Horse Bridals", "Bride and groom holding each other and gazing into each others eyes", "a", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunrise"],
    ["/images/gallery/59", "2023,5,13,16,55,6", "G and B Las Vegas Wedding", "Bride and groom looking at each other with bridal party cheering", "a", "weddings", ["las-vegas", "luxury-venue", "nevada"], "shaded"],
    ["/images/gallery/60", "2023,5,13,17,9,12", "G and B Las Vegas Wedding", "Bride and groom forehead to forhead while giggling", "d", "weddings", ["las-vegas", "luxury-venue", "nevada"], "shaded"],
    ["/images/gallery/61", "2023,5,13,17,10,1", "G and B Las Vegas Wedding", "Groom kissing brides forhead while bride is smiling", "c", "weddings", ["las-vegas", "luxury-venue", "nevada"], "shaded"],
    ["/images/gallery/62", "2023,5,13,17,17,29", "G and B Las Vegas Wedding", "Bride and groom jumping in and all white bouncy house", "b", "weddings", ["las-vegas", "luxury-venue", "nevada"], "full-sun"],
    ["/images/gallery/63", "2023,5,13,17,58,30", "G and B Las Vegas Wedding", "Bride and groom dancing", "b", "weddings", ["las-vegas", "luxury-venue", "nevada"], "full-sun"],
    ["/images/gallery/64", "2023,5,21,10,4,40", "E and R Engagements", "Boy chasing girl", "b", "engagements", ["utah-mountains", "fields", "utah"], "full-sun"],
    ["/images/gallery/65", "2021,10,2,17,47,0", "R Portrait Session 2021", "Girl holding neck while looking up and smiling", "e", "portraits", ["eagle-mountain", "utah-county", "utah"], "shaded"],
    ["/images/gallery/66", "2021,10,14,17,8,42", "S Wedding Day", "Bride holding bouque while smiling and looking off into the distance", "c", "weddings", ["this-is-the-place", "salt-lake", "utah"], "cloudy"],
    ["/images/gallery/67", "2021,11,20,8,52,48", "Moab Cozy Engagements 2021", "Couple hugging with boy whispering something funny", "d", "engagements", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/68", "2021,11,21,9,23,8", "A and H Engagements Session", "Guy lifting girl in the air while she lifts her arm up and kicks her leg", "c", "engagements", ["moab", "desert", "roadside", "utah"], "sunrise"],
    ["/images/gallery/69", "2021,11,21,9,22,46", "A and H Engagements Session", "Guy lifting girl up while she has her head and arm up", "b", "engagements", ["moab", "desert", "roadside", "utah"], "sunrise"],
    ["/images/gallery/70", "2022,7,20,6,39,9", "B and S Couples Session", "Couple sitting in grass with boy kissing girls forhead", "b", "couples", ["utah-mountains", "fields", "ogden", "utah"], "sunrise"],
    ["/images/gallery/71", "2022,10,16,17,55,15", "H and A Couples Session", "Couple sitting with girls legs on guys legs, while they're holding hands and giggling", "d", "couples", ["utah-mountains", "roadside", "fall-trees", "utah"], "sunset"],
    ["/images/gallery/72", "2022,06,23,11,48,28", "Little White Chapel Elopement", "Bride and groom turning towards each other and admiring", "c", "elopements", ["little-white-chapel", "las-vegas", "roadside", "nevada"], "full-sun"],
    ["/images/gallery/73", "2022,6,23,20,41,25", "Bellagio Fountain Bridals", "Couple sitting on the side of a fountain, brides legs are on grooms leg, while they're turned toward each other", "c", "bridals", ["the-bellagio-hotel", "las-vegas", "italy", "greece", "nevada"], "sunset"],
    ["/images/gallery/74", "2022,6,23,22,54,1", "Fremont Street Bridals", "Groom picking up bride with bride kicking leg back", "e", "bridals", ["las-vegas", "studio", "nevada"], "indoor"],
    ["/images/gallery/75", "2022,2,4,8,43,43", "M and E Couple Session", "Girl standing on skateboard and kissing boy", "b", "couples", ["salt-lake", "downtown", "new-york-rooftop", "utah"], "sunrise"],
    ["/images/gallery/76", "2022,2,4,9,20,39", "City Bridals 2022", "Bride leading groom across the street while they stare at each other", "d", "bridals", ["salt-lake", "downtown", "roadside", "utah"], "shaded"],
    ["/images/gallery/77", "2022,6,8,15,49,49", "Tibble Fork Paddleboard Lovers", "Guy on back of paddleboard paddling while girl sits infront of him and stares at him", "e", "couples", ["tibble-fork", "utah-county", "lakes", "utah-mountains", "hawaii", "utah"], "cloudy"],
    ["/images/gallery/78", "2023,5,25,20,9,21", "A and K Goblin Valley Bridals", "Groom kissing brides forehead with a veil covering both of their heads", "b", "bridals", ["goblin-valley", "moab", "desert", "utah"], "cloudy"],
    ["/images/gallery/79", "2023,5,26,17,51,43", "S and C Arches Bridals", "Groom pulling bride in while holding bouque down at his side", "c", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/80", "2023,5,26,18,51,52", "M and L Arches Bridals", "Bride and grooms fingertips touching as they pull away from each other", "d", "bridals", ["arches", "moab", "desert", "utah"], "sunset"],
    ["/images/gallery/81", "2023,5,27,6,28,22", "T and L Dead Horse Bridals", "Groom holding bride close while she looks off into the distance", "a", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunrise"],
    ["/images/gallery/82", "2023,6,16,23,24,8", "M Family", "Family walking together and looking at each other", "b", "families", ["utah-mountains", "utah-county", "utah"], "full-sun"],
    ["/images/gallery/83", "2023,6,25,20,0,33", "Utah Lake Family 2023", "Couple holding hands with girl also using her other hand to hold his arm", "b", "couples", ["utah-lake", "utah-county", "lakes", "utah"], "sunset"],
    ["/images/gallery/84", "2021,11,20,8,35,56", "Moab Cozy Engagements 2021", "Couple running and holding hands", "c", "engagements", ["arches", "moab", "desert", "utah", "arizona"], "cloudy"],
    ["/images/gallery/85", "2021,11,20,8,47,31", "Moab Cozy Engagements 2021", "Guy hugging girl from behind while they nuzzle into each other", "d", "engagements", ["arches", "moab", "desert", "utah", "arizona"], "shaded"],
    ["/images/gallery/86", "2023,5,25,19,49,13", "A and K Goblin Valley Bridals", "Bride and groom facing each other on a rock", "b", "bridals", ["goblin valley", "moab", "desert", "utah"], "blue-hour"],
    ["/images/gallery/87", "2023,5,13,17,13,1", "G and B Las Vegas Wedding", "Groom kissing bride's neck", "c", "weddings", ["las-vegas", "luxury-venue", "nevada"], "shaded"],
    ["/images/gallery/88", "2023,5,13,21,37,55", "G and B Las Vegas Wedding", "Bride threw bouquet back", "d", "weddings", ["las-vegas", "luxury-venue", "nevada"], "flash"],
    ["/images/gallery/89", "2023,5,26,17,15,52", "A and C Arches Engagements", "Bride and groom faceing each other and laughing", "b", "engagements", ["arches", "moab", "desert", "utah"], "full-sun"],
    ["/images/gallery/90", "2023,5,26,17,39,57", "A and C Arches Engagements", "Bride and groom kissing with groom dipping bride back", "b", "engagements", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/91", "2023,5,26,17,28,41", "S and C Arches Bridals", "Groom standing behind bride admiring her", "c", "bridals", ["arches", "moab", "desert", "utah"], "full-sun"],
    ["/images/gallery/92", "2023,5,26,17,47,47", "S and C Arches Bridals", "Bride and groom facing each other and dipping", "b", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/93", "2023,5,26,6,40,47", "S and C Arches Bridals", "Bride and groom holding hands and walking uphill", "a", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/94", "2022,8,27,19,14,10", "P and M Engagements 1", "Couple hugging, girl grinning", "c", "engagements", ["utah-mountains", "forest", "utah-county", "utah"], "sunset"],
    ["/images/gallery/95", "2023,5,26,18,54,14", "M and L Arches Bridals", "Groom leading bride up the rocks", "b", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/96", "2021,11,21,6,42,59", "Goblin Valley Bridals 2021", "Bride and groom looking at and leaning into each other", "d", "bridals", ["goblin-valley", "moab", "desert", "utah", "arizona"], "flash"],
    ["/images/gallery/97", "2023,5,26,19,15,32", "M and L Arches Bridals", "Bride lifting dress in the wind and groom hugging in close", "d", "bridals", ["arches", "moab", "desert", "utah"], "shaded"],
    ["/images/gallery/98", "2023,6,17,11,16,41", "M Family", "Girl looking at boy with wind picking up the girls hair", "b", "couples", ["utah-mountains", "utah-county", "utah"], "full-sun"],
    ["/images/gallery/99", "2022,2,4,9,41,7", "M and E Couple Session", "Boy and girl kissing on a park bench", "b", "couples", ["salt-lake", "new-york", "seattle", "parks", "utah"], "sunrise"],
    ["/images/gallery/100", "2023,6,17,11,27,4", "M Family", "Girl leaning in and whispering in boys ear", "d", "couples", ["utah-mountains", "utah-county", "utah"], "sunset"],
    ["/images/gallery/101", "2023,6,25,20,10,1", "Utah Lake Family 2023", "Boy spinning girl", "c", "couples", ["utah-lake", "utah-county", "lakes", "utah"], "sunset"],
    ["/images/gallery/102", "2023,6,25,20,17,56", "Utah Lake Family 2023", "Sisters petting family dog", "c", "families", ["utah-lake", "utah-county", "lakes", "utah"], "sunset"],
    ["/images/gallery/103", "2023,6,25,20,24,18", "Utah Lake Family 2023", "Family cuddling in close", "a", "families", ["utah-lake", "utah-county", "lakes", "utah"], "sunset"],
    ["/images/gallery/104", "2023,7,13,19,49,57", "M Senior July", "Girl posing in a field", "b", "portraits", ["utah-county", "fields", "utah-mountains", "utah"], "sunset"],
    ["/images/gallery/105", "2023,7,13,19,57,15", "M Senior July", "Girl sitting in flower field", "a", "portraits", ["utah-county", "fields", "utah-mountains", "utah"], "sunset"],
    ["/images/gallery/106", "2023,7,13,20,16,15", "M Senior July", "Girl standing in field looking in the distance", "d", "portraits", ["utah-county", "fields", "utah-mountains", "utah"], "sunset"],
    ["/images/gallery/107", "2023,7,29,14,29,16", "July 2023 SLC Wedding", "Detail shot of items on a table at a wedding", "d", "weddings", ["salt-lake", "luxury-venue", "utah"], "indoor"],
    ["/images/gallery/108", "2023,7,29,14,44,12", "July 2023 SLC Wedding", "Best man helping groom put jacket on", "e", "weddings", ["salt-lake", "luxury-venue", "utah"], "indoor"],
    ["/images/gallery/109", "2023,7,29,16,11,26", "July 2023 SLC Wedding", "Father of bride standing facing away from bride waiting for the first look, while a mirror displays the bride in the back", "e", "weddings", ["salt-lake", "luxury-venue", "utah"], "indoor"],
    ["/images/gallery/110", "2023,7,29,16,36,23", "July 2023 SLC Wedding", "Bride walking down isle", "d", "weddings", ["salt-lake", "luxury-venue", "utah"], "indoor"],
    ["/images/gallery/111", "2023,8,6,19,45,58", "B and C Engagements", "Girl leading boy with two hands", "b", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/112", "2023,8,6,19,58,21", "B and C Engagements", "Girl and boy hip bumping and laughing", "a", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/113", "2023,8,6,20,6,2", "B and C Engagements", "Couple sitting back to back enjoying the moment", "c", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/114", "2023,8,6,20,14,40", "B and C Engagements", "Boy pulling girl up off her feet while they're back to back", "b", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/115", "2023,8,6,20,16,53", "B and C Engagements", "Couple sitting facing each other with their foreheads touching", "a", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/116", "2023,8,6,20,22,26", "B and C Engagements", "Couple chasing each other and tickling", "a", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/117", "2023,8,6,20,26,21", "B and C Engagements", "Picture of couple from the neck down of them running", "c", "engagements", ["salt-flats", "salt-lake", "utah"], "sunset"],
    ["/images/gallery/118", "2023,6,25,20,23,31", "Utah Lake Family 2023", "Family posing in their individual couples", "d", "families", ["utah-lake", "utah-county", "lakes", "utah"], "sunset"],
    ["/images/gallery/119", "2023,6,17,11,7,16", "M Family", "Mom and dad kissing baby's cheek", "c", "families", ["utah-mountains", "utah-county", "utah"], "full-sun"],
    ["/images/gallery/120", "2021,11,20,18,0,13", "Western Dead Horse Bridals 2021", "Bride and groom kissing with the groom dipping the bride back", "e", "bridals", ["dead-horse", "moab", "desert", "utah"], "sunset"],
    ["/images/gallery/121", "2021,11,20,8,44,10", "Moab Cozy Engagements 2021", "Girl holding guys face and feeling the morning air on their skin", "d", "engagements", ["arches", "moab", "desert", "utah", "arizona"], "sunrise"],
    ["/images/gallery/122", "2021,11,20,8,52,46", "Moab Cozy Engagements 2021", "Boy tickling girls cheek with his nose", "b", "engagements", ["arches", "moab", "desert", "utah", "arizona"], "sunrise"],
    ["/images/gallery/123", "2021,11,21,17,39,39", "Goblin Valley Bridals 2021", "Bride and groom walking while holding hands", "a", "bridals", ["goblin-valley", "moab", "desert", "utah", "arizona"], "sunset"],
    ["/images/gallery/124", "2021,11,20,9,4,59", "Moab Cozy Engagements 2021", "Boy picking girl up bridal style and swinging her", "d", "engagements", ["arches", "moab", "desert", "utah", "arizona"], "sunrise"],
    ["/images/gallery/125", "2021,11,20,14,11,37", "Red Rock Bridals 2021", "Groom leading bride up red rocks", "c", "bridals", ["moab", "desert", "utah", "arizona"], "shaded"],
    ["/images/gallery/126", "2021,11,21,8,21,12", "Dead Horse Lookout 2021", "Scenic view of Dead Horse Lookout Point", "a", "scenery", ["dead-horse", "moab", "desert", "utah"], "sunset"],
    ["/images/gallery/127", "2021,11,21,9,30,10", "A and H Engagements Session", "Girl on guy's shoulders looking down at him", "b", "engagements", ["moab", "desert", "roadside", "utah"], "sunrise"]
];

// ["/images/gallery/", "date", "name", "alt", "priority", "type", ["locations"], "lighting"]

setTimeout(function () {
    console.log("started");
    enterNewPictures(pictureArray);
}, 500);
