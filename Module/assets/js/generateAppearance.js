/*
MrFarland
version 1.0
----------------
generateAppearance.js
*/

function generateAppearance() {

    // Body
    var bodyColorBase = (generate_text("BodyColorBase" + race));
    var bodyColorTone = (generate_text("BodyColorTone" + race));
    var bodyColorType = "Skin";
    var bodyHeight = generate_text("BodyHeight");
    var bodyWeight = generate_text("BodyWeight");
    
    // Change the bodyColorType from Skin to Scales or Fur depending on the race.
    if (race == "Dragonborn"){
        bodyColorType = "Scales";
    } else if (race == "Tabaxi"){
        bodyColorType = "Fur";
    }

    // Make sure we don't end up with "an average, average build".
    while (bodyHeight == bodyWeight){
        bodyWeight = generate_text("BodyWeight");
    }

    // Create the complete description of the NPC's body, wrapped in an HTML paragraph.
    bodyDescription = (givenName + " is " + a(ageGroup.toLowerCase()) + " " + (race.toLowerCase()) + " with <strong>" + bodyColorTone.toLowerCase() + " " + bodyColorBase.toLowerCase() + " " + bodyColorType.toLowerCase() + "</strong> and <strong>" + a(bodyHeight.toLowerCase()) + ", " + bodyWeight.toLowerCase() +  " build</strong>. ");

    // Hair
    if (race == "Dragonborn"){
        hairDescription = "";
    } else {
        hairColor = generate_text("HairColor");
        hairLength = generate_text("HairLength");
        hairStyle = generate_text("HairStyle" + hairLength);
        hairType = generate_text("HairType");

        // Determine if the NPC has facial hair.
        facialHairType = generate_text("FacialHair" + race + genderForm);

        // If the NPC has facial hair create a description.
        if (facialHairType != 'None'){
            facialHairLength = generate_text("HairLength");
            facialHairStyle = generate_text("FacialHairStyle" + facialHairType);

            facialHairDescription = (" and <strong>" + a(facialHairLength.toLowerCase()) + " " + (facialHairType.toLowerCase()) + "</strong>, " + facialHairStyle.toLowerCase());
        } else {
            facialHairDescription = "";
        }

        hairDescription = (pronounSubject + " has <strong>" + hairLength.toLowerCase() + "</strong>, <strong>" +  hairType.toLowerCase() + "</strong>, <strong>" + hairColor.toLowerCase() + " hair</strong> " + hairStyle.toLowerCase() + facialHairDescription + ". ");
    }    
    
    // Horns
    if (race == "Dragonborn" || race == "Tiefling"){
        hornDirection = generate_text("HornDirection" + race);
        hornLength = generate_text("HairLength");
        hornPlacement = generate_text("HornPlacement" + race);
        hornStyle = generate_text("HornStyle" + race);
        hornType = generate_text("HornType" + race);

        hornDescription = ("Two <strong>" + hornLength.toLowerCase() + "</strong>, <strong>" + hornType.toLowerCase() + " horns</strong> emerge from the " + " <strong>" + hornPlacement.toLowerCase() + "</strong> of " + pronounObject.toLowerCase() + " head and <strong>" + hornStyle.toLowerCase() + " " + hornDirection.toLowerCase() + "</strong>. ");
    } else {
        hornDescription = "";
    }

    // Face 
    eyeColor = generate_text("FaceEyeColor" + race);
    eyeType = generate_text("FaceEyeType");
    faceType = generate_text("FaceType");
    facialFeature = generate_text("FacialFeature");

    faceDescription = (givenName + " has <strong>" + a(faceType.toLowerCase()) + " face</strong> with <strong>" + eyeType.toLowerCase() + "</strong>, <strong>" + eyeColor.toLowerCase() + " eyes</strong>" + " and <strong>" + a(facialFeature.toLowerCase()) + "</strong>.");

    // Create the description of the NPC based on the generated bodyColor.
    appearanceDescription = ("<h4>Appearance</h4><div class=\"subResult\"><p>" + bodyDescription + hairDescription + hornDescription + faceDescription + "</p></div>");

    // Return the appearance variable.
    return {
        appearanceDescription: appearanceDescription
    };
    
}