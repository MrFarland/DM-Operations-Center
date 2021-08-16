---
name: Settlement Generator
slug: settlement-generator
parent: worldbuilding
---
### Settlement Generator
[Home](dm-operations-center) > [Worldbuilding](worldbuilding-menu) > Settlement Generator {.small-text}

<div style="margin-bottom:15px; text-align:center;">
    <select id="selectType">
        <option value="">- Type -</option>
        <option value="station">Station</option>
        <option value="hamlet">Hamlet</option>
        <option value="village">Village</option>
        <option value="town">Town</option>
        <option value="city">City</option>
        <option value="capital">Capital</option>
    </select>
    <select id="selectCulture">
        <option value="">-- Culture --</option>
        <option value="Dragonborn">Dragonborn</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Gnome">Gnome</option>
        <option value="Halfling">Halfling</option>
        <option value="HumanArabic">Human (Arabic)</option>
        <option value="HumanBarovian">Human (Barovian)</option>
        <option value="HumanCeltic">Human (Celtic)</option>
        <option value="HumanChinese">Human (Chinese)</option>
        <option value="HumanEgyptian">Human (Egyptian)</option>
        <option value="HumanEnglish">Human (English)</option>
        <option value="HumanFrench">Human (French)</option>
        <option value="HumanGerman">Human (German)</option>
        <option value="HumanGreek">Human (Greek)</option>
        <option value="HumanIndian">Human (Indian)</option>
        <option value="HumanMaori">Human (Maori)</option>
        <option value="HumanMesoamerican">Human (Mesoamerican)</option>
        <option value="HumanJapanese">Human (Japanese)</option>
        <option value="HumanNigerCongo">Human (Niger-Congo)</option>
        <option value="HumanNorse">Human (Norse)</option>
        <option value="HumanPolynesian">Human (Polynesian)</option>
        <option value="HumanRoman">Human (Roman)</option>
        <option value="HumanSlavic">Human (Slavic)</option>
        <option value="HumanSpanish">Human (Spanish)</option>
        <option value="Orc">Orc</option>
        <option value="Tiefling">Tiefling</option>
    </select>
    <select id="selectSource">
        <option value="">- Source -</option>
        <option value="legend">Legend</option>
        <option value="notice">Notice Board</option>
        <option value="rumor">Rumor</option>
        <option value="vision">Vision</option>
    </select>
    <button id="buttonGenerateSettlement" onclick="generateSettlement()"> 
        Generate 
    </button> 
</div>
<div class="result">
    <h4 align="center">Gondor calls for aid!</h4>
    <p>I have ambitious plans for this module and a limited amount of talent and time. If your familiar with javascript and willing to help contact me via <a href="https://github.com/MrFarland">GitHub</a>.</p>
</div>
<hr/>