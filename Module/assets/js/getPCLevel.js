/*
FelixM
version 1.0
----------------
getPCLevel.js
*/

// Get the selected (or randomly generated) NPC class from the selectNPCClassLevel dropdown menu.
// --------------------------------------------------------------------------------

function getPCLevel() {

    // Get the NPCs tier from the selectPCLevel dropdown.
    selectPCLevel = document.getElementById('selectPCLevel');
    PCLevel = selectPCLevel.options[selectPCLevel.selectedIndex].value;

    // If the NPCs PCLevel is Any, choose one randomly.
    if (PCLevel == "None"){
        PCLevel = generate_text("PCLevelTiers");
    }


    // Return the values for race and gender in an object.
    return {
        PCLevel: PCLevel
    };

}