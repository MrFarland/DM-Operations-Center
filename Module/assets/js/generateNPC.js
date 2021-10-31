/*
MrFarland & Felix MIL
version 1.0
----------------
generateNPC.js
*/

// Generate an NPC with a name & description of their appearance, personality, etc.
// --------------------------------------------------------------------------------

function generateNPC() {

    // Get a name for this NPC by calling the generateName function.
    // -- This will also get the race and gender for the NPC.
    generateName();
    
    // Get a class for this NPC by calling the getCharacterClass function.
    getCharacterClass();
 
    // Choose an age group and then generate a random age based on the NPC's race.
    generateAge();

    // Generate a physical appearance for the NPC.
    generateAppearance();

    // Generate a personality for the NPC.
    // generatePersonality();

    // Generate an occupation for the NPC based on their class.
    // generateOccupation();

    // Display the NPC and provide the variables to the interface.
    displayNPC()
     
}

// Populate HTML with generated values

function displayNPC() {

    // Header
    npcFullName.innerHTML = fullName;
    npcFullRace.innerHTML = fullRace;
    npcGenderID.innerHTML = genderID;
    npcAge.innerHTML = age;
    npcAgeGroup.innerHTML = ageGroup;
    npcCharacterClassURL.innerHTML = characterClassURL;

    // Appearance
    npcAppearance.innerHTML = appearance;

    // Personality
    // npcPersonality.innerHTML = personality;

    // Occupation
    // npcOccupation.innerHTML = occupation;
    
}