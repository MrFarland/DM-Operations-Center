/*
MrFarland & Felix MIL
version 1.0
----------------
generateNPC.js
*/

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
    
    characterURL = ("<a href=\"/monster/" + characterSlug + "\">" + characterClass + "</a>");

    // Return the values for race and gender in an array.
    return [characterLevel, characterClass, characterLower, characterSlug, characterURL];

}

// Generate a name based on the race & gender provided by getRaceGender.
// --------------------------------------------------------------------------------

function generateName() {

    // Get the race and gender for the name from the getRaceGender function.
    getRace();
    getGender();

    // Identify the appropriate name lists to select from based on race/subrace.
    // --- Human names are based on their subrace and not their race.
    // --- Half-Elves & Half-Orcs can have a name from either of their parent's cultures.
    // --- Half-Elves & Half-Orcs with human names need to draw from the various culturws.
    if (race == "Human" || race == "Half-Elf" || race == "Half-Orc"){
        familyNameList = (subRace + "Family");
        givenNameList = (subRace + genderForm);
    } else {
        familyNameList = (race + "Family");
        givenNameList = (race + genderForm);
    }

    familyName = generate_text(familyNameList);
    givenName = generate_text(givenNameList);
    
    // Generate a child name for Elves.
    if (race == "Elf"){
        childName = generate_text(race + "Child");
    } else if (subRace == "Elf"){
        childName = generate_text(subRace + "Child");
    } else {
        childName = "";
    }
    
    // Generate a virtue name for Tieflings.
    if (race == "Tiefling"){
        virtueName = generate_text(race + "Virtue");
    } else {
        virtueName = "";
    }

    // Generate the full name based on the race/subrace convention.
    if (familyName == null){
        fullName = (givenName);
    } else if (subRace == "Chinese"){
        fullName = (familyName + " " + givenName);
    } else if (race == "Tiefling"){
        fullName = (givenName + "  \"" + virtueName + "\"");
    } else {
        fullName = (givenName + " " + familyName);
    }

    // Return the family, given and full names for the character.
    return [familyName, givenName, fullName, childName, virtueName]; 

 }

    
// Generate an NPC with a name & description of their appearance, personality, etc.
// --------------------------------------------------------------------------------

function generateNPC() {

    // Get a name for this NPC by calling the generateName function.
    // -- This will also get the race and gender for the NPC.
    generateName();
    
    // Get a class for this NPC by calling the getCharacterClass function.
    getCharacterClass();
 
    // Determine the NPCs age based on their race.

    // Choose an age group based on the AgeGroup array in characterData.js.
    ageGroup = generate_text("AgeGroup");
    
    // Appearance
    // --------------------------------------------------

    // Body - Height, weight, and general appearance
    // Eyes - Adjective and Color
    // Hair - Length, style, and color.
    // Skin - Color and condition.

    // Personality
    // --------------------------------------------------

    // Disposition towards party
    // Outlook on life
    // General mood
    // Alignment


    age = generate_text("Age");
    eyes = generate_text("Eyes");
    hair = generate_text("Hair");
    height = generate_text("Height");
    weight = generate_text("Weight");

    // Generates a random description based on race and gender
    description = generate_text(race + genderForm + "Description"); 

    // Generates a random attitude for the NPC
    attitude = generate_text("Attitude")

    displayNPC()
     
}

// Populate HTML with generated values

function displayNPC() {

    // Allocated - Header
    npcFullName.innerHTML = fullName;
    npcFullRace.innerHTML = fullRace;
    npcGenderID.innerHTML = genderID;
    npcAgeGroup.innerHTML = ageGroup;
    npcCharacterURL.innerHTML = characterURL;

    // Allocated - Appearance
    npcGivenName.innerHTML = givenName;

    // May Use
    npcCharacterClass.innerHTML = characterClass;
    npcCharacterLower.innerHTML = characterLower;
    npcChildName.innerHTML = childName;
    npcRace.innerHTML = race;

    // Debugging Only

}