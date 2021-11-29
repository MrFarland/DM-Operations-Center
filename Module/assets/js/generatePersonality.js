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
        personalityAlignment = alignmentLawfulChaotic;    
    } else {
        personalityAlignment = (alignmentLawfulChaotic + " " + alignmentGoodEvil);
    }

    // Select a personality type based on the profile types using the NERIS Model at 16Personalities.com. (I'm a Mediator.)
    //var personalityType = generate_text("PersonalityType" + alignmentLawfulChaotic);

    // Create the description of the NPC's personality
    personalityDescription = ("<h4>Personality</h4><div class=\"subResult\"><p>" + personalityAlignment + "</p></div>");
    
    // Return the appearance variable.
    return {
        personalityDescription: personalityDescription
    };
    
}