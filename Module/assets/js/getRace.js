/*
MrFarland
version 1.0
----------------
getRace.js
*/

// Get the selected (or randomly generated) race & subrace from the selectRace dropdown menu.
// --------------------------------------------------------------------------------

function getRace() {

    // Get the current value from the selectRace dropdown menu.
    selectRace = document.getElementById('selectRace');
    race = selectRace.options[selectRace.selectedIndex].value;

    // If no race has been selected, generate one randomly.
    if (race == "None"){
        race = generate_text("Race");
    }
    
    // Fix the race and subrace variables for Humans, Half-Elves, and Half-Orcs.
    humanCultures = ["Arabic","Barovian","Celtic","Chinese","Egyptian","English","French","German","Greek","Indian","Japanese","Maori","Mesoamerican","Niger-Congo","Norse","Polynesian","Roman","Slavic","Spanish"];

    if (humanCultures.includes(race)){
        subRace = race;
        race = "Human";
    } else if (race == "Half-Elf"){
        subRaceLookup = ("Subrace" + race);
        subRace = generate_text(subRaceLookup);
        if (subRace == "Human"){
            subRaceLookup = ("Subrace" + subRace);
            subRace = generate_text(subRaceLookup);
        }
    } else if (race == "Half-Orc"){
        subRaceLookup = ("Subrace" + race);
        subRace = generate_text(subRaceLookup);
        if (subRace == "Human"){
            subRaceLookup = ("Subrace" + subRace);
            subRace = generate_text(subRaceLookup);
        }
    } else {
        subRaceLookup = ("Subrace" + race);
        subRace = generate_text(subRaceLookup);   
    }

    // Create a variable to combine race and subrace, if there is one.
    if (subRace == "None" || race == "Half-Elf" || race == "Half-Orc"){
        fullRace = (race);
    } else {
        fullRace = (race + " (" + subRace + ")");
    }

    // Return the values for race in an array.
    return [race, subRace, fullRace];

}