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
    bodyDescription = ("<p>" + givenName + " is " + a(ageGroup.toLowerCase()) + " " + (race.toLowerCase()) + " with <strong>" + bodyColorTone.toLowerCase() + " " + bodyColorBase.toLowerCase() + " " + bodyColorType.toLowerCase() + "</strong> and <strong>" + a(bodyHeight.toLowerCase()) + ", " + bodyWeight.toLowerCase() +  " build</strong>.</p>");

    // Hair
    if (race == "Dragonborn"){
        hairDescription = "";
    } else {
        hairColor = generate_text("HairColor");
        hairLength = generate_text("HairLength");
        hairStyle = generate_text("HairStyle" + hairLength);
        hairType = generate_text("HairType");
        
        hairDescription = ("<p>" + pronounSubject + " has <strong>" + hairLength.toLowerCase() + "</strong>, <strong>" +  hairType.toLowerCase() + "</strong>, <strong>" + hairColor.toLowerCase() + " hair</strong> " + hairStyle.toLowerCase() + ".</p>");
    }    
    
    // hornDirection = generate_text("HornDirection" + race);
    // hornLength = generate_text("HairLength");
    // hornPlacement = generate_text("HornPlacement" + race);
    // hornStyle = generate_text("HornStyle" + race);
    // hornType = generate_text("HornType" + race);
    
    // Change the headDescription for those races that do not have hair, horns or other distinct features.
    // if (race == "Dragonborn"){
        // headDescription = (pronounSubject + " has " + (hornLength.toLowerCase()) +  ", " + hornType + " horns that emerge from the " + hornPlacement + " and " + // hornStyle + " " + hornDirection + ". ");
    // } else if (race == "Tiefling"){
        // headDescription = (pronounSubject + " has " + (hairLength.toLowerCase()) + ", " + hairType + ", " + hairColor + " hair " + hairStyle + " with " + // (hornLength.toLowerCase()) +  ", " + hornType + " horns that emerge from the " + hornPlacement + " and " + hornStyle + " " + hornDirection + ". ");
    // } else {
        // headDescription = (pronounSubject + " has " + (hairLength.toLowerCase()) + ", " + hairType + ", " + hairColor + " hair " + hairStyle + ". ");
    // }

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
    // eyeColor = generate_text("EyeColor" + race);
    // eyeType = generate_text("EyeType");
    // eyeDescription = (eyeType + ", " + eyeColor + " eyes");
    // facialHairType = generate_text("FacialHair" + race + genderForm);
    // facialHairStyle = generate_text("FacialHairStyle" + facialHairType);
    // feature = generate_text("Feature");

    // Determine if the NPC has facial hair.
    // if (facialHairType == 'None'){
        // facialHairDescription = "";
        // faceDescription = (givenName + " has " + eyeDescription + " and " + feature + ". ");
    // } else {
        // facialHairDescription = ((hairLength.toLowerCase()) + ", " + hairType + " " + (facialHairType.toLowerCase()) + ", " + facialHairStyle);
        // faceDescription = (givenName + " has " + eyeDescription + "; " + feature + "; and " + a(facialHairDescription) + ". ");
    // }

    // Create the description of the NPC based on the generated bodyColor.
    appearanceDescription = ("<h4>Appearance</h4><div class=\"subResult\">" + bodyDescription + hairDescription + "</div>");

    // Return the appearance variable.
    return {
        appearanceDescription: appearanceDescription
    };
    
}