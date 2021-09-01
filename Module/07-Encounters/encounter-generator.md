---
name: Encounter Generator
slug: encounter-generator
parent: encounters
---
### Encounter Generator
[Home](dm-operations-center) > [Encounters](encounters-menu) > Encounter Generator {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectEnvironment">
        <option value="">- Environment -</option>
        <option value="arctic">Arctic</option>
        <option value="coastal">Coastal</option>
        <option value="desert">Desert</option>
        <option value="forest">Forest</option>
        <option value="grassland">Grassland</option>
        <option value="hill">Hill</option>
        <option value="mountain">Mountain</option>
        <option value="swamp">Swamp</option>
        <option value="underdark">Underdark</option>
        <option value="underwater">Underwater</option>
        <option value="urban">Urban</option>
    </select>
    <select id="selectTier">
        <option value="">- Tier -</option>
        <option value="tier1">Tier 1 (1-4)</option>
        <option value="tier2">Tier 2 (5-10)</option>
        <option value="tier3">Tier 3 (11-17)</option>
        <option value="tier4">Tier 4 (17-20)</option>
    </select>
    <button id="buttonGenerateEncounters" onclick="generateEncounters()"> 
        Generate 
    </button> 
</div>
<div class="result">
    <h4 align="center">Gondor calls for aid!</h4>
    <p>I have ambitious plans for this module and a limited amount of talent and time. If your familiar with javascript and willing to help contact me via <a href="https://github.com/MrFarland">GitHub</a>.</p>
</div>
<hr/>