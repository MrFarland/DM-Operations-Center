---
name: Encounter Generator
slug: encounter-generator
parent: encounters
---
### Encounter Generator
[Home](dm-operations-center) > [Encounters](encounters) > Encounter Generator {.small-text}

<div style="margin-bottom:15px; text-align:center;">
    <select id="selectTerrain">
        <option value="">- Terrain -</option>
        <option value="Arctic">Arctic</option>
        <option value="Coastal">Coastal</option>
        <option value="Desert">Desert</option>
        <option value="Forest">Forest</option>
        <option value="Grassland">Grassland</option>
        <option value="Hill">Hill</option>
        <option value="Jungle">Jungle</option>
        <option value="Mountain">Mountain</option>
        <option value="PlaneAir">Plane (A)</option>
        <option value="PlaneEarth">Plane (E)</option>
        <option value="PlaneFire">Plane (F)</option>
        <option value="PlaneWater">Plane (W)</option>
        <option value="Road">Road</option>
        <option value="Swamp">Swamp</option>
        <option value="Underdark">Underdark</option>
        <option value="Underwater">Underwater</option>
        <option value="Urban">Urban</option>
    </select>
    <select id="selectTier">
        <option value="">- Tier -</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <button id="buttonGenerateEncounter" onclick="generateEncounter()"> 
        Generate Name 
    </button> 
</div>
<div class="result">

</div>
<hr/>

> **Sources** <br/>
> Player's Handbook, p. xxx
{.read .small-text}