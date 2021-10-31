/*
MrFarland
version 1.0
----------------
generateAge.js
*/

function generateAge() {

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

    // Return the ageGroup and age variables.
    return [ageGroup,age];
}