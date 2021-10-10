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
 
    // Choose an age group based on the AgeGroup array in characterData.js.
    ageGroup = generate_text("AgeGroup");
    ageGroupArray = (race + "AgeGroup");
    
    // Determine the min and max ages for a the ageGroup based on the NPCs race.
    if (ageGroup == "Young"){
        ageGroupMin = DragonbornAgeGroup[0];
        ageGroupMax = DragonbornAgeGroup[1];
    } else if (ageGroup == "Adult"){
        ageGroupMin = DragonbornAgeGroup[2];
        ageGroupMax = DragonbornAgeGroup[3];
    } else if (ageGroup == "Mature"){
        ageGroupMin = DragonbornAgeGroup[4];
        ageGroupMax = DragonbornAgeGroup[5];
    } else if (ageGroup == "Elderly"){
        ageGroupMin = DragonbornAgeGroup[6];
        ageGroupMax = DragonbornAgeGroup[7];
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

    // Debugging Variables
    npcAgeGroupArray.innerHTML = ageGroupArray;
    npcPronounSubject.innerHTML = pronounSubject;
    npcPronounObject.innerHTML = pronounObject;

}