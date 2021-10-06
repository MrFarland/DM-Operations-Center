/*
MrFarland
version 1.0
----------------
npc-generator-json.js
*/

let dropdownRace = $('#dropdownRace');

dropdownRace.empty();

dropdownRace.append('<option selected="true" disabled>Choose Race</option>');
dropdownRace.prop('selectedIndex', 0);

const url = '../assets/data/races.json';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
  $.each(data, function (key, entry) {
    dropdownRace.append($('<option></option>').attr('value', entry.slug).text(entry.name));
  })
});