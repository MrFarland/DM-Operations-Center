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
    <button id="buttonGenerateNPC" onclick="generateNPC()">Generate</button> 
</div>

<div class="result">
    <h4 id="npcFullName">Character Name</h4>
    <div class="small-text"><span id="npcFullRace">Race</span></div>
    </div>
    <br/>
</div>
<div class="result">
<h5>Debugging Variables</h5>
        Family Name: <strong id="npcFamilyName"></strong><br/>
        Given Name: <strong id="npcGivenName"></strong><br/>
        Child Name: <strong id="npcChildName"></strong><br/>
        Virtue Name: <strong id="npcVirtueName"></strong><br/>
        <h5>Race</h5>
        Race: <strong id="npcRace"></strong><br/>
        SubRace: <strong id="npcSubRace"></strong><br/>
        <h5>Gender</h5>
        GenderForm: <strong id="npcGenderForm"></strong><br/>    
        GenderID: <strong id="npcGenderID"></strong><br/>
        <h5>Age</h5>
        Age: <strong id="npcAge"></strong><br/>
        <h5>Appearance</h5>
        Height: <strong id="npcHeight"></strong><br/>
        Weight: <strong id="npcWeight"></strong><br/>
        Eyes: <strong id="npcEyes"></strong><br/>
        Hair: <strong id="npcHair"></strong><br/>
</div>
<script src="../assets/js/generator.js"></script>
<script src="../assets/js/dice.js"></script>
<script src="../assets/js/generateNPC.js"></script>
<script src="../assets/data/races.js"></script>
<script src="../assets/data/generators_data.js"></script>