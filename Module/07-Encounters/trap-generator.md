---
name: Trap Generator
slug: trap-generator
parent: encounters
---
### Trap Generator
[Home](dm-operations-center) > [Encounters](encounters-menu) > Trap Generator {.small-text}


<div class="controls">
    <select id="selectPCLevel">
        <option value="None">Any PC Level</option>
        <option value="1-4">1-4</option>
        <option value="5-10">5-10</option>
        <option value="11-16">11-16</option>
        <option value="17-20">17-20</option>
    </select>
    <select id="selectTrapDanger">
        <option value="None">Any Danger Severity</option>
        <option value="Setback">Setback</option>
        <option value="Dangerous">Dangerous</option>
        <option value="Deadly">Deadly</option>
    </select>
    <button id="buttonGenerateTrap" onclick="generateTrap()">Generate</button> 
</div>
<hr/>
<div class="result">
    <div id="PCLevel"><h4>PC Level</h4><div class="subResult"></div></div>
    <div id="trapDanger"><h4>Trap Danger</h4><div class="subResult"></div></div>
        <div class="small-text">
            <span id="trapSaveDC">Save DC</span> - 
            <span id="trapAttackBonus">Attack Bonus</span> -
            <span id="trapDamage">Trap Damage</span> 
        </div>
    <div id="trapTrigger"><h4>Trap Trigger</h4><div class="subResult"></div></div>
    <div id="trapEffects"><h4>Trap Effects</h4><div class="subResult"></div></div>
</div>
<br/>
<br/>

<!-- Load the custom.js for common functions -->
<script src="../assets/js/custom.js"></script>

<!-- Load the dice and generator js files from drow@bin.sh -->
<script src="../assets/js/dice.js"></script>
<script src="../assets/js/generator.js"></script>

<!-- Load the functions to pull data form the dropdowns -->


<!-- Load the heavy lifting js to generate names and npcs. -->
<script src="../assets/js/generateTrap.js"></script>

<!-- Load the js files containing data for the generators. -->
<script src="../assets/data/generatorData.js"></script>

<hr/>