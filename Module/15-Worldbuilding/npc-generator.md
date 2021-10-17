---
name: NPC Generator
slug: npc-generator
parent: worldbuilding
---
### NPC Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > NPC Generator {.small-text}

<div class="controls">
    <select id="selectRace">
        <option value="None">Any Race</option>
        <optgroup label="Human">
            <option value="Arabic">Arabic</option>
            <option value="Barovian">Barovian</option>
            <option value="Celtic">Celtic</option>
            <option value="Chinese">Chinese</option>
            <option value="Egyptian">Egyptian</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Maori">Maori</option>
            <option value="Mesoamerican">Mesoamerican</option>
            <option value="Niger-Congo">Niger-Congo</option>
            <option value="Norse">Norse</option>
            <option value="Polynesian">Polynesian</option>
            <option value="Roman">Roman</option>
            <option value="Slavic">Slavic</option>
            <option value="Spanish">Spanish</option>
        </optgroup>
        <option value="Dragonborn">Dragonborn</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Gnome">Gnome</option>
        <option value="Half-Elf">Half-Elf</option>
        <option value="Half-Orc">Half-Orc</option>
        <option value="Halfling">Halfling</option>
        <option value="Orc">Orc</option>
        <option value="Tiefling">Tiefling</option>
    </select>
    <select id="selectGender">
        <option value="None">Any Gender</option>
        <option value="Feminine">Cisgender (F)</option>
        <option value="Masculine">Cisgender (M)</option>
        <option value="None">Nonbinary</option>
        <option value="Feminine">Transgender (F)</option>
        <option value="Masculine">Transgender (M)</option>
    </select>
    <select id="selectCharacterLevel">
        <option value="None">Any Level</option>
        <option value="Low">Low (<1)</option>
        <option value="Medium">Med (1-3)</option>
        <option value="High">High (5+)</option>
    </select>
    <button id="buttonGenerateNPC" onclick="generateNPC()">Generate</button> 
</div>

<div class="result">
    <h4 id="npcFullName">Character Name</h4>
    <div class="small-text"><span id="npcFullRace">Race</span> - <span id="npcGenderID">Gender Identity</span> - <span id="npcAge">Age</span> (<span id="npcAgeGroup">Group</span>) - <span id="npcCharacterClassURL">Class</span></div>
    <h5>Appearance</h5>
    <p id="npcBodyDescription">npcBodyDescription</p>
    <p id="npcEyeDescription">npcEyeDescription</p>
    <p id="npcHairDescription">npcHairDescription</p>
    <h5>Personality</h5>
    <h5>Occupation</h5>
    <br/>
</div>

<!-- Load the custom.js for common functions -->
<script src="../assets/js/custom.js"></script>

<!-- Load the dice and generator js files from drow@bin.sh -->
<script src="../assets/js/dice.js"></script>
<script src="../assets/js/generator.js"></script>

<!-- Load the functions to pull data form the dropdowns -->
<script src="../assets/js/getCharacterClass.js"></script>
<script src="../assets/js/getGender.js"></script>
<script src="../assets/js/getRace.js"></script>

<!-- Load the heavy lifting js to generate names and npcs. -->
<script src="../assets/js/generateName.js"></script>
<script src="../assets/js/generateNPC.js"></script>

<!-- Load the js files containing data for the generators. -->
<script src="../assets/data/characterData.js"></script>