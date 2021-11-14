/*
 generatorData.js
*/

// --------------------------------------------------------------------------------
// AgeGroups & Ages
// --------------------------------------------------------------------------------
gen_data["AgeGroup"] = {"1-20":"Young","21-50":"Adult","51-80":"Mature","81-97":"Elderly","98-100":"Venerable"};
raceAgeGroups = {
  "Dragonborn": [15,16,32,48,64,80],
  "Dwarf": [50,70,140,210,280,350],
  "Elf": [100,150,300,450,600,750],
  //"Firbolg": [16,20,40,60,80,100],
  //"Genasi": [16,24,48,72,96,120],
  //"Gith": [16,20,40,60,80,100],
  "Gnome": [16,100,180,260,320,400],
  //"Goblin": [8,12,24,36,48,60],
  //"Goliath": [16,20,40,60,80,100],
  "Half-Elf": [20,36,72,108,144,180],
  "Half-Orc": [14,15,30,45,60,75],
  "Halfling": [20,50,100,150,200,250],
  "Human": [16,20,40,60,80,100],
  //"Kenku": [12,18,30,42,54,60],
  //"Kobold": [6,24,48,72,96,120],
  //"Lizardfolk": [14,18,30,42,54,60],
  "Orc": [14,20,25,35,45,50],
  //"Tabaxi": [16,20,40,60,80,100],
  "Tiefling": [16,20,40,60,80,100],
  //"Tortle": [14,20,25,35,45,50],
  //"Yuan-Ti": [16,20,40,60,80,100];
};

// --------------------------------------------------------------------------------
// Alignment
// --------------------------------------------------------------------------------
gen_data["AlignmentGE"] = {"1-35":"Good","36-75":"Neutral","76-100":"Evil"};
gen_data["AlignmentLC"] = {"1-35":"Lawful","36-75":"Neutral","76-100":"Chaotic"};

// --------------------------------------------------------------------------------
// Appearance
// --------------------------------------------------------------------------------
gen_data["BodyHeight"] = ["average","short","tall"];
gen_data["BodyWeight"] = ["average","atheltic","doughy","fit","heavy","lean","powerful","rotund","skinny","soft","stocky","strong","thin"];
gen_data["EyeType"] = {
  "1":"cloudy",
  "2":"bulging",
  "3-4":"close-set",
  "5-6":"deep-set",
  "7-8":"downturned",
  "9-10":"enormous",
  "11-12":"hooded",
  "13-14":"large",
  "15-16":"narrow",
  "17-18":"piercing",
  "19-20":"prominent",
  "21-22":"protruding",
  "23-24":"small",
  "25-26":"squinting",
  "27-28":"thin",
  "29-30":"tiny",
  "31-32":"wide",
  "33-34":"wide-set",
  "35":"bloodshot",
  "36":"beady",
  "37":"dopey",
  "38-39":"oval-shaped",
  "40-42":"round",
};
gen_data["FacialHairStyleBeard"] = [
  "well-trimmed and brushed",
  "growing wild and untamed",
  "braided into multiple braids and capped with small gold rings",
  "braided on both sides of the mouth",
  "gathered into a single braid at the chin",
  "gathered at the chin and tied with string",
  "scruffy and untrimmed",
  "growing more outward than down",
  "styled into a point",
  "boxed and full",
  "neatly styled and capped with a large handlebar mustache",
  "with bits of crumbs tangled amongst the hairs",
  "patchy and uneven"
];
gen_data["FacialHairStyleGoatee"] = [
  "well-trimmed and brushed",
  "growing wild and untamed",
  "braided into multiple braids and capped with small gold rings",
  "braided on both sides of the mouth",
  "gathered into a single braid at the chin",
  "gathered at the chin and tied with string",
  "scruffy and untrimmed",
  "growing more outward than down",
  "styled into a van dyke",
  "boxed and full",
  "neatly styled and capped with a large handlebar mustache",
  "with bits of crumbs tangled amongst the hairs",
  "patchy and uneven"
];
gen_data["FacialHairStyleMustache"] = [
  "well-trimmed and brushed",
  "growing wild and untamed",
  "styled into an elaborate handlebar",
  "overflowing into a long fu-manchu",
  "braided at the corners",
  "scruffy and untrimmed",
  "with bits of crumbs tangled amongst the hairs",
  "parted in the middle",
  "parted and waxed at the tips into a point",
  "with a small, soul patch above the chin"
];
gen_data["Feature"] = [
  "a large, broad nose",
  "a small, narrow nose",
  "a short, broad nose",
  "a short, narrow nose",
  "a pronounced brow",
  "a receding hairline",
  "a cleft lip",
  "a strong, jutting chin",
  "abnormally large ears",
  "a big, toothy grin",
  "a permanent smirk",
  "freckles",
  "a big smile",
  "a warm smile",
  "a wry smile",
  "an inquisitive look",
  "a blank expression",
  "a thousand mile stare",
  "a dazed expression",
  "a look of confusion",
  "flared nostrils",
  "noticeably crooked-teeth",
  "thin, wire-framed spectacles",
  "thick glasses",
  "a gold-framed, monocle",
  "horn-rimmed glasses",
  "small, round glasses",
  "cracked glasses",
  "thick, dust-caked goggles",
  "a patch over the right eye",
  "a patch over the left eye",
  "a scar over the right eye",
  "a scar over the left eye",
  "a scar on the right cheek",
  "a scar on the left cheek",
  "a fresh bruise under the right eye",
  "a fresh bruise under the left eye",
  "burns on the right side of the face",
  "burns on the left side of the face",
  "bags under both eyes",
  "missing numerous teeth",
  "a missing right ear",
  "a missing left ear",
  "intricately drawn tattoos on their face",
  "a birthmark on the left cheek",
  "a birthmark on the right cheek",
  "a mole on the left cheek",
  "a mole on the left cheek",
  "a large wart on their nose",
  "a gold ring in their nose",
  "numerous piercings in both ears",
  "an acid burn on their left cheek",
  "an acid burn on their right cheek",
  "are red and irritated",
  "are nearly swollen shut",
  "a golden tooth"
];
gen_data["HairColor"] = {
  "1-30":"black",
  "31-38":"dark brown",
  "39-46":"natural brown",
  "47-53":"light brown",
  "54-60":"chestnut brown",
  "61-65":"light blond",
  "66-70":"golden blond",
  "71-75":"natural blond",
  "76-80":"platinum blond",
  "81-83":"auburn",
  "84-87":"red",
  "88-90":"orange",
  "91-93":"copper",
  "94-96":"strawberry blond",
  "97-98":"salt and pepper",
  "99":"gray","100":"white",
  "101":"bright blue",
  "102":"dark blue",
  "103":"light blue",
  "104":"bright green",
  "105":"dark green",
  "106":"light green",
  "107":"bright pink",
  "108":"light pink",
  "109":"dark purple",
  "110":"bright purple",
  "111":"light purple",
  "112":"bright red"
};
gen_data["HairLength"] = ["Short","Long"];
gen_data["HairStyleLong"] = {
  "1-2":"tied back in a loose ponytail",
  "3-4":"slicked back",
  "5-6":"down to the top of the collar",
  "7-8":"worn in a bun",
  "9-10":"parted in the middle",
  "11-12":"pulled back into a messy bun",
  "13-14":"in long, tight dreadlocks",
  "15-16":"worn half-up and half-down",
  "17":"that stretches down to the middle of the back",
  "18":"long in the back and short up top",
  "19-20":"long on the top and shaved on one side",
  "21-22":"in a shaggy, half ponytail",
  "23":"with a series of small braids framing the face",
  "24-25":"swept back behind the ears",
  "26-27":"pulled back and braided tightly",
  "28-29":"pulled over to one side",
  "40":"in a high mohawk",
  "41":"tied up with a leather strap",
  "42-43":"tied back in a series of braids",
  "44":"pulled over to one side and tied in a bun"
};
gen_data["HairStyleShort"] = {
  "1-2":"parted in the middle",
  "3-4":"parted on the side",
  "5-6":"cut close to the scalp",
  "7-8":"swept over to one side",
  "9-10":"slicked back",
  "11-12":"that is wild and untamed",
  "13-14":"swept-up in the front",
  "15-16":"cropped and undercut on one side",
  "17-18":"tied up in a small bun",
  "19-20":"with short, veritcal spikes",
  "21-22":"pulled to one side and shaved on the other",
  "23":"shaved on the sides and pulled up into a top-knot",
  "24":"shaved on both sides and swept up into a mohawk",
  "25-26":"tied back in a short ponytail",
  "27":"in tight, short dreads",
  "28-29":"with a small cowlick in the back",
  "30":"with a flat top"
};
gen_data["HairType"] = {
  "1-2":"straight",
  "3-4":"messy",
  "5-6":"wavy",
  "7-8":"curly",
  "9":"frizzy",
  "10":"tangled",
  "11-12":"thick",
  "13-14":"thin",
  "15-16":"fine",
  "17-18":"coarse",
  "19-20":"dirty",
  "21":"matted",
  "22":"frayed",
  "23":"thinning",
  "24-25":"greasy",
  "26":"patchy",
  "27":"oily",
  "28-29":"shiny",
  "30":"receeding",
  "31-33":"natural",
  "34-36":"bushy"
};

// --------------------------------------------------------------------------------
// Direction
// --------------------------------------------------------------------------------
gen_data["Direction"] = ["North","Northeast","East","Southeast","South","Southwest","West","Northwest"];
gen_data["DirectionCardinal"] = ["North","East","South","West"];
gen_data["DirectionOrdinal"] = ["Northeast","Southeast","Southwest","Northwest"];

// --------------------------------------------------------------------------------
// Gender
// --------------------------------------------------------------------------------
gen_data["GenderForm"] = ["Feminine","Masculine"];

// --------------------------------------------------------------------------------
// Geography
// --------------------------------------------------------------------------------
gen_data["GeographyArctic"] = ["Glacier","Tundra"];
gen_data["GeographyCoastal"] = ["Bay","Beach","Coast","Cove","Fjord","Shore"];
gen_data["GeographyDesert"] = ["Desert"];
gen_data["GeographyForest"] = ["Forest","Grove","Thicket","Woods"];
gen_data["GeographyGrassland"] = ["Countryside","Fields","Grasslands","Plains"];
gen_data["GeographyHill"] = ["Highlands","Hills"];
gen_data["GeographyMountain"] = ["Mountains","Ridge"];
gen_data["GeographySwamp"] = ["Fens","Marsh","Swamp"];
gen_data["GeographyUnderdark"] = ["Cavern"];
gen_data["GeographyUnderwater"] = ["Reef"];

// Geography - Water
gen_data["GeographyWaterSmall"] = ["Pond","Lake"];
gen_data["GeographyWaterLarge"] = ["Ocean","Sea"];
gen_data["GeographyWaterwaySmall"] = ["Brook","Creek","Stream"];
gen_data["GeographyWaterwayLarge"] = ["Canal","River","Run","Waterway"];

// --------------------------------------------------------------------------------
// Magic School
// --------------------------------------------------------------------------------
gen_data["MagicSchool"] = ["Abjuration","Conjuration","Divination","Dunamancy","Enchantment","Evocation","Illusion","Necromancy","Tranmutation"];
gen_data["MagicSchoolPractitioner"] = ["Abjurist","Conjurer","Diviner","Dunamist","Enchanter","Evoker","Illusionist","Necromancer","Transmuter"];

// --------------------------------------------------------------------------------
// Materials 
// --------------------------------------------------------------------------------
gen_data["MaterialMetalCommon"] = ["Brass","Bronze","Iron","Steel"];
gen_data["MaterialMetalPrecious"] = ["Copper","Gold","Platinum","Silver"];
gen_data["MaterialWood"] = ["Ash","Beech","Birch","Chestnut","Mahogany","Maple","Oak","Walnut"];

// --------------------------------------------------------------------------------
// Names (Personal)
// --------------------------------------------------------------------------------
gen_data["NameFamilyAll"] = ["{DragonbornFamily}","{DwarfFamily}","{ElfFamily}","{HalflingFamily}","{ArabicFamily}","{BarovianFamily}","{CelticFamily}","{ChineseFamily}","{EnglishFamily}","{FrenchFamily}","{GermanFamily}","{GreekFamily}","{IndianFamily}","{JapaneseFamily}","{MaoriFamily}","{MesoamericanFamily}","{Niger-CongoFamily}","{RomanFamily}","{SlavicFamily}","{SpanishFamily}"];

// Names - Dragonborn
gen_data["NameFamilyDragonborn"] = ["Akambherylliax","Argenthrixus","Baharoosh","Beryntolthropal","Bhenkumbyrznaax","Caavylteradyn","Chumbyxirinnish","Clethtinthiallor","Daardendrian","Delmirev","Dhyrktelonis","Ebynichtomonis","Esstyrlynn","Fharngnarthnost","Ghaallixirn","Grrrmmballhyst","Gygazzylyshrift","Hashphronyxadyn","Hshhsstoroth","Imbixtellrhyst","Jerynomonis","Jharthraxyn","Kerrhylon","Kimbatuul","Lhamboldennish","Linxakasendalor","Mohradyllion","Mystan","Nemmonis","Norixius","Ophinshtalajiir","Orexijandilin","Pfaphnyrennish","Phrahdrandon","Pyraxtallinost","Qyxpahrgh","Raghthroknaar","Shestendeliath","Skaarzborroosh","Sumnarghthrysh","Tiammanthyllish","Turnuroth","Umbyrphrael","Vangdondalor","Verthisathurgiesh","Wivvyrholdalphiax","Wystongjiir","Xephyrbahnor","Yarjerit","Zzzxaaxthroth"];
gen_data["NameGivenFeminineDragonborn"] = ["Aakra","Aasathra","Antrara","Arava","Biri","Blendaeth","Burana","Chassath","Daar","Dentratha","Doudra","Driindar","Eggren","Farideh","Findex","Furrele","Gesrethe","Gilkass","Harann","Havilar","Hethress","Hillanot","Jaxi","Jezean","Jheri","Kadana","Kava","Korinn","Megren","Mijira","Mishann","Nala","Nuthra","Perra","Pogranix","Pyxrin","Quespa","Raiann","Rezena","Ruloth","Saphara","Savaran","Surina","Sora","Synthrin","Tatyan","Thava","Uadjit","Vezera","Zykroff"];
gen_data["NameGivenMasculineDragonborn"] = ["Adrex","Arjhan","Azzakh","Balasar","Baradad","Bharash","Bidreked","Dadalan","Dazzazn","Direcris","Donaar","Fax","Gargax","Ghesh","Gorbundus","Greethen","Heskan","Hirrathak","Ildrex","Kaladan","Kerkad","Kiirith","Kriv","Maagog","Medrash","Mehen","Mozikth","Mreksh","Mugrunden","Nadarr","Nithther","Norkruuth","Nykkan","Pandjed","Patrin","Pijjirik","Quarethon","Rathkran","Rhogar","Rivaan","Sethrekar","Sharnash","Shedinn","Srorthen","Tarhun","Torinn","Trynnicus","Valorean","Vrondiss","Zedaar"];

// Names - Dwarf
gen_data["NameFamilyDwarf"] = ["Aranore","Balderk","Battlehammer","Bigtoe","Bloodkith","Bofdann","Brawnanvil","Brazzik","Broodfist","Burrowfound","Caebrek","Daerdahk","Dankil","Daraln","Deepdelver","Durthane","Eversharp","Fallack","Fireforge","Foamtankard","Frostbeard","Glanhig","Goblinbane","Goldfinder","Gorunn","Graybeard","Hammerstone","Helcral","Holderhek","Ironfist","Loderr","Lutgehr","Morigak","Orcfoe","Rakankrak","Ruby-Eye","Rumnaheim","Silveraxe","Silverstone","Steelfist","Stoutale","Strakeln","Strongheart","Thrahak","Torevir","Torunn","Trollbleeder","Trueanvil","Trueblood","Ungart"];
gen_data["NameGivenFeminineDwarf"] = ["Anbera","Artin","Audhild","Balifra","Barbena","Bardryn","Bolhild","Dagnal","Dariff","Delre","Diesa","Eldeth","Eridred","Falkrunn","Fallthra","Finellen","Gillydd","Gunnloda","Gurdis","Helgret","Helja","Hlin","Ilde","Jarana","Kathra","Kilia","Kristryd","Liftrasa","Marastyr","Mardred","Morana","Nalaed","Nora","Nurkara","Oriff","Ovina","Riswynn","Sannl","Therlin","Thodris","Torbera","Tordrid","Torgga","Urshar","Valida","Vistra","Vonana","Werydd","Whurdred","Yurgunn"];
gen_data["NameGivenMasculineDwarf"] = ["Adrik","Alberich","Baern","Barendd","Beloril","Brottor","Dain","Dalgal","Darrak","Delg","Duergath","Dworic","Eberk","Einkil","Elaim","Erias","Fallond","Fargrim","Gardain","Gilthur","Gimgen","Gimurt","Harbek","Kildrak","Kilvar","Morgran","Morkral","Nalral","Nordak","Nuraval","Oloric","Olunt","Orsik","Oskar","Rangrim","Reirak","Rurik","Taklinn","Thoradin","Thorin","Thradal","Tordek","Traubon","Travok","Ulfgar","Uraim","Veit","Vonbin","Vondal","Whurbin"];

// Names - Elf
gen_data["NameChildElf"] = ["Ael","Ang","Ara","Ari","Arn","Aym","Broe","Bryn","Cael","Cy","Dae","Del","Eli","Eryn","Faen","Fera","Gael","Gar","Innil","Jar","Kan","Koeth","Lael","Lue","Mai","Mara","Mella","Mya","Naeris","Naill","Nim","Phann","Py","Rael","Raer","Ren","Rinn","Rua","Sael","Sai","Sumi","Syllin","Ta","Thia","Tia","Traki","Vall","Von","Wil","Za"];
gen_data["NameFamilyElf"] = ["Aloro","Amakiir","Amastacia","Ariessus","Arnuanna","Berevan","Caerdonel","Caphaxath","Casilltenirra","Cithreth","Dalanthan","Eathalena","Erenaeth","Ethanasath","Fasharash","Firahel","Floshem","Galanodel","Goltorah","Hanali","Holimion","Horineth","Iathrana","Ilphelkiir","Iranapha","Koehlanna","Lathalas","Liadon","Meliamne","Mellerelel","Mystralath","Naïlo","Netyoive","Ofandrus","Ostoroth","Othronus","Qualanthri","Raethran","Rothenel","Selevarun","Siannodel","Suithrasas","Sylvaranth","Teinithra","Tiltathana","Wasanthi","Withrethin","Xiloscient","Xistsrith","Yaeldrin"];
gen_data["NameGivenFeminineElf"] = ["Adrie","Ahinar","Althaea","Anastrianna","Andraste","Antinua","Arara","Baelitae","Bethrynna","Birel","Caelynn","Chaedi","Claira","Dara","Drusilia","Elama","Enna","Faral","Felosial","Hatae","Ielenia","Ilanis","Irann","Jarsali","Jelenneth","Keyleth","Leshanna","Lia","Maiathah","Malquis","Meriele","Mialee","Myathethil","Naivara","Quelenna","Quillathe","Ridaro","Sariel","Shanairla","Shava","Silaqui","Sumnes","Theirastra","Thiala","Tiaathque","Traulam","Vadania","Valanthe","Valna","Xanaphia"];
gen_data["NameGivenMasculineElf"] = ["Adran","Aelar","Aerdeth","Ahvain","Aramil","Arannis","Aust","Azaki","Beiro","Berrian","Caeldrim","Carric","Dayereth","Dreali","Efferil","Eiravel","Enialis","Erdan","Erevan","Fivin","Galinndan","Gennal","Hadarai","Halimath","Heian","Himo","Immeral","Ivellios","Korfel","Lamlis","Laucian","Lucan","Mindartis","Naal","Nutae","Paelias","Peren","Quarion","Riardon","Rolen","Soveliss","Suhnae","Thamior","Tharivol","Theren","Theriatis","Thervan","Uthemar","Vanuath","Varis"];

// Names - Gnome
gen_data["NameFamilyGnome"] = ["Albaratie","Bafflestone","Beren","Boondiggles","Cobblelob","Daergel","Dunben","Fabblestabble","Fapplestamp","Fiddlefen","Folkor","Garrick","Gimlen","Glittergem","Gobblefirn","Gummen","Horcusporcus","Humplebumple","Ironhide","Leffery","Lingenhall","Loofollue","Maekkelferce","Miggledy","Munggen","Murnig","Musgraben","Nackle","Ningel","Nopenstallen","Nucklestamp","Offund","Oomtrowl","Pilwicken","Pingun","Quillsharpener","Raulnor","Reese","Rofferton","Scheppen","Shadowcloak","Silverthread","Sympony","Tarkelby","Timbers","Turen","Umbodoben","Waggletop","Welber","Wildwander"];
gen_data["NameGivenFeminineGnome"] = ["Abalaba","Bimpnottin","Breena","Buvvie","Callybon","Caramip","Carlin","Cumpen","Dalaba","Donella","Duvamil","Ella","Ellyjoybell","Ellywick","Enidda","Lilli","Loopmottin","Lorilla","Luthra","Mardnab","Meena","Menny","Mumpena","Nissa","Numba","Nyx","Oda","Oppah","Orla","Panana","Pyntle","Quilla","Ranala","Reddlepop","Roywyn","Salanop","Shamil","Siffress","Symma","Tana","Tenena","Tervaround","Tippletoe","Ulla","Unvera","Veloptima","Virra","Waywocket","Yebe","Zanna"];
gen_data["NameGivenMasculineGnome"] = ["Alston","Alvyn","Anverth","Arumawann","Bilbron","Boddynock","Brocc","Burgell","Cockaby","Crampernap","Dabbledob","Delebean","Dimble","Eberdeb","Eldon","Erky","Fablen","Fibblestib","Fonkin","Frouse","Frug","Gerbo","Gimble","Glim","Igden","Jabble","Jebeddo","Kellen","Kipper","Namfoodle","Oppleby","Orryn","Paggen","Pallabar","Pog","Qualen","Ribbles","Rimple","Roondar","Sapply","Seebo","Senteq","Sindri","Umpen","Warryn","Wiggens","Wobbles","Wrenn","Zaffrab","Zook"];

// Names - Halfling
gen_data["NameFamilyHalfling"] = ["Appleblossom","Bigheart","Brightmoon","Brushgather","Cherrycheeks","Copperkettle","Deephollow","Elderberry","Fastfoot","Fatrabbit","Glenfellow","Goldfound","Goodbarrel","Goodearth","Greenbottle","Greenleaf","High-hill","Hilltopple","Hogcollar","Honeypot","Jamjar","Kettlewhistle","Leagallow","Littlefoot","Nimblefingers","Porridgepot","Quickstep","Reedfellow","Shadowquick","Silvereyes","Smoothhands","Stonebridge","Stoutbridge","Stoutman","Strongbones","Sunmeadow","Swiftwhistle","Tallfellow","Tealeaf","Tenpenny","Thistletop","Thorngage","Tosscobble","Underbough","Underfoot","Warmwater","Whispermouse","Wildcloak","Wildheart","Wiseacre"];
gen_data["NameGivenFeminineHalfling"] = ["Alain","Andry","Anne","Bella","Blossom","Bree","Callie","Chenna","Cora","Dee","Dell","Eida","Eran","Euphemia","Georgina","Gynnie","Harriet","Jasmine","Jillian","Jo","Kithri","Lavinia","Lidda","Maegan","Marigold","Merla","Myria","Nedda","Nikki","Nora","Olivia","Paela","Pearl","Pennie","Philomena","Portia","Robbie","Rose","Saral","Seraphina","Shaena","Stacee","Tawna","Thea","Trym","Tyna","Vani","Verna","Wella","Willow"];
gen_data["NameGivenMasculineHalfling"] = ["Alton","Ander","Bernie","Bobbin","Cade","Callus","Corrin","Dannad","Danniel","Eddie","Egart","Eldon","Errich","Fildo","Finnan","Franklin","Garret","Garth","Gilbert","Gob","Harol","Igor","Jasper","Keith","Kevin","Lazam","Lerry","Lindal","Lyle","Merric","Mican","Milo","Morrin","Nebin","Nevil","Osborn","Ostran","Oswalt","Perrin","Poppy","Reed","Roscoe","Sam","Shardon","Tye","Ulmo","Wellby","Wendel","Wenner","Wes"];

// Names - Human - Arabic
gen_data["NameFamilyArabic"] = ["al-Abbasi","al-Ajmani","al-Amelai","al-Anazahi","al-Aqeeli","al-Asadi","al-Atiyahi","al-Awazemi","al-Baggarai","al-Bahilai","al-Balawii","al-Balharethi","al-Bariqi","al-Buainaini","al-Darodi","al-Dawasiri","al-Dhafeeri","al-Dhubyani","al-Fahami","al-Farahidi","al-Fazarai","al-Gaini","al-Gashaami","al-Ghaithi","al-Ghamidi","al-Ghassani","al-Ghifari","al-Hakami","al-Hakli","al-Hamidai","al-Hammyari","al-Harithi","al-Hashimi","al-Hawajiri","al-Hilali","al-Humaydahi","al-Jabari","al-Jaidi","al-Jalafi","al-Jiburi","al-Judhami","al-Jumahi","al-Jushami","al-Kaabi","al-Karimi","al-Kathiri","al-Kendahi","al-Khalidi","al-Khashami","al-Khawlani","al-Khazraji","al-Kinanahi","al-Lakhmi","al-Maadeedi","al-Makhzumi","al-Maliki","al-Manaseeri","al-Mehrii","al-Mukhtari","al-Murrahi","al-Mustafai","al-Mutayri","al-Nabhani","al-Nadiri","al-Najjari","al-Nawfali","al-Nuaimi","al-Otaibi","al-Qahtani","al-Qurayshi","al-Rabiahi","al-Rasheedi","al-Saidai","al-Sabai","al-Saeedi","al-Sahali","al-Sahmi","al-Shabeebi","al-Shahrani","al-Sharari","al-Shehiri","al-Shuraifi","al-Subaiei","al-Sulaymi","al-Suwaidi","al-Taghlibi","al-Tahiri","al-Tamimi","al-Thamudi","al-Tuhari","al-Ubaydi","al-Udhrahi","al-Umayyahi","al-Utaybahi","al-Waili","al-Yafai","al-Yami","al-Zahrani","al-Zaydi","al-Zuhrahi"];
gen_data["NameGivenFeminineArabic"] = ["Aaliyah","Aida","Akilah","Alia","Amina","Atefeh","Chaima","Dalia","Ehsan","Elham","Farah","Fatemah","Gamila","Iesha","Inbar","Kamaria","Khadija","Layla","Lupe","Nabila","Nadine","Naima","Najila","Najwa","Nakia","Nashwa","Nawra","Nuha","Nura","Oma","Qadira","Qamar","Qistina","Rahima","Rihanna","Saadia","Sabah","Sada","Saffron","Sahar","Salma","Shatha","Tahira","Takisha","Thana","Yadira","Zahra","Zaida","Zaina","Zeinab"];
gen_data["NameGivenMasculineArabic"] = ["Abbad","Abdul","Achmed","Akeem","Alif","Amir","Asim","Bashir","Bassam","Fahim","Farid","Farouk","Fayez","Fayyaad","Fazil","Hakim","Halil","Hamid","Hazim","Heydar","Hussein","Jabari","Jafar","Jahid","Jamal","Kalim","Karim","Kazim","Khadim","Khalid","Mahmud","Mansour","Musharraf","Mustafa","Nadir","Nazim","Omar","Qadir","Qusay","Rafiq","Rakim","Rashad","Rauf","Saladin","Sami","Samir","Talib","Tamir","Tariq","Yazid"];

// Names - Human - Barovian
gen_data["NameFamilyBarovian"] = ["Alastroi","Antonovich","Antonova","Barthos","Belasco","Cantemir","Dargovich","Dargova","Diavolov","Diminski","Dilisnya","Drazkoi","Garvinski","Grejenko","Groza","Grygorovich","Grygorova","Ivanovich","Ivanova","Janek","Karushkin","Konstantinovich","Konstantinova","Krezkov","Krezkova","Krykski","Lansten","Lazarescu","Lukresh","Lipsiege","Martikov","Martikova","Mironovich","Mironovna","Moldovar","Nikolovich","Nikolova","Nimirovich","Nimirova","Oronovich","Oronova","Petrovich","Petrovna","Polensky","Radovich","Radova","Rilsky","Stefanovich","Stefanova","Strazni","Swilovich","Swilova","Taltos","Targolov","Targolova","Tyminski","Ulbrek","Ulrich","Vadu","Voltanescu","Zalenski","Zalken"];
gen_data["NameGivenFeminineBarovian"] = ["Alana","Clavdia","Danya","Dezdrelda","Diavola","Dorina","Drasha","Drilvia","Elisabeta","Fatima","Grilsha","Isabella","Ivana","Jarzinka","Kala","Katerina","Kereza","Korina","Lavinia","Magda","Marta","Mathilda","Minodora","Mirabel","Miruna","Nimira","Nyanka","Olivenka","Ruxandra","Sorina","Tereska","Valentina","Vasha","Victoria","Wensencia","Zondra"];
gen_data["NameGivenMasculineBarovian"] = ["Alek","Andrej","Anton","Balthazar","Bogan","Boris","Dargos","Darzin","Dragomir","Emeric","Falkon","Frederich","Franz","Gargosh","Gorek","Grygori","Hans","Harkus","Ivan","Jirko","Kobal","Korga","Krystofor","Lazlo","Livius","Marek","Miroslav","Nikolaj","Nimir","Oleg","Radovan","Radu","Seraz","Sergei","Stefan","Tural","Valentin","Vasily","Vladislav","Waltar","Yesper","Zsolt"];
 
// Names - Human - Celtic
gen_data["NameFamilyCeltic"] = ["Aileanach","Ambarsan","Arasgain","Barrach","Beitean","Bhacstair","Bhodhsa","Blacach","Blàrach","Breac","Breathnach","Brothaigh","Bràigheach","Brùn","Buideach","Buids","Cailbhin","Caileanach","Cananach","Caoidheach","Catach","Catanach","Ceallach","Ceanadach","Cearrach","Ciogach","Càidh","Còmhan","Dalais","Druimein","Dubhach","Dunaidh","Dùghlas","Eabarcrombaigh","Fearghasdan","Fionnlasdan","Flannagàin","Flimean","Foirbeis","Foirbeiseach","Friseal","Gallach","Geadais","Gilios","Giobsan","Grannda","Greumach","Griogal","Griogalach","Guaire","Guinne","Gutraidh","Gòrdanach","Latharnach","Lathurna","Leamhnach","Leòideach","Lobhdain","Loganac","Loudain","Matasan","Mathanach","Moireasdan","Morganach","Munna","Màrnach","Mèinn","Mèinnearach","Niocalsan","Paorach","Peadarsan","Peucag","Peutan","Puidreach","Rathais","Robasan","Rosach","Rothach","Ruadh","Ruiseal","Sailcirc","Salmond","Seagha","Sginnearach","Sgot","Sgèin","Singleir","Siosal","Smios","Stiùbhart","Suthurlanach","Sùdrach","Todt","Tolmach","Tuairnear","Tulach","Tàillear","Ualas","Umphraidh","Urchardan"];
gen_data["NameGivenFeminineCeltic"] = ["Aife","Aina","Alane","Ardena","Arienh","Beatha","Birgit","Briann","Caomh","Cara","Cinnia","Cordelia","Deheune","Divone","Donia","Doreena","Elsha","Enid","Ethne","Evelina","Fianna","Genevieve","Gilda","Gitta","Grania","Gwyndolin","Idelisa","Isolde","Keelin","Kennocha","Lavena","Lesley","Linnette","Lyonesse","Mabina","Marvina","Mavis","Mirna","Morgan","Muriel","Nareena","Oriana","Regan","Ronat","Rowena","Selma","Ula","Venetia","Wynne","Yseult"];
gen_data["NameGivenMasculineCeltic"] = ["Airell","Airic","Alan","Anghus","Aodh","Bardon","Bearacb","Bevyn","Boden","Bran","Brasil","Bredon","Brian","Bricriu","Bryant","Cadman","Caradoc","Cedric","Conalt","Conchobar","Condon","Darcy","Devin","Dillion","Donaghy","Donall","Duer","Eghan","Ewyn","Ferghus","Galvyn","Gildas","Guy","Harvey","Iden","Irven","Karney","Kayne","Kelvyn","Kunsgnos","Leigh","Maccus","Moryn","Neale","Owyn","Pryderi","Reaghan","Taliesin","Tiernay","Turi"];
 
// Names - Human - Chinese
gen_data["NameFamilyChinese"] = ["An","Ang","Bái","Cháng","Chén","Cheong","Chéng","Cui","Cài","Cáo","Ding","Dong","Duàn","Dài","Dèng","Dù","Fang","Fàn","Féng","Fù","Gao","Gong","Guo","Gù","Hao","Huáng","Hán","Hè","Hé","Hóu","Hú","Jia","Jiang","Jin","Kang","Kong","Li","Liáng","Liú","Lu","Luó","Lài","Lí","Lín","Lóng","Lù","Ma","Máo","Mèng","Min","Pan","Péng","Qiu","Qián","Qiáo","Qín","Rén","Shen","Shi","Shào","Shèng","Shí","Su","Sun","Sòng","Tang","Tián","Tán","Táng","Wang","Wu","Wàn","Wáng","Wèi","Wén","Wú","Xiao","Xià","Xiè","Xióng","Xu","Xue","Xú","Yin","Yuen","Yuán","Yán","Yáng","Yáo","Yè","Yì","Yú","Zeng","Zhang","Zhong","Zhou","Zhu","Zhào","Zhèng","Zou"];
gen_data["NameGivenFeminineChinese"] = ["Ai","Anming","Baozhai","Bei","Caixia","Changchang","Chen","Chou","Chunhua","Daianna","Daiyu","Die","Ehuang","Fenfang","Ge","Hong","Huan","Huifang","Jia","Jiao","Jiaying","Jingfei","Jinjing","Lan","Li","Lihua","Lin","Ling","Liu","Meili","Ning","Qi","Qiao","Rong","Shu","Shuang","Song","Ting","Wen","Xia","Xiaodan","Xiaoli","Xingjuan","Xue","Ya","Yan","Ying","Yuan","Yue","Yun"];
gen_data["NameGivenMasculineChinese"] = ["Bingwen","Bo","Bolin","Chang","Chao","Chen","Cheng","Da","Dingxiang","Fang","Feng","Fu","Gang","Guang","Hai","Heng","Hong","Huan","Huang","Huiliang","Huizhong","Jian","Jiayi","Junjie","Kang","Lei","Liang","Ling","Liwei","Meilin","Niu","Peizhi","Peng","Ping","Qiang","Qiu","Quan","Renshu","Rong","Ru","Shan","Shen","Tengfei","Wei","Xiaobo","Xiaoli","Xin","Yang","Ying","Zhong"];
 
// Names - Human - Egyptian
gen_data["NameGivenFeminineEgyptian"] = ["A'at","Ahset","Amunet","Aneksi","Atet","Baketamon","Betrest","Bunefer","Dedyet","Hatshepsut","Hentie","Herit","Hetepheres","Intakaes","Ipwet","Itet","Joba","Kasmut","Kemanub","Khemut","Kiya","Maia","Menhet","Merit","Meritamen","Merneith","Merseger","Muyet","Nebet","Nebetah","Nedjemmut","Nefertiti","Neferu","Neithotep","Nit","Nofret","Nubemiunu","Peseshet","Pypuy","Qalhata","Rai","Redji","Sadeh","Sadek","Sitamun","Sitre","Takhat","Tarset","Taweret","Werenro"];
gen_data["NameGivenMasculineEgyptian"] = ["Ahmose","Akhom","Amasis","Amenemhet","Anen","Banefre","Bek","Djedefre","Djoser","Hekaib","Henenu","Horemheb","Horwedja","Huya","Ibebi","Idu","Imhotep","Ineni","Ipuki","Irsu","Kagemni","Kawab","Kenamon","Kewap","Khaemwaset","Khafra","Khusebek","Masaharta","Meketre","Menkhaf","Merenre","Metjen","Nebamun","Nebetka","Nehi","Nekure","Nessumontu","Pakhom","Pawah","Pawero","Ramose","Rudjek","Sabaf","Sebek-khu","Sebni","Senusret","Shabaka","Somintu","Thaneni","Thethi"];
 
// Names - Human - English
gen_data["NameFamilyEnglish"] = ["Alder","Ash","Ashdown","Atwood","Barnes","Becker","Berry","Briar","Briggs","Brock","Brook","Bundy","Burnside","Burroughs","Bush","Butcher","Butler","Clay","Court","Cox","Croft","Cross","Crump","Dale","Deane","Delaney","Dike","Dodd","Ford","Forrest","Fox","Freeman","Garside","Gorsuch","Graves","Green","Greeves","Gross","Grove","Grover","Hall","Hawthorne","Hazel","Head","Heather","Hill","Holley","Holmes","Holt","Homer","Hooke","Hope","House","Howe","Hume","Hyde","Johnston","Kaye","Keats","Kerry","Kirk","Lamb","Layne","Lea","Lowell","March","Marsh","Marshal","Martin","May","Miller","Mills","Moore","Newby","Paine","Paxton","Perrin","Pike","Pitt","Preacher","Provost","Purvis","Ridge","Rock","Rose","Rowen","Sangster","Sellers","Shaw","Short","Thorne","Underwood","Walsh","Wells","West","Whitney","Wilde","Wood","Wragge","Wynne"];
gen_data["NameGivenFeminineEnglish"] = ["Adelaide","Agatha","Agnes","Alice","Aline","Anne","Avelina","Avice","Beatrice","Cecily","Egelina","Eleanor","Elizabeth","Ella","Eloise","Elysande","Emeny","Emma","Emmeline","Ermina","Eva","Galiena","Geva","Giselle","Griselda","Hadwisa","Helen","Herleva","Hugolina","Ida","Isabella","Jacoba","Jane","Joan","Juliana","Katherine","Margery","Mary","Matilda","Maynild","Millicent","Oriel","Rohesia","Rosalind","Rosamund","Sarah","Susannah","Sybil","Williamina","Yvonne"];
gen_data["NameGivenMasculineEnglish"] = ["Adam","Adelard","Aldous","Anselm","Arnold","Bernard","Bertram","Charles","Clerebold","Conrad","Diggory","Drogo","Everard","Frederick","Geoffrey","Gerald","Gilbert","Godfrey","Gunter","Guy","Henry","Heward","Hubert","Hugh","Jocelyn","John","Lance","Manfred","Miles","Nicholas","Norman","Odo","Percival","Peter","Ralf","Randal","Raymond","Reynard","Richard","Robert","Roger","Roland","Rolf","Simon","Theobald","Theodoric","Thomas","Timm","William","Wymar"];

// Names - Human - French
gen_data["NameFamilyFrench"] = ["Aignelme","Auberteau","Balenier","Baujart","Berangieri","Blanchart","Borderel","Bourlabbé","Brodierer","Cadiot","Catifinaly","Charentone","Ciraisse","Contessee","Courtois","d’Attainville","Dantannt","de Bailliir","de Blayseville","de Carnaygnolles","de Choisy","de Dreux","de Gonnaulx","de Henault","de la Charité","de la Marche","de la Ville","de Lestoffe","de Marigni","de Nantueil","de Praelles","de Saint Climent","de Sesselles","de Vannedicque","de Waryllons","des Moulinsvre","Dourches","du Consiel","du Ploich","Durybourc","Fessier","Fournier","Galerne","Gilleberty","Graciast","Guiart","Hanaige","Herbelot","Huneier","Jubontaille","Lambertr","La Beraudele","La Doyenneoise","La Micaudee","Le Begue","Le Bryais","Le Drouais","Le Gendre","Le Maireer","Le Normantr","Le Saigenier","Le Vigneron","Levesque","Lucast","Maignat","Masleer","Maugist","Mercier","Micottre","Moliert","Morhier","Moursin","Navarre","Ogiert","Pagaut","Pasquier","Perrechon","Pieton","Plansson","Pontinle","Poucin","Prieron","Quilletau","Raguiere","Rappiotn","Rengault","Rivier","Rousseau","Saillart","Sansson","Seramet","Souriz","Taverne","Thiboult","Tillartn","Trochelle","Turquanr","Veaser","Vigneron","Wateure"];
gen_data["NameGivenFeminineFrench"] = ["Aalis","Agatha","Agnez","Alberea","Alips","Amée","Amelot","Anne","Avelina","Blancha","Cateline","Cecilia","Claricia","Collette","Denisete","Dorian","Edelina","Emelina","Emmelot","Ermentrudis","Gibelina","Gila","Gillette","Guiburgis","Guillemette","Guoite","Hecelina","Heloysis","Helyoudis","Hodeardis","Isabellis","Jaquette","Jehan","Johanna","Juliote","Katerine","Luciana","Margot","Marguerite","Maria","Marie","Melisende","Odelina","Perrette","Petronilla","Sedilia","Stephana","Sybilla","Ysabeau","Ysabel"];
gen_data["NameGivenMasculineFrench"] = ["Ambroys","Ame","Andri","Andriet","Anthoine","Bernard","Charles","Charlot","Colin","Denis","Durant","Edouart","Eremon","Ernault","Ethor","Felix","Floquart","Galleren","Gaultier","Gilles","Guy","Henry","Hugo","Imbert","Jacques","Jacquot","Jean","Jehannin","Louis","Louys","Loys","Martin","Michel","Mille","Morelet","Nicolas","Nicolle","Oudart","Perrin","Phillippe","Pierre","Regnault","Richart","Robert","Robinet","Sauvage","Simon","Talbot","Tanguy","Vincent"];
 
// Names - Human - German
gen_data["NameFamilyGerman"] = ["Abel","Arnolt","Bartholme","Belligs","Bollinger","Brohmer","Cappus","Dasel","Deutschenbaur","Dottenreucherin","Eck","Enngelhart","Fendin","Fredenman","Ful","Geyger","Göck","Groll","Gutman","Happolt","Heffnerin","Hertman","Hilprant","Honiger","Isenmenger","Kapp","Kempff","Kleinschrotte","Konig","Küchlin","Lanng","Lerchn","Loffler","Macklerin","Mendel","Mewslin","Most","Murrin","Neuckam","Nuber","Ochslin","Oswalt","Pawczer","Pele","Pfaff","Pffeller","Pischoff","Prewnnegk","Pütel","Raschart","Regerin","Reppin","Reynhartt","Rodegast","Rosennberger","Rufflin","Sattler","Schawch","Schenkel","Schlee","Schmiddt","Schnee","Schnyder","Schreiber","Schulten","Schwarcz","Schycker","Sesler","Simler","Spanring","Stahel","Steller","Stoll","Streibe","Stuler","Swapp","Tagthurner","Thoman","Trager","Tuchscherrer","Veste","Vilshofer","Volcker","von Grünigen","von Radach","von Winenden","Voslein","Walther","Weick","Weltzlin","Werlein","Weyck","Widmann","Winter","Wishart","Wyck","Zech","Zigel","Zutlinger","Zweck"];
gen_data["NameGivenFeminineGerman"] = ["Adelhayt","Affra","Agatha","Allet","Angnes","Anna","Apell","Applonia","Barbara","Brida","Brigita","Cecilia","Clara","Cristina","Dorothea","Duretta","Ella","Els","Elsbeth","Engel","Enlein","Enndlin","Eva","Fela","Fronicka","Genefe","Geras","Gerhauss","Gertrudt","Guttel","Helena","Irmel","Jonata","Katerina","Kuen","Kungund","Lucia","Madalena","Magdalen","Margret","Marlein","Martha","Otilia","Ottilg","Peternella","Reusin","Sibilla","Ursel","Vrsula","Walpurg"];
gen_data["NameGivenMasculineGerman"] = ["Albrecht","Allexander","Baltasar","Benedick","Berhart","Caspar","Clas","Cristin","Cristoff","Dieterich","Engelhart","Erhart","Felix","Frantz","Fritz","Gerhart","Gotleib","Hans","Hartmann","Heintz","Herman","Jacob","Jeremias","Jorg","Karll","Kilian","Linhart","Lorentz","Ludwig","Marx","Melchor","Mertin","Michel","Moritz","Osswald","Ott","Peter","Rudolff","Ruprecht","Sewastian","Sigmund","Steffan","Symon","Thoman","Ulrich","Vallentin","Wendel","Wilhelm","Wolff","Wolfgang"];

// Names - Human - Greek
gen_data["NameFamilyGreek"] = ["Alexopoulos","Anagnos","Andreadis","Apostolos","Argyros","Artino","Athanas","Balaban","Banis","Biros","Callas","Castellanos","Chontos","Collias","Condos","Cosmos","Delis","Demopoulos","Doukas","Drivas","Economos","Eliopoulos","Fotopoulos","Gabris","Galatas","Gekas","Georgiades","Gianakos","Gikas","Goga","Grivas","Hallas","Hatzis","Hondros","Kairis","Kalfas","Kallas","Kanelos","Kara","Karalis","Katsaros","Kefalas","Kontos","Kormos","Kosta","Lagana","Lambros","Lasko","Leva","Lillis","Loris","Macris","Makos","Mangas","Manos","Maras","Markos","Mattas","Melis","Michaelides","Milas","Mires","Mola","Moros","Myron","Nasso","Nikas","Nino","Pallas","Panos","Patera","Peris","Petrakis","Poulos","Regas","Rines","Romanos","Rota","Rubis","Sallas","Sarantos","Savas","Simos","Soulis","Speros","Stamatis","Stavros","Tavoularis","Thanos","Toles","Valis","Vasco","Vasilakis","Vassos","Vidales","Vlachos","Vlahos","Xenos","Zervas","Zika"];
gen_data["NameGivenFeminineGreek"] = ["Acantha","Aella","Alektos","Alkippe","Andromeda","Antigone","Ariadne","Astraea","Chloros","Chryseos","Daphne","Despoina","Dione","Eileithyia","Elektra","Euadne","Eudora","Eunomia","Hekabe","Helene","Hermoione","Hippolyte","Ianthe","Iokaste","Iole","Iphigenia","Ismene","Kalliope","Kallisto","Kalypso","Karme","Kassandra","Kassiopeia","Kirke","Kleio","Klotho","Klytië","Kynthia","Leto","Megaera","Melaina","Melpomene","Nausikaa","Nemesis","Niobe","Ourania","Phaenna","Polymnia","Semele","Theia"];
gen_data["NameGivenMasculineGreek"] = ["Adonis","Adrastos","Aeson","Aias","Aineias","Aiolos","Alekto","Alkeides","Argos","Brontes","Damazo","Dardanos","Deimos","Diomedes","Endymion","Epimetheus","Erebos","Euandros","Ganymedes","Glaukos","Hektor","Heros","Hippolytos","Iacchus","Iason","Kadmos","Kastor","Kephalos","Kepheus","Koios","Kreios","Laios","Leandros","Linos","Lykos","Melanthios","Menelaus","Mentor","Neoptolemus","Okeanos","Orestes","Pallas","Patroklos","Philandros","Phoibos","Phrixus","Priamos","Pyrrhos","Xanthos","Zephyros"];

// Names - Human - Indian
gen_data["NameFamilyIndian"] = ["Aggarwal","Anand","Arun","Bahl","Bhat","Chada","Chakrabarti","Chandra","Chandrasekar","Charan","Chaudhary","Chauhan","Darsha","Dhawan","Dutta","Eswarapu","Gandhi","Ganesh","Goel","Jai","Jana","Jindal","Joshi","Kapoor","Kishore","Krishnamurthy","Kumar","Lal","Lalit","Lata","Madan","Mahajan","Malhotra","Malik","Manju","Manohar","Mati","Mehra","Mehta","Mittal","Muthu","Nagpal","Nandin","Naran","Narmada","Naseer","Nath","Neeharika","Neela","Neeru","Nigam","Nirmal","Nita","Pal","Patel","Pawan","Prithviraj","Prasad","Punj","Puri","Rai","Rajagopal","Rajan","Raje","Rajput","Raman","Rana","Ranga","Rastogi","Roopak","Sahni","Sai","Saini","Sameer","Sandeep","Sara","Saxena","Sehgal","Sen","Sethi","Shan","Sharma","Soni","Sripadam","Srini","Srivas","Srivastava","Subram","Subramani","Sudesh","Sudha","Suri","Swami","Tyagi","Uddin","Veena","Veer","Verma","Vijaya","Vish"];
gen_data["NameGivenFeminineIndian"] = ["Abha","Aishwarya","Amala","Ananda","Ankita","Archana","Avani","Chandana","Chandrakanta","Chetan","Darshana","Devi","Dipti","Esha","Gauro","Gita","Indira","Indu","Jaya","Kala","Kalpana","Kamala","Kanta","Kashi","Kishori","Lalita","Lina","Madhur","Manju","Meera","Mohana","Mukta","Nisha","Nitya","Padma","Pratima","Priya","Rani","Sarala","Shakti","Shanta","Shobha","Sima","Sonal","Sumana","Sunita","Tara","Valli","Vijaya","Vimala"];
gen_data["NameGivenMasculineIndian"] = ["Abhay","Ahsan","Ajay","Ajit","Akhil","Amar","Amit","Ananta","Aseem","Ashok","Bahadur","Basu","Chand","Chandra","Damodar","Darhsan","Devdan","Dinesh","Dipak","Gopal","Govind","Harendra","Harsha","Ila","Isha","Johar","Kalyan","Kiran","Kumar","Lakshmana","Mahavir","Narayan","Naveen","Nirav","Prabhakar","Prasanna","Raghu","Rajanikant","Rakesh","Ranjeet","Rishi","Sanjay","Sekar","Shandar","Sumantra","Vijay","Vikram","Vimal","Vishal","Yash"];

// Names - Human - Japanese
gen_data["NameFamilyJapanese"] = ["Abe","Ando","Aoki","Arai","Chiba","Endo","Fujii","Fujimoto","Fujita","Fujiwara","Fukuda","Goto","Hara","Harada","Hasegawa","Hashimoto","Hayashi","Hirano","Ikeda","Imai","Inoue","Ishida","Ishii","Ishikawa","Ito","Iwasaki","Kaneko","Kato","Kikuchi","Kimura","Kinoshita","Kobayashi","Kojima","Kondo","Kubo","Kudo","Maeda","Maruyama","Masuda","Matsuda","Matsui","Matsumoto","Matsuo","Miura","Miyamoto","Miyazaki","Mori","Morita","Murakami","Murata","Nakagawa","Nakajima","Nakamura","Nakano","Nakayama","Nishimura","Noguchi","Nomura","Ogawa","Ohno","Okada","Okamoto","Onishi","Ono","Ota","Otsuka","Saito","Saito","Sakai","Sakamoto","Sakurai","Sano","Sasaki","Sato","Shibata","Shimizu","Sugawara","Sugimoto","Sugiyama","Suzuki","Takada","Takagi","Takahashi","Takeda","Takeuchi","Tamura","Tanaka","Taniguchi","Uchida","Ueda","Ueno","Wada","Watanabe","Yamada","Yamaguchi","Yamamoto","Yamashita","Yamazaki","Yokoyama","Yoshida"];
gen_data["NameGivenFeminineJapanese"] = ["Aika","Akemi","Akiko","Amaya","Asami","Ayumi","Bunko","Chieko","Chika","Chiyo","Cho","Eiko","Emiko","Eri","Etsuko","Gina","Hana","Haruki","Hideko","Hikari","Hiroko","Hisoka","Hishi","Hotaru","Izumi","Kameyo","Kasumi","Kimiko","Kotone","Kyoko","Maiko","Masako","Mi","Minori","Mizuki","Naoki","Natsuko","Noriko","Rei","Ren","Saki","Shigeko","Shinju","Sumiko","Toshiko","Tsukiko","Ume","Usagi","Yasuko","Yuriko"];
gen_data["NameGivenMasculineJapanese"] = ["Akio","Atsushi","Daichi","Daiki","Daisuke","Eiji","Fumio","Hajime","Haru","Hideaki","Hideo","Hikaru","Hiro","Hiroki","Hisao","Hitoshi","Isamu","Isao","Jun","Katashi","Katsu","Kei","Ken","Kenshin","Kenta","Kioshi","Makoto","Mamoru","Masato","Masumi","Noboru","Norio","Osamu","Ryota","Sadao","Satoshi","Shigeo","Shin","Sora","Tadao","Takehiko","Takeo","Takeshi","Takumi","Tamotsu","Tatsuo","Toru","Toshio","Yasuo","Yukio"];

// Names - Human - Maori
gen_data["NameFamilyMaori"] = ["Ahipene","Awherana","Ehau","Ehutu","Erumate","Ewe","Hae","Hahauterangi","Haumoetahanga","Huapia","Hauraki","Hautonga","Iahaukina","Ihoatamai","Kaahu","Kaharouatauhu","Kahukurangi","Kitengahau","Korangawhenua","Mahamaumu","Manawarangi","Mangakaraka","Matakairua","Moeao","Mokotahana","Naera","Ngahia","Nukumaitore","Ohanga","Onewatahi","Otuakaino","Owai","Paaka","Parepupuhi","Pohomare","Rahera","Rimupae","Rurumai","Taanemoeahi","Tamatetane","Tauratu","Tukawa","Tupaoa","Uatahi","Umuparae","Ureteangina","Waea","Waipaia","Wetahu","Whakaeke","Wikipua",""];
gen_data["NameGivenFeminineMaori"] = ["Ai","Akeake","Akumatua","Arepo","Hangahai","Hawina","Henua","Hinakiri","Hiriwai","Ihanga","Inekoa","Iria","Kahutakua","Kaiwiri","Maihe","Makei","Mokara","Mawaki","Mokotara","Moui","Mutaroa","Naihi","Neina","Ngamimi","Ngaruaka","Noanga","Noki","Notia","Oma","Orotai","Paikura","Pakeka","Piho","Pukai","Raiatea","Rangioua","Rataka","Rawiti","Taikaroa","Tamanga","Tangiha","Tariwa","Taumuka","Titohara","Toka","Turawa","Uariki","Waiano","Wakaia","Wia"];
gen_data["NameGivenMasculineMaori"] = ["Akehakeha","Ango","Ariri","Eau","Ekoro","Enuku","Eteka","Hakara","Hauata","Hoepa","Ihmua","Itu","Kaatu","Kamou","Kauwi","Kumeti","Mahukoko","Manakore","Mapo","Matapiko","Mohunga","Mokia","Namuna","Ngapei","Nohokau","Paau","Paiwa","Parakiwai","Patui","Pawakaho","Poewa","Poutahi","Rangitauwira","Rari","Riakina","Ruataniwa","Tahaihai","Takohi","Tamaikuku","Tauronga","Tikai","Tinihanga","Tirowaru","Tokia","Topeni","Tuiata","Uamutu","Waihua","Wakae","Wio"];

// Names - Human - Mesoamerican
gen_data["NameFamilyMesoamerican"] = ["Acatepec","Acxotlan","Ahuatl","Amaxal","Apaxco","Azcatl","Chapul","Coatl","Cocolotl","Colexcua","Colomoxca","Coyopotl","Cuahquentzi","Cuahtzon","Cuahuey","Cuahuizo","Cuahutenco","Cuahutle","Cuapa","Cuatlehua","Cuatli","Cuaxiloa","Ehecatl","Huepa","Huaxacac","Huexotl","Hueytletl","Huitzil","Huitztlacatl","Itzcoatl","Itzcua","Itzmoyotl","Ixehuatl","Ixtaccihuatl","Maxil","Memehua","Mitznahuatl","Mixca","Moyotl","Naxi","Nocelotl","Ocomatl","Ocotoxtle","Pancoatl","Papaqui","Patee","Petlacalco","Quecholac","Quia","Quitl","Tecaxco","Tecpanecatl","Tecuampil","Tecuanhuehue","Tecuatl","Tentle","Teocuitlatlan","Teotl","Tepetl","Tepeyahuitl","Tepontla","Tetzopa","Teutle","Tlachi","Tlacoxolal","Tlahuex","Tlahuizo","Tlalolin","Tlaltelpa","Tlapa","Tlapalama","Tlapaltotoli","Tlapanco","Tlatehui","Tlatoa","Tocal","Tochihuitl","Tochimani","Tolama","Tonacatl","Totozintle","Toxqui","Toxtle","Xaltenco","Xicale","Xicotenco","Xique","Xoampil","Xochitecatl","Xochitiotzi","Xolalpa","Xoletl","Xolotlan","Yopico","Zacatzontetl","Zempoaltecatl","Zepahua","Zipacna","Zitlal","Zontlimatzi"];
gen_data["NameGivenFeminineMesoamerican"] = ["Ahuiliztli","Atl","Centehua","Chalchiuitl","Chipahua","Cihuaton","Citlali","Citlalmina","Coszcatl","Cozamalotl","Cuicatl","Eleuia","Eloxochitl","Eztli","Ichtaca","Icnoyotl","Ihuicatl","Ilhuitl","Itotia","Iuitl","Ixcatzin","Izel","Malinalxochitl","Mecatl","Meztli","Miyaoaxochitl","Mizquixaual","Moyolehuani","Nahuatl","Necahual","Nenetl","Nochtli","Noxochicoztli","Ohtli","Papan","Patli","Quetzalxochitl","Sacnite","Teicui","Tepin","Teuicui","Teyacapan","Tlaco","Tlacoehua","Tlacotl","Tlalli","Tlanextli","Xihuitl","Xiuhcoatl","Xiuhtonal"];
gen_data["NameGivenMasculineMesoamerican"] = ["Achcauhtli","Amoxtli","Chicahua","Chimalli","Cipactli","Coaxoch","Coyotl","Cualli","Cuauhtémoc","Cuetlachtilo","Cuetzpalli","Cuixtli","Ehecatl","Etalpalli","Huemac","Huitzilihuitl","Iccauhtli","Ilhicamina","Itztli","Ixtli","Mahuizoh","Manauia","Matlal","Matlalihuitl","Mazatl","Mictlantecuhtli","Milintica","Momoztli","Namacuix","Necalli","Necuametl","Nezahualcoyotl","Nexahualpilli","Nochehuatl","Nopaltzin","Ollin","Quauhtli","Tenoch","Teoxihuitl","Tepiltzin","Tezcacoatl","Tlacaelel","Tlacelel","Tlaloc","Tlanextic","Tlazohtlaloni","Tlazopillo","Uetzcayotl","Xipilli","Yaotl"];

// Names - Human - Niger Congo
gen_data["NameFamilyNiger-Congo"] = ["Achebe","Ademola","Adeoye","Adesida","Adesina","Adeyemi","Aguda","Akenzua","Akerele","Akiloye","Akinjide","Akintola","Akinyemi","Akpabio","Akunyili","Alakija","Alamieyeseigha","Amaechi","Anenih","Anikulapo-Kuti","Asari-Dokubo","Attah","Awolowo","Ayim","Azikiwe","Babangida","Balewa","Balogun","Bamgboshe","Bankole","Bello","Biobaku","Boro","Buhari","Chukwumereije","Danjuma","Dimka","Diya","Effiong","Egwu","Ekwensi","Eze","Ezekwesili","Fagbure","Falana","Gbadamosi","Gowon","Ibori","Igbinedion","Igwe","Ironsi","Iweala","Iwu","Jaja","Jakande","Jang","Jomo-Gbomo","Kalejaiye","Kalu","Madaki","Magoro","Mbadinuju","Mbanefo","Ngige","Nnamani","Nzeogwu","Obasanjo","Obi","Odili","Ohakim","Ojukwu","Okadigbo","Okafor","Okar","Okeke","Okereke","Okilo","Okiro","Okonjo","Okonkwo","Okorie","Okotie-Eboh","Okoye","Okpara","Olanrewaju","Omehia","Onobanjo","Onwuatuegwu","Onwudiwe","Onyejekwe","Orji","Oyenusi","Oyinlola","Saro-Wiwa","Sekibo","Solarin","Soyinka","Tinibu","Uba","Yar-Adua"];
gen_data["NameGivenFeminineNiger-Congo"] = ["Abebi","Abena","Abimbola","Akoko","Akachi","Alaba","Anuli","Ayo","Bolanle","Bosede","Chiamaka","Chidi","Chidimma","Chinyere","Chioma","Dada","Ebele","Efemena","Ejiro","Ekundayo","Enitan","Funanya","Ifunanya","Ige","Ime","Kunto","Lesedi","Lumusi","Mojisola","Monifa","Nakato","Ndidi","Ngozi","Nkiruka","Nneka","Ogechi","Olamide","Oluchi","Omolara","Onyeka","Simisola","Temitope","Thema","Titlayo","Udo","Uduak","Ufuoma","Yaa","Yejide","Yewande"];
gen_data["NameGivenMasculineNiger-Congo"] = ["Abebe","Abel","Abidemi","Abrafo","Adisa","Amadi","Amara","Anyim","Azubuike","Bapoto","Baraka","Bohlale","Bongani","Bujune","Buziba","Chakide","Chibuzo","Chika","Chimola","Chiratidzo","Dabulamanzi","Dumisa","Dwanh","Emeka","Folami","Gatura","Gebhuza","Gero","Isoba","Kagiso","Kamau","Katlego","Masego","Matata","Nthanda","Ogechi","Olwenyo","Osumare","Paki","Qinisela","Quanda","Samanya","Shanika","Sibonakaliso","Tapiwa","Thabo","Themba","Uzoma","Zuberi","Zuri"];

// Names - Human - Norse
gen_data["NameFamilyNorse"] = ["“Inn Ánauðgi” (The Oppressed One)","“Inn Auða” (The Rich One)","“Berfœttr” (Barefoot)","“Bisi” (Commander)","“Bláfauskr” (Swarthy Old Man)","“Inn Blindi” (The Blind One)","“Blonduhorn” (Mixing-Horn)","“Brattr” (Steep)","“Bultaðr” (Lumpy)","“Bægifótr” (Limp-Leg)","“Dálkr” (Dagger)","“Doði” (Dead)","“Drápastúfr” (Bad Poet)","“Drumbr” (Thick, Fat, Podgy)","“Erra” (Pugnacity)","“Feilan” (Wolf-Cub)","“Fjarska” (Distant)","“Forni” (Ancient)","“Fullspakr” (Fully Wise)","“Galinn” (Enchanted, Mad)","“Gapi” (Shouter)","“Gedda” (Pike)","“Inn Glaði” (The Glad One)","“Gnúpa” (Stoop)","“Gramr” (Wrath, Warrior)","“Gufa” (Smoke)","“Gæitingr” (Wasp)","“Hafrsþjó” (Buck’s Thigh)","“Halftroll” (Half-Troll)","“Harðfari” (Fast-Traveller)","“Haustmyrkr” (Autumn Dusk)","“Helluflagi” (Thin Slate)","“Hestreðr” (Horse Phallus)","“Hnappraz” (Button-Arse)","“Holmðr” (Cleft-Palate)","“Hraði” (Quick)","“Hrútr” (Ram)","“Inn Hvassi” (The Sharp One)","“Hyrna” (Ax-Blade Horn)","“Kaða” (Hen)","“Kampr” (Whiskers)","“Karlhofði” (Carved Figurehead)","“Karlsefni” (Man’s Equal)","“Kastandrazi” (Throwing Arse)","“Keilismúli” (Cone-Peak)","“Kjolfari” (Keel-Traveller)","“Kleggi” (Horse-Fly)","“Kleykir” (In Trouble, Disgraced)","“Knapr” (Valet)","“Kolbrún” (Coal-Brow)","“Kópr” (Seal)","“Kortr” (Short Penis)","“Kráku” (Crow)","“Krumr” (Bent)","“Kuggi” (Cog)","“Inn Kyrri” (The Quiet One)","“Lamo” (Lame)","“Lippi” (Lip)","“Lófi” (Palm)","“Maurr” (Ant)","“Múli” (Mouth)","“Nasi” (Nostril)","“Ondurr” (Snow-Shoe)","“Orn” (Eagle)","“Inn Prúði” (The Proud One)","“Sela” (Seal)","“Sjóni” (Seer)","“Skák” (Robber)","“Skáld” (Poet)","“Skarfr” (Cormorant)","“Skammhals” (Short-Neck)","“Skarpi” (Skinny)","“Inn Skjálgi” (Squinting One)","“Skrauti” (Splendid)","“Skokull” (Cart-Pole)","“Sløngvand” (Ring-Slinger)","“Snarfari” (Swift-Traveller)","“Snæþrima” (Snow-Clash)","“Spár” (Prophetic)","“Starr” (Stiff)","“Stormr” (Storm)","“Inn Strangi” (Strong One)","“Styggr” (Shy, Unfriendly)","“Sundafyllir” (Soundfiller)","“Svartr” (Black)","“Svína” (Pig)","“Sælingr” (Fortunate)","“Tálkni” (Gasp)","“Tiorvi” (Charmer)","“Trausti” (Trustworthy)","“Tvennumbrúni” (Double-Brows)","“Vaggagði” (Squat-Wiggle)","“Var” (Watchful)","“Vífill” (Weevil)","“Vræiðr” (Wrathful)","“Þiokkr” (Thick)","“Þrasi” (Big Talker)","“Þunnskeggr” (Thin-Beard)","“Þyna” (Belly)","“Æikinæfr” (Oak-Nose)"];
gen_data["NameGivenFeminineNorse"] = ["Alfhild","Arnbjorg","Ase","Aslog","Astrid","Auda","Audhid","Bergljot","Birghild","Bodil","Brenna","Brynhild","Dagmar","Eerika","Eira","Gudrun","Gunborg","Gunhild","Gunvor","Helga","Hertha","Hilde","Hillevi","Ingrid","Iona","Jorunn","Kari","Kenna","Magnhild","Nanna","Olga","Ragna","Ragnhild","Ranveig","Runa","Saga","Sigfrid","Signe","Sigrid","Sigrunn","Solveg","Svanhild","Thora","Torborg","Torunn","Tove","Unn","Vigdis","Ylva","Yngvild"];
gen_data["NameGivenMasculineNorse"] = ["Agni","Alaric","Anvindr","Arvid","Asger","Asmund","Bjarte","Bjorg","Bjorn","Brandr","Brandt","Brynjar","Calder","Colborn","Cuyler","Egil","Einar","Eric","Erland","Fiske","Folkvar","Fritjof","Frode","Geir","Halvar","Hemming","Hjalmar","Hjortr","Ingimarr","Ivar","Knud","Leif","Liufr","Manning","Oddr","Olin","Ormr","Ove","Rannulfr","Sigurd","Skari","Snorri","Sten","Stigandr","Stigr","Sven","Trygve","Ulf","Vali","Vidar"];

// Names - Human - Polynesian
gen_data["NameGivenFemininePolynesian"] = ["Ahulani","Airini","Alani","Aluala","Anahera","Anuhea","Aolani","Elenoa","Emele","Fetia","Fiva","Halona","Hi'ilei","Hina","Hinatea","Huali","Inia","Inina","Iolani","Isa","Ka'ana'ana","Ka'ena","Kaamia","Kahula","Kailani","Kamaile","Kamakani","Kamea","Latai","Liona","Lokelani","Marva","Mehana","Millawa","Moana","Ngana","Nohea","Pelika","Sanoe","Satina","Tahia","Tasi","Tiaho","Tihani","Toroa","Ulanni","Uluwehi","Vaina","Waiola","Waitara"];
gen_data["NameGivenMasculinePolynesian"] = ["Afa","Ahohako","Aisake","Aleki","Anewa","Anitelu","Aputi","Ariki","Butat","Enele","Fef","Fuifui","Ha'aheo","Hanohano","Haunui","Hekili","Hiapo","Hikawera","Hanano","Ho'onani","Hoku","Hû'eu","Ina","Itu","Ka'aukai","Ka'eo","Kaelani","Kahale","Kaiea","Kaikoa","Kana'I","Koamalu","Ka","Laki","Makai","Manu","Manuka","Nui","Pono","Popoki","Ruru","Tahu","Taurau","Tuala","Turoa","Tusitala","Uaine","Waata","Waipuna","Zamar"];

// Names - Human - Roman
gen_data["NameFamilyRoman"] = ["Acisculus","Aeserninus","Albinus","Arquitius","Asellio","Asiagenus","Asina","Atticus","Augustus","Balbus","Barbula","Buca","Bursio","Caecus","Callaicus","Calvus","Capitolinus","Cato","Caudex","Cento","Cincinnatus","Clodianus","Corvinus","Cossus","Crassus","Cruscellio","Damasippus","Dolabella","Dorsuo","Eburnus","Falco","Felix","Flaccus","Gallaecus","Getha","Glaucia","Globulus","Gracchanus","Gurges","Helenus","Hispaniensis","Hortator","Imperiosus","Isauricus","Iulus","Iunianus","Julus","Junianus","Lactuca","Laeca","Lentinus","Lepidus","Livianus","Lupus","Macedonicus","Maluginensis","Mamercus","Marcellus","Mento","Merula","Mocilla","Nasica","Nerva","Norbanus","Ocella","Orca","Paciacus","Papus","Paulus","Pera","Pitio","Ponticus","Porcina","Praeconinus","Pulex","Regillensis","Rufinus","Rullianus","Russus","Sabinus","Salinator","Salutio","Scaeva","Scaurus","Sergianus","Sibylla","Sisenna","Soranus","Stolo","Structus","Tappo","Torquatus","Tucca","Unimanus","Uticensis","Vatia","Verrucosus","Vibulanus","Volso","Vopiscus"];
gen_data["NameGivenFeminineRoman"] = ["Aelia","Aemilia","Agrippina","Alba","Antonia","Aquila","Augusta","Aurelia","Balbina","Blandina","Caelia","Camilla","Casia","Claudia","Cloelia","Domitia","Drusa","Fabia","Fabricia","Fausta","Flavia","Floriana","Fulvia","Germana","Glaucia","Gratiana","Hadriana","Hermina","Horatia","Hortensia","Iovita","Iulia","Laelia","Laurentia","Livia","Longina","Lucilla","Lucretia","Marcella","Marcia","Maxima","Nona","Octavia","Paulina","Petronia","Porcia","Tacita","Tullia","Verginia","Vita"];
gen_data["NameGivenMasculineRoman"] = ["Aelius","Aetius","Agrippa","Albanus","Albus","Antonius","Appius","Aquilinus","Atilus","Augustus","Aurelius","Avitus","Balbus","Blandus","Blasius","Brutus","Caelius","Caius","Casian","Cassius","Cato","Celsus","Claudius","Cloelius","Cnaeus","Crispus","Cyprianus","Diocletianus","Egnatius","Ennius","Fabricius","Faustus","Gaius","Germanus","Gnaeus","Horatius","Iovianus","Iulius","Lucilius","Manius","Marcus","Marius","Maximus","Octavius","Paulus","Quintilian","Regulus","Servius","Tacitus","Varius"];

// Names - Human - Slavic
gen_data["NameFamilySlavic"] = ["Antokolsky","Arsenyev","Bakal","Balmont","Baran","Bartošeneš","Bogoraz","Borodin","Božovic","Brod","Bulgakov","Burian","Calic","Cherkassky","Chladek","Cižek","Dokiychuk","Dubinsky","Dvorkin","Fedoruk","Gajic","Golovkin","Grabow","Hanak","Hnilo","Hospod","Hubik","Jablonski","Janiszewski","Janowitz","Jelinek","Kanevsky","Karolewski","Kolev","Korda","Kowacewicz","Krakowski","Kratochvíl","Krylov","Kudelin","Lahush","Levitsky","Lovric","Margolin","Markovic","Masur","Meyer","Milenkovic","Milutinovic","Molotov","Mucibaba","Okilj","Pantelic","Perlic","Pivovarský","Polyak","Popovic","Prokesch","Rabinovich","Ristovic","Sadowsky","Semenov","Shklovsky","Shuksin","Simonov","Slavik","Slovak","Smirnov","Sokolovsky","Sosniok","Tichý","Tiutchev","Tkachov","Tomášek","Topol","Trajkovski","Tvardovsky","Uvarov","Vajda","Vasiliev","Vinograd","Vishinsky","Vlaev","Vodenicarovic","Volansky","Volný","Voronin","Voroshilov","Wessely","Wilkowske","Witkiewicz","Zacharov","Zeman","Zhirinovsky","Zhtomir","Zinoviev","Zubkowski","Zworszak","Šagolj","Šendula"];
gen_data["NameGivenFeminineSlavic"] = ["Agripina","Anastasiya","Bogdana","Boleslava","Bozhena","Danica","Darya","Desislava","Dragoslava","Dunja","Efrosinia","Ekaterina","Elena","Faina","Galina","Irina","Iskra","Jasna","Katarina","Katya","Kresimira","Lyudmila","Magda","Mariya","Militsa","Miloslava","Mira","Miroslava","Mokosh","Morana","Natasha","Nika","Olga","Rada","Radoslava","Raisa","Slavitsa","Sofiya","Stanislava","Svetlana","Tatyana","Tomislava","Veronika","Vesna","Vladimira","Yaroslava","Yelena","Zaria","Zarya","Zoria"];
gen_data["NameGivenMasculineSlavic"] = ["Aleksandru","Berislav","Blazh","Bogumir","Boguslav","Borislav","Bozhidar","Bratomil","Bratoslav","Bronislav","Chedomir","Chestibor","Chestirad","Chestislav","Desilav","Dmitrei","Dobromil","Dobroslav","Dragomir","Dragutin","Drazhan","Gostislav","Kazimir","Kyrilu","Lyubomir","Mechislav","Milivoj","Milosh","Mstislav","Nikola","Ninoslav","Premislav","Radomir","Radovan","Ratimir","Rostislav","Slavomir","Stanislav","Svetoslav","Tomislav","Vasili","Velimir","Vladimir","Vladislav","Vlastimir","Volodimeru","Vratislav","Yarognev","Yaromir","Zbignev"];
 
// Names - Human - Spanish
gen_data["NameFamilySpanish"] = ["Aguilar","Alonso","Álvarez","Andrés","Arias","Blanco","Bravo","Caballero","Cabrera","Calvo","Campos","Cano","Carmona","Carrasco","Castillo","Castro","Cortés","Crespo","Cruz","Delgado","Díaz","Díez","Domínguez","Durán","Fernández","Ferrer","Flores","Fuentes","García","Garrido","Gil","Giménez","Gómez","González","Guerrero","Gutiérrez","Hernández","Herrera","Herrero","Hidalgo","Ibáñez","Iglesias","Izquierdo","Jiménez","León","López","Lorenzo","Lozano","Marcos","Marín","Márquez","Martín","Martínez","Medina","Méndez","Menéndez","Merino","Molina","Montero","Mora","Morales","Moreno","Moya","Muñoz","Navarro","Nieto","Núñez","Ortega","Ortiz","Pardo","Pascual","Pastor","Peña","Pérez","Prieto","Ramírez","Ramos","Redondo","Rey","Reyes","Rodríguez","Román","Romero","Rubio","Ruiz","Sáez","Sánchez","Santos","Sanz","Serrano","Soler","Soto","Suárez","Torres","Vázquez","Vega","Velasco","Vicente","Vidal","Vila"];
gen_data["NameGivenFeminineSpanish"] = ["Abella","Adalina","Adora","Adriana","Ana","Antonia","Basilia","Beatriz","Bonita","Camila","Cande","Carmen","Catlina","Dolores","Dominga","Dorotea","Elena","Elicia","Esmerelda","Felipina","Francisca","Gabriela","Imelda","Ines","Isabel","Juana","Leocadia","Leonor","Leta","Lucinda","Maresol","Maria","Maricela","Matilde","Melania","Monica","Neva","Nilda","Petrona","Rafaela","Ramira","Rosario","Sofia","Suelo","Teresa","Tomasa","Valentia","Veronica","Ynes","Ysabel"];
gen_data["NameGivenMasculineSpanish"] = ["Alexandre","Alfonso","Alonso","Anthon","Arcos","Arnaut","Arturo","Bartoleme","Benito","Bernat","Blasco","Carlos","Damian","Diego","Domingo","Enrique","Escobar","Ettor","Fernando","Franciso","Gabriel","Garcia","Gaspar","Gil","Gomes","Goncalo","Gostantin","Jayme","Joan","Jorge","Jose","Juan","Machin","Martin","Mateu","Miguel","Nicolas","Pascual","Pedro","Porico","Ramiro","Ramon","Rodrigo","Sabastian","Salvador","Simon","Tomas","Tristan","Valeriano","Ynigo"];

// Names - Orc
gen_data["NameGivenFeminineOrc"] = ["Arha","Baggi","Bendoo","Bilga","Brakka","Creega","Drenna","Ekk","Emen","Engong","Fistula","Gaaki","Gorga","Grai","Greeba","Grigi","Gynk","Hrathy","Huru","Ilga","Kabbarg","Kansif","Lagazi","Lezre","Murgen","Murook","Myev","Nagrette","Neega","Nella","Nogu","Oolah","Ootah","Ovak","Ownka","Puyet","Reeza","Shautha","Silgre","Sutha","Tagga","Tawar","Tomph","Ubada","Vanchu","Vola","Volen","Vorka","Yevelda","Zagga"];
gen_data["NameGivenMasculineOrc"] = ["Argran","Braak","Brug","Cagak","Dench","Dorn","Dren","Druuk","Feng","Gell","Gnarsh","Grumbar","Gubrash","Hagren","Henk","Hogar","Holg","Imsh","Karash","Karg","Keth","Korag","Krusk","Lubash","Megged","Mhurren","Mord","Morg","Nil","Nybarg","Odorr","Ohr","Rendar","Resh","Ront","Rrath","Sark","Scrag","Sheggen","Shump","Tanglar","Tarak","Thar","Thokk","Trag","Ugarth","Varg","Vilberg","Yurk","Zed"];

// Names - Tiefling
gen_data["NameGivenFeminineTiefling"] = ["Akta","Anakis","Armara","Astaro","Aym","Azza","Beleth","Bryseis","Bune","Criella","Damaia","Decarabia","Ea","Gadreel","Gomory","Hecat","Ishte","Jezebeth","Kali","Kallista","Kasdeya","Lerissa","Lilith","Makaria","Manea","Markosian","Mastema","Naamah","Nemeia","Nija","Orianna","Osah","Phelaia","Prosperine","Purah","Pyra","Rieta","Ronobe","Ronwe","Seddit","Seere","Sekhmet","Semyaza","Shava","Shax","Sorath","Uzza","Vapula","Vepar","Verin"];
gen_data["NameGivenMasculineTiefling"] = ["Abad","Ahrim","Akmen","Amnon","Andram","Astar","Balam","Barakas","Bathin","Caim","Chem","Cimer","Cressel","Damakos","Ekemon","Euron","Fenriz","Forcas","Habor","Iados","Kairon","Leucis","Mamnen","Mantus","Marbas","Melech","Merihim","Modean","Mordai","Mormo","Morthos","Nicor","Nirgel","Oriax","Paymon","Pelaios","Purson","Qemuel","Raam","Rimmon","Sammal","Skamos","Tethren","Thamuz","Therai","Valafar","Vassago","Xappan","Zepar","Zephan"];
gen_data["NameVirtueTiefling"] = ["Ambition","Art","Carrion","Chant","Creed","Death","Debauchery","Despair","Doom","Doubt","Dread","Ecstasy","Ennui","Entropy","Excellence","Fear","Glory","Gluttony","Grief","Hate","Hope","Horror","Ideal","Ignominy","Laughter","Love","Lust","Mayhem","Mockery","Murder","Muse","Music","Mystery","Nowhere","Open","Pain","Passion","Poetry","Quest","Random","Reverence","Revulsion","Sorrow","Temerity","Torment","Tragedy","Vice","Virtue","Weary","Wit"];

// --------------------------------------------------------------------------------
// NPCClass
// --------------------------------------------------------------------------------

// NPCClassLevels
gen_data["NPCClassLevel"] = {"1-60":"Low","61-90":"Medium","91-100":"High"};
gen_data["NPCClassLevelLow"] = ["Acolyte","Bandit","Commoner","Cultist","Guard","Noble","Scout","Thug"];
gen_data["NPCClassLevelMedium"] = ["Bandit Captain","Berserker","Cult Fanatic","Druid","Knight","Priest","Spy","Tribal Warrior","Veteran"];
gen_data["NPCClassLevelHigh"] = ["Archmage","Assassin","Gladiator","Mage"];

// --------------------------------------------------------------------------------
// Occupations -- Broken up by Trade and OccupationGroup
// --------------------------------------------------------------------------------

// Trade - Adventure
gen_data["OccupationAdventureArcane"] = ["Arcanist","Mage"];
gen_data["OccupationAdventureClergy"] = ["Cleric","Healer"];
gen_data["OccupationAdventureMartialMelee"] = ["Fighter"];
gen_data["OccupationAdventureMartialRanged"] = ["Archer","Ranger","Scout"];
gen_data["OccupationAdventureNature"] = ["Druid"];
gen_data["OccupationAdventureNoble"] = ["Cavalier","Fighter","Knight"];
gen_data["OccupationAdventureStealthy"] = ["Rogue","Scout"];

// Trade - Agriculture
gen_data["OccupationAgricultureClergy"] = ["Healer","Farmer"];
gen_data["OccupationAgricultureCommoner"] = ["Farmer"];
gen_data["OccupationAgricultureMartialMelee"] = ["Farmer"];
gen_data["OccupationAgricultureMartialRanged"] = ["Farmer"];

// Trade - Art
gen_data["OccupationArtCommoner"] = ["Acrobat","Actor","Artist","Dancer","Painter","Playwright","Poet","Singer","Sculptor","Writer"];
gen_data["OccupationArtMartialMelee"] = ["Gladiator"];

// Trade - Crime
gen_data["OccupationCrimeCommoner"] = ["Bookmaker","Con-Artist","Fence","Loan Shark","Messenger"];
gen_data["OccupationCrimeMartialMelee"] = ["Bandit","Enforcer","Fence","Loan Shark","Robber","Smuggler","tough"];
gen_data["OccupationCrimeNoble"] = ["Charlatan","Boss","Lieutenant"];
gen_data["OccupationCrimeStealthy"] = ["Assassin","Burglar","Pickpocket","Smuggler","thief"];

// Trade - Education
gen_data["OccupationEducationArcane"] = ["Abjurist","Alchemist","Arcanist","Archaelogist","Conjurer","Diviner","Headmaster","Illusionist","Planar-Theorist","Professor of Abjuration","Professor of Arcane-Archaelogy",,"Professor of Arcane Magic","Professor of Conjuration","Professor of Divination","Professor of Illusion","Professor of Planar Travel","Professor of Transmutation","Scholar","Transmuter"];
gen_data["OccupationEducationClergy"] = ["Professor of Divine Magic"];
gen_data["OccupationEducationCommoner"] = ["Administrator","Clerk","Gardener","Groundskeeper","Janitor","Librarian","Linguist","Historian","Mathematician","Philosopher","Teacher"];
gen_data["OccupationEducationMartialMelee"] = ["Guard"];
gen_data["OccupationEducationMartialRanged"] = ["Gamekeeper"];
gen_data["OccupationEducationNature"] = ["Professor of Natural Magic"];
gen_data["OccupationEducationNoble"] = ["Chancellor","Dean","Headmaster"];

// Trade - Government
gen_data["OccupationGovernmentCommoner"] = ["Administrator","Bookkeeper","Clerk","Surveyor","Tax Collector"];
gen_data["OccupationGovernmentNoble"] = ["Bureaucrat","Councilor","Judge","Magistrate"];

// Trade - Hospitality
gen_data["OccupationHospitalityCommoner"] = ["Baker","Barkeep","Cook","Innkeeper","Porter","Servant","Stablehand","Waiter"];
gen_data["OccupationHospitalityMartialMelee"] = ["Bouncer"];
gen_data["OccupationHospitalityNoble"] = ["Innkeeper"];

// Trade - Industry
gen_data["OccupationIndustryCommoner"] = ["Foreperson","Laborer","Worker"];
gen_data["OccupationIndustryMartialMelee"] = ["Guard","Laborer","Worker"];
gen_data["OccupationIndustryNoble"] = ["Boss","Manager"];

// Trade - Merchant
gen_data["OccupationMerchantArcane"] = ["Alchemist","Arcanist","Enchanter","Seller of Magical Reagents and Supplies","Scribe","Wandmaker"];
gen_data["OccupationMerchantClergy"] = ["Bookseller","Healer"];
gen_data["OccupationMerchantCommoner"] = ["Apothecary","Armorer","Baker","Barber","Blacksmith","Bookseller","Bowyer","Butcher","Carpenter","Cartwright","Clothier","Cobbler","Cooper","Engraver","Fishmonger","Fletcher","Furrier","Glassblower","Grocer","Haberdasher","Hatmaker","Herbalist","Jeweler","Leathersmith","Locksmith","Mercer","Metalsmith","Potter","Shipwright","Stonemason","Tailor","Tinker","Weaponsmith","Weaver","Woodcarver"];
gen_data["OccupationMerchantMartialRanged"] = ["Bowyer","Fletcher","Furrier","Leathersmith"];
gen_data["OccupationMerchantNature"] = ["Apothecary","Herbalist"];
gen_data["OccupationMerchantNoble"] = ["Banker","Barrister","Money Lender",];
gen_data["OccupationMerchantStealthy"] = ["Private Investigator"];

// Trade - Military
gen_data["OccupationMilitaryArcane"] = ["Arcanist","Battlemage","Commander","Evoker","Officer","Mage"];
gen_data["OccupationMilitaryClergy"] = ["Cleric","Healer"];
gen_data["OccupationMilitaryCommoner"] = ["Cook","Courier","Herald","Porter","Supply Clerk"];
gen_data["OccupationMilitaryMartialMelee"] = ["Sergeant","Sergeant-at-Arms","Soldier"];
gen_data["OccupationMilitaryMartialRanged"] = ["Archer","Scout"];
gen_data["OccupationMilitaryNoble"] = ["Cavalier","Captain","Commander","Knight","Officer"];
gen_data["OccupationMilitaryStealthy"] = ["Assassin","Spy"];

// Trade - Nature
gen_data["OccupationNatureCommoner"] = ["Fisher","Forager","Forester","Surveyor","Trapper"];
gen_data["OccupationNatureMartialMelee"] = ["Forester","Hunter","Poacher","Warrior"];
gen_data["OccupationNatureMartialRanged"] = ["Hunter","Guide","Poacher","Ranger","Tracker","Trapper","Warden"];
gen_data["OccupationNatureNature"] = ["Druid","Herbalist","Healer","Shaman"];

// Trade - Nautical
gen_data["OccupationNauticalClergy"] = ["Healer"];
gen_data["OccupationNauticalCommoner"] = ["Carpenter","Cook","Deckhand","Sailor"];
gen_data["OccupationNauticalMartialMelee"] = ["Bosun","Quartermaster"];
gen_data["OccupationNauticalMartialRanged"] = ["Archer"];
gen_data["OccupationNauticalNoble"] = ["Captain","First Mate"];

// Trade - Nobility
gen_data["OccupationNobilityArcane"] = ["Archmage"];
gen_data["OccupationNobilityClergy"] = ["Bishop"];
gen_data["OccupationNobilityNoble"] = ["Noble"];

// Trade - Police
gen_data["OccupationPoliceCommoner"] = ["Administrator","Bookkeeper","Clerk","Quartermaster"];
gen_data["OccupationPoliceMartialMelee"] = ["Guard","Sentry"];
gen_data["OccupationPoliceMartialRanged"] = ["Archer"];
gen_data["OccupationPoliceNoble"] = ["Captain","Commander","Inspector","Investigator", "Watchmaster"];
gen_data["OccupationPoliceStealthy"] = ["Inspector","Investigator"];

// Trade - Religion
gen_data["OccupationReligionClergy"] = ["Acolyte","Cleric","Priest"];
gen_data["OccupationReligionCommoner"] = ["Attendant","Elder","Novice","Usher"];

// Trade - Service
gen_data["OccupationServiceArcane"] = ["Adviser","Chamberlain","Vizier"];
gen_data["OccupationServiceClergy"] = ["Chaplain"];
gen_data["OccupationServiceCommoner"] = ["Cook","Gardener","Groundskeeper","Servant","Stablehand","Usher"];
gen_data["OccupationServiceMartialMelee"] = ["Bodyguard","Guard","Housecarl","Reeve"];
gen_data["OccupationServiceMartialRanged"] = ["Gameskeeper","Hunter","Reeve","Warden"];
gen_data["OccupationServiceNature"] = ["Gardener","Groundskeeper"];
gen_data["OccupationServiceNoble"] = ["Chamberlain","Majordomo","Marshall","Steward","Thane"];
gen_data["OccupationServiceStealthy"] = ["Agent"];

// --------------------------------------------------------------------------------
// OccupationGroup 
// --------------------------------------------------------------------------------
gen_data["OccupationGroup"] = ["Arcane","Clergy","Commoner","MartialMelee","MartialRanged","Nature","Nautical","Noble","Stealthy"];

gen_data["OccupationGroupAcolyte"] = ["Clergy"];
gen_data["OccupationGroupArchmage"] = ["Arcane"];
gen_data["OccupationGroupAssassin"] = ["Stealthy"];
gen_data["OccupationGroupBandit"] = ["MartialMelee"];
gen_data["OccupationGroupBandit-Captain"] = ["MartialMelee"];
gen_data["OccupationGroupBerserker"] = ["MartialMelee"];
gen_data["OccupationGroupCommoner"] = ["Commoner"];
gen_data["OccupationGroupCult-Fanatic"] = ["Clergy"];
gen_data["OccupationGroupCultist"] = ["Commoner"];
gen_data["OccupationGroupDruid"] = ["Nature"];
gen_data["OccupationGroupGladiator"] = ["MartialMelee"];
gen_data["OccupationGroupGuard"] = ["MartialMelee"];
gen_data["OccupationGroupKnight"] = ["Noble"];
gen_data["OccupationGroupMage"] = ["Arcane"];
gen_data["OccupationGroupNoble"] = ["Noble"];
gen_data["OccupationGroupPriest"] = ["Clergy"];
gen_data["OccupationGroupScout"] = ["MartialRanged"];
gen_data["OccupationGroupSpy"] = ["Stealthy"];
gen_data["OccupationGroupThug"] = ["MartialMelee"];
gen_data["OccupationGroupTribal-Warrior"] = ["MartialMelee"];
gen_data["OccupationGroupVeteran"] = ["MartialMelee"];

// --------------------------------------------------------------------------------
// Organization
// --------------------------------------------------------------------------------
gen_data["OrganizationProfitability"] = ["Profitable","Struggling","Successful","Failing"];


gen_data["LandmarkRural"] = ["Old {MaterialWood} Tree","Sawmill","Windmill"];
gen_data["LandmarkUrban"] = ["Courthouse","Clocktower","Gate","{Size} Inn","Library","Prison","Public Common"];

gen_data["LocationWildernessDistance"] = ["about a day's walk","about two days","about three days","about five days"];

gen_data["LocationRural"] = [
  "{LocationRuralDistance} {Direction} of the {LandmarkRural}",
  "across from the {LandmarkRural} on the {Direction} side of town",
  "{LocationRuralDistance} down the road from the {LandmarkRural} on the {Direction} side of town",
  "near the {LandmarkRural} on the {Direction} side of town",
  "next to the {LandmarkRural} on the {Direction} side of town"
];
gen_data["LocationRuralDistance"] = ["about a quarter mile","about a half a mile","about a mile","a couple miles"];
gen_data["LocationUrban"] = [
  "across the street from the {LandmarkUrban} on the {Direction} side of town",
  "{LocationUrbanDistance} down the street from the {LandmarkUrban} on the {Direction} side of town",
  "next to the {LandmarkUrban} on the {Direction} side of town"
];
gen_data["LocationUrbanDistance"] = ["a block","a couple blocks","about a hundred feet","a couple hundred feet"];
gen_data["LocationWilderness"] = [
  "in the {GeographyForest} {LocationWildernessDistance} {Direction} of town",
  "in the {GeographyGrassland} {LocationWildernessDistance} {Direction} of town",
  "in the {GeographyHill} {LocationWildernessDistance} {Direction} of town",
  "in the {GeographyMountain} {LocationWildernessDistance} {Direction} of town",
  "in the {GeographySwamp} {LocationWildernessDistance} {Direction} of town"
];
gen_data["LocationWildernessDistance"] = ["about a day's walk","about two days","about three days","about five days"];



// Adventure
gen_data["OrganizationAdventure"] = ["Adventurers","Mercenaries","Monster Hunters","Treasure-Seekers","Troublemakers"];
gen_data["OrganizationAdjectiveAdventure"] = ["Experienced","Famous","Inexperienced","Infamous","Well-known"];
gen_data["OrganizationGroupAdventure"] = ["Band","Group","Party"];
gen_data["OrganizationMissionAdventure"] = ["on their way to explore","recently returned from a lucrative expedition to","recovering from a deadly expedition to"];
gen_data["OrganizationStructureAdventure"] = ["Barrow","Cave","Cavern","Crypt","Dungeon","Ruin","Tomb"];
gen_data["OrganizationStructureAdjectiveAdventure"] = ["Abandoned","Ancient","Cursed","Forgotten","Haunted","Lost","Old","Recently Discovered"];
gen_data["OrganizationLocationAdventure"] = ["{LocationWilderness}"];

// Agriculture
gen_data["OrganizationAgriculture"] = ["Farm","Homestead","Orchard","Vineyard"];
gen_data["OrganizationLocationAgriculture"] = ["{LocationRural}"];

// Art
gen_data["OrganizationArt"] = ["Cottage","Loft","Studio"];
gen_data["OrganizationLocationArt"] = ["{LocationUrban}"];

// Crime
gen_data["OrganizationCrime"] = ["Crime Family", "Crime Syndicate", "Criminal Enterprise", "Gang", "Thieves Guild"];
gen_data["OrganizationAdjectiveCrime"] = ["Influential","Major","Minor","Powerful","Ruthless","Waning","Weak"];
gen_data["OrganizationLocationCrime"] = ["{LocationUrban}"];

// Education
gen_data["OrganizationEducation"] = ["Academy","College","School","University"];
gen_data["OrganizationAdjectiveEducation"] = ["Elite","Exclusive","Famous","Prestigious","Public","Underfunded"];
gen_data["OrganizationLocationEducation"] = ["{LocationUrban}"];

// Government
gen_data["OrganizationGovernment"] = ["Government of a Foreign Ally","Government of a Foreign Rival","Local Government","National Government, Regional Government"];
gen_data["OrganizationLocationGovernment"] = ["{LocationUrban}"];

// Hospitality
gen_data["OrganizationHospitality"] = ["Hostel","Hotel","Inn","Public House","Tavern"];
gen_data["OrganizationAdjectiveHospitality"] = ["Comfortable","Cozy","Seedy"];

// Industry
gen_data["OrganizationIndustry"] = ["Foundry","Ironworks","Lumber Mill","Mine","Quarry","Siegeworks","Steel Mill","Warehouse"];

// Military
gen_data["OrganizationMilitary"] = ["Army of a Foreign Ally","Army of a Foreign Rival","Local Militia","National Army"];
gen_data["OrganizationAdjectiveMilitary"] = ["Elite","Inexperienced","Seasoned","Under-strength","Veteran"];
gen_data["OrganizationGroupMilitary"] = ["Battalion","Brigade","Company","Detachment","Division","Legion","Patrol","Squad","Regiment"];

// Merchant
gen_data["OrganizationMerchant"] = ["Business","Shop"];
gen_data["OrganizationLocationMerchant"] = ["{LocationUrban}"];

// Nature

// Nautical

// Nobility
gen_data["OrganizationNobility"] = ["Estate","Keep","Manor House","Mansion","Villa"];

// Police
gen_data["OrganizationPolice"] = ["Municipal Guard","Local Watch","Volunteer Watch"];
gen_data["OrganizationAdjectivePolice"] = ["Corrupt","Elite","Inexperienced","Seasoned","Under-strength","Veteran"];
gen_data["OrganizationGroupPolice"] = ["Detachment","Patrol","Squad"];

// Professional
gen_data["OrganizationProfessional"] = ["Office"];

// Religion
gen_data["OrganizationReligion"] = ["Abbey","Cathedral","Monastery","Sanctuary","Temple"];

// Service
gen_data["OrganizationService"] = ["Noble Family", "Noble House"];
gen_data["OrganizationServiceAdjective"] = ["Influential","Major","Minor","Powerful","Ruthless","Waning","Weak"];

// --------------------------------------------------------------------------------
// Pantheon -- Provides lists of gods, demons, and devils that may be worshipped.
// --------------------------------------------------------------------------------

// PantheonList
gen_data["PantheonList"] = {"1-70":"Benevolent","71-80":"Malevolent","81-85":"Lesser","86-90":"Demon","91-95":"Devil"};

// Dawn War / Critical Role
gen_data["PantheonBenevolent"] = ["Avandra","Bahamut","Corellon","Erathis","Ioun","Kord","Melora","Moradin","Pelor","Raven Queen","Sehanine"];
gen_data["PantheonMalevolent"] = ["Asmodeus","Bane","Gruumsh","Lolth","Tharizdun","Tiamat","Torog","Vecna","Zehir"];
gen_data["PantheonLesser"] = ["Artagan","Ceratos","Desirat","Laduegar","Naviask","Quajath","the Hag Mother","the Luxon","Uk'otoa","Vesh","Xalicas"];

// Demons & Devils
gen_data["PantheonDemon"] = ["Graz'zt","Orcus"];
gen_data["PantheonDevil"] = ["Zariel"];

// --------------------------------------------------------------------------------
// Races
// --------------------------------------------------------------------------------
gen_data["Race"] = {
  "1":"Dragonborn",
  "2":"Dwarf",
  "3":"Elf",
  "4":"Gnome",
  "5":"Half-Elf",
  "6":"Half-Orc",
  "7":"Halfling",
  "8":"Human",
  "9":"Orc",
  "10":"Tiefling"
};

// Subraces and/or Cultures
gen_data["SubraceDragonborn"] = {"1":"Draconblood","2":"Ravenite"};
gen_data["SubraceDwarf"] = {"1":"Hill","2":"Mountain"};
gen_data["SubraceElf"] = {"1":"High","2":"Wood"};
gen_data["SubraceGnome"] = {"1":"Forest","2":"Rock"};
gen_data["SubraceHalf-Elf"] = {"1":"Human","2":"Elf"};
gen_data["SubraceHalf-Orc"] = {"1":"Human","2":"Orc"};
gen_data["SubraceHalfling"] = {"1":"Lightfoot","2":"Stout"};
gen_data["SubraceHuman"] = {"1":"Arabic","2":"Barovian","3":"Celtic","4":"Chinese","5":"Egyptian","6":"English","7":"French","8":"German","9":"Greek","10":"Indian","11":"Japanese","12":"Maori","13":"Mesoamerican","14":"Niger-Congo","15":"Norse","16":"Polynesian","17":"Roman","18":"Slavic","19":"Spanish"};
gen_data["SubraceOrc"] = {"1":"None"};
gen_data["SubRaceTiefling"] = {"1":"Feral","2-10":"Infernal"};

// --------------------------------------------------------------------------------
// Settlements
// --------------------------------------------------------------------------------
gen_data["SettlementTiny"] = ["Hamlet"];
gen_data["SettlementSmall"] = ["Village"];
gen_data["SettlementMedium"] = ["Town"];
gen_data["SettlementLarge"] = ["City"];

// --------------------------------------------------------------------------------
// Size
// --------------------------------------------------------------------------------
gen_data["Size"] = ["Small","Large"];
gen_data["SizeAll"] = ["Tiny','Small","Medium","Large","Huge","Gargantuan"];
gen_data["SizeCommon"] = ["Tiny','Small","Medium","Large"];

// --------------------------------------------------------------------------------
// Structures
// --------------------------------------------------------------------------------
gen_data["StructureAdventure"] = ["Barrow","Cave","Cavern","Crypt","Dungeon","Ruin","Tomb"];
gen_data["StructureCrime"] = ["Hideout","Tavern","Warehouse"];
gen_data["StructureGovernment"] = ["Courthouse","Prison"];
gen_data["StructureHospitality"] = ["Hostel","Hotel","Inn","Public House","Tavern"];
gen_data["StructureIndustry"] = ["Foundry","Ironworks","Lumber Mill","Mine","Quarry","Siegeworks","Steel Mill","Warehouse"];
gen_data["StructureMilitary"] = ["Camp","Castle","Fort","Fortress","Keep","Redoubt","Stronghold"];
gen_data["StructureMerchant"] = ["Shop","Store"];
gen_data["StructureNobility"] = ["Estate","Keep","Manor House","Mansion","Villa"];
gen_data["StructurePolice"] = ["Barracks","Gate","Wall"];
gen_data["StructureProfessional"] = ["Office"];
gen_data["StructureReligion"] = ["Abbey","Cathedral","Monastery","Sanctuary","Temple"];
gen_data["StructureReligionSmall"] = ["Altar","Shrine"];
gen_data["StructureResidenceRural"] = ["Cabin","Cottage","House"];
gen_data["StructureResidenceUrban"] = ["Home","House","Rowhouse","Townhome"];

// --------------------------------------------------------------------------------
// Trades
// --------------------------------------------------------------------------------
gen_data["Trade"] = ["Adventure","Agriculture","Art","Crime","Education","Hospitality","Industry","Merchant","Military","Nature","Nautical","Nobility","Professional","Religion","Service"];

// Trades by NPC Class
gen_data["TradeAcolyte"] = {"1":"Adventure","2":"Agriculture","3":"Hospitality","4":"Merchant","5":"Military","6":"Religion","7":"Service"};
gen_data["TradeArchmage"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military","5":"Nobility"};
gen_data["TradeAssassin"] = {"1":"Adventure","2":"Crime","3":"Merchant","4":"Military","5":"Service"};
gen_data["TradeBandit"] = {"1":"Agriculture","2":"Crime"};
gen_data["TradeBandit-Captain"] = {"1":"Adventure","2":"Crime"};
gen_data["TradeBerserker"] = {"1":"Adventure","2":"Agriculture","3":"Crime","4":"Industry","5":"Military","6":"Nature"};
gen_data["TradeCommoner"] = {"1":"Adventure","2":"Agriculture","3":"Art","5":"Crime","6":"Education","7":"Hospitality","8":"Industry","9":"Merchant","10":"Military","11":"Nature","12":"Religion","13":"Service"};
gen_data["TradeCult-Fanatic"] = {"1":"Adventure","2":"Merchant","3":"Military","4":"Religion","5":"Service"};
gen_data["TradeCultist"] = {"1":"Adventure","2":"Agriculture","3":"Art","5":"Crime","6":"Education","7":"Hospitality","8":"Industry","9":"Merchant","10":"Military","11":"Nature","12":"Religion","13":"Service"};
gen_data["TradeDruid"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Nature","5":"Service"};
gen_data["TradeGladiator"] = {"1":"Adventure","2":"Agriculture","3":"Art","4":"Crime","5":"Hospitality","6":"Military","7":"Service"};
gen_data["TradeGuard"] = {"1":"Agriculture","2":"Education","3":"Industry","4":"Military","5":"Service"};
gen_data["TradeKnight"] = {"1":"Adventure","2":"Military"};
gen_data["TradeMage"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military","5":"Service"};
gen_data["TradeNoble"] = {"1":"Adventure","2":"Crime","3":"Education","4":"Hospitality","5":"Industry","6":"Merchant","7":"Military","8":"Service"};
gen_data["TradePriest"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military","5":"Religion"};
gen_data["TradeScout"] = {"1":"Adventure","2":"Agriculture","3":"Education","4":"Merchant","5":"Military","6":"Nature","7":"Service"};
gen_data["TradeSpy"] = {"1":"Adventure","2":"Crime","3":"Merchant","4":"Military","5":"Service"};
gen_data["TradeThug"] = {"1":"Adventure","2":"Agriculture","3":"Crime","4":"Hospitality","5":"Industry","6":"Military","7":"Service"};
gen_data["TradeTribal-Warrior"] = {"1":"Agriculture","2":"Nature"};
gen_data["TradeVeteran"] = {"1":"Adventure","2":"Agriculture","3":"Crime","4":"Education","5":"Hospitality","6":"Industry","7":"Merchant","9":"Military","10":"Nature","11":"Service"};











// --------------------------------------------------------------------------------
// OccupationOrganization -- Generate an employment description based on industry & group.
// --------------------------------------------------------------------------------

// OccupationOrganization - Adventure
gen_data["OccupationOrganizationAdventure"] = ["{OccupationOrganizationAdventureSize} {OccupationOrganizationAdventureType} {OccupationOrganizationAdventureMission} {OccupationOrganizationAdventureDestinationAdjective} {OccupationOrganizationAdventureDestination} {OccupationOrganizationAdventureLocation}"];
gen_data["OccupationOrganizationAdventureSize"] = ["band of","group of","party of"];
gen_data["OccupationOrganizationAdventureType"] = ["adventurers","mercenaries","monster hunters","murder-hobos","Sell-swords","treasure-seekers"];
gen_data["OccupationOrganizationAdventureDestination"] = ["cave","cavern","crypt","dungeon","ruin","tomb",];
gen_data["OccupationOrganizationAdventureDestinationAdjective"] = ["an abandoned","a newly discovered","a haunted","a lost","a mysterious"];
gen_data["OccupationOrganizationAdventureMission"] = ["made camp","recently returned from","recovering from a recent exploration of"];
gen_data["OccupationOrganizationAdventureLocation"] = ["{LocationWilds}"];

// OccupationOrganization - Agriculture
gen_data["OccupationOrganizationAgriculture"] = ["{OccupationOrganizationAgricultureAdjective} {OccupationOrganizationAgricultureType} {OccupationOrganizationAgricultureLocation}"];
gen_data["OccupationOrganizationAgricultureAdjective"] = ["profitable","Struggling"];
gen_data["OccupationOrganizationAgricultureType"] = ["farm","homestead","orchard","ranch","vineyard"];
gen_data["OccupationOrganizationAgricultureLocation"] = ["{LocationRural}"];

// OccupationOrganization - Artist
gen_data["OccupationOrganizationArtist"] = [
  "{OccupationOrganizationArtistAdjective} {OccupationOrganizationArtistType} {OccupationOrganizationArtistLocation} where they work and teach classes",
  "{OccupationOrganizationArtistPatron} patron and a room at their estate {OccupationOrganizationArtistLocation}",
];
gen_data["OccupationOrganizationArtistPatron"] = ["controlling","demanding","generous","wealthy"];
gen_data["OccupationOrganizationArtistAdjective"] = ["cozy","quaint","Small","tiny"];
gen_data["OccupationOrganizationArtistType"] = ["cottage","loft","room","Studio"];
gen_data["OccupationOrganizationArtistLocation"] = ["{LocationUrban}"];

// OccupationOrganization - Criminal
gen_data["OccupationOrganizationCriminal"] = ["{OccupationOrganizationCriminalAdjective} {OccupationOrganizationCriminalType} operating out of {OccupationOrganizationCriminalHideout} {OccupationOrganizationCriminalLocation}"];
gen_data["OccupationOrganizationCriminalAdjective"] = ["growing","influential","powerful","weak"];
gen_data["OccupationOrganizationCriminalType"] = ["crime ","crime syndicate","criminal enterprise","gang","thieves guild"];
gen_data["OccupationOrganizationCriminalHideout"] = ["an underground hideout","a seedy, back-alley tavern","a nondescript rowhouse","an abandoned warehouse"];
gen_data["OccupationOrganizationCriminalLocation"] = ["{LocationUrban}"];

// OccupationOrganization - Education
gen_data["OccupationOrganizationEducation"] = ["{OccupationOrganizationEducationAdjective} {OccupationOrganizationEducationType} {OccupationOrganizationEducationLocation}"];
gen_data["OccupationOrganizationEducationAdjective"] = ["exclusive","famous","mysterious","prestigious","public","respected","Secretive","underfunded"];
gen_data["OccupationOrganizationEducationType"] = ["academy","college","School","university"];
gen_data["OccupationOrganizationEducationLocation"] = ["{LocationUrban}"];

// OccupationOrganization - Hospitality
gen_data["OccupationOrganizationHospitality"] = ["{OccupationOrganizationHospitalityAdjective} {OccupationOrganizationHospitalityType} {LocationUrban}"];
gen_data["OccupationOrganizationHospitalityAdjective"] = ["busy","profitable","quiet","Seedy","Struggling"];
gen_data["OccupationOrganizationHospitalityType"] = ["hostel","hotel","inn","public house","tavern"];
gen_data["OccupationOrganizationHospitalityLocation"] = ["{LocationUrban}","{LocationRural}"];

// OccupationOrganization - Industry
gen_data["OccupationOrganizationIndustry"] = ["{OccupationOrganizationIndustryAdjective} {OccupationOrganizationIndustryType} {OccupationOrganizationIndustryLocation}"];
gen_data["OccupationOrganizationIndustryAdjective"] = ["profitable","Struggling","Successful"];
gen_data["OccupationOrganizationIndustryType"] = ["foundry","ironworks","lumber mill","mine","quarry","Siegeworks","Steel mill","warehouse"];
gen_data["OccupationOrganizationIndustryLocation"] = ["{LocationRural}"];

// OccupationOrganization - Merchant
gen_data["OccupationOrganizationMerchant"] = ["{OccupationOrganizationMerchantAdjective} {OccupationOrganizationMerchantType} {OccupationOrganizationMerchantLocation}"];
gen_data["OccupationOrganizationMerchantAdjective"] = ["profitable","Struggling","Successful"];
gen_data["OccupationOrganizationMerchantType"] = ["Shop"];
gen_data["OccupationOrganizationMerchantLocation"] = ["{LocationRural}","{LocationUrban}"];

// OccupationOrganization - Military
gen_data["OccupationOrganizationMilitary"] = ["{OccupationOrganizationMilitaryAdjective} {OccupationOrganizationMilitarySize} in the {OccupationOrganizationMilitaryType}"];
gen_data["OccupationOrganizationMilitaryAdjective"] = ["elite","experienced","green","hardened","inexperienced","regular","Seasoned","Skilled","veteran","volunteer"];
gen_data["OccupationOrganizationMilitarySize"] = ["battalion","company","detachment","legion","patrol","regiment","Squad"];
gen_data["OccupationOrganizationMilitaryType"] = ["army of a foreign ally","army of a foreign rival","local militia","national army","private army of a local noble","private army of a local warlord"];

// OccupationOrganization - Nobility
gen_data["OccupationOrganizationNobility"] = ["{OccupationOrganizationNobilityAdjective} {OccupationOrganizationNobilityType} {OccupationOrganizationNobilityLocation}"];
gen_data["OccupationOrganizationNobilityAdjective"] = ["beautiful","fortified","grand","impressive","large","Small"];
gen_data["OccupationOrganizationNobilityType"] = ["castle","estate","keep","manor house","mansion","villa"]
gen_data["OccupationOrganizationNobilityLocation"] = ["{LocationRural}","{LocationUrban}"];

// OccupationOrganization - Nature
gen_data["OccupationOrganizationNature"] = ["{OccupationOrganizationNatureAdjective} {OccupationOrganizationNatureType} {OccupationOrganizationNatureLocation}"];
gen_data["OccupationOrganizationNatureAdjective"] = ["cozy","fortified","makeshift","rickety","well-made"];
gen_data["OccupationOrganizationNatureType"] = ["cabin","camp","cottage","homestead","house","hut","Shack"];
gen_data["OccupationOrganizationNatureLocation"] = ["{LocationRural}"];

// OccupationOrganization - Police
gen_data["OccupationOrganizationPolice"] = ["with the {OccupationOrganizationPoliceType}"];
gen_data["OccupationOrganizationPoliceType"] = ["local watch","watch from a nearby town","local guard"];

// OccupationOrganization - Religion
gen_data["OccupationOrganizationReligionBenevolent"] = ["{OccupationOrganizationReligionBenevolentAdjective} {OccupationOrganizationReligionBenevolentType} to {PantheonBenevolent} {OccupationOrganizationReligionBenevolentLocation}"];
gen_data["OccupationOrganizationReligionBenevolentAdjective"] = ["beautiful","grand","impressive","large","Small"];
gen_data["OccupationOrganizationReligionBenevolentType"] = ["abbey","cathedral","monastery","temple"];
gen_data["OccupationOrganizationReligionBenevolentLocation"] = ["{LocationUrban}"];

gen_data["OccupationOrganizationRelgionOther"] = ["{OccupationOrganizationRelgionOtherAdjective} {OccupationOrganizationRelgionOtherType} {OccupationOrganizationRelgionOtherHideoutRelative}"];
gen_data["OccupationOrganizationRelgionOtherAdjective"] = ["hidden","Secret",];
gen_data["OccupationOrganizationRelgionOtherType"] = ["chamber","Shrine","temple"];
gen_data["OccupationOrganizationRelgionOtherLocationRelative"] = ["behind","under"];
gen_data["OccupationOrganizationRelgionOtherLocation"] = [
  "{OccupationOrganizationReligionBenevolentType} to {PantheonBenevolent} {OccupationOrganizationReligionBenevolentLocation}"
];

// OccupationOrganization - Servant
gen_data["OccupationOrganizationServant"] = ["{OccupationOrganizationServantAdjective} noble {OccupationOrganizationServantType} at their {OccupationOrganizationNobilityType} {OccupationOrganizationNobilityLocation}"];
gen_data["OccupationOrganizationServantAdjective"] = ["influential","powerful","new","old","powerful","prestigious","weak"];
gen_data["OccupationOrganizationServantType"] = ["","house"];





// -------------------------------------------------------------------------
// Personality
// --------------------------------------------------------------------------------
gen_data["Moods"] = ["Angry","Bad","Disgusted","Fearful","Happy","Sad","Surprised"];
gen_data["MoodAngry"] = ["Aggressive","Bitter","Critical","Distant","Frustrated","Humiliated","Let Down","Mad"];

gen_data["IdealChaos"] = [
  "Change",
  "Creativity",,
  "Freedom",
  "Independence",
  "No Limits",
  "Whimsy"
];
gen_data["IdealGood"] = [
  "beauty",
  "charity",
  "greater good",
  "Life",
  "respect",
  "Self-sacrifice"
];
gen_data["IdealEvil"] = [
  "Domination",
  "Greed",,
  "Might",
  "Pain",
  "Retribution",
  "Slaughter"
];
gen_data["IdealLawful"] = [
  "Community",
  "Fairness",,
  "Honor",
  "Logic",
  "Responsibility",
  "Tradition"
];
gen_data["IdealNeutral"] = [
  "Balance",
  "Knowledge",
  "Live and let live",
  "Moderation",
  "Neutrality",
  "People"
];
gen_data["Interaction"] = [
  "Argumentative",
  "Arrogant",
  "Blustering",
  "Rude",
  "Curious",
  "Friendly",
  "Honest",
  "Hot tempered",
  "Irritable",
  "Ponderous",
  "Quiet",
  "Suspicious"
];




// Dragonborn
//--------------------------------------------------------------------------------
gen_data["DragonbornBodyColorBase"] = {
  "1":"amethyst",
  "2-4":"black",
  "5-7":"blue",
  "8-10":"brass",
  "11-13":"bronze",
  "14-16":"copper",
  "17-19":"crystal",
  "20-22":"emerald",
  "23-25":"gold",
  "26-28":"green",
  "29-31":"red",
  "32-34":"sapphire",
  "35-37":"silver",
  "38-40":"topaz",
  "41-43":"white"
};
gen_data["DragonbornBodyColorTone"] = ["bright","cool","dark","deep","glassy","light","medium","pale","warm"];
gen_data["DragonbornEyeColor"] = {
  "1-2":"amber",
  "3-4":"blue",
  "5-6":"brown",
  "7-8":"gray",
  "9-10":"green",
  "11-12":"hazel",
  "13-14":"red"
};
gen_data["DragonbornFacialHairFeminine"] = {"1":"None"};
gen_data["DragonbornFacialHairMasculine"] = {"1":"None"};
gen_data["DragonbornHornDirection"] = ["up and around the side of the head","up and over the top of the head","up and back","up and forward","backward","forward","straight out","straight up",];
gen_data["DragonbornHornPlacement"] = ["forehead","top of the head","side of the head","back of the head","temples"];
gen_data["DragonbornHornStyle"] = ["angle","bend","curl","hook","poke","protrude","sweep","twist"];
gen_data["DragonbornHornType"] = ["blunt","rough","sharp","smooth","thick","thin"];


// Dwarf
//--------------------------------------------------------------------------------
gen_data["DwarfBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["DwarfBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["DwarfEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["DwarfFacialHairFeminine"] = {
  "1-70":"None",
  "75-90":"Beard",
  "91-95":"Goatee",
  "96-100":"Mustache"
};
gen_data["DwarfFacialHairMasculine"] = {
  "1-10":"None",
  "11-90":"Beard",
  "91-95":"Goatee",
  "96-100":"Mustache"
};

// Elf
//--------------------------------------------------------------------------------
gen_data["ElfBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["ElfBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["ElfEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["ElfFacialHairFeminine"] = {"1-100":"None"};
gen_data["ElfFacialHairMasculine"] = {"1-100":"None"};


// Gnome
//--------------------------------------------------------------------------------
gen_data["GnomeBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["GnomeBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["GnomeEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["GnomeFacialHairFeminine"] = {"1-100":"None"};
gen_data["GnomeFacialHairMasculine"] = {
  "1-40":"None",
  "41-60":"Beard",
  "61-80":"Goatee",
  "81-100":"Mustache"
};


// Half-Elf
//--------------------------------------------------------------------------------
gen_data["Half-ElfBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["Half-ElfBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["Half-ElfEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["Half-ElfFacialHairFeminine"] = {"1-100":"None"};
gen_data["Half-ElfFacialHairMasculine"] = {
  "1-70":"None",
  "71-80":"Beard",
  "81-90":"Goatee",
  "91-100":"Mustache"
};

// Half-Orc
//--------------------------------------------------------------------------------
gen_data["Half-OrcBodyColorBase"] = ["beige","bronze","brown","ivory","gray","green","pink"];
gen_data["Half-OrcBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["Half-OrcEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["Half-OrcFacialHairFeminine"] = {"1-100":"None"};
gen_data["Half-OrcFacialHairMasculine"] = {
  "1-40":"None",
  "41-80":"Beard",
  "81-90":"Goatee",
  "91-100":"Mustache"
};

// Halfling
//--------------------------------------------------------------------------------
gen_data["HalflingBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["HalflingBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["HalflingEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["HalflingFacialHairFeminine"] = {"1-100":"None"};
gen_data["HalflingFacialHairMasculine"] = {
  "1-50":"None",
  "51-80":"Beard",
  "81-90":"Goatee",
  "91-100":"Mustache"
};


// Human
//--------------------------------------------------------------------------------

gen_data["HumanBodyColorBase"] = ["beige","bronze","brown","ivory","pink"];
gen_data["HumanBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["HumanEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["HumanFacialHairFeminine"] = {"1-100":"None"};
gen_data["HumanFacialHairMasculine"] = {
  "1-40":"None",
  "41-60":"Beard",
  "61-80":"Goatee",
  "81-100":"Mustache"
};

 
// Orc
//--------------------------------------------------------------------------------
gen_data["OrcBodyColorBase"] = ["beige","bronze","brown","ivory","gray","green"];
gen_data["OrcBodyColorTone"] = ["cool","dark","golden","light","medium","pale","warm"];
gen_data["OrcEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)"
};
gen_data["OrcFacialHairFeminine"] = {"1-100":"None"};
gen_data["OrcFacialHairMasculine"] = {
  "1-40":"None",
  "41-70":"Beard",
  "71-90":"Goatee",
  "91-100":"Mustache"
};


// Tiefling
//--------------------------------------------------------------------------------
gen_data["TieflingBodyColorBase"] = ["black","beige","blue","bronze","brown","gray","green","ivory","pink","purple","red","white"];
gen_data["TieflingBodyColorTone"] = ["cool","dark","golden","light","medium","pale","rosy","warm"];
gen_data["TieflingEyeColor"] = {
  "1-40":"brown",
  "41-65":"blue",
  "66-85":"hazel",
  "86-95":"green",
  "96-97":"gray",
  "98":"hetachromatic (brown/blue)",
  "99":"hetachromatic (blue/hazel)",
  "100":"hetachromatic (blue/green)",
  "101-130":"black",
  "131-160":"red",
  "161-180":"white",
  "181-200":"amber"
};
gen_data["TieflingFacialHairFeminine"] = {"1-100":"None"};
gen_data["TieflingFacialHairMasculine"] = {
  "1-85":"None",
  "86-90":"Beard",
  "91-95":"Goatee",
  "96-100":"Mustache"
};
gen_data["TieflingHornDirection"] = ["up and around the side of the head","up and over the top of the head","up and back","up and forward","backward","forward","straight out","straight up",];
gen_data["TieflingHornPlacement"] = ["forehead","top of the head","side of the head","back of the head","temples"];
gen_data["TieflingHornStyle"] = ["angle","bend","curl","hook","poke","protrude","sweep","twist"];
gen_data["TieflingHornType"] = ["blunt","rough","sharp","smooth","thick","thin"];

