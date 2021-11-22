/*
MrFarland
version 1.0
----------------
generateAppearance.js
*/

function generateAppearance() {

    // Body
    // ---------------------------------------------------------------------------------------------------------
    
    var bodyColorBase = generate_text("BodyColorBase" + race);
    var bodyColorTone = generate_text("BodyColorTone" + race);
    var bodyColorType = "Skin";
    var bodyHeight = generate_text("BodyHeight");
    var bodyWeight = generate_text("BodyWeight" + bodyHeight);

    // Change the bodyColorType for races that have scales or fur.
    if (race == "Dragonborn"){
        bodyColorType = "Scales";
    } else if (race == "Tabaxi"){
        bodyColorType = "Fur";
    }

    // Create the description of the NPC based on the generated bodyColor.
    appearanceBody = ("<p>" + givenName + " is " + a(ageGroup.toLowerCase()) + " " + race.toLowerCase() + " with <strong>" + bodyColorTone.toLowerCase() + " " + bodyColorBase.toLowerCase() + " " + bodyColorType.toLowerCase() + "</strong>. " + pronounSubject + " is <strong>" +  bodyHeight.toLowerCase() + "</strong> for " + a(race.toLowerCase()) + " with <strong>" + a(bodyWeight.toLowerCase()) + "</strong> build.</p>");

    // Hair 
    // -----------------------------------

    if (race == "Dragonborn"){
        // Dragonborn do not have hair, but they do have different shapes and features that could be added in the future.
        appearanceHair = "";
    } else {
        hairColor = generate_text("HairColor");
        hairLength = generate_text("HairLength");
        hairStyle = generate_text("HairStyle" + hairLength);
        hairType = generate_text("HairType");
        
        facialHairLength = generate_text("HairLength");
        facialHairType = generate_text("FacialHair" + race + genderForm);
        facialHairStyle = generate_text("FacialHairStyle" + facialHairType);

        // Check if the character has facial hair and add create a facialHairDescription.
        if (facialHairType == 'None'){
            facialHairDescription = "";
        } else {
            facialHairDescription = (" with <strong>" + a(facialHairLength.toLowerCase()) + " " + (facialHairType.toLowerCase()) + "</strong>, " + facialHairStyle.toLowerCase());
        }

        appearanceHair = ("<p>" + pronounSubject + " has <strong>" + hairLength.toLowerCase() + ", " + hairType.toLowerCase() + ", " + hairColor.toLowerCase() + " hair</strong> " + hairStyle.toLowerCase() + facialHairDescription + ".</p>");
    }

    // Horns
    // -----------------------------------
    if (race == "Dragonborn" || race == "Tiefling") {
        hornDirection = generate_text("HornDirection" + race);
        hornLength = generate_text("HairLength");
        hornPlacement = generate_text("HornPlacement" + race);
        hornStyle = generate_text("HornStyle" + race);
        hornType = generate_text("HornType" + race);
        
        appearanceHorns = ("<p>" + pronounObject + " <strong>" + hornLength.toLowerCase() + ", " + hornType.toLowerCase() + " horns</strong> emerge from the " + hornPlacement.toLowerCase() + " and " + hornStyle.toLowerCase() + " " + hornDirection.toLowerCase() + ". ");
    } else {
        appearanceHorns = "";
    }
    
    
    // Face 
    // -----------------------------------
    eyeColor = generate_text("EyeColor" + race);
    eyeType = generate_text("EyeType");
    noseLength = generate_text("HairLength");
    noseType = generate_text("NoseType");
    feature = generate_text("Feature");

    appearanceFace = ("<p>" + givenName + " has <strong>" + eyeType.toLowerCase() + ", " + eyeColor.toLowerCase() + " eyes</strong>; <strong>" + a(noseLength.toLowerCase()) + ", " + noseType.toLowerCase() + " nose</strong>; and </p>");

    // Create the description of the NPC based on the generated bodyColor.
    appearanceDescription = (appearanceBody + appearanceHair + appearanceHorns + appearanceFace);

    // Return the appearance variable.
    return [appearanceDescription];
    
}