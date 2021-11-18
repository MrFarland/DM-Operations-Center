/*
MrFarland
version 1.0
----------------
generateOccupation.js
*/

function generateOccupation() {

    // Select a "Trade" from the array of trades for the given NPC Class.
    trade = generate_text("Trade" + characterSlug);

    // Get the "OccupationGroup" asspcoated with the given NPC Class.
    occupationGroup = generate_text("OccupationGroup" + characterSlug);

    // Select an "Occupation Title" based on the selected "Trade" and "Occupation Group".
    occupationTitle = generate_text("Occupation" + trade + occupationGroup);

    // Determine the appropriate experience level or title for an occupation based on age group.
    experienceLevel = generate_text("Employer" + trade + "Experience" + ageGroup);

    if (trade == "Crime" || trade == "Education" || trade == "Service"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working for " + a(employer.toLowerCase()));

    } else if (trade == "Hospitality" || trade == "Industry" || trade == "Religion"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working at " + a(employer.toLowerCase()));

    } else {
        
        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    }
 
    occupation = (givenName + " is " + a(experienceLevel.toLowerCase()) + " " + occupationTitle.toLowerCase() + " " + employmentDescription + ". ");

    return [occupation, trade];
}