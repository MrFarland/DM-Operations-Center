---
name: NPC Generator
slug: npc-generator
parent: worldbuilding
---
### NPC Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > NPC Generator {.small-text}

<div class="controls">
    <select id="selectRace">
        <option value="none">Any Race</option>
        <optgroup label="Human">
            <option value="arabic">Arabic</option>
            <option value="barovian">Barovian</option>
            <option value="celtic">Celtic</option>
            <option value="chinese">Chinese</option>
            <option value="egyptian">Egyptian</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="japanese">Japanese</option>
            <option value="maori">Maori</option>
            <option value="mesoamerican">Mesoamerican</option>
            <option value="nigercongo">Niger-Congo</option>
            <option value="norse">Norse</option>
            <option value="polynesian">Polynesian</option>
            <option value="roman">Roman</option>
            <option value="slavic">Slavic</option>
            <option value="spanish">Spanish</option>
        </optgroup>
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="gnome">Gnome</option>
        <option value="half-elf">Half-Elf</option>
        <option value="half-orc">Half-Orc</option>
        <option value="halfling">Halfling</option>
        <option value="orc">Orc</option>
        <option value="tiefling">Tiefling</option>
    </select>
    <select id="selectGender">
        <option value="none">Any Gender</option>
        <option value="feminine">Cisgender (F)</option>
        <option value="masculine">Cisgender (M)</option>
        <option value="none">Nonbinary</option>
        <option value="feminine">Transgender (F)</option>
        <option value="masculine">Transgender (M)</option>
    </select>
    <button id="buttonGenerateNPC" onclick="generateNPC()">Generate</button> 
</div>

<div class="result">
    <h4 id="npcFullName">Character Name</h4>
    <em class="small-text">This is tempoary output used to test the retrieval of data.</em>
    <div class="small-text">
        <h5>Name</h5>
        GenderForm: <strong id="npcGenderForm"></strong><br/>
        Family Name: <strong id="npcFamilyName"></strong><br/>
        Given Name: <strong id="npcGivenName"></strong><br/>
        <br/>
        <h5>Character Details</h5>
        Race: <strong id="npcRace"></strong><br/>
        SubRace: <strong id="npcSubRace"></strong><br/>
        GenderID: <strong id="npcGenderID"></strong><br/>
        Age: <strong id="npcAge"></strong><br/>
        <br/>
        <h5>Appearance</h5>
        Height: <strong id="npcHeight"></strong><br/>
        Weight: <strong id="npcWeight"></strong><br/>
        Eyes: <strong id="npcEyes"></strong><br/>
        Hair: <strong id="npcHair"></strong><br/>
        <br/>
    </div>
    <br/>
</div>

<script src="../assets/js/generator.js"></script>
<script src="../assets/js/dice.js"></script>
<script src="../assets/js/generateNPC.js"></script>
<script src="../assets/data/races.js"></script>
<script src="../assets/data/generators_data.js"></script>