---
name: Trap Generator
slug: trap-generator
parent: encounters
---
### Trap Generator
[Home](dm-operations-center) > [Encounters](encounters) > Trap Generator {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectTier">
        <option value="">- Tier -</option>
        <option value="tier1">Tier 1 (1-4)</option>
        <option value="tier2">Tier 2 (5-10)</option>
        <option value="tier3">Tier 3 (11-17)</option>
        <option value="tier4">Tier 4 (17-20)</option>
    </select>
    <select id="selectDanger">
        <option value="">- Danger -</option>
        <option value="setback">Setback</option>
        <option value="dangerous">Dangerous</option>
        <option value="deadly">Deadly</option>
    </select>
    <button id="buttonGenerateTraps" onclick="generateTraps()"> 
        Generate 
    </button> 
</div>
<div class="result">
    <h4 align="center">Gondor calls for aid!</h4>
    <p>I have ambitious plans for this module and a limited amount of talent and time. If your familiar with javascript and willing to help contact me via <a href="https://github.com/MrFarland">GitHub</a>.</p>
</div>
<hr/>