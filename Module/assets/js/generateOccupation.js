/*
MrFarland
version 1.0
----------------
generateOccupation.js
*/

function generateOccupation() {

    // Select a "Trade" & "OccupationGroup" based on the NPC Class.
    var occupationGroup = generate_text("OccupationGroup" + characterSlug);
    var occupationTrade = generate_text("OccupationTrade" + characterSlug);

    // Select an "Title" based on the selected "Trade" and "Occupation Group".
    var occupationExperience = generate_text("OccupationExperience" + occupationTrade + ageGroup);
    var occupationTitle = generate_text("OccupationTitle" + occupationTrade + occupationGroup);
    
    // Create the job description based on the experience and job title for the NPC.
    var jobDescription = (a(occupationExperience.toLowerCase()) + " <strong>" + occupationTitle.toLowerCase() + "</strong>");


    // Select the correct prefix to match the type of employment situation. "working for", "working at", or "with".
    var employerPrefix = "";
    if (occupationTrade == "Crime" || occupationTrade == "Education" || occupationTrade == "Hospitality" || occupationTrade == "Service"){
        employerPrefix = "working for";
    } else if (occupationTrade == "Industry" || occupationTrade == "Religion"){
        employerPrefix = "working at";
    } else {
        employerPrefix = "with";
    }

    // Determine the employer of the individual.
    var occupationEmployerAdjective = generate_text("OccupationEmployer" + occupationTrade + "Adjective");
    var occupationEmployerLocation = generate_text("OccupationEmployer" + occupationTrade + "Location");
    var occupationEmployerSize = generate_text("OccupationEmployer" + occupationTrade + "Size");
    var occupationEmployerType = generate_text("OccupationEmployer" + occupationTrade + "Type");
    
    if (occupationEmployerLocation == "Rural" || occupationEmployerLocation == "Urban"){

        // Determine the location of the employer.
        var locationRelative = generate_text("LocationRelative" + occupationEmployerLocation);
        var landmarkType = generate_text("Landmark" + occupationEmployerLocation);
        var landmark = generate_text("Landmark" + landmarkType + occupationEmployerLocation);
        var locationSettlement = generate_text("LocationSettlement");

        var locationDescription = (" " + locationRelative.toLowerCase() + " " + landmark + " " + locationSettlement.toLowerCase());

    } 
    

    if (occupationTrade == "Adventure"){

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerSize.toLowerCase() + " of " + occupationEmployerType.toLowerCase() + "</strong>");

    } else if (occupationTrade == "Crime" || occupationTrade == "Nobility" || occupationTrade == "Service"){

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerType.toLowerCase() + "</strong>");

    } else if (occupationTrade == "Military" || occupationTrade == "Police"){

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " " + occupationEmployerSize.toLowerCase() + " in the <strong>" + occupationEmployerType.toLowerCase() + "</strong>");

    } else if (occupationTrade == "Religion"){

        var religionGod = generate_text("PantheonBenevolent");
        var religionDomain = generate_text("PantheonBenevolent" + religionGod);

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerType.toLowerCase() + "</strong> to <strong>" + religionGod + "</strong>, the god of " + religionDomain + locationDescription);

    } else {

        employerDescription = (employerPrefix + " " + a(occupationEmployerSize.toLowerCase()) + ", " + occupationEmployerAdjective.toLowerCase() + " <strong>" + occupationEmployerType.toLowerCase() + "</strong>" + locationDescription);
        
    }
    




    // Build the complete occupation summary for this NPC including their experience level, title, employer, and description.
    occupationDescription = ("<h4>Occupation</h4><div class=\"subResult\"><p>" + givenName + " is " + jobDescription + " " + employerDescription + ".</p></div>");

    // Return variables that may be needed in other functions.
    return {
        occupationDescription: occupationDescription,
        occupationTitle: occupationTitle,
        occupationTrade: occupationTrade
    };

}