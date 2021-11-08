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

    Industry = generate_text("Industry" + characterSlug);
    occupationGroup = generate_text("OccupationGroup" + characterSlug);
    occupationTitle = generate_text("OccupationTitle" + Industry + occupationGroup);
    occupationEmployment = generate_text("OccupationEmployment" + Industry);

    experienceLevel = ageGroup.toLowerCase();

    occupation = (givenName + " is " + a(experienceLevel) + " " + occupationTitle.toLowerCase() + " " + occupationEmployment + ". ");

    return [occupation];
}