---
name: Name Generator
slug: name-generator
parent: worldbuilding
---
### Name Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > Name Generator {.small-text}

<p>Use the following generator to quickly generate a few names based on the character's race (or culture) and gender identity.</p>

<div class="controls">
    <select id="selectRace">
        <option value="none">-- Race --</option>
        <option value="dragonborn">Dragonborn</option>
        <option value="dwarf">Dwarf</option>
        <option value="elf">Elf</option>
        <option value="gnome">Gnome</option>
        <option value="halfling">Halfling</option>
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
            <option value="maori">Maori</option>
            <option value="mesoamerican">Mesoamerican</option>
            <option value="japanese">Japanese</option>
            <option value="nigercongo">Niger-Congo</option>
            <option value="norse">Norse</option>
            <option value="polynesian">Polynesian</option>
            <option value="roman">Roman</option>
            <option value="slavic">Slavic</option>
            <option value="spanish">Spanish</option>
        </optgroup>
        <option value="orc">Orc</option>
        <option value="tiefling">Tiefling</option>
    </select>
    <select id="selectGender">
        <option value="none">-- Gender --</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
    </select>
    <button id="buttonGenerateName" onclick="generateName()"> 
        Generate 
    </button> 
</div>


<div class="result">
    <h4 style="text-align:center;"><span id="givenName"></span> <span id="familyName"></span></h4>
</div>

<hr/>

<script src="../assets/js/generateName.js"></script>
<script src="../assets/data/names-character.js"></script>
