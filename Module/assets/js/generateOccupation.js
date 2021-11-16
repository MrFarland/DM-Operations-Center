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

    if (trade == "Adventure"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Agriculture"){
        
        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Art"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Crime"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working for " + a(employer.toLowerCase()));

    } else if (trade == "Education"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working for " + a(employer.toLowerCase()));

    } else if (trade == "Hospitality"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working at " + a(employer.toLowerCase()));

    } else if (trade == "Industry"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working at " + a(employer.toLowerCase()));

    } else if (trade == "Merchant"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Military"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Nature"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Nautical"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Nobility"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Police"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    } else if (trade == "Religion"){

        pantheon = generate_text("PantheonList");
        if (pantheon == "Benevolent"){
            employer = generate_text("EmployerBenevolent" + trade);
        } else {
            employer = generate_text("EmployerOther" + trade);
        }

    } else if (trade == "Service"){

        employer = generate_text("Employer" + trade);
        employmentDescription = ("working for " + a(employer.toLowerCase()));

    } else {
        
        employer = generate_text("Employer" + trade);
        employmentDescription = ("with " + a(employer.toLowerCase()));

    }
 
    occupation = (givenName + " is " + a(experienceLevel.toLowerCase()) + " " + occupationTitle.toLowerCase() + " " + employmentDescription + ". ");

    return [occupation];
}