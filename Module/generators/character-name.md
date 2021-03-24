---
name: Character Name Generator
slug: character-name-generator
---
### Character Name Generator
Use the following generator to quickly generate a few names based on the character's race (or culture) and gender identity.

<select id="race">
    <option value="None">-- Select --</option>
    <option value="dragonborn">Dragonborn</option>
    <option value="dwarf">Dwarf</option>
    <option value="elf">Elf</option>
</select>

<select id="gender">
    <option value="None">-- Select --</option>
    <option value="f">Feminine</option>
    <option value="m">Masculine</option>
</select>

<button id="generate" onclick="generateName()"> 
    Generate Names 
</button> 

<hr/>

<h4 id="results" style="margin:20px"></h4> 

<script>
  // Variables
  var select_race = document.getElementById('race').value
  var select_gender = document.getElementById('gender').value


  function generateName() {
      results.innerHTML = 
          dragonborn_f[Math.floor(Math.random() * dragonborn_f.length)];
  } 

  // Data
  var dragonborn_f = ["Aakra","Aasathra","Antrara","Arava","Biri","Blendaeth","Burana","Chassath","Daar","Dentratha","Doudra","Driindar","Eggren","Farideh","Findex","Furrele","Gesrethe","Gilkass","Harann","Havilar","Hethress","Hillanot","Jaxi","Jezean","Jheri","Kadana","Kava","Korinn","Megren","Mijira","Mishann","Nala","Nuthra","Perra","Pogranix","Pyxrin","Quespa","Raiann","Rezena","Ruloth","Saphara","Savaran","Surina","Sora","Synthrin","Tatyan","Thava","Uadjit","Vezera","Zykroff"];
  var dragonborn_m = ["Adrex","Arjhan","Azzakh","Balasar","Baradad","Bharash","Bidreked","Dadalan","Dazzazn","Direcris","Donaar","Fax","Gargax","Ghesh","Gorbundus","Greethen","Heskan","Hirrathak","Ildrex","Kaladan","Kerkad","Kiirith","Kriv","Maagog","Medrash","Mehen","Mozikth","Mreksh","Mugrunden","Nadarr","Nithther","Norkruuth","Nykkan","Pandjed","Patrin","Pijjirik","Quarethon","Rathkran","Rhogar","Rivaan","Sethrekar","Sharnash","Shedinn","Srorthen","Tarhun","Torinn","Trynnicus","Valorean","Vrondiss","Zedaar"];
  var dragonborn_c = [];
  var dwarf_f = ["Jane","Jill"];
  var dwarf_m = ["Jim","John"];
  var dwarf_c = ["Jameson","Johnson"];


</script> 