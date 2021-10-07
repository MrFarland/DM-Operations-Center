---
name: NPC Generator 2
slug: npc-generator-2
parent: worldbuilding
---
### NPC Generator 2
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > NPC Generator {.small-text}

*The dropdown menus do not work at this time.* {.text-center .small-text}

<div class="controls">
    <select id="selectRace">
        <option value="none">-- Race --</option>
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
    </select>
    <select id="selectGender">
        <option value="none">-- Gender --</option>
        <option value="feminine">Feminine</option>
        <option value="masculine">Masculine</option>
    </select>
    <button id="buttonGenerateNPC" onclick="generateNPC()">Generate</button> 
</div>

<div class="result">
    <h4 id="npcFullName">Character Name</h4>
    <em class="small-text">This is tempoary output used to test the retrieval of data.</em>
    <div class="small-text">
        <h5>Name</h5>
        Given Name List: <strong id="npcGivenNameList"></strong><br/>
        Family Name List: <strong id="npcFamilyNameList"></strong><br/>
        Given Name: <strong id="npcGivenName"></strong><br/>
        Family Name: <strong id="npcFamilyName"></strong><br/>
        <br/>
        <h5>Character Details</h5>
        Race: <strong id="npcRace"></strong><br/>
        Gender: <strong id="npcGender"></strong><br/>
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
    <p id="npcDescription">Description</p>
</div>

<script src="../assets/js/generator.js"></script>
<script src="../assets/js/dice.js"></script>
<script src="../assets/js/generateName.js"></script>
<script src="../assets/js/generateNPC-2.js"></script>
<script src="../assets/data/generators_data.js"></script>