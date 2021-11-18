/*
MrFarland
version 1.0
----------------
generateAppearance.js
*/

function generateAppearance() {

    // Body
    // -----------------------------------
    bodyBuild = generate_text("BodyBuild");
    bodyColorBase = (generate_text("BodyColorBase" + race));
    bodyColorTone = (generate_text("BodyColorTone" + race));
    bodyHeight = generate_text("BodyHeight");

    // If both are average, we don't need an "average, average build"
    if (bodyHeight == "average" && bodyBuild == "average"){
        bodyFrame = ("and " + a(bodyHeight) +  " build.");    
    } else {
        bodyFrame = ("and " + a(bodyHeight) + ", " + bodyBuild +  " build");
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
    hornDirection = generate_text("HornDirection" + race);
    hornLength = generate_text("HairLength");
    hornPlacement = generate_text("HornPlacement" + race);
    hornStyle = generate_text("HornStyle" + race);
    hornType = generate_text("HornType" + race);
    
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
    eyeColor = generate_text("EyeColor" + race);
    eyeType = generate_text("EyeType");
    eyeDescription = (eyeType + ", " + eyeColor + " eyes");
    facialHairType = generate_text("FacialHair" + race + genderForm);
    facialHairStyle = generate_text("FacialHairStyle" + facialHairType);
    feature = generate_text("Feature");

    // Determine if the NPC has facial hair.
    if (facialHairType == 'None'){
        facialHairDescription = "";
        faceDescription = (givenName + " has " + eyeDescription + " and " + feature + ". ");
    } else {
        facialHairDescription = ((hairLength.toLowerCase()) + ", " + hairType + " " + (facialHairType.toLowerCase()) + ", " + facialHairStyle);
        faceDescription = (givenName + " has " + eyeDescription + "; " + feature + "; and " + a(facialHairDescription) + ". ");
    }

    // Create the description of the NPC based on the generated bodyColor.
    appearance = (bodyDescription + headDescription + faceDescription);

    // Return the appearance variable.
    return [appearance];

}