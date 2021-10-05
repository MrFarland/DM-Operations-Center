---
name: NPC Generator (DF)
slug: npc-generator-df
parent: worldbuilding
---
### NPC Generator (DF)
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > NPC Generator (DF) {.small-text}

*This is just a test file to try variations on the NPC generator without touching the working version.* {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectRace">
        <option value="">-- Race --</option>
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
            <option value="japanese">Japanese</option>
            <option value="maori">Maori</option>
            <option value="mesoamerican">Mesoamerican</option>
            <option value="nigercongo">Niger-Congo</option>
            <option value="norse">Norse</option>
            <option value="polynesian">Polynesian</option>
            <option value="roman">Roman</option>
            <option value="slavic">Slavic</option>
            <option value="spanish">Spanish</option>
        </optgroup>
        <optgroup label="Fantasy">
            <option value="Dragonborn">Dragonborn</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Gnome">Gnome</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
            <option value="Tiefling">Tiefling</option>
        </optgroup>
    </select>
    <select id="selectGender">
        <option value="">-- Gender --</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
    </select>
    <select id="selectAge">
        <option value="">-- Age --</option>
        <option value="child">Child</option>
        <option value="teen">Teen</option>
        <option value="adult">Adult</option>
        <option value="mature">Mature</option>
        <option value="elderly">Elderly</option>
    </select>
    <select id="selectClass">
        <option value="">-- Class --</option>
        <option value="commoner">Commoner</option>
        <option value="acolyte">Acolyte</option>
        <option value="bandit">Bandit</option>
        <option value="guard">Guard</option>
        <option value="knight">Knight</option>
        <option value="priest">Priest</option>
    </select>
    <button id="buttonGenerateName" onclick="generateName()"> 
        Generate 
    </button> 
</div>