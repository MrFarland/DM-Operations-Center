/*
MrFarland
version 1.0
----------------
generateOccupation.js
*/

function generateOccupation() {

    // Select a "Trade" from the array of trades for the given NPC Class.
    var occupationTrade = generate_text("OccupationTrade" + characterSlug);

    // Get the "OccupationGroup" asspcoated with the given NPC Class.
    var occupationGroup = generate_text("OccupationGroup" + characterSlug);

    // Select an "Title" based on the selected "Trade" and "Occupation Group".
    var occupationTitle = generate_text("OccupationTitle" + occupationTrade + occupationGroup);

    // Determine the appropriate experience level or title for an occupation based on trade and  age group.
    var occupationExperience = generate_text("OccupationEmployer" + occupationTrade + "Experience" + ageGroup);

    // Select the correct prefix to match the type of employment situation. "with", "working for", "working at".
    var occupationDescriptionPrefix = generate_text("OccupationEmployer" + occupationTrade + "Prefix");

    // Determine the employer of the individual and some details about them. 
    var occupationEmployer = generate_text("OccupationEmployer" + occupationTrade);
 
    // Build the complete occupation summary for this NPC including their experience level, title, employer, and description.
    occupationDescription = (givenName + " is " + a(occupationExperience.toLowerCase()) + " <strong>" + occupationTitle.toLowerCase() + "</strong> " + occupationDescriptionPrefix + " " + a(occupationEmployer.toLowerCase()) + ". ");

    // Return variables that may be needed in other functions.
    return {
        occupationTrade: occupationTrade,
        occupationTitle: occupationTitle,
        occupationDescription: occupationDescription
    }

}

function displayOccupation() {

    // Display the occupation desdcription for an NPC.
    npcOccupationDescription.innerHTML = occupationDescription;

}