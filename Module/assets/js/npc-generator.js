/*
Felix MIL
version 1.0
----------------
npc-generator.js
*/

 // Generates a NPC with race, gender, name, description and attitude

function generateNPC() {

    // Get a random race
    race = generate_text("Race");

    // Get a random gender
    gender = generate_text("Gender");

    // Generates a name based on race and gender
    fullName = generateCharacterName(race, gender);

    // Generates a random description based on race and gender
    description = generate_text(race+gender+"Description"); 

    // Generates a random attitude for the NPC
    attitude = generate_text("Attitude")

    displayNPC()
     
}

// Populate HTML with generated values

function displayNPC() {

    npcRace.innerHTML = race;  
    
    npcGender.innerHTML = gender;

    npcFullName.innerHTML = fullName;

    npcDescription.innerHTML = description;
    
    npcAttitude.innerHTML = attitude;

}