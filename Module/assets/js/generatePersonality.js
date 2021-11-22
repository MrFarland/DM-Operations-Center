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

    // Prevent the selection of the same trait twice.
    while (personalityTraitPositive1 == personalityTraitPositive2) {
        var personalityTraitPositive2 = generate_text("PersonailtyType" + personalityType);
    }

    // Prevent the selection of the same flaw twice.
    while (personalityTraitNegative1 == personalityTraitNegative2) {
        var personalityTraitNegative2 = generate_text("PersonailtyType" + personalityType);
    }

    // Change the order and prevalence of positive versus negative traits based on Good/Evil alignment.
    //   -- While types are not inherently good or evil, I want evil PCs less likable. 

    // Note: The personality traits should be stored and accessed from an array. This is silly,but works for now.

    if (alignmentGoodEvil == "Evil"){
        // Front load the personality description with two negative traits and one positive.
        var personalityTrait1 = generate_text("PersonailtyType" + personalityType + "Negative");
        var personalityTrait2 = generate_text("PersonailtyType" + personalityType + "Negative");
        var personalityTrait3 = generate_text("PersonailtyType" + personalityType + "Positive");
        
        // Prevent the selection of the same flaw twice.
        while (personalityTrait1 == personalityTrait2) {
            var personalityTrait2 = generate_text("PersonailtyType" + personalityType + "Negative");
        }
        
        personalityTraitDescription1 = generate_text("PersonailtyTrait" + personalityTrait1);
        personalityTraitDescription2 = generate_text("PersonailtyTrait" + personalityTrait2);
        personalityTraitDescription3 = generate_text("PersonailtyTrait" + personalityTrait3);
    
    } else {
        // Front load the personality description with two positive traits and one negative.
        var personalityTrait1 = generate_text("PersonailtyType" + personalityType + "Positive");
        var personalityTrait2 = generate_text("PersonailtyType" + personalityType + "Positive");
        var personalityTrait3 = generate_text("PersonailtyType" + personalityType + "Negative");
    
        // Prevent the selection of the same flaw twice.
        while (personalityTrait1 == personalityTrait2) {
            var personalityTrait2 = generate_text("PersonailtyType" + personalityType);
        }

        personalityTraitDescription1 = generate_text("PersonailtyTrait" + personalityTrait1);
        personalityTraitDescription2 = generate_text("PersonailtyTrait" + personalityTrait2);
        personalityTraitDescription3 = generate_text("PersonailtyTrait" + personalityTrait3);

        personalityTraits = (" is <strong>" + (personalityTraitPositive1.toLowerCase()) + "</strong> and <strong>" + (personalityTraitPositive2.toLowerCase()) + "</strong>. Unfortunately, " + pronounSubject.toLowerCase() + " is also " + (personalityTraitNegative1.toLowerCase()) + ". ");
    
    }

    // Build the complete personality summary for this NPC including their disposition, motivations, etc.
    personalityDescription = ("<strong>" + personalityTrait1 + "</strong>. " + givenName + " " + personalityTraitDescription1 + ".</br>" + "<strong>" + personalityTrait2 + "</strong>. " + pronounSubject + " " + personalityTraitDescription2 + ".</br>" + "<strong>" + personalityTrait3 + "</strong>. " + givenName + " " + personalityTraitDescription3 + ".</br>");
        
    // Return variables that may be needed in other functions.
    return {
        personalityAlignment: personalityAlignment,
        personalityDescription: personalityDescription,
        personalityTrait1: personalityTrait1,
        personalityTrait2: personalityTrait2,
        personalityTrait3: personalityTrait3
    }
}

function displayPersonality(){
    npcPersonalityAlignment.innerHTML = personalityAlignment;
    npcPersonalityDescription.innerHTML = personalityDescription;
    npcPersonalityTrait1 = personalityTrait1;
    npcPersonalityTrait2 = personalityTrait2;
    npcPersonalityTrait3 = personalityTrait3; 
}