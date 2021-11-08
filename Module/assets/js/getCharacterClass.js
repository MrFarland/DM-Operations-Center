/*
MrFarland
version 1.0
----------------
getCharacterClass.js
*/

// Get the selected (or randomly generated) NPC class from the selectNPCClassLevel dropdown menu.
// --------------------------------------------------------------------------------

function getCharacterClass() {

    // Get the NPCs tier from the selectNPCClassLevel dropdown.
    selectNPCClassLevel = document.getElementById('selectNPCClassLevel');
    NPCClassLevel = selectNPCClassLevel.options[selectNPCClassLevel.selectedIndex].value;

    // If the NPCs NPCLevel is not defined, choose one randomly.
    if (NPCClassLevel == "None"){
        NPCClassLevel = generate_text("NPCClassLevel");
    }

    // Use the NPCClassLevel to determine the exact Class for the NPC.
    characterClass = generate_text("NPCClassLevel" + NPCClassLevel);
 
    // Create a slug for the characterClass.
    characterSlug = characterClass.replace(/ /g, '-');
    characterLower = characterSlug.toLowerCase();
    
    characterClassURL = ("<a href=\"/monster/" + characterSlug + "\">" + characterClass + "</a>");

    // Return the values for race and gender in an array.
    return [NPCClassLevel, characterClass, characterLower, characterClassURL, characterSlug];

}