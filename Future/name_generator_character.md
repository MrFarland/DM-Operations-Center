---
name: Name Generator (Character)
slug: name-generator-character
parent: worldbuilding
---
### Name Generator (Character)
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > Name Generator (Character) {.small-text}

#### This is not ready for use! {.text-center}


<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectCulture">
        <option value="">-- Culture --</option>
        <option value="celestial">Celestial</option>
        <option value="demonic">Demonic</option>
        <option value="dragonborn">Dragonborn</option>
        <option value="drow">Drow</option>
        <option value="dwarf">Dwarf</option>
        <option value="dlf">Elf</option>
        <option value="gnome">Gnome</option>
        <option value="halfling">Halfling</option>
        <option value="human-arabic">Human (Arabic)</option>
        <option value="human-barovian">Human (Barovian)</option>
        <option value="human-celtic">Human (Celtic)</option>
        <option value="human-chinese">Human (Chinese)</option>
        <option value="human-egyptian">Human (Egyptian)</option>
        <option value="human-english">Human (English)</option>
        <option value="human-french">Human (French)</option>
        <option value="human-german">Human (German)</option>
        <option value="human-greek">Human (Greek)</option>
        <option value="human-indian">Human (Indian)</option>
        <option value="human-maori">Human (Maori)</option>
        <option value="human-mesoamerican">Human (Mesoamerican)</option>
        <option value="human-japanese">Human (Japanese)</option>
        <option value="human-nigercongo">Human (Niger-Congo)</option>
        <option value="human-norse">Human (Norse)</option>
        <option value="human-polynesian">Human (Polynesian)</option>
        <option value="human-roman">Human (Roman)</option>
        <option value="human-slavic">Human (Slavic)</option>
        <option value="human-spanish">Human (Spanish)</option>
        <option value="Orc">Orc</option>
        <option value="Tiefling">Tiefling</option>
    </select>
    <select id="selectGender">
        <option value="">-- Gender --</option>
        <option value="feminine">Feminine</option>
        <option value="masculine">Masculine</option>
    </select>
    <button id="buttonGenerateNameCharacter" onclick="generateNameCharacter()"> 
        Generate 
    </button> 
</div>


<div class="result">
    <h4 style="text-align:center;"><span id="result"></span></h4>
</div>
<hr/>



<script src="assets/js/generateNameCharacter.js"></script>
