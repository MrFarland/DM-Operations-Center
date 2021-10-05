/*
 Author:    Donald Farland (@MrFarland)
 Filename:  generateNameCharacter.js
 Version:   1.0
 ----------------
 */

 // Create a function to randomly generate a name for a character.
 function generateNameCharacter() {

    // Load the names.json file.
    import nameData from '../data/names.json';

    // Populate the selectCulture variable based on the selection in the culture dropdown menu.
    let selectCulture = document.getElementById('selectCulture');
    let culture = selectCulture.options[selectCulture.selectedIndex].value;

    // Populate the selectGender variable based on the selection in the gender dropdown menu.
    let selectGender = document.getElementById('selectGender');
    let gender = selectGender.options[selectGender.selectedIndex].value;

    // Check the name format for the selected culture and format it appropriately.
        // po = Personal Only
        // pf = Personal Family
        // pfx = Personal Family w/ Extra Name (Elf: Child, Tiefling: Virtue)
        // fp = Family Personal
        // drow = (Personal Prefix)(Personal Suffix) (Family Prefix)(Family Suffix)
 }