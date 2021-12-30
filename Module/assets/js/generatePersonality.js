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
        alignment = alignmentLawfulChaotic;    
    } else {
        alignment = (alignmentLawfulChaotic + " " + alignmentGoodEvil);
    }

    // Select a personality type based on the profile types using the NERIS Model at 16Personalities.com. (I'm a Mediator.)
    // var personalityType = generate_text("PersonalityType" + alignmentLawfulChaotic);
    var personalityType = "Architect";
    var ideal = generate_text(personalityType + "Ideal" + alignmentGoodEvil);

    if (alignmentGoodEvil == "Evil"){
        var personality1 = generate_text(personalityType + "Flaw");
        var personality2 = generate_text(personalityType + "Flaw");
        var personality3 = generate_text(personalityType + "Personality");
        var personalityException = "faults";

        while (personality1 == personality2) {
            var personality2 = generate_text(personalityType + "Flaw");
        }

    } else {
        var personality1 = generate_text(personalityType + "Personality");
        var personality2 = generate_text(personalityType + "Personality");
        var personality3 = generate_text(personalityType + "Flaw");
        var personalityException = "better qualities";

        while (personality1 == personality2) {
            var personality2 = generate_text(personalityType + "Personality");
        }
    }

    // Create the description of the NPC's personality
    personalityDescription = ("<h4>Personality</h4><div class=\"subResult\"><p class=\"text-center\">" + ideal + "</p><p>" + givenName + " is " + personality1 + " " + pronounSubject + " is also " + personality2 + "</p><p>Despite " + pronounObject.toLowerCase() + " " + personalityException + ", " + givenName + " can be " + personality3 + "</p><p class=\"very-small-text\"><strong>Alignment:</strong> " + alignment + "</p></div>");
    
    // Return the appearance variable.
    return {
        personalityDescription: personalityDescription
    };
    
}