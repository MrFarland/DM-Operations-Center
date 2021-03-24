---
name: Character Name Generator
slug: character-name-generator
---
### Character Name Generator
Use the following generator to quickly generate a few names based on the character's race (or culture) and gender identity.

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
    // Populate selectRace and selectGender from the dropdownlists above. (Hardcoded for now.)
    let selectRace = "Dragonborn";
    let selectGender = "Female";

    // Set variables to control which lists are selected based on the dropdown menus.
    let firstNameList = selectRace + selectGender;
    let familyNameList = selectRace + "Family";

    // prints the value of the variable for testing.
    document.write (firstNameList); 
    document.write (familyNameList);

    // Generate a random named based on the selected name lists.
    function generateName() {
        givenName.innerHTML = 
            firstNameList[Math.floor(Math.random() * firstNameList.length)];
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