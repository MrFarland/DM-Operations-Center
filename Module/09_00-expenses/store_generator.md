---
name: Store Generator
slug: store-generator
parent: expenses
---
### Store Generator
[Home](dm-operations-center) > [Expenses](expenses) > Store Generator {.small-text}

<div style="margin-bottom:15px; text-align:center;">
    <select id="selectStore">
        <option value="">- Shop -</option>
        <option value="Alchemist">Alchemist</option>
        <option value="Armorer">Armorsmith</option>
        <option value="Baker">Bakery</option>
        <option value="Blacksmith">Blacksmith</option>
        <option value="Bookseller">Bookseller</option>
        <option value="Butcher">Butcher</option>
        <option value="Cartwright">Cartwright</option>
        <option value="Clothier">Clothier</option>
        <option value="Enchanter">Enchanter</option>
        <option value="Herbalist">Herbalist</option>
        <option value="InnTavern">Inn & Tavern</option>
        <option value="Jeweler">Jeweler</option>
        <option value="Leathersmith">Leatherworker</option>
        <option value="Magic Supply">Magic Supply</option>
        <option value="Scribe">Scribe</option>
        <option value="Shipwright">Shipwright</option>
        <option value="Stable">Stable</option>
        <option value="Weaponsmith">Weaponsmith</option>
    </select>
    <select id="selectSize">
        <option value="">- Size -</option>
        <option value="Hamlet">Hamlet</option>
        <option value="Village">Village</option>
        <option value="Town">Town</option>
        <option value="SmallCity">Small City</option>
        <option value="BigCity">Big City</option>
    </select>
    <button id="buttonGenerateShop" onclick="generateShop()"> 
        Generate 
    </button> 
</div>
<div class="result">

</div>
<hr/>

> **Sources** <br/>
> Player's Handbook, p. xxx
{.read .small-text}