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

    if (trade == "Adventure"){

        employerAdjective = generate_text("Employer" + trade + "Adjective");
        employerGroup = generate_text("Employer" + trade + "Group");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerAdjective.toLowerCase()) + " " + employerGroup.toLowerCase() + " of " + employerType.toLowerCase());

    } else if (trade == "Agriculture"){
        
        employerSize = generate_text("Size");
        employerProfitability = generate_text("EmployerProfitability");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerProfitability.toLowerCase() + " " + employerType.toLowerCase());

    } else if (trade == "Art"){

        employerSize = generate_text("Size");
        employerProfitability = generate_text("EmployerProfitability");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerProfitability.toLowerCase() + " " + employerType.toLowerCase());

    } else if (trade == "Crime"){

        employerSize = generate_text("Size");
        employerAdjective = generate_text("Employer" + trade + "Adjective");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerAdjective.toLowerCase() + " of " + employerType.toLowerCase());

    } else if (trade == "Education"){

        employerSize = generate_text("Size");
        employerAdjective = generate_text("Employer" + trade + "Adjective");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerAdjective.toLowerCase() + " of " + employerType.toLowerCase());

    } else if (trade == "Hospitality"){

        employerSize = generate_text("Size");
        employerAdjective = generate_text("Employer" + trade + "Adjective");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("working at " + a(employerSize.toLowerCase()) + ", " + employerAdjective.toLowerCase() + " of " + employerType.toLowerCase());

    } else if (trade == "Industry"){

        employerSize = generate_text("Size");
        employerAdjective = generate_text("Employer" + trade + "Adjective");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("working at " + a(employerSize.toLowerCase()) + ", " + employerAdjective.toLowerCase() + " of " + employerType.toLowerCase());

    } else if (trade == "Merchant"){

        employerSize = generate_text("Size");
        employerProfitability = generate_text("EmployerProfitability");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerProfitability.toLowerCase() + " " + employerType.toLowerCase());

    } else if (trade == "Military"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Nature"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Nautical"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Nobility"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Police"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Professional"){

        employerSize = generate_text("Size");
        employerProfitability = generate_text("EmployerProfitability");
        employerType = generate_text("Employer" + trade + "Type");

        employmentDescription = ("with " + a(employerSize.toLowerCase()) + ", " + employerProfitability.toLowerCase() + " " + employerType.toLowerCase());

    } else if (trade == "Religion"){

        employmentDescription = (a(employment.toLowerCase()));

    } else if (trade == "Service"){

        employmentDescription = (a(employment.toLowerCase()));

    } else {

        employmentDescription = (a(employment.toLowerCase()));

    }
 
    experienceLevel = ageGroup;

    occupation = (givenName + " is " + a(experienceLevel.toLowerCase()) + " " + occupationTitle.toLowerCase() + " " + employmentDescription + ". ");

    return [occupation];
}