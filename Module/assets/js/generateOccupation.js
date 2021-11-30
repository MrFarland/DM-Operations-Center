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
    

    // Determine the location of the employer, residence, or mission.
    var locationRelative = generate_text("LocationRelative" + occupationEmployerLocation);
    var landmarkType = generate_text("Landmark" + occupationEmployerLocation);
    var landmark = generate_text("Landmark" + landmarkType + occupationEmployerLocation);
    var locationSettlement = generate_text("LocationSettlement" + occupationEmployerLocation);

    var locationDescription = (" " + locationRelative.toLowerCase() + " " + landmark + " " + locationSettlement.toLowerCase());

    // Determine the mission or assignment for the employee or employer.
    var missionPrefix = generate_text("OccupationEmployer" + occupationTrade + "MissionPrefix");
    var mission = generate_text("OccupationEmployer" + occupationTrade + "Mission");
    var missionAdjective = generate_text("OccupationEmployer" + occupationTrade + "MissionAdjective");

    var missionDescription = (" " + missionPrefix.toLowerCase() + " " + a(missionAdjective.toLowerCase()) + " " + mission.toLowerCase());
    

    // Construct the final Employer Description based on the industry.

    if (occupationTrade == "Adventure"){

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerSize.toLowerCase() + " of " + occupationEmployerType.toLowerCase() + "</strong>" + missionDescription + locationDescription);

    } else if (occupationTrade == "Crime"){

        var criminalHideout = generate_text("OccupationEmployer" + occupationTrade + "Hideout")

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerType.toLowerCase() + "</strong>" + missionDescription + " out of " + a(criminalHideout.toLowerCase()) + locationDescription);

    } else if (occupationTrade == "Military"){

        // Determine which army they are with.
        if (occupationEmployerType == "Army of a Foreign Ally"){
            armyType = "Ally";
        } else if (occupationEmployerType == "Private Army of a Powerful House"){
            armyType = "Private";
        } else {
            armyType = "Army";
        }

        // Override the mission based on the army.
        var missionDescription = generate_text("OccupationEmployer" + occupationTrade + "Mission" + armyType);
        
        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " " + occupationEmployerSize.toLowerCase() + " in the <strong>" + occupationEmployerType.toLowerCase() + "</strong>" + " " + missionDescription.toLowerCase());

    } else if (occupationTrade == "Nobility"){

        employerDescription = (employerPrefix + " " + occupationEmployerAdjective.toLowerCase() + " <strong>" + occupationEmployerType.toLowerCase() + "</strong>" + locationDescription);
        
    } else if (occupationTrade == "Police"){

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " " + occupationEmployerSize.toLowerCase() + " in the <strong>" + occupationEmployerType.toLowerCase() + "</strong>");

    } else if (occupationTrade == "Religion"){

        var religionGod = generate_text("PantheonBenevolent");
        var religionDomain = generate_text("PantheonBenevolent" + religionGod);

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerType.toLowerCase() + "</strong> to <strong>" + religionGod + "</strong>, the god of " + religionDomain + locationDescription);

    } else if (occupationTrade == "Service"){

        var nobleEstate = generate_text("OccupationEmployerNobilityType");

        employerDescription = (employerPrefix + " " + a(occupationEmployerAdjective.toLowerCase()) + " <strong>" + occupationEmployerType.toLowerCase() + "</strong> at their " + nobleEstate.toLowerCase() + locationDescription);

    }  else {

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