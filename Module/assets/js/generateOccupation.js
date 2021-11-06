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

    occupationIndustry = generate_text("OccupationIndustry" + characterSlug);
    occupationList = generate_text("OccupationList" + characterSlug);
    occupationTitle = generate_text(occupationIndustry + occupationList);
    occupationEmployer = generate_text(occupationIndustry + "Employer");

    experienceLevel = ageGroup.toLowerCase();

    occupation = (givenName + " is " + a(experienceLevel) + " " + occupationTitle.toLowerCase() + " " + occupationEmployer + ". ");

    return [occupation];
}