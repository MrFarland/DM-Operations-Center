---
name: Character Name Generator
slug: character-name-generator
---
<h3>Character Name Generator</h3>
<p>Use the following generator to quickly generate a few names based on the character's race (or culture) and gender identity.</p>

<div style="margin-bottom:15px; text-align:center;">
    <select id="selectRace">
        <option value="">-- Race --</option>
        <option value="Dragonborn">Dragonborn</option>
        <option value="Human">Human</option>
    </select>
    <select id="selectGender">
        <option value="">-- Gender --</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
    </select>
    <button id="buttonGenerateName" onclick="generateName()"> 
        Generate Name 
    </button> 
</div>

<hr/>

<h4 style="text-align:center;"><span id="givenName"></span> <span id="familyName"></span></h4>

<script>
    // Generate a random named based on the selected name lists.
    function generateName() {

        // Populate race variable based on the selection in the dropdown menus.
        let selectRace = document.getElementById('selectRace');
        let race = selectRace.options[selectRace.selectedIndex].text;

        // Populate gender variable based on the selection in the dropdown menus.
        let selectGender= document.getElementById('selectGender');
        let gender = selectGender.options[selectGender.selectedIndex].text;

        // Combine the race and gender variables to identify desired arrays.
        let givenNameList = eval(race + gender);
        let familyNameList = eval(race + "Family");
     
        // Select the given and family names at random from the appropriate list.
        givenName.innerHTML = 
            givenNameList[Math.floor(Math.random() * givenNameList.length)];
        familyName.innerHTML = 
            familyNameList[Math.floor(Math.random() * familyNameList.length)];
    }

    // Data
    const DragonbornFemale = ["Aakra","Aasathra","Antrara","Arava","Biri","Blendaeth","Burana","Chassath","Daar","Dentratha","Doudra","Driindar","Eggren","Farideh","Findex","Furrele","Gesrethe","Gilkass","Harann","Havilar","Hethress","Hillanot","Jaxi","Jezean","Jheri","Kadana","Kava","Korinn","Megren","Mijira","Mishann","Nala","Nuthra","Perra","Pogranix","Pyxrin","Quespa","Raiann","Rezena","Ruloth","Saphara","Savaran","Surina","Sora","Synthrin","Tatyan","Thava","Uadjit","Vezera","Zykroff"];
    const DragonbornMale = ["Adrex","Arjhan","Azzakh","Balasar","Baradad","Bharash","Bidreked","Dadalan","Dazzazn","Direcris","Donaar","Fax","Gargax","Ghesh","Gorbundus","Greethen","Heskan","Hirrathak","Ildrex","Kaladan","Kerkad","Kiirith","Kriv","Maagog","Medrash","Mehen","Mozikth","Mreksh","Mugrunden","Nadarr","Nithther","Norkruuth","Nykkan","Pandjed","Patrin","Pijjirik","Quarethon","Rathkran","Rhogar","Rivaan","Sethrekar","Sharnash","Shedinn","Srorthen","Tarhun","Torinn","Trynnicus","Valorean","Vrondiss","Zedaar"];
    const DragonbornFamily = ["Belarrak","Belnak","Churiarajachi"];
    const HumanFemale = ["Jane","Jill","June"];
    const HumanMale = ["Jim","John","Joseph"];
    const HumanFamily = ["Jameson","Johnson","Jones"];

</script> 