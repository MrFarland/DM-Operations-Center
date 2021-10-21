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
 
    // Age & Age Group
    // --------------------

    // Choose an age group based on the AgeGroup array in characterData.js.
    ageGroup = generate_text("AgeGroup");

    // Select the appropriate ageGroupArray based on race from the raceAgeGroups object.
    ageGroupValues = (raceAgeGroups[race]);

    // Determine the min and max ages for a the ageGroup based on the NPCs race.
    if (ageGroup == "Young"){
        ageGroupMin = ageGroupValues[0];
        ageGroupMax = ageGroupValues[1];
    } else if (ageGroup == "Adult"){
        ageGroupMin = ageGroupValues[1];
        ageGroupMax = ageGroupValues[2];
    } else if (ageGroup == "Mature"){
        ageGroupMin = ageGroupValues[2];
        ageGroupMax = ageGroupValues[3];
    } else if (ageGroup == "Elderly"){
        ageGroupMin = ageGroupValues[3];
        ageGroupMax = ageGroupValues[4];
    } else if (ageGroup == "Venerable"){
        ageGroupMin = ageGroupValues[4];
        ageGroupMax = ageGroupValues[5];
    }
    
    // Generate a random age based on the NPC's race and age group.
    function randomNum(ageGroupMin, ageGroupMax) {
        return Math.floor(Math.random() * (ageGroupMax - ageGroupMin + 1)) + ageGroupMin;
      }
    age = randomNum(ageGroupMin, ageGroupMax);

    // Appearance
    // --------------------------------------------------

    // Body
    ageDescription = ageGroup.toLowerCase();
    bodyRace = race.toLowerCase();
    bodyDescription = (givenName + " is " + a(ageDescription) + " " + bodyRace + " with " + ". ");

    // Eyes
    eyeColor = generate_text("EyeColor");
    eyeDetail = generate_text("EyeDetail");
    eyeType = generate_text("EyeType");
    eyeDescription = (pronounSubject + " has " + eyeType + ", " + eyeColor + " eyes that " + eyeDetail + ". ");

    // Hair
    hairColor = generate_text("HairColor");
    hairLength = generate_text("HairLength");
    hairStyle = generate_text(hairLength + "HairStyle");
    hairType = generate_text("HairType");
    hairDescription = (givenName + " has " + hairLength + ", " + hairType + ", " + hairColor + " hair " + hairStyle + ". ");

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
    npcBodyDescription.innerHTML = bodyDescription;
    npcEyeDescription.innerHTML = eyeDescription;
    npcHairDescription.innerHTML = hairDescription;

    // Personality
    
    // Occupation
    
}