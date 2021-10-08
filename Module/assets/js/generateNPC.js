/*
MrFarland & Felix MIL
version 1.0
----------------
generateNPC.js
*/

 // Pull race and gender for an NPC based on the selections in the dropdown menus.
 // --------------------------------------------------------------------------------

 function getRaceGender() {

    // Get the NPCs race from the selectRace dropdown.
    selectRace = document.getElementById('selectRace');
    race = selectRace.options[selectRace.selectedIndex].value;

    // If the NPCs race is not defined, choose one randomly.
    if (race == "None"){
        race = generate_text("Race");
    }
    
    // Get the NPCs subrace based on the selected race.
    subRaceLookup = (race + "Subrace");
    subRace = generate_text(subRaceLookup);

    // Fix the race and subrace variables for Humans.
    // --- This should be compared against the HumanSubrace array dynamically.
    humanCultures = ["Arabic","Barovian","Celtic","Chinese","Egyptian","English","French","German","Greek","Indian","Japanese","Maori","Mesoamerican","Niger-Congo","Norse","Polynesian","Roman","Slavic","Spanish"];

    if (humanCultures.includes(race)){
        subRace = race;
        race = "Human";
    }

    // Create a variable to combine race and subrace, if there is one.
    if (subRace == "None"){
        fullRace = (race);
    } else {
        fullRace = (race + " (" + subRace + ")");
    }

    // Get the NPCs genderForm from the selectGender dropdown.
    // - genderForm refers to the feminine or masculine form of the given name.
    selectGender = document.getElementById('selectGender');
    genderForm = selectGender.options[selectGender.selectedIndex].value;

    // If the NPCs genderForm is not defined, choose one randomly.
    if (genderForm == "None"){
        genderForm = generate_text("Gender");
    }

    // Get the NPCs genderID from the selectGender dropdown.
    // - GenderID refers to the preferred gender identity of the NPC.
    selectGender = document.getElementById('selectGender');
    genderID = selectGender.options[selectGender.selectedIndex].text;
 
    // If the NPCs genderID is not defined, default to cisgender equivalent for the genderForm.
    if (genderID == "Any Gender" && genderForm=="Feminine"){
        genderID = "Cisgender (F)";
    } else {
        genderID = "Cisgender (M)";
    }

    // Return the values for race and gender in an array.
    return [race, subRace, fullRace, genderForm, genderID];

}



// Generate a name based on the race & gender provided by getRaceGender.
// --------------------------------------------------------------------------------

function generateName() {

    // Get the race and gender for the name from the getRaceGender function.
    getRaceGender();

    // Generate name based on race and gender or subrace for humans.
    if (race == "Human"){
        familyNameList = (subRace + "Family");
        givenNameList = (subRace + genderForm);
    } else {
        familyNameList = (race + "Family");
        givenNameList = (race + genderForm);
    }

    // Generate names based on the conventions for specific races and subraces.
    familyName = generate_text(familyNameList);
    givenName = generate_text(givenNameList);
    
    // Generate a child name for Elves.
    if (race == "Elf"){
        childName = generate_text(race + "Child");
    } else {
        childName = "";
    }

    // Generate a virtue name for Tieflings.
    if (race == "Tiefling"){
        virtueName = generate_text(race + "Virtue");
    } else {
        virtueName = "";
    }

    // If the race is 'chinese' swap the order of the family & given names.
    if (race == "Chinese"){
        fullName = (familyName + " " + givenName);
    } else {
        fullName = (givenName + " " + familyName);
    }

    // Return the family, given and full names for the character.
    return [familyName, givenName, fullName, childName, virtueName]; 

 }

    
// Generate an NPC with a name & description of their appearance, personality, etc.
// --------------------------------------------------------------------------------

function generateNPC() {

    // Get a name for the NPC based on the race and gender selections.
    // - This will also get the race and gender for the NPC.
    generateName();

    // Generate the variables to define the NPCs appearance.
    
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

    // Character Details
    npcAge.innerHTML = age;
    npcGenderID.innerHTML = genderID;
    npcRace.innerHTML = race;
    npcSubRace.innerHTML = subRace;
    npcFullRace.innerHTML = fullRace; 

    // Character Name
    npcGenderForm.innerHTML = genderForm;
    npcFamilyName.innerHTML = familyName;
    npcGivenName.innerHTML = givenName;
    npcChildName.innerHTML = childName;
    npcVirtueName.innerHTML = virtueName;
    npcFullName.innerHTML = fullName;

    // Appearance
    npcEyes.innerHTML = eyes;
    npcHair.innerHTML = hair;
    npcHeight.innerHTML = height;
    npcWeight.innerHTML = weight;

}