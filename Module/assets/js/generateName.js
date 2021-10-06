/*
 Donald Farland
 version 1.0
 ----------------
 generateName-character.js
 */
 
    // Generate a random named based on the selected name lists.
    
    function generateName() {

        // Populate race variable based on the selection in the dropdown menus.
        let selectRace = document.getElementById('selectRace');
        let race = selectRace.options[selectRace.selectedIndex].value;

        // Populate gender variable based on the selection in the dropdown menus.
        let selectGender= document.getElementById('selectGender');
        let gender = selectGender.options[selectGender.selectedIndex].value;

        // Combine the race and gender variables to identify desired arrays.
        let givenNameList = eval(race + gender);
        let familyNameList = eval(race + "family");
        
        // Select the given and family names at random from the appropriate list.
        givenName.innerHTML = 
            givenNameList[Math.floor(Math.random() * givenNameList.length)];
        familyName.innerHTML = 
            familyNameList[Math.floor(Math.random() * familyNameList.length)];
    }

    /*
    Felix MIL
    */

        // Generate a random name using centralized generator data and generate_text function
        
        function generateCharacterName(race, gender) {
            return generate_text(race+gender+"FullName");    
        }