/*
MrFarland
version 1.0
----------------
generatePersonality.js
*/

function generatePersonality() {
    // Get the variables needed from the generateOccupation function.
    var occupationObj = generateOccupation();

    // Determine an NPCs alignment based on their trade.
    var alignmentLawfulChaotic = generate_text("AlignmentLawfulChaotic" + occupationObj.occupationTrade);
    var alignmentGoodEvil = generate_text("AlignmentGoodEvil" + occupationObj.occupationTrade);

    // Fix "Neutral Neutral" alignment just be "Neutral".
    if (alignmentLawfulChaotic == "Neutral" && alignmentGoodEvil == "Neutral") {
        alignment = alignmentLawfulChaotic;    
    } else {
        alignment = (alignmentLawfulChaotic + " " + alignmentGoodEvil);
    }

    // Select a personality type based on the profile types using the NERIS Model at 16Personalities.com. (I'm a Mediator.)
    // var personalityType = generate_text("PersonalityType" + alignmentLawfulChaotic);
    var personalityType = "Consul";
    var personality1 = generate_text(personalityType + "Personality");
    var personality2 = generate_text(personalityType + "Personality");
    var flaw = generate_text(personalityType + "Flaw");
    
    while (personality1 == personality2) {
        var personality2 = generate_text(personalityType + "Personality");
    }

    // Create the description of the NPC's personality
    personalityDescription = ("<h4>Personality</h4><div class=\"subResult\">" + givenName + " " + personality1 + " " + pronounSubject + " " + personality2 + "</p><p>" + givenName + " " + flaw + "</p><p class=\"very-small-text\"><strong>Alignment:</strong> " + alignment + "</p></div>");
    
    // Return the appearance variable.
    return {
        personalityDescription: personalityDescription
    };
    
}