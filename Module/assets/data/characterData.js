/*
 races.js
*/

// --------------------------------------------------------------------------------
// AgeGroups & Ages
// --------------------------------------------------------------------------------
gen_data["AgeGroup"] = {
  "1-20":"Young",
  "21-50":"Adult",
  "51-80":"Mature",
  "81-97":"Elderly",
  "98-100":"Venerable"
};
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
  //"Yuan-Ti": [16,20,40,60,80,100]
}

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
// Classes
// --------------------------------------------------------------------------------
gen_data["CharacterLevel"] = {"1-60":"Low","61-90":"Medium","91-100":"High"};
gen_data["CharacterLevelLow"] = {"1":"Commoner","2":"Cultist","3":"Bandit","4":"Guard","5":"Noble","6":"Acolyte","7":"Scout","8":"Thug"};
gen_data["CharacterLevelMedium"] = {"1":"Spy","2":"Bandit Captain","3":"Berserker","4":"Cult Fanatic","5":"Tribal Warrior","6":"Druid","7":"Priest","8":"Knight","9":"Veteran"};
gen_data["CharacterLevelHigh"] = {"1":"Gladiator","2":"Mage","3":"Assassin","4":"Archmage"};

// --------------------------------------------------------------------------------
// Gender
// --------------------------------------------------------------------------------
gen_data["GenderForm"] = ["Feminine","Masculine"];

// --------------------------------------------------------------------------------
// Occupations
// --------------------------------------------------------------------------------

// Occupation Industry & Lists for the Acolyte Class
gen_data["OccupationIndustryAcolyte"] = {"1":"Adventure","2":"Agriculture","3":"Hospitality","4":"Merchant","5":"Military","6":"Religion","7":"Servant","8":"Water"};
gen_data["OccupationListAcolyte"] = {"1":"Clergy"};

// Occupation Industry & Lists for the Archmage Class
gen_data["OccupationIndustryArchmage"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military"};
gen_data["OccupationListArchmage"] = {"1":"Arcane"};

// Occupation Industry & Lists for the Assassin Class
gen_data["OccupationIndustryAssassin"] = {"1":"Adventure","2":"Criminal","3":"Merchant","4":"Military","5":"Servant"};
gen_data["OccupationListAssassin"] = {"1":"Stealthy"};

// Occupation Industry & Lists for the Bandit Class
gen_data["OccupationIndustryBandit"] = {"1":"Agriculture","2":"Criminal","3":"Water"};
gen_data["OccupationListBandit"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Bandit-Captain Class
gen_data["OccupationIndustryBandit-Captain"] = {"1":"Adventure","2":"Criminal","3":"Water"};
gen_data["OccupationListBandit-Captain"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Berserker Class
gen_data["OccupationIndustryBerserker"] = {"1":"Adventure","2":"Agriculture","3":"Criminal","4":"Industry","5":"Military","6":"Outdoors"};
gen_data["OccupationListBerserker"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Commoner Class
gen_data["OccupationIndustryCommoner"] = {"1":"Adventure","2":"Agriculture","3":"Artist","5":"Criminal","6":"Education","7":"Government","8":"Hospitality","9":"Industry","9":"Merchant","10":"Military","11":"Outdoors","12":"Religion","13":"Servant","14":"Water"};
gen_data["OccupationListCommoner"] = {"1":"Commoner"};

// Occupation Industry & Lists for the Cult Fanatic Class
gen_data["OccupationIndustryCult-Fanatic"] = {"1":"Adventure","2":"Merchant","3":"Military","4":"Religion","5":"Servant","6":"Water"};
gen_data["OccupationListCult-Fanatic"] = {"1":"Clergy"};

// Occupation Industry & Lists for the Cultist Class
gen_data["OccupationIndustryCultist"] = {"1":"Adventure","2":"Agriculture","3":"Artist","5":"Criminal","6":"Education","7":"Government","8":"Hospitality","9":"Industry","9":"Merchant","10":"Military","11":"Outdoors","12":"Religion","13":"Servant","14":"Water"};
gen_data["OccupationListCultist"] = {"1":"Commoner"};

// Occupation Industry & Lists for the Druid Class
gen_data["OccupationIndustryDruid"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Outdoors","5":"Servant"};
gen_data["OccupationListDruid"] = {"1":"Nature"};

// Occupation Industry & Lists for the Gladiator Class
gen_data["OccupationIndustryGladiator"] = {"1":"Adventure","2":"Agriculture","3":"Artist","4":"Criminal","5":"Hospitality","6":"Military","7":"Servant","8":"Water"};
gen_data["OccupationListGladiator"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Guard Class
gen_data["OccupationIndustryGuard"] = {"1":"Agriculture","2":"Education","3":"Industry","4":"Military","5":"Servant"};
gen_data["OccupationListGuard"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Knight Class
gen_data["OccupationIndustryKnight"] = {"1":"Adventure","2":"Military"};
gen_data["OccupationListKnight"] = {"1":"Noble"};

// Occupation Industry & Lists for the Mage Class
gen_data["OccupationIndustryMage"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military","5":"Servant","6":"Water"};
gen_data["OccupationListMage"] = {"1":"Arcane"};

// Occupation Industry & Lists for the Noble Class
gen_data["OccupationIndustryNoble"] = {"1":"Adventure","2":"Criminal","3":"Education","4":"Government","5":"Hospitality","6":"Industry","7":"Merchant","8":"Military","9":"Servant","10":"Water"};
gen_data["OccupationListNoble"] = {"1":"Noble"};

// Occupation Industry & Lists for the Priest Class
gen_data["OccupationIndustryPriest"] = {"1":"Adventure","2":"Education","3":"Merchant","4":"Military","5":"Religion","6":"Water"};
gen_data["OccupationListPriest"] = {"1":"Clergy"};

// Occupation Industry & Lists for the Scout Class
gen_data["OccupationIndustryScout"] = {"1":"Adventure","2":"Agriculture","3":"Education","4":"Merchant","5":"Military","6":"Outdoors","7":"Servant","8":"Water"};
gen_data["OccupationListScout"] = {"1":"MartialRanged"};

// Occupation Industry & Lists for the Spy Class
gen_data["OccupationIndustrySpy"] = {"1":"Adventure","2":"Criminal","3":"Merchant","4":"Military","5":"Servant"};
gen_data["OccupationListSpy"] = {"1":"Stealthy"};

// Occupation Industry & Lists for the Thug Class
gen_data["OccupationIndustryThug"] = {"1":"Adventure","2":"Agriculture","3":"Criminal","4":"Hospitality","5":"Industry","6":"Military","7":"Servant","8":"Water"};
gen_data["OccupationListThug"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Tribal Warrior Class
gen_data["OccupationIndustryTribal-Warrior"] = {"1":"Agriculture","2":"Outdoors"};
gen_data["OccupationListTribal-Warrior"] = {"1":"MartialMelee"};

// Occupation Industry & Lists for the Veteran Class
gen_data["OccupationIndustryVeteran"] = {"1":"Adventure","2":"Agriculture","3":"Criminal","4":"Education","5":"Hospitality","6":"Industry","7":"Merchant","9":"Military","10":"Outdoors","11":"Servant","12":"Water"};
gen_data["OccupationListVeteran"] = {"1":"MartialMelee"};


// Employer Common Lists
gen_data["EmployerProfitability"] = ["failing","profitable","struggling","successful"];
gen_data["EmployerSize"] = ["small","large"];

// Adventure Occupation Lists
gen_data["AdventureArcane"] = ["Arcanist","Mage"];
gen_data["AdventureClergy"] = ["Cleric","Healer"];
// gen_data["AdventureCommoner"] = [];
gen_data["AdventureMartialMelee"] = ["Fighter"];
gen_data["AdventureMartialRanged"] = ["Archer","Ranger","Scout"];
gen_data["AdventureNature"] = ["Druid"];
gen_data["AdventureNoble"] = ["Cavalier","Fighter","Knight"];
gen_data["AdventureStealthy"] = ["Rogue","Scout"];

gen_data["AdventureEmployer"] = {
  "2":"looking for a new party after the last one kicked them out for being too over-powered",
  "3":"looking for a new party after the last one kicked them out for being too much of an edge lord",
  "3":"looking for a new party after the last one broke up due to scheduling issues"
};

gen_data["AdventureAlignmentGE"] = {"1-4":"Good","5-8":"Neutral","9-10":"Evil"};
gen_data["AdventureAlignmentLC"] = {"1-4":"Lawful","5-8":"Neutral","9-10":"Chaotic"};


// Agriculture Occupation Lists
// gen_data["AgricultureArcane"] = [];
gen_data["AgricultureClergy"] = ["Healer","Farmer"];
gen_data["AgricultureCommoner"] = ["Farmer"];
gen_data["AgricultureMartialMelee"] = ["Farmer"];
gen_data["AgricultureMartialRanged"] = ["Farmer"];
// gen_data["AgricultureNature"] = [];
// gen_data["AgricultureNoble"] = [];
// gen_data["AgricultureStealthy"] = [];

gen_data["AgricultureEmployer"] = {
  "1":"with a {EmployerSize}, {EmployerProfitability} {AgricultureType} on the edge of town",
  "2":"with a large, profitable estate on the edge of town",
  "3":"with a small, but profitable estate outside of town",
  "4":"with a large, profitable estate outside of town",
  "5":"with a small, struggling estate on the edge of town",
  "6":"with a large, but struggling estate on the edge of town",
  "7":"with a small, struggling estate outside of town",
  "8":"with a large, but struggling estate outside of town",
  "9":"with a small, but profitable farm on the edge of town",
  "10":"with a large, profitable farm on the edge of town",
  "11":"with a small, but profitable farm outside of town",
  "12":"with a large, profitable farm outside of town",
  "13":"with a small, struggling farm on the edge of town",
  "14":"with a large, but struggling farm on the edge of town",
  "15":"with a small, struggling farm outside of town",
  "16":"with a large, but struggling farm outside of town",
  "17":"with a small, but profitable cattle ranch on the edge of town",
  "18":"with a large, profitable cattle ranch on the edge of town",
  "19":"with a small, but profitable cattle ranch outside of town",
  "20":"with a large, profitable cattle ranch outside of town",
  "21":"with a small, struggling cattle ranch on the edge of town",
  "22":"with a large, but struggling cattle ranch on the edge of town",
  "23":"with a small, struggling cattle ranch outside of town",
  "24":"with a large, but struggling cattle ranch outside of town",
  "25":"with a small, but profitable orchard on the edge of town",
  "26":"with a large, profitable orchard on the edge of town",
  "27":"with a small, but profitable orchard outside of town",
  "28":"with a large, profitable orchard outside of town",
  "29":"with a small, struggling orchard on the edge of town",
  "30":"with a large, but struggling orchard on the edge of town",
  "31":"with a small, struggling orchard outside of town",
  "32":"with a large, but struggling orchard outside of town",
  "33":"with a small, but profitable vineyard in the hills outside of town",
  "34":"with a large, profitable vineyard in the hills outside of town",
  "35":"with a small, struggling vineyard in the hills outside of town",
  "36":"with a large, but struggling vineyard in the hills outside of town"
};


// Artist Occupation Lists
// gen_data["ArtistArcane"] = [];
// gen_data["ArtistClergy"] = [];
gen_data["ArtistCommoner"] = ["Acrobat","Actor","Artist","Dancer","Painter","Playwright","Poet","Singer","Sculptor","Writer"];
gen_data["ArtistMartialMelee"] = ["Gladiator"];
// gen_data["ArtistMartialRanged"] = [];
// gen_data["ArtistNature"] = [];
// gen_data["ArtistNoble"] = [];
// gen_data["ArtistStealthy"] = [];

gen_data["ArtistEmployer"] = {
  "1":"travelling from town to town, performing wherever they can find the work",
  "2":"travelling with a troupe of performers, holding public exhibitions and shows",
  "3":"struggling to make ends meet while they wait for their big chance",
  "4":"who works as a day laborer and practices their art on the side",
  "5":"who gave-up their dream to tend bar at the local tavern",
  "6":"has a small studio in a rough part of town where they practice their art",
  "7":"has a small studio in a nice part of town where they practice their art",
  "8":"working for a wealthy patron who is possesive and controlling",
  "9":"working for a wealthy patron who gives them the space and freedom they need to practice their art",
  "10":"living and working in a communal space with fellow artists"
};

// Criminal Occupation Lists
// gen_data["CriminalArcane"] = [];
// gen_data["CriminalClergy"] = [];
gen_data["CriminalCommoner"] = ["Bookmaker","Con-Artist","Fence","Loan Shark","Messenger"];
gen_data["CriminalMartialMelee"] = ["Bandit","Enforcer","Fence","Loan Shark","Muscle","Robber","Smuggler","Tough"];
// gen_data["CriminalMartialRanged"] = [];
// gen_data["CriminalNature"] = [];
gen_data["CriminalNoble"] = ["Charlatan","Boss","Face","Lieutenant"];
gen_data["CriminalStealthy"] = ["Assassin","Burglar","Pickpocket","Smuggler","Thief"];

gen_data["CriminalEmployer"] = {
  "1":"who prefers to work alone, dodging the authorities and local syndicates at the same time",
  "2":"in a small, tight-knit gang that controls the local neighborhood",
  "3":"in a small, criminal enterprise run out of a seedy, back-alley tavern",
  "4":"for an old, crime family struggling to keep their rivals in check",
  "5":"for an old, crime family trying to keep to it's honor code amongst rivals that have none",
  "6":"for an old and powerful crime family with it's fingers in every criminal operation in town",
  "7":"for the large, powerful syndicate with operations in every town & city on the continent",
  "8":"for an old, waning thieves' guild that still believes there should be honor among thieves",
  "9":"a small band of criminals committed to fighting injustice and inequality",
  "10":"working for a small, but powerful crime syndicate in the area",
  "11":"working for a large crime syndicate who's power quickly is waning",
  "12":"working for a small gang trying to make a name for itself amongst the criminal underworld",
};

// Education Occupation Lists
gen_data["EducationArcane"] = ["Abjurist","Alchemist","Arcanist","Archaelogist","Conjurer","Diviner","Headmaster","Illusionist","Planar-Theorist","Professor of Abjuration","Professor of Arcane-Archaelogy",,"Professor of Arcane Magic","Professor of Conjuration","Professor of Divination","Professor of Illusion","Professor of Planar Travel","Professor of Transmutation","Scholar","Transmuter"];
gen_data["EducationClergy"] = ["Professor of Divine Magic"];
gen_data["EducationCommoner"] = ["Administrator","Clerk","Gardener","Groundskeeper","Janitor","Librarian","Linguist","Historian","Mathematician","Philosopher","Teacher"];
gen_data["EducationMartialMelee"] = ["Guard"];
gen_data["EducationMartialRanged"] = ["Gamekeeper"];
gen_data["EducationNature"] = ["Professor of Natural Magic"];
gen_data["EducationNoble"] = ["Chancellor","Dean","Headmaster"];
// gen_data["EducationStealthy"] = [];

gen_data["EducationEmployer"] = {
  "1":"at a small, underfunded, public university",
  "2":"at a small, private academy for the wealthy elite",
  "3":"at the prestigious military academy in the capital",
  "4":"at a small college for practioners of the arcane arts",
  "5":"at a large, private university for the study of magic",
  "6":"at a large, public university for the magical & the mundane",
  "7":"at a small, exclusive college for gifted children",
  "8":"at a small, school for the underprivileged"
};

// Government Occupation Lists
// gen_data["GovernmentArcane"] = [];
// gen_data["GovernmentClergy"] = [];
gen_data["GovernmentCommoner"] = ["Administrator","Bookkeeper","Clerk","Surveyor","Tax Collector"];
// gen_data["GovernmentMartialMelee"] = [];
// gen_data["GovernmentMartialRanged"] = [];
// gen_data["GovernmentNature"] = [];
gen_data["GovernmentNoble"] = ["Bureaucrat","Concilor","Judge","Magistrate"];
// gen_data["GovernmentStealthy"] = [];

gen_data["GovernmentEmployer"] = {
  "1":"for the local government",
  "2":"for the regional government",
  "3":"for the provincial goverment",
  "4":"for the central government",
  "5":"for a foreign government, in town as part of an official delegation",
  "6":"for a foreign government, in town on personal business"
};

// Hospitality Occupation Lists
// gen_data["HospitalityArcane"] = [];
// gen_data["HospitalityClergy"] = [];
gen_data["HospitalityCommoner"] = ["Baker","Barkeep","Cook","Innkeeper","Porter","Servant","Stablehand","Waiter"];
gen_data["HospitalityMartialMelee"] = ["Bouncer"];
// gen_data["HospitalityMartialRanged"] = [];
// gen_data["HospitalityNature"] = [];
gen_data["HospitalityNoble"] = ["Innkeeper"];
// gen_data["HospitalityStealthy"] = [];

gen_data["HospitalityEmployer"] = {
  "1":"at a small, but profitable inn on the edge of town",
  "2":"at a small and struggling inn on the edge of town",
  "3":"at a large, profitable inn on the edge of town",
  "4":"at a large, but struggling inn on the edge of town",
  "5":"at a small, but profitable inn in the center of town",
  "6":"at a small and struggling inn in the center of town",
  "7":"at a large, profitable inn in the center of town",
  "8":"at a large, but struggling inn in the center of town",
  "9":"at an upscale inn in the center of town",
  "10":"at a small, but profitable inn on the main road out of town",
  "11":"at a small and struggling inn on the main road out of town",
  "12":"at a large, profitable inn on the main road out of town",
  "13":"at a large, but struggling inn on the main road out of town",
  "14":"at a small and struggling inn off the beaten path",
  "15":"at a large, but struggling inn off the beaten path"
};

// Industry Occupation Lists
// gen_data["IndustryArcane"] = [];
// gen_data["IndustryClergy"] = [];
gen_data["IndustryCommoner"] = ["Foreperson","Laborer","Worker"];
gen_data["IndustryMartialMelee"] = ["Guard","Laborer","Worker"];
// gen_data["IndustryMartialRanged"] = [];
// gen_data["IndustryNature"] = [];
gen_data["IndustryNoble"] = ["Boss","Manager"];
// gen_data["IndustryStealthy"] = [];

gen_data["IndustryEmployer"] = {
  "1":"for a small, but profitable mine in the hills outside of town",
  "2":"for a small, struggling mine in the hills outside of town",
  "3":"for a large, profitable mine in the hills outside of town",
  "4":"for a large, but struggling mine in the hills outside of town",
  "5":"for a small, but profitable lumber mill in the forest outside of town",
  "6":"for a small, struggling lumber mill in the forest outside of town",
  "7":"for a large, profitable lumber mill in the forest outside of town",
  "8":"for a large, but struggling lumber mill in the forest outside of town",
  "9":"for a small, but profitable quarry in the hills outside of town",
  "10":"for a small, struggling quarry in the hills outside of town",
  "11":"for a large, profitable quarry in the hills outside of town",
  "12":"for a large, but struggling quarry in the hills outside of town",
  "13":"for a small, but profitable foundry on the edge of town",
  "14":"for a small, struggling foundry on the edge of town",
  "15":"for a large, profitable foundry on the edge of town",
  "16":"for a large, but struggling foundry on the edge of town",
  "17":"for a small, but profitable siegeworks on the edge of town",
  "18":"for a small, struggling siegeworks on the edge of town",
  "19":"for a large, profitable siegeworks on the edge of town",
  "20":"for a large, but struggling siegeworks on the edge of town",
  "21":"for a small, but profitable ironworks on the edge of town",
  "22":"for a small, struggling ironworks on the edge of town",
  "23":"for a large, profitable ironworks on the edge of town",
  "24":"for a large, but struggling ironworks on the edge of town",
  "25":"for a small, but profitable steel mill on the edge of town",
  "26":"for a small, struggling steel mill on the edge of town",
  "27":"for a large, profitable steel mill on the edge of town",
  "28":"for a large, but struggling steel mill on the edge of town",
  "29":"for a small, but profitable warehouse on the edge of town",
  "30":"for a small, struggling warehouse on the edge of town",
  "31":"for a large, profitable warehouse on the edge of town",
  "32":"for a large, but struggling warehouse on the edge of town",
  "33":"for a small, but profitable boatyard down at the waterfront",
  "34":"for a small, struggling boatyard down at the waterfront",
  "35":"for a large, profitable boatyard down at the waterfront",
  "36":"for a large, but struggling boatyard down at the waterfront"
};

// Merchant Occupation Lists
gen_data["MerchantArcane"] = ["Alchemist","Arcanist","Enchanter","Seller of Magical Reagents and Supplies","Scribe","Wandmaker"];
gen_data["MerchantClergy"] = ["Bookseller","Healer","Physician"];
gen_data["MerchantCommoner"] = ["Apothecary","Armorer","Baker","Barber","Blacksmith","Bookseller","Bowyer","Butcher","Carpenter","Cartwright","Clothier","Cobbler","Cooper","Engraver","Fishmonger","Fletcher","Furrier","Glassblower","Grocer","Haberdasher","Hatmaker","Herbalist","Jeweler","Leathersmith","Locksmith","Mercer","Metalsmith","Potter","Shipwright","Stonemason","Tailor","Tinker","Weaponsmith","Weaver","Woodcarver"];
// gen_data["MerchantMartialMelee"] = [];
gen_data["MerchantMartialRanged"] = ["Bowyer","Fletcher","Furrier","Leathersmith"];
gen_data["MerchantNature"] = ["Apothecary","Herbalist"];
gen_data["MerchantNoble"] = ["Banker","Barrister","Money Lender",];
gen_data["MerchantStealthy"] = ["Private Investigator"];

gen_data["MerchantEmployer"] = {
  "1":"with a small, but profitable shop on the edge of town",
  "2":"with a small and struggling shop on the edge of town",
  "3":"with a large, profitable shop on the edge of town",
  "4":"with a large, but struggling shop in the center of town",
  "5":"with a small, but profitable shop in the center of town",
  "6":"with a small and struggling shop in the center of town",
  "7":"with a large, profitable shop in the center of town",
  "8":"with a large, but struggling shop in the center of town",
  "9":"who lost their shop in a fire and is trying to find investors to start again",
  "10":"who operates out of a wagon and serves the settlements dotting the countryside"
};

// Military Occupation Lists
gen_data["MilitaryArcane"] = ["Arcanist","Battlemage","Commander","Evoker","Officer","Mage"];
gen_data["MilitaryClergy"] = ["Cleric","Healer","War Cleric"];
gen_data["MilitaryCommoner"] = ["Cook","Courier","Herald","Porter","Supply Clerk"];
gen_data["MilitaryMartialMelee"] = ["Sergeant","Sergeant-at-Arms","Soldier"];
gen_data["MilitaryMartialRanged"] = ["Archer","Scout"];
// gen_data["MilitaryNature"] = [];
gen_data["MilitaryNoble"] = ["Cavalier","Captain","Commander","Knight","Officer"];
gen_data["MilitaryStealthy"] = ["Assassin","Spy"];

gen_data["MilitaryEmployer"] = {
  "1":"with the local militia",
  "2":"with the national army",
  "3":"with an elite unit in the national army",
  "4":"as a liaison with the army of a foreign ally",
  "5":"with a well-respected mercenary company",
  "6":"with a mercenary company with questionable methods",
  "7":"visiting military attache",
  "8":"with the private army of a powerful noble",
  "9":"who deserted from the army and is on the run from bounty hunters",
  "10":"who recently retired from the military and is looking for work as a mercenary"
};

// Outdoors Occupation Lists
// gen_data["OutdoorsArcane"] = [];
// gen_data["OutdoorsClergy"] = [];
gen_data["OutdoorsCommoner"] = ["Fisher","Forager","Forester","Surveyor","Trapper"];
gen_data["OutdoorsMartialMelee"] = ["Forester","Hunter","Poacher","Warrior"];
gen_data["OutdoorsMartialRanged"] = ["Hunter","Guide","Poacher","Ranger","Tracker","Trapper","Warden"];
gen_data["OutdoorsNature"] = ["Druid","Herbalist","Healer","Shaman"];
// gen_data["OutdoorsNoble"] = [];
// gen_data["OutdoorsStealthy"] = [];

gen_data["OutdoorsEmployer"] = {
  "1":"with a small, cozy cabin in the woods outside of town",
  "2":"with a small, rickety shack in the woods outside of town",
  "3":"living in a small, makeshift camp on the outskirts of town",
  "4":"living in a large camp on the outskirts of town",
  "5":"with a small, fortified homestead out in the wildlands a little more than a day's walk from town",
  "6":"living in an elaborate tree house in the woods outside of town",
  "7":"living in a small cave a few days walk from town",
  "8":"who never stays in one place too long, preferring to roam wherever fate may take them"
};

// Police Occupation Lists
// gen_data["PoliceArcane"] = [];
// gen_data["PoliceClergy"] = [];
gen_data["PoliceCommoner"] = ["Administrator","Bookkeeper","Clerk","Quartermaster"];
gen_data["PoliceMartialMelee"] = ["Guard"];
gen_data["PoliceMartialRanged"] = ["Archer"];
// gen_data["PoliceNature"] = [];
gen_data["PoliceNoble"] = ["Captain","Commander","Inspector","Investigator", "Watchmaster"];
gen_data["PoliceStealthy"] = ["Inspector","Investigator"];

gen_data["PoliceEmployer"] = {
  "1":"with the local watch",
  "2":"with the watch from a nearby town"
};

// Religion Occupation Lists
// gen_data["ReligionArcane"] = [];
gen_data["ReligionClergy"] = ["Acolyte","Cleric","Priest"];
gen_data["ReligionCommoner"] = ["Attendant","Edler","Novice","Usher"];
// gen_data["ReligionMartialMelee"] = [];
// gen_data["ReligionMartialRanged"] = [];
// gen_data["ReligionNature"] = [];
// gen_data["ReligionNoble"] = [];
// gen_data["ReligionStealthy"] = [];

gen_data["ReligionEmployer"] = {
  "1":"at the local temple to {BenevolentGod}",
  "2":"at a secret temple to {MalevolentGod}",
  "3":"who maintains a small shrine to {BenevolentGod}",
  "4":"who maintains a secret shrine to {DemonicPrince} in a hidden room in their house"
};
gen_data["BenevolentGod"] = [
  "Avandra, the god of change & luck",
  "Bahamut, the god of justice & nobility",
  "Corellon, the god of magic & the arts",
  "Erathis, the god of civilization & invention",
  "Ioun, the god of knowledge",
  "Kord, the god of strength & storms",
  "Melora, the god of nature & tempests",
  "Moradin, the god of creation",
  "Pelor, the god of sun & agriculture",
  "Raven Queen, the god of death",
  "Sehanine, the god of the moon"
];
gen_data["MalevolentGod"] = [
  "Asmodeus, god of tyrany",
  "Bane, god of war & conquest",
  "Gruumsh, god of destruction",
  "Lolth, god of spiders & lies",
  "Tharizdun, god of madness",
  "Tiamat, god of wealth, greed, and vengeance",
  "Torog, god of Underdark",
  "Vecna, god of evil secrets",
  "Zehir, god of darkness & poison"
];
gen_data["DemonicPrince"] = [
  "Graz'zt, the demonic prince of indulgence",
  "Orcus, the demonic prince of undeath"
];

// Servant Occupation Lists
gen_data["ServantArcane"] = ["Adviser","Chamberlain","Vizier"];
gen_data["ServantClergy"] = ["Chaplain"];
gen_data["ServantCommoner"] = ["Cook","Gardener","Groundskeeper","Servant","Stablehand","Usher"];
gen_data["ServantMartialMelee"] = ["Bodyguard","Guard","Housecarl","Reeve"];
gen_data["ServantMartialRanged"] = ["Gameskeeper","Hunter","Reeve","Warden"];
gen_data["ServantNature"] = ["Gardener","Groundskeeper"];
gen_data["ServantNoble"] = ["Chamberlain","Majordomo","Marshall","Steward","Thane"];
gen_data["ServantStealthy"] = ["Agent"];

gen_data["ServantEmployer"] = {
  "1":"serving an old, noble house in decline",
  "2":"serving an old, noble house with extensive influence in the area",
  "3":"serving an old, noble house with connections to the region's ruling family",
  "4":"serving one of the lesser noble houses in the area",
  "5":"serving a visiting noble from a neighboring region",
  "6":"serving a visiting noble from the capital",
  "7":"serving a visiting noble from a foreign land",
  "8":"serving a wealthy, merchant's household",
  "9":"faithfully serving a noble house racked with controversy",
  "10":"Faithfully serving a noble house, staving off financial ruin",
  "11":"faithfully serving an aging noble house with no apparent heir"
};

// Water Occupation Lists
// gen_data["WaterArcane"] = [];
gen_data["WaterClergy"] = ["Chaplain","Healer","Physician"];
gen_data["WaterCommoner"] = ["Bosun","Carpenter","Cook","Deckhand","Quartermaster","Sailor",];
gen_data["WaterMartialMelee"] = ["Bosun","Deckhand","Marine","Sailor"];
gen_data["WaterMartialRanged"] = ["Archer","Marine","Sailor"];
// gen_data["WaterNature"] = [];
gen_data["WaterNoble"] = ["Captain","Commodore","First Mate",];
// gen_data["WaterStealthy"] = [];

gen_data["WaterEmployer"] = {
  "1":"working aboard a small merchant vessel",
  "2":"working aboard a large merchant vessel",
  "3":"working aboard a small pirate vessel",
  "4":"working aboard a large pirate vessel",
  "5":"working aboard a smuggler's boat",
  "6":"working aboard a noble's yacht",
  "7":"working aboard a small airship",
  "8":"working aboard a large airship"
};

// -------------------------------------------------------------------------
// Personality
// --------------------------------------------------------------------------------
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

// Dragonborn
//--------------------------------------------------------------------------------
gen_data["DragonbornSubrace"] = {
  "1":"Draconblood",
  "2":"Ravenite"
};
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

gen_data["DragonbornFamily"] = ["Akambherylliax","Argenthrixus","Baharoosh","Beryntolthropal","Bhenkumbyrznaax","Caavylteradyn","Chumbyxirinnish","Clethtinthiallor","Daardendrian","Delmirev","Dhyrktelonis","Ebynichtomonis","Esstyrlynn","Fharngnarthnost","Ghaallixirn","Grrrmmballhyst","Gygazzylyshrift","Hashphronyxadyn","Hshhsstoroth","Imbixtellrhyst","Jerynomonis","Jharthraxyn","Kerrhylon","Kimbatuul","Lhamboldennish","Linxakasendalor","Mohradyllion","Mystan","Nemmonis","Norixius","Ophinshtalajiir","Orexijandilin","Pfaphnyrennish","Phrahdrandon","Pyraxtallinost","Qyxpahrgh","Raghthroknaar","Shestendeliath","Skaarzborroosh","Sumnarghthrysh","Tiammanthyllish","Turnuroth","Umbyrphrael","Vangdondalor","Verthisathurgiesh","Wivvyrholdalphiax","Wystongjiir","Xephyrbahnor","Yarjerit","Zzzxaaxthroth"];
gen_data["DragonbornFeminine"] = ["Aakra","Aasathra","Antrara","Arava","Biri","Blendaeth","Burana","Chassath","Daar","Dentratha","Doudra","Driindar","Eggren","Farideh","Findex","Furrele","Gesrethe","Gilkass","Harann","Havilar","Hethress","Hillanot","Jaxi","Jezean","Jheri","Kadana","Kava","Korinn","Megren","Mijira","Mishann","Nala","Nuthra","Perra","Pogranix","Pyxrin","Quespa","Raiann","Rezena","Ruloth","Saphara","Savaran","Surina","Sora","Synthrin","Tatyan","Thava","Uadjit","Vezera","Zykroff"];
gen_data["DragonbornMasculine"] = ["Adrex","Arjhan","Azzakh","Balasar","Baradad","Bharash","Bidreked","Dadalan","Dazzazn","Direcris","Donaar","Fax","Gargax","Ghesh","Gorbundus","Greethen","Heskan","Hirrathak","Ildrex","Kaladan","Kerkad","Kiirith","Kriv","Maagog","Medrash","Mehen","Mozikth","Mreksh","Mugrunden","Nadarr","Nithther","Norkruuth","Nykkan","Pandjed","Patrin","Pijjirik","Quarethon","Rathkran","Rhogar","Rivaan","Sethrekar","Sharnash","Shedinn","Srorthen","Tarhun","Torinn","Trynnicus","Valorean","Vrondiss","Zedaar"];

// Dwarf
//--------------------------------------------------------------------------------
gen_data["DwarfSubrace"] = {
  "1":"Hill",
  "2":"Mountain"
};
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
gen_data["DwarfFamily"] = ["Aranore","Balderk","Battlehammer","Bigtoe","Bloodkith","Bofdann","Brawnanvil","Brazzik","Broodfist","Burrowfound","Caebrek","Daerdahk","Dankil","Daraln","Deepdelver","Durthane","Eversharp","Fallack","Fireforge","Foamtankard","Frostbeard","Glanhig","Goblinbane","Goldfinder","Gorunn","Graybeard","Hammerstone","Helcral","Holderhek","Ironfist","Loderr","Lutgehr","Morigak","Orcfoe","Rakankrak","Ruby-Eye","Rumnaheim","Silveraxe","Silverstone","Steelfist","Stoutale","Strakeln","Strongheart","Thrahak","Torevir","Torunn","Trollbleeder","Trueanvil","Trueblood","Ungart"];
gen_data["DwarfFeminine"] = ["Anbera","Artin","Audhild","Balifra","Barbena","Bardryn","Bolhild","Dagnal","Dariff","Delre","Diesa","Eldeth","Eridred","Falkrunn","Fallthra","Finellen","Gillydd","Gunnloda","Gurdis","Helgret","Helja","Hlin","Ilde","Jarana","Kathra","Kilia","Kristryd","Liftrasa","Marastyr","Mardred","Morana","Nalaed","Nora","Nurkara","Oriff","Ovina","Riswynn","Sannl","Therlin","Thodris","Torbera","Tordrid","Torgga","Urshar","Valida","Vistra","Vonana","Werydd","Whurdred","Yurgunn"];
gen_data["DwarfMasculine"] = ["Adrik","Alberich","Baern","Barendd","Beloril","Brottor","Dain","Dalgal","Darrak","Delg","Duergath","Dworic","Eberk","Einkil","Elaim","Erias","Fallond","Fargrim","Gardain","Gilthur","Gimgen","Gimurt","Harbek","Kildrak","Kilvar","Morgran","Morkral","Nalral","Nordak","Nuraval","Oloric","Olunt","Orsik","Oskar","Rangrim","Reirak","Rurik","Taklinn","Thoradin","Thorin","Thradal","Tordek","Traubon","Travok","Ulfgar","Uraim","Veit","Vonbin","Vondal","Whurbin"];

// Elf
//--------------------------------------------------------------------------------
gen_data["ElfSubrace"] = {
  "1":"High",
  "2":"Wood"
};
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

gen_data["ElfChild"] = ["Ael","Ang","Ara","Ari","Arn","Aym","Broe","Bryn","Cael","Cy","Dae","Del","Eli","Eryn","Faen","Fera","Gael","Gar","Innil","Jar","Kan","Koeth","Lael","Lue","Mai","Mara","Mella","Mya","Naeris","Naill","Nim","Phann","Py","Rael","Raer","Ren","Rinn","Rua","Sael","Sai","Sumi","Syllin","Ta","Thia","Tia","Traki","Vall","Von","Wil","Za"];
gen_data["ElfFamily"] = ["Aloro","Amakiir","Amastacia","Ariessus","Arnuanna","Berevan","Caerdonel","Caphaxath","Casilltenirra","Cithreth","Dalanthan","Eathalena","Erenaeth","Ethanasath","Fasharash","Firahel","Floshem","Galanodel","Goltorah","Hanali","Holimion","Horineth","Iathrana","Ilphelkiir","Iranapha","Koehlanna","Lathalas","Liadon","Meliamne","Mellerelel","Mystralath","Naïlo","Netyoive","Ofandrus","Ostoroth","Othronus","Qualanthri","Raethran","Rothenel","Selevarun","Siannodel","Suithrasas","Sylvaranth","Teinithra","Tiltathana","Wasanthi","Withrethin","Xiloscient","Xistsrith","Yaeldrin"];
gen_data["ElfFeminine"] = ["Adrie","Ahinar","Althaea","Anastrianna","Andraste","Antinua","Arara","Baelitae","Bethrynna","Birel","Caelynn","Chaedi","Claira","Dara","Drusilia","Elama","Enna","Faral","Felosial","Hatae","Ielenia","Ilanis","Irann","Jarsali","Jelenneth","Keyleth","Leshanna","Lia","Maiathah","Malquis","Meriele","Mialee","Myathethil","Naivara","Quelenna","Quillathe","Ridaro","Sariel","Shanairla","Shava","Silaqui","Sumnes","Theirastra","Thiala","Tiaathque","Traulam","Vadania","Valanthe","Valna","Xanaphia"];
gen_data["ElfMasculine"] = ["Adran","Aelar","Aerdeth","Ahvain","Aramil","Arannis","Aust","Azaki","Beiro","Berrian","Caeldrim","Carric","Dayereth","Dreali","Efferil","Eiravel","Enialis","Erdan","Erevan","Fivin","Galinndan","Gennal","Hadarai","Halimath","Heian","Himo","Immeral","Ivellios","Korfel","Lamlis","Laucian","Lucan","Mindartis","Naal","Nutae","Paelias","Peren","Quarion","Riardon","Rolen","Soveliss","Suhnae","Thamior","Tharivol","Theren","Theriatis","Thervan","Uthemar","Vanuath","Varis"];

// Gnome
//--------------------------------------------------------------------------------
gen_data["GnomeSubrace"] = {
  "1":"Forest",
  "2":"Rock"
};
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

gen_data["GnomeFamily"] = ["Albaratie","Bafflestone","Beren","Boondiggles","Cobblelob","Daergel","Dunben","Fabblestabble","Fapplestamp","Fiddlefen","Folkor","Garrick","Gimlen","Glittergem","Gobblefirn","Gummen","Horcusporcus","Humplebumple","Ironhide","Leffery","Lingenhall","Loofollue","Maekkelferce","Miggledy","Munggen","Murnig","Musgraben","Nackle","Ningel","Nopenstallen","Nucklestamp","Offund","Oomtrowl","Pilwicken","Pingun","Quillsharpener","Raulnor","Reese","Rofferton","Scheppen","Shadowcloak","Silverthread","Sympony","Tarkelby","Timbers","Turen","Umbodoben","Waggletop","Welber","Wildwander"];
gen_data["GnomeFeminine"] = ["Abalaba","Bimpnottin","Breena","Buvvie","Callybon","Caramip","Carlin","Cumpen","Dalaba","Donella","Duvamil","Ella","Ellyjoybell","Ellywick","Enidda","Lilli","Loopmottin","Lorilla","Luthra","Mardnab","Meena","Menny","Mumpena","Nissa","Numba","Nyx","Oda","Oppah","Orla","Panana","Pyntle","Quilla","Ranala","Reddlepop","Roywyn","Salanop","Shamil","Siffress","Symma","Tana","Tenena","Tervaround","Tippletoe","Ulla","Unvera","Veloptima","Virra","Waywocket","Yebe","Zanna"];
gen_data["GnomeMasculine"] = ["Alston","Alvyn","Anverth","Arumawann","Bilbron","Boddynock","Brocc","Burgell","Cockaby","Crampernap","Dabbledob","Delebean","Dimble","Eberdeb","Eldon","Erky","Fablen","Fibblestib","Fonkin","Frouse","Frug","Gerbo","Gimble","Glim","Igden","Jabble","Jebeddo","Kellen","Kipper","Namfoodle","Oppleby","Orryn","Paggen","Pallabar","Pog","Qualen","Ribbles","Rimple","Roondar","Sapply","Seebo","Senteq","Sindri","Umpen","Warryn","Wiggens","Wobbles","Wrenn","Zaffrab","Zook"];

// Half-Elf
//--------------------------------------------------------------------------------
gen_data["Half-ElfSubrace"] = {
  "1-40":"Human",
  "41-80":"Elf"
};
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
gen_data["Half-OrcSubrace"] = {
  "1-40":"Human",
  "41-80":"Orc"
};
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
gen_data["HalflingSubrace"] = {
  "1":"Lightfoot",
  "2":"Stout"
};
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

gen_data["HalflingFamily"] = ["Appleblossom","Bigheart","Brightmoon","Brushgather","Cherrycheeks","Copperkettle","Deephollow","Elderberry","Fastfoot","Fatrabbit","Glenfellow","Goldfound","Goodbarrel","Goodearth","Greenbottle","Greenleaf","High-hill","Hilltopple","Hogcollar","Honeypot","Jamjar","Kettlewhistle","Leagallow","Littlefoot","Nimblefingers","Porridgepot","Quickstep","Reedfellow","Shadowquick","Silvereyes","Smoothhands","Stonebridge","Stoutbridge","Stoutman","Strongbones","Sunmeadow","Swiftwhistle","Tallfellow","Tealeaf","Tenpenny","Thistletop","Thorngage","Tosscobble","Underbough","Underfoot","Warmwater","Whispermouse","Wildcloak","Wildheart","Wiseacre"];
gen_data["HalflingFeminine"] = ["Alain","Andry","Anne","Bella","Blossom","Bree","Callie","Chenna","Cora","Dee","Dell","Eida","Eran","Euphemia","Georgina","Gynnie","Harriet","Jasmine","Jillian","Jo","Kithri","Lavinia","Lidda","Maegan","Marigold","Merla","Myria","Nedda","Nikki","Nora","Olivia","Paela","Pearl","Pennie","Philomena","Portia","Robbie","Rose","Saral","Seraphina","Shaena","Stacee","Tawna","Thea","Trym","Tyna","Vani","Verna","Wella","Willow"];
gen_data["HalflingMasculine"] = ["Alton","Ander","Bernie","Bobbin","Cade","Callus","Corrin","Dannad","Danniel","Eddie","Egart","Eldon","Errich","Fildo","Finnan","Franklin","Garret","Garth","Gilbert","Gob","Harol","Igor","Jasper","Keith","Kevin","Lazam","Lerry","Lindal","Lyle","Merric","Mican","Milo","Morrin","Nebin","Nevil","Osborn","Ostran","Oswalt","Perrin","Poppy","Reed","Roscoe","Sam","Shardon","Tye","Ulmo","Wellby","Wendel","Wenner","Wes"];

// Human
//--------------------------------------------------------------------------------
gen_data["HumanSubrace"] = {
  "1":"Arabic",
  "2":"Barovian",
  "3":"Celtic",
  "4":"Chinese",
  "5":"Egyptian",
  "6":"English",
  "7":"French",
  "8":"German",
  "9":"Greek",
  "10":"Indian",
  "11":"Japanese",
  "12":"Maori",
  "13":"Mesoamerican",
  "14":"Niger-Congo",
  "15":"Norse",
  "16":"Polynesian",
  "17":"Roman",
  "18":"Slavic",
  "19":"Spanish"
};
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

// -- Arabic
gen_data["ArabicFamily"] = ["al-Abbasi","al-Ajmani","al-Amelai","al-Anazahi","al-Aqeeli","al-Asadi","al-Atiyahi","al-Awazemi","al-Baggarai","al-Bahilai","al-Balawii","al-Balharethi","al-Bariqi","al-Buainaini","al-Darodi","al-Dawasiri","al-Dhafeeri","al-Dhubyani","al-Fahami","al-Farahidi","al-Fazarai","al-Gaini","al-Gashaami","al-Ghaithi","al-Ghamidi","al-Ghassani","al-Ghifari","al-Hakami","al-Hakli","al-Hamidai","al-Hammyari","al-Harithi","al-Hashimi","al-Hawajiri","al-Hilali","al-Humaydahi","al-Jabari","al-Jaidi","al-Jalafi","al-Jiburi","al-Judhami","al-Jumahi","al-Jushami","al-Kaabi","al-Karimi","al-Kathiri","al-Kendahi","al-Khalidi","al-Khashami","al-Khawlani","al-Khazraji","al-Kinanahi","al-Lakhmi","al-Maadeedi","al-Makhzumi","al-Maliki","al-Manaseeri","al-Mehrii","al-Mukhtari","al-Murrahi","al-Mustafai","al-Mutayri","al-Nabhani","al-Nadiri","al-Najjari","al-Nawfali","al-Nuaimi","al-Otaibi","al-Qahtani","al-Qurayshi","al-Rabiahi","al-Rasheedi","al-Saidai","al-Sabai","al-Saeedi","al-Sahali","al-Sahmi","al-Shabeebi","al-Shahrani","al-Sharari","al-Shehiri","al-Shuraifi","al-Subaiei","al-Sulaymi","al-Suwaidi","al-Taghlibi","al-Tahiri","al-Tamimi","al-Thamudi","al-Tuhari","al-Ubaydi","al-Udhrahi","al-Umayyahi","al-Utaybahi","al-Waili","al-Yafai","al-Yami","al-Zahrani","al-Zaydi","al-Zuhrahi"]
gen_data["ArabicFeminine"] = ["Aaliyah","Aida","Akilah","Alia","Amina","Atefeh","Chaima","Dalia","Ehsan","Elham","Farah","Fatemah","Gamila","Iesha","Inbar","Kamaria","Khadija","Layla","Lupe","Nabila","Nadine","Naima","Najila","Najwa","Nakia","Nashwa","Nawra","Nuha","Nura","Oma","Qadira","Qamar","Qistina","Rahima","Rihanna","Saadia","Sabah","Sada","Saffron","Sahar","Salma","Shatha","Tahira","Takisha","Thana","Yadira","Zahra","Zaida","Zaina","Zeinab"];
gen_data["ArabicMasculine"] = ["Abbad","Abdul","Achmed","Akeem","Alif","Amir","Asim","Bashir","Bassam","Fahim","Farid","Farouk","Fayez","Fayyaad","Fazil","Hakim","Halil","Hamid","Hazim","Heydar","Hussein","Jabari","Jafar","Jahid","Jamal","Kalim","Karim","Kazim","Khadim","Khalid","Mahmud","Mansour","Musharraf","Mustafa","Nadir","Nazim","Omar","Qadir","Qusay","Rafiq","Rakim","Rashad","Rauf","Saladin","Sami","Samir","Talib","Tamir","Tariq","Yazid"];

// -- Barovian
gen_data["BarovianFamily"] = ["Alastroi","Antonovich","Antonova","Barthos","Belasco","Cantemir","Dargovich","Dargova","Diavolov","Diminski","Dilisnya","Drazkoi","Garvinski","Grejenko","Groza","Grygorovich","Grygorova","Ivanovich","Ivanova","Janek","Karushkin","Konstantinovich","Konstantinova","Krezkov","Krezkova","Krykski","Lansten","Lazarescu","Lukresh","Lipsiege","Martikov","Martikova","Mironovich","Mironovna","Moldovar","Nikolovich","Nikolova","Nimirovich","Nimirova","Oronovich","Oronova","Petrovich","Petrovna","Polensky","Radovich","Radova","Rilsky","Stefanovich","Stefanova","Strazni","Swilovich","Swilova","Taltos","Targolov","Targolova","Tyminski","Ulbrek","Ulrich","Vadu","Voltanescu","Zalenski","Zalken"];
gen_data["BarovianFeminine"] = ["Alana","Clavdia","Danya","Dezdrelda","Diavola","Dorina","Drasha","Drilvia","Elisabeta","Fatima","Grilsha","Isabella","Ivana","Jarzinka","Kala","Katerina","Kereza","Korina","Lavinia","Magda","Marta","Mathilda","Minodora","Mirabel","Miruna","Nimira","Nyanka","Olivenka","Ruxandra","Sorina","Tereska","Valentina","Vasha","Victoria","Wensencia","Zondra"];
gen_data["BarovianMasculine"] = ["Alek","Andrej","Anton","Balthazar","Bogan","Boris","Dargos","Darzin","Dragomir","Emeric","Falkon","Frederich","Franz","Gargosh","Gorek","Grygori","Hans","Harkus","Ivan","Jirko","Kobal","Korga","Krystofor","Lazlo","Livius","Marek","Miroslav","Nikolaj","Nimir","Oleg","Radovan","Radu","Seraz","Sergei","Stefan","Tural","Valentin","Vasily","Vladislav","Waltar","Yesper","Zsolt"];
 
// -- Celtic
gen_data["CelticFamily"] = ["Aileanach","Ambarsan","Arasgain","Barrach","Beitean","Bhacstair","Bhodhsa","Blacach","Blàrach","Breac","Breathnach","Brothaigh","Bràigheach","Brùn","Buideach","Buids","Cailbhin","Caileanach","Cananach","Caoidheach","Catach","Catanach","Ceallach","Ceanadach","Cearrach","Ciogach","Càidh","Còmhan","Dalais","Druimein","Dubhach","Dunaidh","Dùghlas","Eabarcrombaigh","Fearghasdan","Fionnlasdan","Flannagàin","Flimean","Foirbeis","Foirbeiseach","Friseal","Gallach","Geadais","Gilios","Giobsan","Grannda","Greumach","Griogal","Griogalach","Guaire","Guinne","Gutraidh","Gòrdanach","Latharnach","Lathurna","Leamhnach","Leòideach","Lobhdain","Loganac","Loudain","Matasan","Mathanach","Moireasdan","Morganach","Munna","Màrnach","Mèinn","Mèinnearach","Niocalsan","Paorach","Peadarsan","Peucag","Peutan","Puidreach","Rathais","Robasan","Rosach","Rothach","Ruadh","Ruiseal","Sailcirc","Salmond","Seagha","Sginnearach","Sgot","Sgèin","Singleir","Siosal","Smios","Stiùbhart","Suthurlanach","Sùdrach","Todt","Tolmach","Tuairnear","Tulach","Tàillear","Ualas","Umphraidh","Urchardan"]
gen_data["CelticFeminine"] = ["Aife","Aina","Alane","Ardena","Arienh","Beatha","Birgit","Briann","Caomh","Cara","Cinnia","Cordelia","Deheune","Divone","Donia","Doreena","Elsha","Enid","Ethne","Evelina","Fianna","Genevieve","Gilda","Gitta","Grania","Gwyndolin","Idelisa","Isolde","Keelin","Kennocha","Lavena","Lesley","Linnette","Lyonesse","Mabina","Marvina","Mavis","Mirna","Morgan","Muriel","Nareena","Oriana","Regan","Ronat","Rowena","Selma","Ula","Venetia","Wynne","Yseult"];
gen_data["CelticMasculine"] = ["Airell","Airic","Alan","Anghus","Aodh","Bardon","Bearacb","Bevyn","Boden","Bran","Brasil","Bredon","Brian","Bricriu","Bryant","Cadman","Caradoc","Cedric","Conalt","Conchobar","Condon","Darcy","Devin","Dillion","Donaghy","Donall","Duer","Eghan","Ewyn","Ferghus","Galvyn","Gildas","Guy","Harvey","Iden","Irven","Karney","Kayne","Kelvyn","Kunsgnos","Leigh","Maccus","Moryn","Neale","Owyn","Pryderi","Reaghan","Taliesin","Tiernay","Turi"];
 
// -- Chinese
gen_data["ChineseFamily"] = ["An","Ang","Bái","Cháng","Chén","Cheong","Chéng","Cui","Cài","Cáo","Ding","Dong","Duàn","Dài","Dèng","Dù","Fang","Fàn","Féng","Fù","Gao","Gong","Guo","Gù","Hao","Huáng","Hán","Hè","Hé","Hóu","Hú","Jia","Jiang","Jin","Kang","Kong","Li","Liáng","Liú","Lu","Luó","Lài","Lí","Lín","Lóng","Lù","Ma","Máo","Mèng","Min","Pan","Péng","Qiu","Qián","Qiáo","Qín","Rén","Shen","Shi","Shào","Shèng","Shí","Su","Sun","Sòng","Tang","Tián","Tán","Táng","Wang","Wu","Wàn","Wáng","Wèi","Wén","Wú","Xiao","Xià","Xiè","Xióng","Xu","Xue","Xú","Yin","Yuen","Yuán","Yán","Yáng","Yáo","Yè","Yì","Yú","Zeng","Zhang","Zhong","Zhou","Zhu","Zhào","Zhèng","Zou"]
gen_data["ChineseFeminine"] = ["Ai","Anming","Baozhai","Bei","Caixia","Changchang","Chen","Chou","Chunhua","Daianna","Daiyu","Die","Ehuang","Fenfang","Ge","Hong","Huan","Huifang","Jia","Jiao","Jiaying","Jingfei","Jinjing","Lan","Li","Lihua","Lin","Ling","Liu","Meili","Ning","Qi","Qiao","Rong","Shu","Shuang","Song","Ting","Wen","Xia","Xiaodan","Xiaoli","Xingjuan","Xue","Ya","Yan","Ying","Yuan","Yue","Yun"];
gen_data["ChineseMasculine"] = ["Bingwen","Bo","Bolin","Chang","Chao","Chen","Cheng","Da","Dingxiang","Fang","Feng","Fu","Gang","Guang","Hai","Heng","Hong","Huan","Huang","Huiliang","Huizhong","Jian","Jiayi","Junjie","Kang","Lei","Liang","Ling","Liwei","Meilin","Niu","Peizhi","Peng","Ping","Qiang","Qiu","Quan","Renshu","Rong","Ru","Shan","Shen","Tengfei","Wei","Xiaobo","Xiaoli","Xin","Yang","Ying","Zhong"];
 
// -- Egyptian
gen_data["EgyptianFeminine"] = ["A'at","Ahset","Amunet","Aneksi","Atet","Baketamon","Betrest","Bunefer","Dedyet","Hatshepsut","Hentie","Herit","Hetepheres","Intakaes","Ipwet","Itet","Joba","Kasmut","Kemanub","Khemut","Kiya","Maia","Menhet","Merit","Meritamen","Merneith","Merseger","Muyet","Nebet","Nebetah","Nedjemmut","Nefertiti","Neferu","Neithotep","Nit","Nofret","Nubemiunu","Peseshet","Pypuy","Qalhata","Rai","Redji","Sadeh","Sadek","Sitamun","Sitre","Takhat","Tarset","Taweret","Werenro"];
gen_data["EgyptianMasculine"] = ["Ahmose","Akhom","Amasis","Amenemhet","Anen","Banefre","Bek","Djedefre","Djoser","Hekaib","Henenu","Horemheb","Horwedja","Huya","Ibebi","Idu","Imhotep","Ineni","Ipuki","Irsu","Kagemni","Kawab","Kenamon","Kewap","Khaemwaset","Khafra","Khusebek","Masaharta","Meketre","Menkhaf","Merenre","Metjen","Nebamun","Nebetka","Nehi","Nekure","Nessumontu","Pakhom","Pawah","Pawero","Ramose","Rudjek","Sabaf","Sebek-khu","Sebni","Senusret","Shabaka","Somintu","Thaneni","Thethi"];
 
// -- English
gen_data["EnglishFamily"] = ["Alder","Ash","Ashdown","Atwood","Barnes","Becker","Berry","Briar","Briggs","Brock","Brook","Bundy","Burnside","Burroughs","Bush","Butcher","Butler","Clay","Court","Cox","Croft","Cross","Crump","Dale","Deane","Delaney","Dike","Dodd","Ford","Forrest","Fox","Freeman","Garside","Gorsuch","Graves","Green","Greeves","Gross","Grove","Grover","Hall","Hawthorne","Hazel","Head","Heather","Hill","Holley","Holmes","Holt","Homer","Hooke","Hope","House","Howe","Hume","Hyde","Johnston","Kaye","Keats","Kerry","Kirk","Lamb","Layne","Lea","Lowell","March","Marsh","Marshal","Martin","May","Miller","Mills","Moore","Newby","Paine","Paxton","Perrin","Pike","Pitt","Preacher","Provost","Purvis","Ridge","Rock","Rose","Rowen","Sangster","Sellers","Shaw","Short","Thorne","Underwood","Walsh","Wells","West","Whitney","Wilde","Wood","Wragge","Wynne"]
gen_data["EnglishFeminine"] = ["Adelaide","Agatha","Agnes","Alice","Aline","Anne","Avelina","Avice","Beatrice","Cecily","Egelina","Eleanor","Elizabeth","Ella","Eloise","Elysande","Emeny","Emma","Emmeline","Ermina","Eva","Galiena","Geva","Giselle","Griselda","Hadwisa","Helen","Herleva","Hugolina","Ida","Isabella","Jacoba","Jane","Joan","Juliana","Katherine","Margery","Mary","Matilda","Maynild","Millicent","Oriel","Rohesia","Rosalind","Rosamund","Sarah","Susannah","Sybil","Williamina","Yvonne"];
gen_data["EnglishMasculine"] = ["Adam","Adelard","Aldous","Anselm","Arnold","Bernard","Bertram","Charles","Clerebold","Conrad","Diggory","Drogo","Everard","Frederick","Geoffrey","Gerald","Gilbert","Godfrey","Gunter","Guy","Henry","Heward","Hubert","Hugh","Jocelyn","John","Lance","Manfred","Miles","Nicholas","Norman","Odo","Percival","Peter","Ralf","Randal","Raymond","Reynard","Richard","Robert","Roger","Roland","Rolf","Simon","Theobald","Theodoric","Thomas","Timm","William","Wymar"];

// -- French
gen_data["FrenchFamily"] = ["Aignelme","Auberteau","Balenier","Baujart","Berangieri","Blanchart","Borderel","Bourlabbé","Brodierer","Cadiot","Catifinaly","Charentone","Ciraisse","Contessee","Courtois","d’Attainville","Dantannt","de Bailliir","de Blayseville","de Carnaygnolles","de Choisy","de Dreux","de Gonnaulx","de Henault","de la Charité","de la Marche","de la Ville","de Lestoffe","de Marigni","de Nantueil","de Praelles","de Saint Climent","de Sesselles","de Vannedicque","de Waryllons","des Moulinsvre","Dourches","du Consiel","du Ploich","Durybourc","Fessier","Fournier","Galerne","Gilleberty","Graciast","Guiart","Hanaige","Herbelot","Huneier","Jubontaille","Lambertr","La Beraudele","La Doyenneoise","La Micaudee","Le Begue","Le Bryais","Le Drouais","Le Gendre","Le Maireer","Le Normantr","Le Saigenier","Le Vigneron","Levesque","Lucast","Maignat","Masleer","Maugist","Mercier","Micottre","Moliert","Morhier","Moursin","Navarre","Ogiert","Pagaut","Pasquier","Perrechon","Pieton","Plansson","Pontinle","Poucin","Prieron","Quilletau","Raguiere","Rappiotn","Rengault","Rivier","Rousseau","Saillart","Sansson","Seramet","Souriz","Taverne","Thiboult","Tillartn","Trochelle","Turquanr","Veaser","Vigneron","Wateure"]
gen_data["FrenchFeminine"] = ["Aalis","Agatha","Agnez","Alberea","Alips","Amée","Amelot","Anne","Avelina","Blancha","Cateline","Cecilia","Claricia","Collette","Denisete","Dorian","Edelina","Emelina","Emmelot","Ermentrudis","Gibelina","Gila","Gillette","Guiburgis","Guillemette","Guoite","Hecelina","Heloysis","Helyoudis","Hodeardis","Isabellis","Jaquette","Jehan","Johanna","Juliote","Katerine","Luciana","Margot","Marguerite","Maria","Marie","Melisende","Odelina","Perrette","Petronilla","Sedilia","Stephana","Sybilla","Ysabeau","Ysabel"];
gen_data["FrenchMasculine"] = ["Ambroys","Ame","Andri","Andriet","Anthoine","Bernard","Charles","Charlot","Colin","Denis","Durant","Edouart","Eremon","Ernault","Ethor","Felix","Floquart","Galleren","Gaultier","Gilles","Guy","Henry","Hugo","Imbert","Jacques","Jacquot","Jean","Jehannin","Louis","Louys","Loys","Martin","Michel","Mille","Morelet","Nicolas","Nicolle","Oudart","Perrin","Phillippe","Pierre","Regnault","Richart","Robert","Robinet","Sauvage","Simon","Talbot","Tanguy","Vincent"];
 
// -- German
gen_data["GermanFamily"] = ["Abel","Arnolt","Bartholme","Belligs","Bollinger","Brohmer","Cappus","Dasel","Deutschenbaur","Dottenreucherin","Eck","Enngelhart","Fendin","Fredenman","Ful","Geyger","Göck","Groll","Gutman","Happolt","Heffnerin","Hertman","Hilprant","Honiger","Isenmenger","Kapp","Kempff","Kleinschrotte","Konig","Küchlin","Lanng","Lerchn","Loffler","Macklerin","Mendel","Mewslin","Most","Murrin","Neuckam","Nuber","Ochslin","Oswalt","Pawczer","Pele","Pfaff","Pffeller","Pischoff","Prewnnegk","Pütel","Raschart","Regerin","Reppin","Reynhartt","Rodegast","Rosennberger","Rufflin","Sattler","Schawch","Schenkel","Schlee","Schmiddt","Schnee","Schnyder","Schreiber","Schulten","Schwarcz","Schycker","Sesler","Simler","Spanring","Stahel","Steller","Stoll","Streibe","Stuler","Swapp","Tagthurner","Thoman","Trager","Tuchscherrer","Veste","Vilshofer","Volcker","von Grünigen","von Radach","von Winenden","Voslein","Walther","Weick","Weltzlin","Werlein","Weyck","Widmann","Winter","Wishart","Wyck","Zech","Zigel","Zutlinger","Zweck"]
gen_data["GermanFeminine"] = ["Adelhayt","Affra","Agatha","Allet","Angnes","Anna","Apell","Applonia","Barbara","Brida","Brigita","Cecilia","Clara","Cristina","Dorothea","Duretta","Ella","Els","Elsbeth","Engel","Enlein","Enndlin","Eva","Fela","Fronicka","Genefe","Geras","Gerhauss","Gertrudt","Guttel","Helena","Irmel","Jonata","Katerina","Kuen","Kungund","Lucia","Madalena","Magdalen","Margret","Marlein","Martha","Otilia","Ottilg","Peternella","Reusin","Sibilla","Ursel","Vrsula","Walpurg"];
gen_data["GermanMasculine"] = ["Albrecht","Allexander","Baltasar","Benedick","Berhart","Caspar","Clas","Cristin","Cristoff","Dieterich","Engelhart","Erhart","Felix","Frantz","Fritz","Gerhart","Gotleib","Hans","Hartmann","Heintz","Herman","Jacob","Jeremias","Jorg","Karll","Kilian","Linhart","Lorentz","Ludwig","Marx","Melchor","Mertin","Michel","Moritz","Osswald","Ott","Peter","Rudolff","Ruprecht","Sewastian","Sigmund","Steffan","Symon","Thoman","Ulrich","Vallentin","Wendel","Wilhelm","Wolff","Wolfgang"];

// -- Greek
gen_data["GreekFamily"] = ["Alexopoulos","Anagnos","Andreadis","Apostolos","Argyros","Artino","Athanas","Balaban","Banis","Biros","Callas","Castellanos","Chontos","Collias","Condos","Cosmos","Delis","Demopoulos","Doukas","Drivas","Economos","Eliopoulos","Fotopoulos","Gabris","Galatas","Gekas","Georgiades","Gianakos","Gikas","Goga","Grivas","Hallas","Hatzis","Hondros","Kairis","Kalfas","Kallas","Kanelos","Kara","Karalis","Katsaros","Kefalas","Kontos","Kormos","Kosta","Lagana","Lambros","Lasko","Leva","Lillis","Loris","Macris","Makos","Mangas","Manos","Maras","Markos","Mattas","Melis","Michaelides","Milas","Mires","Mola","Moros","Myron","Nasso","Nikas","Nino","Pallas","Panos","Patera","Peris","Petrakis","Poulos","Regas","Rines","Romanos","Rota","Rubis","Sallas","Sarantos","Savas","Simos","Soulis","Speros","Stamatis","Stavros","Tavoularis","Thanos","Toles","Valis","Vasco","Vasilakis","Vassos","Vidales","Vlachos","Vlahos","Xenos","Zervas","Zika"]
gen_data["GreekFeminine"] = ["Acantha","Aella","Alektos","Alkippe","Andromeda","Antigone","Ariadne","Astraea","Chloros","Chryseos","Daphne","Despoina","Dione","Eileithyia","Elektra","Euadne","Eudora","Eunomia","Hekabe","Helene","Hermoione","Hippolyte","Ianthe","Iokaste","Iole","Iphigenia","Ismene","Kalliope","Kallisto","Kalypso","Karme","Kassandra","Kassiopeia","Kirke","Kleio","Klotho","Klytië","Kynthia","Leto","Megaera","Melaina","Melpomene","Nausikaa","Nemesis","Niobe","Ourania","Phaenna","Polymnia","Semele","Theia"];
gen_data["GreekMasculine"] = ["Adonis","Adrastos","Aeson","Aias","Aineias","Aiolos","Alekto","Alkeides","Argos","Brontes","Damazo","Dardanos","Deimos","Diomedes","Endymion","Epimetheus","Erebos","Euandros","Ganymedes","Glaukos","Hektor","Heros","Hippolytos","Iacchus","Iason","Kadmos","Kastor","Kephalos","Kepheus","Koios","Kreios","Laios","Leandros","Linos","Lykos","Melanthios","Menelaus","Mentor","Neoptolemus","Okeanos","Orestes","Pallas","Patroklos","Philandros","Phoibos","Phrixus","Priamos","Pyrrhos","Xanthos","Zephyros"];

// -- Indian
gen_data["IndianFamily"] = ["Aggarwal","Anand","Arun","Bahl","Bhat","Chada","Chakrabarti","Chandra","Chandrasekar","Charan","Chaudhary","Chauhan","Darsha","Dhawan","Dutta","Eswarapu","Gandhi","Ganesh","Goel","Jai","Jana","Jindal","Joshi","Kapoor","Kishore","Krishnamurthy","Kumar","Lal","Lalit","Lata","Madan","Mahajan","Malhotra","Malik","Manju","Manohar","Mati","Mehra","Mehta","Mittal","Muthu","Nagpal","Nandin","Naran","Narmada","Naseer","Nath","Neeharika","Neela","Neeru","Nigam","Nirmal","Nita","Pal","Patel","Pawan","Prithviraj","Prasad","Punj","Puri","Rai","Rajagopal","Rajan","Raje","Rajput","Raman","Rana","Ranga","Rastogi","Roopak","Sahni","Sai","Saini","Sameer","Sandeep","Sara","Saxena","Sehgal","Sen","Sethi","Shan","Sharma","Soni","Sripadam","Srini","Srivas","Srivastava","Subram","Subramani","Sudesh","Sudha","Suri","Swami","Tyagi","Uddin","Veena","Veer","Verma","Vijaya","Vish"]
gen_data["IndianFeminine"] = ["Abha","Aishwarya","Amala","Ananda","Ankita","Archana","Avani","Chandana","Chandrakanta","Chetan","Darshana","Devi","Dipti","Esha","Gauro","Gita","Indira","Indu","Jaya","Kala","Kalpana","Kamala","Kanta","Kashi","Kishori","Lalita","Lina","Madhur","Manju","Meera","Mohana","Mukta","Nisha","Nitya","Padma","Pratima","Priya","Rani","Sarala","Shakti","Shanta","Shobha","Sima","Sonal","Sumana","Sunita","Tara","Valli","Vijaya","Vimala"];
gen_data["IndianMasculine"] = ["Abhay","Ahsan","Ajay","Ajit","Akhil","Amar","Amit","Ananta","Aseem","Ashok","Bahadur","Basu","Chand","Chandra","Damodar","Darhsan","Devdan","Dinesh","Dipak","Gopal","Govind","Harendra","Harsha","Ila","Isha","Johar","Kalyan","Kiran","Kumar","Lakshmana","Mahavir","Narayan","Naveen","Nirav","Prabhakar","Prasanna","Raghu","Rajanikant","Rakesh","Ranjeet","Rishi","Sanjay","Sekar","Shandar","Sumantra","Vijay","Vikram","Vimal","Vishal","Yash"];

// -- Japanese
gen_data["JapaneseFamily"] = ["Abe","Ando","Aoki","Arai","Chiba","Endo","Fujii","Fujimoto","Fujita","Fujiwara","Fukuda","Goto","Hara","Harada","Hasegawa","Hashimoto","Hayashi","Hirano","Ikeda","Imai","Inoue","Ishida","Ishii","Ishikawa","Ito","Iwasaki","Kaneko","Kato","Kikuchi","Kimura","Kinoshita","Kobayashi","Kojima","Kondo","Kubo","Kudo","Maeda","Maruyama","Masuda","Matsuda","Matsui","Matsumoto","Matsuo","Miura","Miyamoto","Miyazaki","Mori","Morita","Murakami","Murata","Nakagawa","Nakajima","Nakamura","Nakano","Nakayama","Nishimura","Noguchi","Nomura","Ogawa","Ohno","Okada","Okamoto","Onishi","Ono","Ota","Otsuka","Saito","Saito","Sakai","Sakamoto","Sakurai","Sano","Sasaki","Sato","Shibata","Shimizu","Sugawara","Sugimoto","Sugiyama","Suzuki","Takada","Takagi","Takahashi","Takeda","Takeuchi","Tamura","Tanaka","Taniguchi","Uchida","Ueda","Ueno","Wada","Watanabe","Yamada","Yamaguchi","Yamamoto","Yamashita","Yamazaki","Yokoyama","Yoshida"]
gen_data["JapaneseFeminine"] = ["Aika","Akemi","Akiko","Amaya","Asami","Ayumi","Bunko","Chieko","Chika","Chiyo","Cho","Eiko","Emiko","Eri","Etsuko","Gina","Hana","Haruki","Hideko","Hikari","Hiroko","Hisoka","Hishi","Hotaru","Izumi","Kameyo","Kasumi","Kimiko","Kotone","Kyoko","Maiko","Masako","Mi","Minori","Mizuki","Naoki","Natsuko","Noriko","Rei","Ren","Saki","Shigeko","Shinju","Sumiko","Toshiko","Tsukiko","Ume","Usagi","Yasuko","Yuriko"];
gen_data["JapaneseMasculine"] = ["Akio","Atsushi","Daichi","Daiki","Daisuke","Eiji","Fumio","Hajime","Haru","Hideaki","Hideo","Hikaru","Hiro","Hiroki","Hisao","Hitoshi","Isamu","Isao","Jun","Katashi","Katsu","Kei","Ken","Kenshin","Kenta","Kioshi","Makoto","Mamoru","Masato","Masumi","Noboru","Norio","Osamu","Ryota","Sadao","Satoshi","Shigeo","Shin","Sora","Tadao","Takehiko","Takeo","Takeshi","Takumi","Tamotsu","Tatsuo","Toru","Toshio","Yasuo","Yukio"];

// -- Maori
gen_data["MaoriFamily"] = ["Ahipene","Awherana","Ehau","Ehutu","Erumate","Ewe","Hae","Hahauterangi","Haumoetahanga","Huapia","Hauraki","Hautonga","Iahaukina","Ihoatamai","Kaahu","Kaharouatauhu","Kahukurangi","Kitengahau","Korangawhenua","Mahamaumu","Manawarangi","Mangakaraka","Matakairua","Moeao","Mokotahana","Naera","Ngahia","Nukumaitore","Ohanga","Onewatahi","Otuakaino","Owai","Paaka","Parepupuhi","Pohomare","Rahera","Rimupae","Rurumai","Taanemoeahi","Tamatetane","Tauratu","Tukawa","Tupaoa","Uatahi","Umuparae","Ureteangina","Waea","Waipaia","Wetahu","Whakaeke","Wikipua",""]
gen_data["MaoriFeminine"] = ["Ai","Akeake","Akumatua","Arepo","Hangahai","Hawina","Henua","Hinakiri","Hiriwai","Ihanga","Inekoa","Iria","Kahutakua","Kaiwiri","Maihe","Makei","Mokara","Mawaki","Mokotara","Moui","Mutaroa","Naihi","Neina","Ngamimi","Ngaruaka","Noanga","Noki","Notia","Oma","Orotai","Paikura","Pakeka","Piho","Pukai","Raiatea","Rangioua","Rataka","Rawiti","Taikaroa","Tamanga","Tangiha","Tariwa","Taumuka","Titohara","Toka","Turawa","Uariki","Waiano","Wakaia","Wia"]
gen_data["MaoriMasculine"] = ["Akehakeha","Ango","Ariri","Eau","Ekoro","Enuku","Eteka","Hakara","Hauata","Hoepa","Ihmua","Itu","Kaatu","Kamou","Kauwi","Kumeti","Mahukoko","Manakore","Mapo","Matapiko","Mohunga","Mokia","Namuna","Ngapei","Nohokau","Paau","Paiwa","Parakiwai","Patui","Pawakaho","Poewa","Poutahi","Rangitauwira","Rari","Riakina","Ruataniwa","Tahaihai","Takohi","Tamaikuku","Tauronga","Tikai","Tinihanga","Tirowaru","Tokia","Topeni","Tuiata","Uamutu","Waihua","Wakae","Wio"]

// -- Mesoamerican
gen_data["MesoamericanFamily"] = ["Acatepec","Acxotlan","Ahuatl","Amaxal","Apaxco","Azcatl","Chapul","Coatl","Cocolotl","Colexcua","Colomoxca","Coyopotl","Cuahquentzi","Cuahtzon","Cuahuey","Cuahuizo","Cuahutenco","Cuahutle","Cuapa","Cuatlehua","Cuatli","Cuaxiloa","Ehecatl","Huepa","Huaxacac","Huexotl","Hueytletl","Huitzil","Huitztlacatl","Itzcoatl","Itzcua","Itzmoyotl","Ixehuatl","Ixtaccihuatl","Maxil","Memehua","Mitznahuatl","Mixca","Moyotl","Naxi","Nocelotl","Ocomatl","Ocotoxtle","Pancoatl","Papaqui","Patee","Petlacalco","Quecholac","Quia","Quitl","Tecaxco","Tecpanecatl","Tecuampil","Tecuanhuehue","Tecuatl","Tentle","Teocuitlatlan","Teotl","Tepetl","Tepeyahuitl","Tepontla","Tetzopa","Teutle","Tlachi","Tlacoxolal","Tlahuex","Tlahuizo","Tlalolin","Tlaltelpa","Tlapa","Tlapalama","Tlapaltotoli","Tlapanco","Tlatehui","Tlatoa","Tocal","Tochihuitl","Tochimani","Tolama","Tonacatl","Totozintle","Toxqui","Toxtle","Xaltenco","Xicale","Xicotenco","Xique","Xoampil","Xochitecatl","Xochitiotzi","Xolalpa","Xoletl","Xolotlan","Yopico","Zacatzontetl","Zempoaltecatl","Zepahua","Zipacna","Zitlal","Zontlimatzi"]
gen_data["MesoamericanFeminine"] = ["Ahuiliztli","Atl","Centehua","Chalchiuitl","Chipahua","Cihuaton","Citlali","Citlalmina","Coszcatl","Cozamalotl","Cuicatl","Eleuia","Eloxochitl","Eztli","Ichtaca","Icnoyotl","Ihuicatl","Ilhuitl","Itotia","Iuitl","Ixcatzin","Izel","Malinalxochitl","Mecatl","Meztli","Miyaoaxochitl","Mizquixaual","Moyolehuani","Nahuatl","Necahual","Nenetl","Nochtli","Noxochicoztli","Ohtli","Papan","Patli","Quetzalxochitl","Sacnite","Teicui","Tepin","Teuicui","Teyacapan","Tlaco","Tlacoehua","Tlacotl","Tlalli","Tlanextli","Xihuitl","Xiuhcoatl","Xiuhtonal"];
gen_data["MesoamericanMasculine"] = ["Achcauhtli","Amoxtli","Chicahua","Chimalli","Cipactli","Coaxoch","Coyotl","Cualli","Cuauhtémoc","Cuetlachtilo","Cuetzpalli","Cuixtli","Ehecatl","Etalpalli","Huemac","Huitzilihuitl","Iccauhtli","Ilhicamina","Itztli","Ixtli","Mahuizoh","Manauia","Matlal","Matlalihuitl","Mazatl","Mictlantecuhtli","Milintica","Momoztli","Namacuix","Necalli","Necuametl","Nezahualcoyotl","Nexahualpilli","Nochehuatl","Nopaltzin","Ollin","Quauhtli","Tenoch","Teoxihuitl","Tepiltzin","Tezcacoatl","Tlacaelel","Tlacelel","Tlaloc","Tlanextic","Tlazohtlaloni","Tlazopillo","Uetzcayotl","Xipilli","Yaotl"];

// -- Niger Congo
gen_data["Niger-CongoFamily"] = ["Achebe","Ademola","Adeoye","Adesida","Adesina","Adeyemi","Aguda","Akenzua","Akerele","Akiloye","Akinjide","Akintola","Akinyemi","Akpabio","Akunyili","Alakija","Alamieyeseigha","Amaechi","Anenih","Anikulapo-Kuti","Asari-Dokubo","Attah","Awolowo","Ayim","Azikiwe","Babangida","Balewa","Balogun","Bamgboshe","Bankole","Bello","Biobaku","Boro","Buhari","Chukwumereije","Danjuma","Dimka","Diya","Effiong","Egwu","Ekwensi","Eze","Ezekwesili","Fagbure","Falana","Gbadamosi","Gowon","Ibori","Igbinedion","Igwe","Ironsi","Iweala","Iwu","Jaja","Jakande","Jang","Jomo-Gbomo","Kalejaiye","Kalu","Madaki","Magoro","Mbadinuju","Mbanefo","Ngige","Nnamani","Nzeogwu","Obasanjo","Obi","Odili","Ohakim","Ojukwu","Okadigbo","Okafor","Okar","Okeke","Okereke","Okilo","Okiro","Okonjo","Okonkwo","Okorie","Okotie-Eboh","Okoye","Okpara","Olanrewaju","Omehia","Onobanjo","Onwuatuegwu","Onwudiwe","Onyejekwe","Orji","Oyenusi","Oyinlola","Saro-Wiwa","Sekibo","Solarin","Soyinka","Tinibu","Uba","Yar-Adua"]
gen_data["Niger-CongoFeminine"] = ["Abebi","Abena","Abimbola","Akoko","Akachi","Alaba","Anuli","Ayo","Bolanle","Bosede","Chiamaka","Chidi","Chidimma","Chinyere","Chioma","Dada","Ebele","Efemena","Ejiro","Ekundayo","Enitan","Funanya","Ifunanya","Ige","Ime","Kunto","Lesedi","Lumusi","Mojisola","Monifa","Nakato","Ndidi","Ngozi","Nkiruka","Nneka","Ogechi","Olamide","Oluchi","Omolara","Onyeka","Simisola","Temitope","Thema","Titlayo","Udo","Uduak","Ufuoma","Yaa","Yejide","Yewande"];
gen_data["Niger-CongoMasculine"] = ["Abebe","Abel","Abidemi","Abrafo","Adisa","Amadi","Amara","Anyim","Azubuike","Bapoto","Baraka","Bohlale","Bongani","Bujune","Buziba","Chakide","Chibuzo","Chika","Chimola","Chiratidzo","Dabulamanzi","Dumisa","Dwanh","Emeka","Folami","Gatura","Gebhuza","Gero","Isoba","Kagiso","Kamau","Katlego","Masego","Matata","Nthanda","Ogechi","Olwenyo","Osumare","Paki","Qinisela","Quanda","Samanya","Shanika","Sibonakaliso","Tapiwa","Thabo","Themba","Uzoma","Zuberi","Zuri"];

// -- Norse
gen_data["NorseFamily"] = ["“Inn Ánauðgi” (The Oppressed One)","“Inn Auða” (The Rich One)","“Berfœttr” (Barefoot)","“Bisi” (Commander)","“Bláfauskr” (Swarthy Old Man)","“Inn Blindi” (The Blind One)","“Blonduhorn” (Mixing-Horn)","“Brattr” (Steep)","“Bultaðr” (Lumpy)","“Bægifótr” (Limp-Leg)","“Dálkr” (Dagger)","“Doði” (Dead)","“Drápastúfr” (Bad Poet)","“Drumbr” (Thick, Fat, Podgy)","“Erra” (Pugnacity)","“Feilan” (Wolf-Cub)","“Fjarska” (Distant)","“Forni” (Ancient)","“Fullspakr” (Fully Wise)","“Galinn” (Enchanted, Mad)","“Gapi” (Shouter)","“Gedda” (Pike)","“Inn Glaði” (The Glad One)","“Gnúpa” (Stoop)","“Gramr” (Wrath, Warrior)","“Gufa” (Smoke)","“Gæitingr” (Wasp)","“Hafrsþjó” (Buck’s Thigh)","“Halftroll” (Half-Troll)","“Harðfari” (Fast-Traveller)","“Haustmyrkr” (Autumn Dusk)","“Helluflagi” (Thin Slate)","“Hestreðr” (Horse Phallus)","“Hnappraz” (Button-Arse)","“Holmðr” (Cleft-Palate)","“Hraði” (Quick)","“Hrútr” (Ram)","“Inn Hvassi” (The Sharp One)","“Hyrna” (Ax-Blade Horn)","“Kaða” (Hen)","“Kampr” (Whiskers)","“Karlhofði” (Carved Figurehead)","“Karlsefni” (Man’s Equal)","“Kastandrazi” (Throwing Arse)","“Keilismúli” (Cone-Peak)","“Kjolfari” (Keel-Traveller)","“Kleggi” (Horse-Fly)","“Kleykir” (In Trouble, Disgraced)","“Knapr” (Valet)","“Kolbrún” (Coal-Brow)","“Kópr” (Seal)","“Kortr” (Short Penis)","“Kráku” (Crow)","“Krumr” (Bent)","“Kuggi” (Cog)","“Inn Kyrri” (The Quiet One)","“Lamo” (Lame)","“Lippi” (Lip)","“Lófi” (Palm)","“Maurr” (Ant)","“Múli” (Mouth)","“Nasi” (Nostril)","“Ondurr” (Snow-Shoe)","“Orn” (Eagle)","“Inn Prúði” (The Proud One)","“Sela” (Seal)","“Sjóni” (Seer)","“Skák” (Robber)","“Skáld” (Poet)","“Skarfr” (Cormorant)","“Skammhals” (Short-Neck)","“Skarpi” (Skinny)","“Inn Skjálgi” (Squinting One)","“Skrauti” (Splendid)","“Skokull” (Cart-Pole)","“Sløngvand” (Ring-Slinger)","“Snarfari” (Swift-Traveller)","“Snæþrima” (Snow-Clash)","“Spár” (Prophetic)","“Starr” (Stiff)","“Stormr” (Storm)","“Inn Strangi” (Strong One)","“Styggr” (Shy, Unfriendly)","“Sundafyllir” (Soundfiller)","“Svartr” (Black)","“Svína” (Pig)","“Sælingr” (Fortunate)","“Tálkni” (Gasp)","“Tiorvi” (Charmer)","“Trausti” (Trustworthy)","“Tvennumbrúni” (Double-Brows)","“Vaggagði” (Squat-Wiggle)","“Var” (Watchful)","“Vífill” (Weevil)","“Vræiðr” (Wrathful)","“Þiokkr” (Thick)","“Þrasi” (Big Talker)","“Þunnskeggr” (Thin-Beard)","“Þyna” (Belly)","“Æikinæfr” (Oak-Nose)"]
gen_data["NorseFeminine"] = ["Alfhild","Arnbjorg","Ase","Aslog","Astrid","Auda","Audhid","Bergljot","Birghild","Bodil","Brenna","Brynhild","Dagmar","Eerika","Eira","Gudrun","Gunborg","Gunhild","Gunvor","Helga","Hertha","Hilde","Hillevi","Ingrid","Iona","Jorunn","Kari","Kenna","Magnhild","Nanna","Olga","Ragna","Ragnhild","Ranveig","Runa","Saga","Sigfrid","Signe","Sigrid","Sigrunn","Solveg","Svanhild","Thora","Torborg","Torunn","Tove","Unn","Vigdis","Ylva","Yngvild"];
gen_data["NorseMasculine"] = ["Agni","Alaric","Anvindr","Arvid","Asger","Asmund","Bjarte","Bjorg","Bjorn","Brandr","Brandt","Brynjar","Calder","Colborn","Cuyler","Egil","Einar","Eric","Erland","Fiske","Folkvar","Fritjof","Frode","Geir","Halvar","Hemming","Hjalmar","Hjortr","Ingimarr","Ivar","Knud","Leif","Liufr","Manning","Oddr","Olin","Ormr","Ove","Rannulfr","Sigurd","Skari","Snorri","Sten","Stigandr","Stigr","Sven","Trygve","Ulf","Vali","Vidar"];

// -- Polynesian
gen_data["PolynesianFeminine"] = ["Ahulani","Airini","Alani","Aluala","Anahera","Anuhea","Aolani","Elenoa","Emele","Fetia","Fiva","Halona","Hi'ilei","Hina","Hinatea","Huali","Inia","Inina","Iolani","Isa","Ka'ana'ana","Ka'ena","Kaamia","Kahula","Kailani","Kamaile","Kamakani","Kamea","Latai","Liona","Lokelani","Marva","Mehana","Millawa","Moana","Ngana","Nohea","Pelika","Sanoe","Satina","Tahia","Tasi","Tiaho","Tihani","Toroa","Ulanni","Uluwehi","Vaina","Waiola","Waitara"];
gen_data["PolynesianMasculine"] = ["Afa","Ahohako","Aisake","Aleki","Anewa","Anitelu","Aputi","Ariki","Butat","Enele","Fef","Fuifui","Ha'aheo","Hanohano","Haunui","Hekili","Hiapo","Hikawera","Hanano","Ho'onani","Hoku","Hû'eu","Ina","Itu","Ka'aukai","Ka'eo","Kaelani","Kahale","Kaiea","Kaikoa","Kana'I","Koamalu","Ka","Laki","Makai","Manu","Manuka","Nui","Pono","Popoki","Ruru","Tahu","Taurau","Tuala","Turoa","Tusitala","Uaine","Waata","Waipuna","Zamar"];

// -- Roman
gen_data["RomanFamily"] = ["Acisculus","Aeserninus","Albinus","Arquitius","Asellio","Asiagenus","Asina","Atticus","Augustus","Balbus","Barbula","Buca","Bursio","Caecus","Callaicus","Calvus","Capitolinus","Cato","Caudex","Cento","Cincinnatus","Clodianus","Corvinus","Cossus","Crassus","Cruscellio","Damasippus","Dolabella","Dorsuo","Eburnus","Falco","Felix","Flaccus","Gallaecus","Getha","Glaucia","Globulus","Gracchanus","Gurges","Helenus","Hispaniensis","Hortator","Imperiosus","Isauricus","Iulus","Iunianus","Julus","Junianus","Lactuca","Laeca","Lentinus","Lepidus","Livianus","Lupus","Macedonicus","Maluginensis","Mamercus","Marcellus","Mento","Merula","Mocilla","Nasica","Nerva","Norbanus","Ocella","Orca","Paciacus","Papus","Paulus","Pera","Pitio","Ponticus","Porcina","Praeconinus","Pulex","Regillensis","Rufinus","Rullianus","Russus","Sabinus","Salinator","Salutio","Scaeva","Scaurus","Sergianus","Sibylla","Sisenna","Soranus","Stolo","Structus","Tappo","Torquatus","Tucca","Unimanus","Uticensis","Vatia","Verrucosus","Vibulanus","Volso","Vopiscus"]
gen_data["RomanFeminine"] = ["Aelia","Aemilia","Agrippina","Alba","Antonia","Aquila","Augusta","Aurelia","Balbina","Blandina","Caelia","Camilla","Casia","Claudia","Cloelia","Domitia","Drusa","Fabia","Fabricia","Fausta","Flavia","Floriana","Fulvia","Germana","Glaucia","Gratiana","Hadriana","Hermina","Horatia","Hortensia","Iovita","Iulia","Laelia","Laurentia","Livia","Longina","Lucilla","Lucretia","Marcella","Marcia","Maxima","Nona","Octavia","Paulina","Petronia","Porcia","Tacita","Tullia","Verginia","Vita"];
gen_data["RomanMasculine"] = ["Aelius","Aetius","Agrippa","Albanus","Albus","Antonius","Appius","Aquilinus","Atilus","Augustus","Aurelius","Avitus","Balbus","Blandus","Blasius","Brutus","Caelius","Caius","Casian","Cassius","Cato","Celsus","Claudius","Cloelius","Cnaeus","Crispus","Cyprianus","Diocletianus","Egnatius","Ennius","Fabricius","Faustus","Gaius","Germanus","Gnaeus","Horatius","Iovianus","Iulius","Lucilius","Manius","Marcus","Marius","Maximus","Octavius","Paulus","Quintilian","Regulus","Servius","Tacitus","Varius"];

// -- Slavic
gen_data["SlavicFamily"] = ["Antokolsky","Arsenyev","Bakal","Balmont","Baran","Bartošeneš","Bogoraz","Borodin","Božovic","Brod","Bulgakov","Burian","Calic","Cherkassky","Chladek","Cižek","Dokiychuk","Dubinsky","Dvorkin","Fedoruk","Gajic","Golovkin","Grabow","Hanak","Hnilo","Hospod","Hubik","Jablonski","Janiszewski","Janowitz","Jelinek","Kanevsky","Karolewski","Kolev","Korda","Kowacewicz","Krakowski","Kratochvíl","Krylov","Kudelin","Lahush","Levitsky","Lovric","Margolin","Markovic","Masur","Meyer","Milenkovic","Milutinovic","Molotov","Mucibaba","Okilj","Pantelic","Perlic","Pivovarský","Polyak","Popovic","Prokesch","Rabinovich","Ristovic","Sadowsky","Semenov","Shklovsky","Shuksin","Simonov","Slavik","Slovak","Smirnov","Sokolovsky","Sosniok","Tichý","Tiutchev","Tkachov","Tomášek","Topol","Trajkovski","Tvardovsky","Uvarov","Vajda","Vasiliev","Vinograd","Vishinsky","Vlaev","Vodenicarovic","Volansky","Volný","Voronin","Voroshilov","Wessely","Wilkowske","Witkiewicz","Zacharov","Zeman","Zhirinovsky","Zhtomir","Zinoviev","Zubkowski","Zworszak","Šagolj","Šendula"]
gen_data["SlavicFeminine"] = ["Agripina","Anastasiya","Bogdana","Boleslava","Bozhena","Danica","Darya","Desislava","Dragoslava","Dunja","Efrosinia","Ekaterina","Elena","Faina","Galina","Irina","Iskra","Jasna","Katarina","Katya","Kresimira","Lyudmila","Magda","Mariya","Militsa","Miloslava","Mira","Miroslava","Mokosh","Morana","Natasha","Nika","Olga","Rada","Radoslava","Raisa","Slavitsa","Sofiya","Stanislava","Svetlana","Tatyana","Tomislava","Veronika","Vesna","Vladimira","Yaroslava","Yelena","Zaria","Zarya","Zoria"];
gen_data["SlavicMasculine"] = ["Aleksandru","Berislav","Blazh","Bogumir","Boguslav","Borislav","Bozhidar","Bratomil","Bratoslav","Bronislav","Chedomir","Chestibor","Chestirad","Chestislav","Desilav","Dmitrei","Dobromil","Dobroslav","Dragomir","Dragutin","Drazhan","Gostislav","Kazimir","Kyrilu","Lyubomir","Mechislav","Milivoj","Milosh","Mstislav","Nikola","Ninoslav","Premislav","Radomir","Radovan","Ratimir","Rostislav","Slavomir","Stanislav","Svetoslav","Tomislav","Vasili","Velimir","Vladimir","Vladislav","Vlastimir","Volodimeru","Vratislav","Yarognev","Yaromir","Zbignev"];
 
// -- Spanish
gen_data["SpanishFamily"] = ["Aguilar","Alonso","Álvarez","Andrés","Arias","Blanco","Bravo","Caballero","Cabrera","Calvo","Campos","Cano","Carmona","Carrasco","Castillo","Castro","Cortés","Crespo","Cruz","Delgado","Díaz","Díez","Domínguez","Durán","Fernández","Ferrer","Flores","Fuentes","García","Garrido","Gil","Giménez","Gómez","González","Guerrero","Gutiérrez","Hernández","Herrera","Herrero","Hidalgo","Ibáñez","Iglesias","Izquierdo","Jiménez","León","López","Lorenzo","Lozano","Marcos","Marín","Márquez","Martín","Martínez","Medina","Méndez","Menéndez","Merino","Molina","Montero","Mora","Morales","Moreno","Moya","Muñoz","Navarro","Nieto","Núñez","Ortega","Ortiz","Pardo","Pascual","Pastor","Peña","Pérez","Prieto","Ramírez","Ramos","Redondo","Rey","Reyes","Rodríguez","Román","Romero","Rubio","Ruiz","Sáez","Sánchez","Santos","Sanz","Serrano","Soler","Soto","Suárez","Torres","Vázquez","Vega","Velasco","Vicente","Vidal","Vila"]
gen_data["SpanishFeminine"] = ["Abella","Adalina","Adora","Adriana","Ana","Antonia","Basilia","Beatriz","Bonita","Camila","Cande","Carmen","Catlina","Dolores","Dominga","Dorotea","Elena","Elicia","Esmerelda","Felipina","Francisca","Gabriela","Imelda","Ines","Isabel","Juana","Leocadia","Leonor","Leta","Lucinda","Maresol","Maria","Maricela","Matilde","Melania","Monica","Neva","Nilda","Petrona","Rafaela","Ramira","Rosario","Sofia","Suelo","Teresa","Tomasa","Valentia","Veronica","Ynes","Ysabel"];
gen_data["SpanishMasculine"] = ["Alexandre","Alfonso","Alonso","Anthon","Arcos","Arnaut","Arturo","Bartoleme","Benito","Bernat","Blasco","Carlos","Damian","Diego","Domingo","Enrique","Escobar","Ettor","Fernando","Franciso","Gabriel","Garcia","Gaspar","Gil","Gomes","Goncalo","Gostantin","Jayme","Joan","Jorge","Jose","Juan","Machin","Martin","Mateu","Miguel","Nicolas","Pascual","Pedro","Porico","Ramiro","Ramon","Rodrigo","Sabastian","Salvador","Simon","Tomas","Tristan","Valeriano","Ynigo"];
 
// Orc
//--------------------------------------------------------------------------------
gen_data["OrcSubrace"] = {
  "1":"None"
};
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

gen_data["OrcFeminine"] = ["Arha","Baggi","Bendoo","Bilga","Brakka","Creega","Drenna","Ekk","Emen","Engong","Fistula","Gaaki","Gorga","Grai","Greeba","Grigi","Gynk","Hrathy","Huru","Ilga","Kabbarg","Kansif","Lagazi","Lezre","Murgen","Murook","Myev","Nagrette","Neega","Nella","Nogu","Oolah","Ootah","Ovak","Ownka","Puyet","Reeza","Shautha","Silgre","Sutha","Tagga","Tawar","Tomph","Ubada","Vanchu","Vola","Volen","Vorka","Yevelda","Zagga"];
gen_data["OrcMasculine"] = ["Argran","Braak","Brug","Cagak","Dench","Dorn","Dren","Druuk","Feng","Gell","Gnarsh","Grumbar","Gubrash","Hagren","Henk","Hogar","Holg","Imsh","Karash","Karg","Keth","Korag","Krusk","Lubash","Megged","Mhurren","Mord","Morg","Nil","Nybarg","Odorr","Ohr","Rendar","Resh","Ront","Rrath","Sark","Scrag","Sheggen","Shump","Tanglar","Tarak","Thar","Thokk","Trag","Ugarth","Varg","Vilberg","Yurk","Zed"];

// Tiefling
//--------------------------------------------------------------------------------
gen_data["TieflingSubrace"] = {
  "1":"Feral",
  "2-10":"Infernal"
};
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

gen_data["TieflingFeminine"] = ["Akta","Anakis","Armara","Astaro","Aym","Azza","Beleth","Bryseis","Bune","Criella","Damaia","Decarabia","Ea","Gadreel","Gomory","Hecat","Ishte","Jezebeth","Kali","Kallista","Kasdeya","Lerissa","Lilith","Makaria","Manea","Markosian","Mastema","Naamah","Nemeia","Nija","Orianna","Osah","Phelaia","Prosperine","Purah","Pyra","Rieta","Ronobe","Ronwe","Seddit","Seere","Sekhmet","Semyaza","Shava","Shax","Sorath","Uzza","Vapula","Vepar","Verin"];
gen_data["TieflingMasculine"] = ["Abad","Ahrim","Akmen","Amnon","Andram","Astar","Balam","Barakas","Bathin","Caim","Chem","Cimer","Cressel","Damakos","Ekemon","Euron","Fenriz","Forcas","Habor","Iados","Kairon","Leucis","Mamnen","Mantus","Marbas","Melech","Merihim","Modean","Mordai","Mormo","Morthos","Nicor","Nirgel","Oriax","Paymon","Pelaios","Purson","Qemuel","Raam","Rimmon","Sammal","Skamos","Tethren","Thamuz","Therai","Valafar","Vassago","Xappan","Zepar","Zephan"];
gen_data["TieflingVirtue"] = ["Ambition","Art","Carrion","Chant","Creed","Death","Debauchery","Despair","Doom","Doubt","Dread","Ecstasy","Ennui","Entropy","Excellence","Fear","Glory","Gluttony","Grief","Hate","Hope","Horror","Ideal","Ignominy","Laughter","Love","Lust","Mayhem","Mockery","Murder","Muse","Music","Mystery","Nowhere","Open","Pain","Passion","Poetry","Quest","Random","Reverence","Revulsion","Sorrow","Temerity","Torment","Tragedy","Vice","Virtue","Weary","Wit"];