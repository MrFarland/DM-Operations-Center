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
        race = generate_text("Race");
    }

    // Get the NPCs gender from the selectGender dropdown.
    selectGender= document.getElementById('selectGender');
    gender = selectGender.options[selectGender.selectedIndex].value;

    // If the NPCs gender is not defined, choose one randomly.
    if (gender=="none"){
        gender = generate_text("Gender");
    }

    // Return the values for race and gender in an array.
    return [race, gender];
}



// Generate a name based on the race & gender provided by getRaceGender.
// --------------------------------------------------------------------------------

function generateName() {

    // Get the race and gender for the name from the getRaceGender function.
    getRaceGender();

    // Generate the character's name based on their race and gender.
    familyNameList = (race+"family");
    givenNameList = (race+gender);

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

    // Get the race and gender for the NPC from the getRaceGender function.
    getRaceGender();
    
    // Pulling the variables from the returned array does not appear to be necessary.
    // valuesRaceGender = getRaceGender();
    // race = (valuesRaceGender[0]);
    // gender = (valuesRaceGender[1]);

    // Get a name for the NPC based on the race and gender selections.
    generateName();

    // Pulling the variables from the returned array does not appear to be necessary.
    // valuesNames = generateName();
    // familyName = (valuesNames[0]);
    // givenName = (valuesNames[1]);
    // fullName = (valuesNames[2]);




    // Select the character's age, race and gender.
    age = generate_text("Age");
    //gender = generate_text("Gender");
    // Get a random eyes.
    eyes = generate_text("Eyes");
    // Get a random hair color and style.
    hair = generate_text("Hair");
    // Get a random height.
    height = generate_text("Height");
    // Get a random weight.
    weight = generate_text("Weight");

    // Generates a random description based on race and gender
    description = generate_text(race+gender+"Description"); 

    // Generates a random attitude for the NPC
    attitude = generate_text("Attitude")

    displayNPC()
     
}

// Populate HTML with generated values

function displayNPC() {

    // Character Details
    npcAge.innerHTML = age;
    npcGender.innerHTML = gender;
    npcRace.innerHTML = race; 

    // Character Name
    npcFamilyNameList.innerHTML = familyNameList;
    npcGivenNameList.innerHTML = givenNameList;

    npcFamilyName.innerHTML = familyName;
    npcGivenName.innerHTML = givenName;

    // Appearance
    npcEyes.innerHTML = eyes;
    npcHair.innerHTML = hair;
    npcHeight.innerHTML = height;
    npcWeight.innerHTML = weight;


    npcFullName.innerHTML = fullName;

    npcDescription.innerHTML = description;
    
    npcAttitude.innerHTML = attitude;

}