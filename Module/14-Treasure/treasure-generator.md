---
name: Treasure Generator
slug: treasure-generator
parent: treasure
---
### Treasure Generator
[Home](dm-operations-center) > [Treasure](treasure-menu) > Treasure Generator {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectType">
        <option value="">- Types -</option>
        <option value="individual">Individual</option>
        <option value="hoard">Hoard</option>
    </select>
    <select id="selectTier">
        <option value="">- Tier -</option>
        <option value="tier1">Tier 1 (1-4)</option>
        <option value="tier2">Tier 2 (5-10)</option>
        <option value="tier3">Tier 3 (11-17)</option>
        <option value="tier4">Tier 4 (17-20)</option>
    </select>
    <button id="buttonGenerateTreasure" onclick="generateTreasure()"> 
        Generate 
    </button> 
</div>
<div class="result">
    <h4 align="center">Gondor calls for aid!</h4>
    <p>I have ambitious plans for this module and a limited amount of talent and time. If your familiar with javascript and willing to help contact me via <a href="https://github.com/MrFarland">GitHub</a>.</p>
</div>
<hr/>