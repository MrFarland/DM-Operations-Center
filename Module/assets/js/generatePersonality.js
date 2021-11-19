/*
MrFarland
version 1.0
----------------
generatePersonality.js
*/

function generatePersonality() {
    // Get the variables needed from the generateOccupation function.
    var occupationObj = generateOccupation();
    var occupationTrade = occupationObj.trade
    var occupationTitle = occupationObj.title

    // Determine an NPCs alignment based on their trade.
    var alignmentLawfulChaotic = generate_text("AlignmentLawfulChaotic" + occupationObj.occupationTrade);
    var alignmentGoodEvil = generate_text("AlignmentGoodEvil" + occupationObj.occupationTrade);

    // Fix "Neutral Neutral" alignment just be "Neutral".
    if (alignmentLawfulChaotic == "Neutral" && alignmentGoodEvil == "Neutral") {
        var personalityAlignment = alignmentLawfulChaotic;    
    } else {
        var personalityAlignment = (alignmentLawfulChaotic + " " + alignmentGoodEvil);
    }

    // Select a personality type based on the profile types using the NERIS Model at 16Personalities.com. (I'm a Mediator.)
    var personalityType = generate_text("PersonalityType" + alignmentLawfulChaotic);
    var personalityTrait1 = generate_text("PersonalityType" + personalityType);
    var personalityTrait2 = generate_text("PersonalityType" + personalityType);
    var PersonalityFlaw = generate_text("PersonalityFlaw" + personalityType);

    // Build the complete personality summary for this NPC including their disposition, motivations, etc.
    personalityDescription = (givenName + " " + personalityTrait1.toLowerCase() + ". " + pronounSubject + " " + personalityTrait2.toLowerCase() + ". " + "<br/>" + "<br/>Alignment: " + personalityAlignment + "<br/>Personality Type: " + personalityType);

    // Return variables that may be needed in other functions.
    return {
        personalityAlignment: personalityAlignment,
        personalityDescription: personalityDescription
    }
}