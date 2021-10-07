/*
Felix MIL
version 1.0
----------------
npc-generator.js
*/




// Generates an NPC with a name, appearance, attire, personality, clothing, class, and goals.
function generateNPC() {

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

        
    // Select the character's age, race and gender.
    age = generate_text("Age");
    //gender = generate_text("Gender");

    // Generate the character's name based on their race and gender.
    givenNameList = (race+gender);
    familyNameList = (race+"family");

    givenName = generate_text(givenNameList);
    familyName = generate_text(familyNameList);

    // Generates a name based on race and gender
    fullName = generateCharacterName(race, gender);

    // Get a random age
    
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

    npcFamilyName = familyName;
    npcGivenName = givenName;

    // Appearance
    npcEyes.innerHTML = eyes;
    npcHair.innerHTML = hair;
    npcHeight.innerHTML = height;
    npcWeight.innerHTML = weight;


    npcFullName.innerHTML = fullName;

    npcDescription.innerHTML = description;
    
    npcAttitude.innerHTML = attitude;

}