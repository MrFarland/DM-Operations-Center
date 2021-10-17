/*
MrFarland
version 1.0
----------------
getCharacterClass.js
*/

// Get the selected (or randomly generated) NPC class from the selectCharacterLevel dropdown menu.
// --------------------------------------------------------------------------------

function getCharacterClass() {

    // Get the NPCs tier from the selectCharacterLevel dropdown.
    selectCharacterLevel = document.getElementById('selectCharacterLevel');
    characterLevel = selectCharacterLevel.options[selectCharacterLevel.selectedIndex].value;

    // If the NPCs NPCLevel is not defined, choose one randomly.
    if (characterLevel == "None"){
        characterLevel = generate_text("CharacterLevel");
    }

    // Use the characterLevel to determine the exact Class for the NPC.
    characterClass = generate_text("CharacterLevel" + characterLevel);
 
    // Create a slug for the characterClass.
    characterLower = characterClass.toLowerCase();
    characterSlug = characterLower.replace(/ /g, '-');
    
    characterClassURL = ("<a href=\"/monster/" + characterSlug + "\">" + characterClass + "</a>");

    // Return the values for race and gender in an array.
    return [characterLevel, characterClass, characterLower, characterClassURL];

}