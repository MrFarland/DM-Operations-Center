---
name: Character Name Generator
slug: character-name-generator
---
### Character Name Generator
Use the following generator to quickly generate a few names.

<select name="character_options-race" id="character_options-race"></select>
<button type="button" id="js-new-names" class="new-names button">
  Generate Names
</button>

<script>
    let dropdown = document.getElementById('character_options-race');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select Race';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    const url = '../assets/data/character_options.json';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = character_race[i].name;
        option.value = character_race[i].name;
        dropdown.add(name);
        }
    } else {
        // Reached the server, but it returned an error
    }   
    }

    request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
    };

    request.send();
</script>
