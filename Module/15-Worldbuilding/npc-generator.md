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
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
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
<script src="../assets/data/generators_data.js"></script>