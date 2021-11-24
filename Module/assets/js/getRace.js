/*
MrFarland
version 1.0
----------------
getRace.js
*/

function getRace() {

    // Get the current value from the selectRace dropdown menu.
    var selectRace = document.getElementById('selectRace');
    race = selectRace.options[selectRace.selectedIndex].value;

    // If no race has been selected, generate one randomly.
    if (race == "None"){
        race = generate_text("Race");
    }
    
    // Define an array of the supported human cultures because I do not know how to query the array in generatorsData.js.
    var humanCultures = ["Arabic","Barovian","Celtic","Chinese","Egyptian","English","French","German","Greek","Indian","Japanese","Maori","Mesoamerican","Niger-Congo","Norse","Polynesian","Roman","Slavic","Spanish"];

    // If the race is one of the supported Human cultures, set the subRace to the culture and set race to "Human".
    if (humanCultures.includes(race)){
        subRace = race;
        race = "Human";
    // If the race is Half-Elf, select a subRace for the Half-Elf. If the subRace is "Human", choose a culture for the subrace variable.
    } else if (race == "Half-Elf"){
        subRace = generate_text("Subrace" + race);
        if (subRace == "Human"){
            subRace = generate_text("Subrace" + subRace);
        }
    // If the race is Half-Orc, select a subRace for the Half-Orc. If the subRace is "Human", choose a culture for the subrace variable.
    } else if (race == "Half-Orc"){
        subRace = generate_text("Subrace" + race);
        if (subRace == "Human"){
            subRace = generate_text("Subrace" + subRace);
        }
    // For all other races, select an appropriate subRace for the character.
    } else {
        subRace = generate_text("Subrace" + race);   
    }

    // Create a variable to combine race and subrace, if there is one.
    if (subRace == "None" || race == "Half-Elf" || race == "Half-Orc"){
        fullRace = (race);
    } else {
        fullRace = (race + " (" + subRace + ")");
    }

    // Return variables that may be needed in other functions.
    return {
        fullRace: fullRace,
        race: race,
        subRace: subRace
    };

}