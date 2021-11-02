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

    occupationClass = generate_text("Occupation" + characterSlug);
    occupationEmployer = generate_text("Occupation" + occupationClass + alignmentLC);

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

    occupation = (givenName + " is " + a(experienceLevel) + " " + (occupationClass.toLowerCase()) + " working for " + a(occupationEmployer) + " employer" + ". ");

    return [occupation];
}