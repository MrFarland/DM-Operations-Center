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
    var alignmentLawChaos = generate_text("AlignmentLawChaos" + occupationObj.occupationTrade);
    var alignmentGoodEvil = generate_text("AlignmentGoodEvil" + occupationObj.occupationTrade);

    // Fix "Neutral Neutral" alignment just be "Neutral".
    if (alignmentLawChaos == "Neutral" && alignmentGoodEvil == "Neutral") {
        var personalityAlignment = alignmentLawChaos;    
    } else {
        var personalityAlignment = (alignmentLawChaos + " " + alignmentGoodEvil);
    }

    // Determine "Disposition" weighted by Good/Evil, but not proscriptively. Angry people can be good. Kind people can be evil.
    var personalityDisposition = generate_text("PersonalityDisposition" + alignmentGoodEvil);
    
    // Build the complete personality summary for this NPC including their disposition, motivations, etc.
    personalityDescription = (givenName + " is " + personalityAlignment + " with " + a(personalityDisposition.toLowerCase()) + " disposition.");

    // Return variables that may be needed in other functions.
    return {
        personalityAlignment: personalityAlignment,
        personalityDescription: personalityDescription
    }
}