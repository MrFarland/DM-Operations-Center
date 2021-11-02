/*
MrFarland
version 1.0
----------------
generatePersonality.js
*/

function generatePersonality() {

    // Determine an NPCs alignment.
    // -- I don't care if you like alignment, it is useful for creating archetypes. :)
    alignmentLC = generate_text("AlignmentLC");
    alignmentGE = generate_text("AlignmentGE");

    if (alignmentLC == "Neutral" && alignmentGE == "Neutral") {
        alignment = alignmentLC;    
    } else {
        alignment = (alignmentLC + " " + alignmentGE);
    }
    

    personality = (alignment);

    return [personality];
}