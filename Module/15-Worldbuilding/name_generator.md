---
name: Name Generator
slug: name-generator
parent: worldbuilding
---
### Name Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > Name Generator {.small-text}

<p>Use the following generator to quickly generate a few names based on the character's race (or culture) and gender identity.</p>

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectRace">
        <option value="">-- Race --</option>
        <option value="Dragonborn">Dragonborn</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Gnome">Gnome</option>
        <option value="Halfling">Halfling</option>
        <option value="HumanArabic">Human (Arabic)</option>
        <option value="HumanBarovian">Human (Barovian)</option>
        <option value="HumanCeltic">Human (Celtic)</option>
        <option value="HumanChinese">Human (Chinese)</option>
        <option value="HumanEgyptian">Human (Egyptian)</option>
        <option value="HumanEnglish">Human (English)</option>
        <option value="HumanFrench">Human (French)</option>
        <option value="HumanGerman">Human (German)</option>
        <option value="HumanGreek">Human (Greek)</option>
        <option value="HumanIndian">Human (Indian)</option>
        <option value="HumanMaori">Human (Maori)</option>
        <option value="HumanMesoamerican">Human (Mesoamerican)</option>
        <option value="HumanJapanese">Human (Japanese)</option>
        <option value="HumanNigerCongo">Human (Niger-Congo)</option>
        <option value="HumanNorse">Human (Norse)</option>
        <option value="HumanPolynesian">Human (Polynesian)</option>
        <option value="HumanRoman">Human (Roman)</option>
        <option value="HumanSlavic">Human (Slavic)</option>
        <option value="HumanSpanish">Human (Spanish)</option>
        <option value="Orc">Orc</option>
        <option value="Tiefling">Tiefling</option>
    </select>
    <select id="selectGender">
        <option value="">-- Gender --</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
    </select>
    <button id="buttonGenerateName" onclick="generateName()"> 
        Generate 
    </button> 
</div>


<div class="result">
    <h4 style="text-align:center;"><span id="givenName"></span> <span id="familyName"></span></h4>
</div>

<hr/>

**Notes**
- I still need to fix the order of Chinese names to (surname given). {.small-text}
- Drow names are planned but haven't been implemented yet.
- Elf child names are not yet implemented.
- Orcs do not have clan/family names yet.

*I don't have "Half" names. I choose names for half-elves and orcs based on the culture in which they were raised.*

<script src="../assets/js/character-name-generator.js"></script>
<script src="../assets/data/names-character.js"></script>
