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

    // Populate some common variables for the NPCs organization.
    organization = generate_text("Organization" + trade);
    organizationAdjective = generate_text("OrganizationAdjective" + trade);
    organizationGroup = generate_text("OrganizationGroup" + trade);
    organizationLocation = generate_text("OrganizationLocation" + trade);
    organizationMission = generate_text("OrganizationMission" + trade);
    organizationProfitability = generate_text("OrganizationProfitability");     
    organizationSize = generate_text("Size");
    organizationStructure = generate_text("OrganizationStructure" + trade);
    organizationStructureAdjective = generate_text("OrganizationStructureAdjective" + trade);

    // 
    if (trade == "Adventure"){

        employment = ("with " + a(organizationGroup.toLowerCase()) + " of " + organization.toLowerCase() + " " + organizationMission.toLowerCase() + " " + a(organizationStructureAdjective.toLowerCase()) + " " + organizationStructure.toLowerCase() + " " + organizationLocation.toLowerCase());

    } else if (trade == "Agriculture" || trade == "Merchant"){

        employment = ("with " + a(organizationSize.toLowerCase()) + ", " + organizationProfitability.toLowerCase() + " " + organization.toLowerCase() + " " + organizationLocation.toLowerCase());

    } else if (trade == "Military" || "Police"){

        employment = ("in " + a(organizationAdjective.toLowerCase()) + " " + organizationGroup.toLowerCase() + " with the " + organization.toLowerCase());

    } else {

        employment = ("with " + a(organizationGroup.toLowerCase()) + " of " + organization.toLowerCase());

    }
 
    experienceLevel = ageGroup;

    occupation = (givenName + " is " + a(experienceLevel.toLowerCase()) + " " + occupationTitle.toLowerCase() + " " + employment + ". ");

    return [occupation];
}