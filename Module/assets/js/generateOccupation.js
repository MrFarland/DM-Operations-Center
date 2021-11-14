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

    // Select an employer and characteristics of that employer for a given industry.
    occupationEmployer = generate_text("OccupationEmployer" + trade);
    
    // Populate some common variables for the NPCs employer.
    employer = generate_text("Employer" + trade);
    employerAdjective = generate_text("Employer" + trade + "Adjective");
    employerGroup = generate_text("Employer" + trade + "Group");
    employerProfitability = generate_text("EmployerProfitability");     
    employerSize = generate_text("Size");
    employerStructure = generate_text("Structure" + trade);

    // 
    if (trade == "Agriculture"){

        employment = ("with " + a(employerSize.toLowerCase()) + ", " + employerProfitability.toLowerCase() + " " + employerStructure.toLowerCase());

    } else if (trade == "Military") {

        employment = ("with " + a(employerAdjective.toLowerCase()) + " " + employerGroup.toLowerCase() + " in the " + employer.toLowerCase());

    } else if (trade == "Crime" || trade == "Service") {

        employment = ("working for " + a(employer.toLowerCase()));

    } else if (trade == "Religion") {

        employment = ("working for " + a(employer.toLowerCase()));

    } else if (trade == "Adventure") {

        employment = ("working for " + a(employer.toLowerCase()));

    } else {

        structure = generate_text("Structure" + trade);
        employment = ("working at " + a(structure.toLowerCase()));

    }
 
    experienceLevel = ageGroup;

    occupation = (givenName + " is " + a(experienceLevel.toLowerCase()) + " " + occupationTitle.toLowerCase() + " " + employment + ". ");

    return [occupation];
}