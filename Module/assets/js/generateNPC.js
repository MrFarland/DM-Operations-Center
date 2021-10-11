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

    //const a=w=>(w.match(/^[aeiou]/i))?`an ${w}`:`a ${w}`

    

    // Body
    height = generate_text("Height");
    weight = generate_text("Weight");
    bodyRace = race.toLowerCase();
    bodyDescription = (givenName + " is " + height + " for " + a(bodyRace) + " and " + weight + ".");

    // Eyes
    eyeType = generate_text("EyeType");
    eyeColor = generate_text("EyeColor");
    eyeDescription = (givenName + " has " + eyeType + ", " + eyeColor + " eyes.");

    // Hair
    hairColor = generate_text("HairColor")
    hairLength = generate_text("HairLength");
    hairStyle = generate_text(hairLength + "HairStyle");
    hairType = generate_text("HairType");
    hairDescription = (pronounSubject + " has " + hairLength + ", " + hairType + ", " + hairColor + " hair " + hairStyle + ". ");

    appearance = ("Donald is tall for a human with an athletic build and long blond hair he keeps in a ponytail. His piercing blue eyes are ");
    

    // Body - Height, weight, and general appearance
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
    npcAppearance.innerHTML = appearance;

    // Debugging Variables
    npcBodyDescription.innerHTML = bodyDescription;
    npcHairDescription.innerHTML = hairDescription;

}