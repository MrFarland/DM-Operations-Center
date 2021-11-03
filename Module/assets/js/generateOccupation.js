/*
MrFarland
version 1.0
----------------
generateOccupation.js
*/

function generateOccupation() {

    // Available classes: 
    // -- Commoner, Bandit, Guard, Noble, Acolyte, Scout, Thug
    // -- Spy, Bandit Captain, Druid, Priest, Knight, Veteran
    // -- Gladiator, Mage, Assassin, Archmage

    occupationClass = generate_text("OccupationClass" + characterSlug);
    occupationGroup = generate_text(occupationClass);

    if (ageGroup == "Young"){
        experienceLevel = ("inexperienced");
    } else if (ageGroup == "Adult"){
        experienceLevel = "experienced";
    } else if (ageGroup == "Mature"){
        experienceLevel = "expert";
    } else if (ageGroup == "Elderly"){
        experienceLevel = "master";
    } else if (ageGroup == "Venerable"){
        experienceLevel = "retired";
    }

    occupation = (givenName + " is " + a(experienceLevel) + " " + (occupationGroup.toLowerCase()) + ". ");

    return [occupation];
}