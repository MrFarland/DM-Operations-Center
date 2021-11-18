/*
MrFarland
version 1.0
----------------
generatePersonality.js
*/

function generatePersonality() {

    // Determine an NPCs alignment.
    alignmentLC = generate_text("AlignmentLC");
    alignmentGE = generate_text("AlignmentGE");

    // We don't need "Neutral Neutral", just Neutral is fine.
    if (alignmentLC == "Neutral" && alignmentGE == "Neutral") {
        alignment = alignmentLC;    
    } else {
        alignment = (alignmentLC + " " + alignmentGE);
    }
    
    personality = (alignment);

    return [personality];
}