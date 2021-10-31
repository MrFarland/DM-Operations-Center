/*
MrFarland & Felix MIL
version 1.0
----------------
generateNPC.js
*/

// Generate an NPC with a name & description of their appearance, personality, etc.
// --------------------------------------------------------------------------------

function generateNPC() {

    // Get a name for this NPC by calling the generateName function.
    // -- This will also get the race and gender for the NPC.
    generateName();
    
    // Get a class for this NPC by calling the getCharacterClass function.
    getCharacterClass();
 
    // Age & Age Group
    // --------------------

    // Choose an age group based on the AgeGroup array in characterData.js.
    ageGroup = generate_text("AgeGroup");

    // Select the appropriate ageGroupArray based on race from the raceAgeGroups object.
    ageGroupValues = (raceAgeGroups[race]);

    // Determine the min and max ages for a the ageGroup based on the NPCs race.
    if (ageGroup == "Young"){
        ageGroupMin = ageGroupValues[0];
        ageGroupMax = ageGroupValues[1];
    } else if (ageGroup == "Adult"){
        ageGroupMin = ageGroupValues[1];
        ageGroupMax = ageGroupValues[2];
    } else if (ageGroup == "Mature"){
        ageGroupMin = ageGroupValues[2];
        ageGroupMax = ageGroupValues[3];
    } else if (ageGroup == "Elderly"){
        ageGroupMin = ageGroupValues[3];
        ageGroupMax = ageGroupValues[4];
    } else if (ageGroup == "Venerable"){
        ageGroupMin = ageGroupValues[4];
        ageGroupMax = ageGroupValues[5];
    }
    
    // Generate a random age based on the NPC's race and age group.
    function randomNum(ageGroupMin, ageGroupMax) {
        return Math.floor(Math.random() * (ageGroupMax - ageGroupMin + 1)) + ageGroupMin;
    }
    age = randomNum(ageGroupMin, ageGroupMax);

    // --------------------------------------------------
    // Appearance
    // --------------------------------------------------

    // Body
    // -----------------------------------
    // Generate common traits.
    bodyColorBase = (generate_text(race + "BodyColorBase"));
    bodyColorTone = (generate_text(race + "BodyColorTone"));
    bodyHeight = generate_text("BodyHeight");
    bodyWeight = generate_text("BodyWeight");

    // If both are average, we don't need an "average, average build"
    if (bodyHeight == "average" && bodyWeight == "average"){
        bodyFrame = ("and " + a(bodyHeight) +  " build.");    
    } else {
        bodyFrame = ("and " + a(bodyHeight) + ", " + bodyWeight +  " build");
    }

    // Determine the NPCs bodyColorType based on their race.
    if (race == "Dragonborn"){
        bodyColorType = "scales";
    } else if (race == "Tabaxi"){
        bodyColorType = "fur";
    } else {
        bodyColorType = "skin";
    }

    // Create the description of the NPC based on the generated bodyColor.
    bodyDescription = (givenName + " is " + a(ageGroup.toLowerCase()) + " " + (race.toLowerCase()) + " with " + bodyColorTone + " " + bodyColorBase + " " + bodyColorType + " " + bodyFrame + ". ");

    // Head
    // -----------------------------------
    hairColor = generate_text("HairColor");
    hairLength = generate_text("HairLength");
    hairStyle = generate_text("HairStyle" + hairLength);
    hairType = generate_text("HairType");
    hornDirection = generate_text(race + "HornDirection");
    hornLength = generate_text("HairLength");
    hornPlacement = generate_text(race + "HornPlacement");
    hornStyle = generate_text(race + "HornStyle");
    hornType = generate_text(race + "HornType");
    
    // Change the headDescription for those races that do not have hair, horns or other distinct features.
    if (race == "Dragonborn"){
        headDescription = (pronounSubject + " has " + (hornLength.toLowerCase()) +  ", " + hornType + " horns that emerge from the " + hornPlacement + " and " + hornStyle + " " + hornDirection + ". ");
    } else if (race == "Tiefling"){
        headDescription = (pronounSubject + " has " + (hairLength.toLowerCase()) + ", " + hairType + ", " + hairColor + " hair " + hairStyle + " with " + (hornLength.toLowerCase()) +  ", " + hornType + " horns that emerge from the " + hornPlacement + " and " + hornStyle + " " + hornDirection + ". ");
    } else {
        headDescription = (pronounSubject + " has " + (hairLength.toLowerCase()) + ", " + hairType + ", " + hairColor + " hair " + hairStyle + ". ");
    }

    // Face 
    // -----------------------------------
    eyeColor = generate_text(race + "EyeColor");
    eyeType = generate_text("EyeType");
    eyeDescription = (eyeType + ", " + eyeColor + " eyes");
    facialHairType = generate_text(race + "FacialHair" + genderForm);
    facialHairStyle = generate_text("FacialHairStyle" + facialHairType);
    feature = generate_text("Feature");

    // Determine if the NPC has facial hair.
    if (facialHairType == 'None'){
        facialHairDescription = "";
        faceDescription = (pronounSubject + " has " + eyeDescription + " and " + feature + ". ");
    } else {
        facialHairDescription = ((hairLength.toLowerCase()) + ", " + hairType + " " + (facialHairType.toLowerCase()) + ", " + facialHairStyle);
        faceDescription = (pronounSubject + " has " + eyeDescription + "; " + feature + "; and " + facialHairDescription + ". ");
    }

    // Physical Appearance
    // --------------------------------------------------

    physicalAppearance = (bodyDescription + headDescription + faceDescription);
    
    // Personality
    // --------------------------------------------------

    alignment = generate_text("Alignment");
    

    // Occupation
    // --------------------------------------------------


    displayNPC()
     
}

// Populate HTML with generated values

function displayNPC() {

    // Header
    npcFullName.innerHTML = fullName;
    npcFullRace.innerHTML = fullRace;
    npcGenderID.innerHTML = genderID;
    npcAge.innerHTML = age;
    npcAgeGroup.innerHTML = ageGroup;
    npcCharacterClassURL.innerHTML = characterClassURL;

    // Appearance
    npcPhysicalAppearance.innerHTML = physicalAppearance;

    // Personality
    
    // Occupation
    
}