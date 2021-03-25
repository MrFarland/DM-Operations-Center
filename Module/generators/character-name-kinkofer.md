<div style="margin-bottom:15px; text-align:center;">
  <select id="selectRace">
    <option label="-- Race --" disabled selected></option>
    <option value="Dragonborn">Dragonborn</option>
    <option value="Human">Human</option>
  </select>
  <select id="selectSex">
    <option label="-- Sex --" disabled selected></option>
    <option value="Female">Female</option>
    <option value="Male">Male</option>
  </select>
  <button id="buttonGenerateName" onclick="generateName()">
    Generate Name
  </button>
</div>

<hr />

<h4 style="text-align:center;"><span id="givenName"></span> <span id="familyName"></span></h4>
<script>
    function generateName() {
        let selectRace = document.getElementById('selectRace');
        let race = selectRace.options[selectRace.selectedIndex].text;
        let selectSex = document.getElementById('selectSex');
        let sex = selectSex.options[selectSex.selectedIndex].text;
        let gName = "";
        let fName = "";
        if (race == 'Dragonborn') {
            if (sex == 'Female')
                gName = dragonbornFemale[Math.floor(Math.random() * dragonbornFemale.length)];
            else
                gName = dragonbornMale[Math.floor(Math.random() * dragonbornMale.length)];
                fName = dragonbornFamily[Math.floor(Math.random() * dragonbornFamily.length)];}
        givenName.innerHTML = gName;
        familyName.innerHTML = fName;
    }
    // Data
    const dragonbornFemale = ["Aakra", "Aasathra", "Antrara", "Arava", "Biri", "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha", "Doudra", "Driindar", "Eggren", "Farideh", "Findex", "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar", "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri", "Kadana", "Kava", "Korinn", "Megren", "Mijira", "Mishann", "Nala", "Nuthra", "Perra", "Pogranix", "Pyxrin", "Quespa", "Raiann", "Rezena", "Ruloth", "Saphara", "Savaran", "Surina", "Sora", "Synthrin", "Tatyan", "Thava", "Uadjit", "Vezera", "Zykroff"];
    const dragonbornMale = ["Adrex", "Arjhan", "Azzakh", "Balasar", "Baradad", "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris", "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus", "Greethen", "Heskan", "Hirrathak", "Ildrex", "Kaladan", "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash", "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr", "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin", "Pijjirik", "Quarethon", "Rathkran", "Rhogar", "Rivaan", "Sethrekar", "Sharnash", "Shedinn", "Srorthen", "Tarhun", "Torinn", "Trynnicus", "Valorean", "Vrondiss", "Zedaar"];
    const dragonbornFamily = ["Belarrak", "Belnak", "Churiarajachi"];
</script>
