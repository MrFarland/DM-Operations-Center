/*
MrFarland
version 1.0
----------------
generateOccupation.js
*/

function generateOccupation() {

    occupationClass = generate_text("Occupation" + characterSlug);
    occupationEmployer = generate_text("Occupation" + characterSlug + alignmentLC);

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