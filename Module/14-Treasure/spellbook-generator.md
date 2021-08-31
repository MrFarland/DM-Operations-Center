---
name: Spellbook Generator
slug: spellbook-generator
parent: treasure
---
### Spellbook Generator
[Home](dm-operations-center) > [Treasure](treasure-menu) > Spellbook Generator {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectEnvironment">
        <option value="">- Level -</option>
        <option value="l1-2">1-2</option>
        <option value="l3-4">3-4</option>
        <option value="l5-6">5-6</option>
        <option value="l7-8">7-8</option>
        <option value="l9-10">9-10</option>
        <option value="l11-12">11-12</option>
        <option value="l13-14">13-14</option>
        <option value="l15-16">15-16</option>
        <option value="l17-18">17-18</option>
        <option value="l19-20">19-20</option>
    </select>
    <select id="selectSchool">
        <option value="">- School -</option>
        <option value="general">General</option>
        <option value="abjuration">Abjuration</option>
        <option value="conjuration">Conjuration</option>
        <option value="divination">Divination</option>
        <option value="dunamancy">Dunamancy</option>
        <option value="enchantment">Enchantment</option>
        <option value="evocation">Evocation</option>
        <option value="illusion">Illusion</option>
        <option value="necromancy">Necromancy</option>
        <option value="transmutation">Transmutation</option>
    </select>
    <button id="buttonGenerateSpellbook" onclick="generateSpellbook()"> 
        Generate 
    </button> 
</div>
<div class="result">
    <h4 align="center">Gondor calls for aid!</h4>
    <p>I have ambitious plans for this module and a limited amount of talent and time. If your familiar with javascript and willing to help contact me via <a href="https://github.com/MrFarland">GitHub</a>.</p>
</div>
<hr/>