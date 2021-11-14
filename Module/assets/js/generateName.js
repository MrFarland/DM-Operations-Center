/*
MrFarlands
version 1.0
----------------
generateName.js
*/

// Get the selected (or randomly generated) gender from the selectGender dropdown menu.
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
        familyNameList = ("NameFamily" + subRace);
        givenNameList = ("NameGiven" + genderForm + subRace);
    } else {
        familyNameList = ("NameFamily" + race);
        givenNameList = ("NameGiven" + genderForm + race);
    }

    familyName = generate_text(familyNameList);
    givenName = generate_text(givenNameList);
    
    // Generate a child name for Elves.
    if (race == "Elf"){
        childName = generate_text("NameChild" + race);
    } else if (subRace == "Elf"){
        childName = generate_text("NameChild" + subRace);
    } else {
        childName = "";
    }
    
    // Generate a virtue name for Tieflings.
    if (race == "Tiefling"){
        virtueName = generate_text("NameVirtue" + race);
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

function displayName() {

    // Allocated - Header
    npcFullName.innerHTML = fullName;
    npcFullRace.innerHTML = fullRace;
    npcGenderForm.innerHTML = genderForm;

}