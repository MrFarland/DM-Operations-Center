---
name: NPC Generator
slug: npc-generator
parent: worldbuilding
---
### NPC Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > NPC Generator {.small-text}

Use the following generator to quickly generate an NPC.

<div style="margin-bottom: 1.5rem; text-align:center;">
    <button id="buttonGenerateNPC" onclick="generateNPC()"> 
        Generate 
    </button> 
</div>

<div class="result">
    <h4 id="npcFullName">Character Name</h4>
    <span id="npcRace">Race</span> - <span id="npcGender">Gender</span><br/><br/>
    <p id="npcDescription">Description</p>
</div>

<script src="../assets/js/generator.js"></script>
<script src="../assets/js/dice.js"></script>
<script src="../assets/data/generators_data.js"></script>
<script src="../assets/js/character-name-generator.js"></script>
<script src="../assets/js/npc-generator.js"></script>