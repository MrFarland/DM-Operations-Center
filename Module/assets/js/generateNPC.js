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
 
    // Determine the NPCs age based on their race.

    // Choose an age group based on the AgeGroup array in characterData.js.
    ageGroup = generate_text("AgeGroup");
    
    // Determine the min and max ages for a the ageGroup based on the NPCs race.
    if (ageGroup == "Young"){
        ageGroupMin = 18;
        ageGroupMax = 25;
    } else if (ageGroup == "Adult"){
        ageGroupMin = 26;
        ageGroupMax = 45;
    } else if (ageGroup == "Mature"){
        ageGroupMin = 46;
        ageGroupMax = 65;
    } else if (ageGroup == "Elderly"){
        ageGroupMin = 66;
        ageGroupMax = 100;
    }

    // Generate a random age based on the NPC's race and age group.
    function randomNum(ageGroupMin, ageGroupMax) {
        return Math.floor(Math.random() * (ageGroupMax - ageGroupMin + 1)) + ageGroupMin;
      }
    age = randomNum(ageGroupMin, ageGroupMax);

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
    npcAge.innerHTML = age;
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