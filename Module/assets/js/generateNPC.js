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
    if (race=="none"){
        race = generate_text("races");
    }

    // Get the NPCs genderForm from the selectGender dropdown.
    // - genderForm refers to the feminine or masculine form of the given name.
    selectGender= document.getElementById('selectGender');
    genderForm = selectGender.options[selectGender.selectedIndex].value;

    // If the NPCs genderForm is not defined, choose one randomly.
    if (genderForm=="none"){
        genderForm = generate_text("Gender");
    }

    // Get the NPCs genderID from the selectGender dropdown.
    // - GenderID refers to the preferred gender identity of the NPC.
    selectGender= document.getElementById('selectGender');
    genderID = selectGender.options[selectGender.selectedIndex].text;
 
    // If the NPCs genderID is not defined, default to cisgender equivalent for the genderForm.
    if (genderID=="Any Gender" && genderForm=="feminine"){
        genderID = "Cisgender (F)";
    } else {
        genderID = "Cisgender (M)";
    }

    // Return the values for race and gender in an array.
    return [race, genderForm, genderID];

}



// Generate a name based on the race & gender provided by getRaceGender.
// --------------------------------------------------------------------------------

function generateName() {

    // Get the race and gender for the name from the getRaceGender function.
    getRaceGender();

    // Generate the character's name based on their race and gender.
    familyNameList = (race+"family");
    givenNameList = (race+genderForm);

    // Generate the character's given & family names based on the above lists.
    familyName = generate_text(familyNameList);
    givenName = generate_text(givenNameList);

    // If the race is 'chinese' swap the order of the family & given names.
    if (race=="chinese"){
        fullName = (familyName+" "+givenName);
    } else {
        fullName = (givenName+" "+familyName);
    }

    // Return the family, given and full names for the character.
    return [familyName, givenName, fullName]; 

 }

    
// Generate an NPC with a name & description of their appearance, personality, etc.
// --------------------------------------------------------------------------------

function generateNPC() {

    // Get a name for the NPC based on the race and gender selections.
    // - This will also get the race and gender for the NPC.
    generateName();

    // Generate the variables to define the NPCs appearance.
    
    // Select the character's age, race and gender.
    age = generate_text("Age");
    // Get a random eyes.
    eyes = generate_text("Eyes");
    // Get a random hair color and style.
    hair = generate_text("Hair");
    // Get a random height.
    height = generate_text("Height");
    // Get a random weight.
    weight = generate_text("Weight");

    // Generates a random description based on race and gender
    description = generate_text(race+genderForm+"Description"); 

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

    // Character Name
    npcGenderForm.innerHTML = genderForm;
    npcFamilyName.innerHTML = familyName;
    npcGivenName.innerHTML = givenName;
    npcFullName.innerHTML = fullName;

    // Appearance
    npcEyes.innerHTML = eyes;
    npcHair.innerHTML = hair;
    npcHeight.innerHTML = height;
    npcWeight.innerHTML = weight;

}