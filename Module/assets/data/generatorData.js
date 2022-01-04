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

// Generic Alignment Deviation
// Alignment (Good/Evil) -- 40% Good, 40% Neutral, 20% Evil.
gen_data["AlignmentGoodFlaw"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"};
// Alignment (Lawful/Chaos) -- 40% Lawful, 40% Neutral, 20% Chaos.
gen_data["AlignmentLawfulChaotic"] = {"1-40":"Lawful","41-80":"Neutral","81-100":"Chaotic"};

// Adventure - GE (35,35,30) - LC (30,30,40)
gen_data["AlignmentGoodEvilAdventure"] = {"1-35":"Good","36-70":"Neutral","71-100":"Evil"};
gen_data["AlignmentLawfulChaoticAdventure"] = {"1-30":"Lawful","31-60":"Neutral","61-100":"Chaotic"};

// Agriculture - GE (40,40,20) - LC (35,35,30)
gen_data["AlignmentGoodEvilAgriculture"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticAgriculture"] = {"1-35":"Lawful","36-70":"Neutral","71-100":"Chaotic"};

// Art - GE (40,40,20) - LC (30,40,30)
gen_data["AlignmentGoodEvilArt"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticArt"] = {"1-30":"Lawful","31-70":"Neutral","71-100":"Chaotic"};

// Crime - GE (20,30,50) - LC (35,35,30) --- Note, all crime is organized in this generator.
gen_data["AlignmentGoodEvilCrime"] = {"1-20":"Good","21-50":"Neutral","51-100":"Evil"}
gen_data["AlignmentLawfulChaoticCrime"] = {"1-35":"Lawful","36-70":"Neutral","71-100":"Chaotic"};

// Education - GE (40,40,20) - LC (35,40,25)
gen_data["AlignmentGoodEvilEducation"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticEducation"] = {"1-35":"Lawful","36-75":"Neutral","76-100":"Chaotic"};

// Hospitality - GE (40,40,20) - LC (35,35,30)
gen_data["AlignmentGoodEvilHospitality"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticHospitality"] = {"1-35":"Lawful","36-70":"Neutral","71-100":"Chaotic"};

// Industry - GE (30,40,30) - LC (30,40,30)
gen_data["AlignmentGoodEvilIndustry"] = {"1-30":"Good","31-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticIndustry"] = {"1-30":"Lawful","31-70":"Neutral","71-100":"Chaotic"};

// Military - GE (35,35,30) - LC (60,20,20)
gen_data["AlignmentGoodEvilMilitary"] = {"1-35":"Good","36-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticMilitary"] = {"1-60":"Lawful","61-80":"Neutral","81-100":"Chaotic"};

// Merchant - GE (40,40,20) - LC (35,35,30)
gen_data["AlignmentGoodEvilMerchant"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticMerchant"] = {"1-35":"Lawful","36-70":"Neutral","71-100":"Chaotic"};

// Nature - GE (30,40,30) - LC (20,40,40)
gen_data["AlignmentGoodEvilNature"] = {"1-30":"Good","31-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticNature"] = {"1-20":"Lawful","21-60":"Neutral","61-100":"Chaotic"};

// Nautical - GE (30,40,30) - LC (30,40,30)
gen_data["AlignmentGoodEvilNautical"] = {"1-30":"Good","31-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticNautical"] = {"1-30":"Lawful","31-70":"Neutral","71-100":"Chaotic"};

// Nobility - GE (30,40,30) - LC (60,20,20)
gen_data["AlignmentGoodEvilNobility"] = {"1-30":"Good","31-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticNobility"] = {"1-60":"Lawful","61-80":"Neutral","81-100":"Chaotic"};

// Police - GE (35,35,30) - LC (60,20,20)
gen_data["AlignmentGoodEvilPolice"] = {"1-35":"Good","36-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticPolice"] = {"1-60":"Lawful","61-80":"Neutral","81-100":"Chaotic"};

// Professional - GE (40,40,20) - LC (35,35,30)
gen_data["AlignmentGoodEvilProfessional"] = {"1-40":"Good","41-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticProfessional"] = {"1-35":"Lawful","36-70":"Neutral","71-100":"Chaotic"};

// Religion - GE (50,30,20) - LC (60,20,20)
gen_data["AlignmentGoodEvilReligion"] = {"1-50":"Good","51-80":"Neutral","81-100":"Evil"}
gen_data["AlignmentLawfulChaoticReligion"] = {"1-60":"Lawful","61-80":"Neutral","81-100":"Chaotic"};

// Service - GE (30,40,30) - LC (60,20,20)
gen_data["AlignmentGoodEvilService"] = {"1-30":"Good","31-70":"Neutral","71-100":"Evil"}
gen_data["AlignmentLawfulChaoticService"] = {"1-60":"Lawful","61-80":"Neutral","81-100":"Chaotic"};

// --------------------------------------------------------------------------------
// Appearance
// --------------------------------------------------------------------------------

// Body Color (Base) -- This is the base color for a character's skin, scales, fur, etc.
gen_data["BodyColorBaseDragonborn"] = {"1":"Amethyst","2-4":"Black","5-7":"Blue","8-10":"Brass","11-13":"Bronze","14-16":"Copper","17-19":"Crystal","20-22":"Emerald","23-25":"Gold","26-28":"Green","29-31":"Red","32-34":"Sapphire","35-37":"Silver","38-40":"Topaz","41-43":"White"};
gen_data["BodyColorBaseDwarf"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseElf"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseGnome"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseHalf-Elf"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseHalf-Orc"] = ["Beige","Bronze","Brown","Ivory","Gray","Green","Pink"];
gen_data["BodyColorBaseHalfling"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseHuman"] = ["Beige","Bronze","Brown","Ivory","Pink"];
gen_data["BodyColorBaseOrc"] = ["Beige","Bronze","Brown","Ivory","Gray","Green"];
gen_data["BodyColorBaseTiefling"] = ["Black","Beige","Blue","Bronze","Brown","Gray","Green","Ivory","Pink","Purple","Red","White"];

// Body Color (Tone) -- This is a modifier to the base color to provide some variation between different skin/scale/fur colors.
gen_data["BodyColorToneDragonborn"] = ["Bright","Cool","Dark","Deep","Glassy","Light","Medium","Pale","Warm"];
gen_data["BodyColorToneDwarf"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneElf"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneGnome"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneHalf-Elf"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneHalf-Orc"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneHalfling"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneHuman"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];
gen_data["BodyColorToneOrc"] = ["Cool","Dark","Golden","Light","Medium","Pale","Warm"];
gen_data["BodyColorToneTiefling"] = ["Cool","Dark","Golden","Light","Medium","Pale","Rosy","Warm"];

// Body Height -- Keeping it simple and relative. It is intended to indicate if a character is "Tall" or "Short" for their race.
gen_data["BodyHeight"] = ["Average","Short","Tall"];
gen_data["BodyWeight"] = ["Average","Atheltic","Doughy","Fit","Heavy","Heavy-set","Lean","Powerful","Rotund","Skinny","Soft","Stocky","Strong","Thin"];

// Face
gen_data["FaceLocation"] = ["Chin","Forehead","Left Cheek","Left Eye","Left Eyebrow","Lower Lip","Nose","Right Cheek","Right Eye","Right Eyebrow","Upper Lip"];
gen_data["FaceType"] = ["Attractive","Broad","Chiseled","Flat","Gaunt","Handsome","Homely","Long","Plain","Rough","Round","Rugged","Sculpted","Sullen","Thin","Unattractive","Wide"];

// Face (Bruise)
gen_data["FaceBruise"] = ["{FaceBruiseType} bruise on their {FaceLocation}"];
gen_data["FaceBruiseType"] = ["Awful","Bad","Big","Dark","Fresh","Large","Old","Small","Terrible","Ugly","Unsightly"];

// Face (Chin)
gen_data["FaceChin"] = ["{FaceChinType} chin"];
gen_data["FaceChinType"] = ["Big","Broad","Jutting","Large","Pointed","Prominent","Pronounced","Sharp","Square","Strong"];

// Face (Eye Color)
gen_data["FaceEyeColorDragonborn"] = {"1-2":"Amber","3-4":"Blue","5-6":"Brown","7-8":"Gray","9-10":"Green","11-12":"Hazel","13-14":"Red"};
gen_data["FaceEyeColorDwarf"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorElf"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorGnome"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorHalf-Elf"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorHalf-Orc"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorHalfling"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorHuman"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorOrc"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)"};
gen_data["FaceEyeColorTiefling"] = {"1-40":"Brown","41-65":"Blue","66-85":"Hazel","86-95":"Green","96-97":"Gray","98":"Hetachromatic (Brown/blue)","99":"Hetachromatic (blue/hazel)","100":"Hetachromatic (blue/green)","101-130":"Black","131-160":"Red","161-180":"White","181-200":"Amber"};

// Face (Eye)
gen_data["FaceEyeType"] = ["Beady","Beautiful","Bloodshot","Bright","Brilliant","Bulging","Clear","Close-set","Cloudy","Cold","Curious","Dark","Deep","Deep-set","Enormous","Glassy","Hard","Heavy","Irritated","Jaundiced","Keen","Large","Narrow","Piercing","Pretty","Prominent","Sharp","Small","Sparkling","Squinting","Sunken","Tired","Watchful","Wide","Wild"];

// Face (Mark)
gen_data["FaceMark"] = ["{FaceMarkAdjective} {FaceMarkType} on their {FaceLocation}"];
gen_data["FaceMarkAdjective"] = ["Large","Small","Ugly","Unsightly"];
gen_data["FaceMarkType"] = ["Birthmark","Mole","Rash","Scratch","Sore"];

// Face (Nose)
gen_data["FaceNose"] = ["{FaceNoseType} nose"];
gen_data["FaceNoseType"] = ["Bent","Big","Broad","Broken","Bulbous","Crooked","Flat","Hooked","Long","Narrow","Pointy","Roguish","Sharp","Skinny","Small","Square","Thin","Turned-up","Wide"];

// Face (Piercing)
gen_data["FacePiercing"] = ["{FacePiercingType} in their {FaceLocation}"];
gen_data["FacePiercingType"] = ["{MaterialMetal} ring","{MaterialMetal} stud",]

// Face (Scar)
gen_data["FaceScar"] = ["{FaceScarType} scar across their {FaceLocation}"];
gen_data["FaceScarType"] = ["Awful","Bad","Big","Deep","Fresh","Jagged","Large","Long","Old","Small","Terrible","Ugly","Unsightly"];

// Face (Smile)
gen_data["FaceSmile"] = ["{FaceSmileType} smile"];
gen_data["FaceSmileType"] = ["Beaming","Beautiful","Big","Broad","Courteous","Crooked","Half","Odd","Peculiar","Perfect","Pleasant","Subtle","Thin","Toothy","Ugly","Unpleasant","Warm","Welcoming","Wide","Winsome","Yellow"];

// Face (Spectacles)
gen_data["FaceSpectacles"] = ["{FaceSpectaclesType} pair of glasses","{FaceSpectaclesType} pair of spectacles"];
gen_data["FaceSpectaclesType"] = ["Big","Cracked","Dirty","Large","Round","Small","Thick","Thin","Wire-framed"]


// Facial Features
gen_data["FacialFeature"] = ["{FaceBruise}","{FaceChin}","{FaceMark}","{FaceNose}","{FacePiercing}","{FaceScar}","{FaceSmile}","{FaceSpectacles}"];

// Facial Hair -- These determine whether or not a particular race & gender combination may have facial hair and what type they might have.
gen_data["FacialHairDragonbornFeminine"] = {"1":"None"};
gen_data["FacialHairDragonbornMasculine"] = {"1":"None"};
gen_data["FacialHairDwarfFeminine"] = {"1-70":"None","75-90":"Beard","91-95":"Goatee","96-100":"Mustache"};
gen_data["FacialHairDwarfMasculine"] = {"1-10":"None","11-90":"Beard","91-95":"Goatee","96-100":"Mustache"};
gen_data["FacialHairElfFeminine"] = {"1-100":"None"};
gen_data["FacialHairElfMasculine"] = {"1-100":"None"};
gen_data["FacialHairGnomeFeminine"] = {"1-100":"None"};
gen_data["FacialHairGnomeMasculine"] = {"1-40":"None","41-60":"Beard","61-80":"Goatee","81-100":"Mustache"};
gen_data["FacialHairHalf-ElfFeminine"] = {"1-100":"None"};
gen_data["FacialHairHalf-ElfMasculine"] = {"1-70":"None","71-80":"Beard","81-90":"Goatee","91-100":"Mustache"};
gen_data["FacialHairHalf-OrcFeminine"] = {"1-100":"None"};
gen_data["FacialHairHalf-OrcMasculine"] = {"1-40":"None","41-80":"Beard","81-90":"Goatee","91-100":"Mustache"};
gen_data["FacialHairHalflingFeminine"] = {"1-100":"None"};
gen_data["FacialHairHalflingMasculine"] = {"1-50":"None","51-80":"Beard","81-90":"Goatee","91-100":"Mustache"};
gen_data["FacialHairHumanFeminine"] = {"1-100":"None"};
gen_data["FacialHairHumanMasculine"] = {"1-40":"None","41-60":"Beard","61-80":"Goatee","81-100":"Mustache"};
gen_data["FacialHairOrcFeminine"] = {"1-100":"None"};
gen_data["FacialHairOrcMasculine"] = {"1-40":"None","41-70":"Beard","71-90":"Goatee","91-100":"Mustache"};
gen_data["FacialHairTieflingFeminine"] = {"1-100":"None"};
gen_data["FacialHairTieflingMasculine"] = {"1-85":"None","86-90":"Beard","91-95":"Goatee","96-100":"Mustache"};

// Facial Hair Style -- A collection of descriptions of various styles of facial hair for bears, goatees, and mustaches.
gen_data["FacialHairStyleBeard"] = ["Well-trimmed and brushed","Growing wild and untamed","Tied into multiple braids and capped with small gold rings","Braided on both sides of the mouth","Gathered into a single braid at the chin","Gathered at the chin and tied with string","Scruffy and untrimmed","Growing more outward than down","Styled into a point","Boxed and full","Neatly styled and capped with a large handlebar mustache","With bits of crumbs tangled amongst the hairs","Patchy and uneven"];
gen_data["FacialHairStyleGoatee"] = ["Well-trimmed and brushed","Growing wild and untamed","Tied into multiple braids and capped with small gold rings","Braided on both sides of the mouth","Gathered into a single braid at the chin","Gathered at the chin and tied with string","Scruffy and untrimmed","Growing more outward than down","Styled into a van dyke","Boxed and full","Neatly styled and capped with a large handlebar mustache","With bits of crumbs tangled amongst the hairs","Patchy and uneven"];
gen_data["FacialHairStyleMustache"] = ["Well-trimmed and brushed","Growing wild and untamed","Styled into an elaborate handlebar","Overflowing into a long fu-manchu","Braided at the corners","Scruffy and untrimmed","With bits of crumbs tangled amongst the hairs","Parted in the middle","Parted and waxed at the tips into a point","With a small, soul patch above the chin"];

// Hair Color -- This is NOT yet race based, as I decided to keep it simple for hair color for now. I probably will break this one out in the future.
gen_data["HairColor"] = {"1-30":"Black","31-38":"Dark Brown","39-46":"Natural Brown","47-53":"Light Brown","54-60":"Chestnut Brown","61-65":"Light Blond","66-70":"Golden Blond","71-75":"Natural Blond","76-80":"Platinum Blond","81-83":"Auburn","84-87":"Red","88-90":"Orange","91-93":"Copper","94-96":"Strawberry Blond","97-98":"Salt and pepper","99":"Gray","100":"White","101":"Bright blue","102":"Dark blue","103":"Light blue","104":"Bright green","105":"Dark green","106":"Light green","107":"Bright pink","108":"Light pink","109":"Dark purple","110":"Bright purple","111":"Light purple","112":"Bright red"};

// Hair Length -- This should probably be a generic list, but for now it just determines the lenght of character's hair or facial hair.
gen_data["HairLength"] = ["Short","Long"];

// Hair Styles -- A list of hair styles based on the length of the character's hair.
gen_data["HairStyleLong"] = {"1-2":"Tied back in a loose ponytail","3-4":"Slicked back","5-6":"Down to the top of the collar","7-8":"Worn in a bun","9-10":"Parted in the middle","11-12":"Pulled back into a messy bun","13-14":"In long, tight dreadlocks","15-16":"Worn half-up and half-down","17":"That stretches down to the middle of the back","18":"Long in the back and short up top","19-20":"Long on the top and shaved on one side","21-22":"In a shaggy, half ponytail","23":"With a series of small braids framing the face","24-25":"Swept back behind the ears","26-27":"Pulled back and braided tightly","28-29":"Pulled over to one side","40":"In a high mohawk","41":"Tied up with a leather strap","42-43":"Tied back in a series of braids","44":"Pulled over to one side and tied in a bun"};
gen_data["HairStyleShort"] = {"1-2":"Parted in the middle","3-4":"Parted on the side","5-6":"Cut close to the scalp","7-8":"Swept over to one side","9-10":"Slicked back","11-12":"That is wild and untamed","13-14":"Swept-up in the front","15-16":"Cropped and undercut on one side","17-18":"Tied up in a small bun","19-20":"With short, veritcal spikes","21-22":"Pulled to one side and shaved on the other","23":"Shaved on the sides and pulled up into a top-knot","24":"Shaved on both sides and swept up into a mohawk","25-26":"Tied back in a short ponytail","27":"In tight, short dreads","28-29":"With a small cowlick in the back","30":"With a flat top"};

// Hair Type -- Adjectives to describe the text, shape, or condition of a character's hair.
gen_data["HairType"] = {"1-2":"Straight","3-4":"Messy","5-6":"Wavy","7-8":"Curly","9":"Frizzy","10":"Tangled","11-12":"Thick","13-14":"Thin","15-16":"Fine","17-18":"Coarse","19-20":"Dirty","21":"Matted","22":"Frayed","23":"Thinning","24-25":"Greasy","26":"Patchy","27":"Oily","28-29":"Shiny","30":"Receeding","31-33":"Natural","34-36":"Bushy"};

// Horn Direction -- Just a collection of phrases that describe the direction of a character's horns, if present.
gen_data["HornDirectionDragonborn"] = ["Around the side of the head","Backward","Forward","Outward","Up and backward","Up and forward","Up and around the side of the head","Up and over the top of the head","Upward"];
gen_data["HornDirectionTiefling"] = ["Around the side of the head","Backward","Forward","Outward","Up and backward","Up and forward","Up and around the side of the head","Up and over the top of the head","Upward"];

// Horn Placement -- Where on the head to a character's horns originate from.
gen_data["HornPlacementDragonborn"] = ["Front","Top","Side","Back"];
gen_data["HornPlacementTiefling"] = ["Front","Top","Side","Back"];

// Horn Style -- Simple adjectives describe the style of horns 
gen_data["HornStyleDragonborn"] = ["Angle","Bend","Curl","Hook","Sweep","Twist"];
gen_data["HornStyleTiefling"] = ["Angle","Bend","Curl","Hook","Sweep","Twist"];

// Horn Type -- Simple adjectives to describe the characteristics of a characters's horns.
gen_data["HornTypeDragonborn"] = ["Blunt","Rough","Sharp","Smooth","Thick","Thin"];
gen_data["HornTypeTiefling"] = ["Blunt","Rough","Sharp","Smooth","Thick","Thin"];

// --------------------------------------------------------------------------------
// Climate
// --------------------------------------------------------------------------------
gen_data["ClimateType"] = ["A","B","C","D","E"];
gen_data["ClimateTypeA"] = ["Af","Am","As","Aw"];
gen_data["ClimateTypeB"] = ["BWh","BWk","BSh","BSk"];
gen_data["ClimateTypeC"] = ["Csa","Csb","Cfa","Cfb","Cfc","Cwa","Cwb"];
gen_data["ClimateTypeD"] = ["Dfa","Dfb","Dfc","Dwa"];
gen_data["ClimateTypeE"] = ["ET","EF"];

// Examples for later work on weather.
// Af -- Kuala Lumpur, Singapore
// Am -- Miami, San Juan
// As -- Mombasa, Fortaleza
// Aw -- Bangkok, Havana, Lagos
// Bwh -- Alice Springs, Baghdad, Phoenix
// Bwk -- Damascus
// Bsh -- Honolulu, Tuscon
// Bsk -- Atrskhan, Reno, Odessa
// Csa -- Athens, Barcelona, Lisbon
// Csb -- Cape Town, San Francisco, Seattle
// Cfa -- Atlanta, Buenos Aires, Dallas, Milan, Tokyo
// Cfb -- Amsterdam, Berlin, London, Vienna
// Cfc -- Bogota, Quito
// Cwa -- Busan, Hong Kong, Delhi
// Cwb -- Johannesburg, La Paz, Mexico City
// Dfa -- Boston, Chicago, Montreal, Bucharest
// Dfb -- Edmonton, Halifax, Riga, Oslo, Moscow
// Dfc -- Anchorage, Whitehorse, Tromso
// Dwa -- Seoul, Beijing
// ET -- Mount Washington, Mount Fuji, Ben Nevis
// EF -- Amundsen-Scott Station, Vostok Station

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

// Arctic
gen_data["GeographyArctic"] = [];
gen_data["GeographyArcticFeature"] = ["Glacier","Ice Flow","Ice Shelf"];

// Coastal and Shore
gen_data["GeographyCoastal"] = ["Bay","Cape","Coast","Gulf","Promontory","Shoal","Shore","Shoreline","Sound","Strait"];
gen_data["GeographyCoastalSmall"] = ["Cove","Inlet","Lagoon","Point","Shoal"];
gen_data["GeographyCoastalFeature"] = ["Beach","Dike","Levee","Mouth","Sandbar","Tidepool"];

// Deserts
gen_data["GeographyDesert"] = ["Desert"];
gen_data["GeographyDesertFeature"] = ["Arroyo","Butte","Canyon","Dunes","Mesa","Oasis","Salt Flats","Wadi","Wash"];

// Forests and Woods
gen_data["GeographyForest"] = ["Forest","Wood","Woods"];
gen_data["GeographyForestSmall"] = ["Grove","Stand","Thicket"];
gen_data["GeographyForestFeature"] = ["Clearing","Glade"];

// Grasslands and Plains
gen_data["GeographyGrassland"] = ["Countryside","Grasslands","Plains","Prairie","Steppes"];
gen_data["GeographyGrasslandSmall"] = ["Field","Fields","Meadow","Pasture"];
gen_data["GeographyGrasslandFeature"] = [];

// Hills and Highlands
gen_data["GeographyHill"] = ["Foothills","Highlands","Hills","Uplands"];
gen_data["GeographyHillSmall"] = [];
gen_data["GeographyHillFeature"] = ["Hill","Hillock","Knoll","Mound","Outcrop"];

// Jungle
gen_data["GeographyJungle"] = ["Jungle","Rainforest"];
gen_data["GeographyJungleSmall"] = [];
gen_data["GeographyJungleFeature"] = [];

// Mountains
gen_data["GeographyMountain"] = ["Mountains"];
gen_data["GeographyMountainSmall"] = [];
gen_data["GeographyMountainFeature"] = ["Butte","Canyon","Cliff","Dale","Fissure","Glen","Gorge","Horn","Massif","Mountain","Pass","Peak","Plateau","Ravine","Ridge","Saddle","Slope","Spur","Summit","Treeline","Vale","Valley"];

// Swamps and Wetlands
gen_data["GeographySwamp"] = ["Fens","Marshland","Moor","Swamp","Wetlands"];
gen_data["GeographySwampSmall"] = ["Bog","Marsh","Swamp"];
gen_data["GeographySwampFeature"] = [];

// Underdark
gen_data["GeographyUnderdark"] = ["Caverns","Underdark"];
gen_data["GeographyUnderdarkSmall"] = ["Cave","Cavern"];
gen_data["GeographyUnderdarkFeature"] = [];

// Underwater
gen_data["GeographyUnderwater"] = ["Blue Hole","Reef","Sea Bed"];

// Urban
gen_data["GeographyUrbanTiny"] = ["Hamlet","Parish"];
gen_data["GeographyUrbanSmall"] = ["Township","Village"];
gen_data["GeographyUrbanMedium"] = ["Borough","Town"];
gen_data["GeographyUrbanLarge"] = ["City"];

// Volcano
gen_data["GeographyVolcano"] = ["Volcano"];
gen_data["GeographyVolcanoStatus"] = ["Active","Dormant"];
gen_data["GeographyVolcanoFeature"] = ["Ash Field","Caldera","Cone","Crater","Dome","Fissure","Geyser","Hot Springs","Lava Field","Lava Flow","Lava Pool","Magma Chamber","Steam Tube","Vent"];

// Water and Waterways
gen_data["GeographyWater"] = ["Lake","Ocean","Sea"];
gen_data["GeographyWaterSmall"] = ["Pond","Pool","Reservoir","Spring"];

gen_data["GeographyWaterway"] = ["River"];
gen_data["GeographyWaterwaySmall"] = ["Brook","Creek","Stream"];
gen_data["GeographyWaterwayFeature"] = ["Backwater","Confluence","Oxbow","Rapids"]

// --------------------------------------------------------------------------------
// Landmarks
// --------------------------------------------------------------------------------

gen_data["LandmarkRural"] = ["Agriculture","Bridge","Burial","Hospitality","Industry","Military","Municipal","Natural","Public","Religion","Residence"];
gen_data["LandmarkUrban"] =["Bridge","Burial","Entertainment","Hospitality","Military","Municipal","Public","Religion","Residence"];
gen_data["LandmarkWilderness"] = ["Forest","Grassland","Hill","Mountain","Swamp"];

gen_data["LandmarkAgricultureRural"] = ["{NameFamilyAll} farm","{NameFamilyAll} homestead","{NameFamilyAll}'s {MaterialWoodFruit} orchard","{NameFamilyAll} ranch","{NameFamilyAll} vineyard"];
gen_data["LandmarkBridgeRural"] = ["covered bridge","stone bridge","wooden bridge"];
gen_data["LandmarkBridgeUrban"] = ["drawbridge","stone bridge","tower bridge","wooden bridge"];
gen_data["LandmarkBurialRural"] = ["cemetery","graveyard"];
gen_data["LandmarkBurialUrban"] = ["cemetery","graveyard", "{NameFamilyAll} mausoleum","tomb"];
gen_data["LandmarkEntertainmentUrban"] = ["ampitheater","opera house","theater"];
gen_data["LandmarkForestWilderness"] = ["{MaterialWood} grove","forest","stand of {MaterialWood} trees","wood","woods"];
gen_data["LandmarkGrasslandWilderness"] = ["countryside","fields","grasslands","plains","prairie","steppes"];
gen_data["LandmarkHillWilderness"] = ["{NameFamilyAll}'s hill","{NameFamilyAll}'s knoll","foothills","highlands","hills","uplands"];
gen_data["LandmarkHospitalityRural"] = ["bunkhouse","inn","public house"];
gen_data["LandmarkHospitalityUrban"] = ["ale house","hostel","hotel","inn","public house","taphouse","tavern"];
gen_data["LandmarkIndustryRural"] = ["foundry","ironworks","lumber mill","mill","mine","quarry"];
gen_data["LandmarkMilitaryRural"] = ["military encampment","watchtower"];
gen_data["LandmarkMilitaryUrban"] = ["barracks","castle","citadel","gate","gate house","keep","tower","wall"];
gen_data["LandmarkMountainWilderness"] = ["{NameFamilyAll} Canyon","{NameFamilyAll}'s Falls","{NameFamilyAll} Pass","{NameFamilyAll}'s Peak","cliffs","glen","gorge","mountain","mountains","ridge","valley"];
gen_data["LandmarkMunicipalRural"] = ["granary","meeting house","stockade"];
gen_data["LandmarkMunicipalUrban"] = ["clocktower","courthouse","gallows","prison"];
gen_data["LandmarkNaturalRural"] = ["old {MaterialWood} tree"]
gen_data["LandmarkPublicRural"] = ["crossroads","fairgrounds","farmer's market","public common","village green"];
gen_data["LandmarkPublicUrban"] = ["bazaar","market","monument","park","public gardens","plaza","square","statue of {PantheonBenevolent}"];
gen_data["LandmarkReligionRural"] = ["abbey","chapel to {PantheonBenevolent}","monastery","shrine to {PantheonBenevolent}"];
gen_data["LandmarkReligionUrban"] = ["cathedral to {PantheonBenevolent}","temple to {PantheonBenevolent}"];
gen_data["LandmarkResidenceRural"] = ["{NameFamilyAll} Estate","{NameFamilyAll} homestead","{NameFamilyAll} house","{NameFamilyAll} Keep","{NameFamilyAll} Manor","Castle {NameFamilyAll}","Chateau {NameFamilyFrench}"];
gen_data["LandmarkResidenceUrban"] = ["{NameFamilyAll} Estate","{NameFamilyAll} Manor"];
gen_data["LandmarkSwampWilderness"] = ["bog","fens","hollow","marshes","moor","swamp","wetlands"];

// --------------------------------------------------------------------------------
// Locations
// --------------------------------------------------------------------------------

// Location Distance -- Sentence fragments to describe distances in urban, rural, and wilderness settings.
gen_data["LocationRelativeRural"] = ["a couple miles from the","about a quarter mile from the","about a half a mile from the","about a mile from the","across from the","across the {GeographyWaterwaySmall} from the","near the","next to the"];
gen_data["LocationRelativeUrban"] = ["a block from the","a couple blocks from the","a couple hundred feet from the","about a hundred feet from the","across the {GeographyWaterway} from the","across the street from the","near the","next to the"];
gen_data["LocationRelativeWilderness"] = ["about a day's walk from the","about two days from the","about three days from the","about five days from the"];

gen_data["LocationSettlementRural"] = ["on the {Direction} side of town"];
gen_data["LocationSettlementUrban"] = ["on the {Direction} side of town"];
gen_data["LocationSettlementWilderness"] = ["{Direction} of town"];

// --------------------------------------------------------------------------------
// Magic School
// --------------------------------------------------------------------------------
gen_data["MagicSchool"] = ["Abjuration","Conjuration","Divination","Dunamancy","Enchantment","Evocation","Illusion","Necromancy","Tranmutation"];
gen_data["MagicSchoolPractitioner"] = ["Abjurist","Conjurer","Diviner","Dunamist","Enchanter","Evoker","Illusionist","Necromancer","Transmuter"];

// --------------------------------------------------------------------------------
// Materials 
// --------------------------------------------------------------------------------
gen_data["MaterialMetal"] = {"1-75":"{MaterialMetalCommon}","76-95":"{MaterialMetalSemiPrecious}","96-100":"{MaterialMetalPrecious}"};
gen_data["MaterialMetalCommon"] = ["Iron","Steel"];
gen_data["MaterialMetalSemiPrecious"] = ["Brass","Bronze","Copper"];
gen_data["MaterialMetalPrecious"] = ["Electrum","Gold","Mithral","Platinum","Silver"];

gen_data["MaterialStone"] = {"1-75":"{MaterialStoneCommon}","76-95":"{MaterialStoneSemiPrecious}","96-100":"{MaterialStonePrecious}"};
gen_data["MaterialStoneCommon"] = ["Alabaster","Basalt","Coal","Granite","Limestone","Marble","Sandstone","Salt","Shale","Slate","Soapstone","Stone"]
gen_data["MaterialStoneSemiPrecious"] = ["Amethyst","Aquamarine","Aventurine","Bloodstone","Carnelian","Citrine","Garnet","Hematite","Jade","Jasper","Jet","Lapis Lazuli","Malachite","Moonstone","Obsidian","Onyx","Peridot","Quartz","Rose Quartz","Turquoise"];
gen_data["MaterialStonePrecious"] = ["Alexandrite","Beryl","Diamond","Emerald","Opal","Ruby","Sapphire","Tanzanite"];

gen_data["MaterialWood"] = {"1-75":"{MaterialWoodCommon}","76-95":"{MaterialWoodUncommon}","96-100":"{MaterialWoodFruit}"};
gen_data["MaterialWoodCommon"] = ["alder","ash","beech","birch","cedar","elm","fir","maple","oak","pine","poplar","spruce"];
gen_data["MaterialWoodUncommon"] = ["aspen","elder","magnolia","mahogany","redwood","sycamore","willow","yew"];
gen_data["MaterialWoodFruit"] = ["apple","cherry","chestnut","peach","pear","plum","walnut"];

// --------------------------------------------------------------------------------
// Names (Personal)
// --------------------------------------------------------------------------------
gen_data["NameFamilyAll"] = ["{NameFamilyDragonborn}","{NameFamilyDwarf}","{NameFamilyElf}","{NameFamilyHalfling}","{NameFamilyArabic}","{NameFamilyBarovian}","{NameFamilyCeltic}","{NameFamilyChinese}","{NameFamilyEnglish}","{NameFamilyFrench}","{NameFamilyGerman}","{NameFamilyGreek}","{NameFamilyIndian}","{NameFamilyJapanese}","{NameFamilyMaori}","{NameFamilyMesoamerican}","{NameFamilyRoman}","{NameFamilySlavic}","{NameFamilySpanish}"];

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
gen_data["NameFamilyGerman"] = ["Abel","Arnolt","Bartholme","Belligs","Bollinger","Brohmer","Cappus","Dasel","Deutschenbaur","Dottenreucherin","Eck","Enngelhart","Fendin","Fredenman","Ful","Geyger","Göck","Groll","Gutman","Happolt","Heffnerin","Hertman","Hilprant","Honiger","Isenmenger","Kapp","Kempff","Kleinschrotte","Konig","Küchlin","Lanng","Lerchn","Loffler","Macklerin","Mendel","Mewslin","Most","Murrin","Neuckam","Nuber","Ochslin","Oswalt","Pawczer","Pele","Pfaff","Pffeller","Pischoff","Prewnnegk","Pütel","Raschart","Regerin","Reppin","Reynhartt","Rodegast","Rosennberger","Rufflin","Sattler","Schawch","Schenkel","Schlee","Schmiddt","Schnee","Schnyder","Schreiber","Schulten","Schwarcz","Schycker","Sesler","Simler","Spanring","Stahel","Steller","Stoll","Streibe","Stuler","Swapp","Tagthurner","Thoman","Trager","Tuchscherrer","Veste","Vilshofer","Volcker","Von Grünigen","Von Radach","Von Winenden","Voslein","Walther","Weick","Weltzlin","Werlein","Weyck","Widmann","Winter","Wishart","Wyck","Zech","Zigel","Zutlinger","Zweck"];
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

// NPC Class Level -- Divides the supported NPC Classes into generic levels 
gen_data["NPCClassLevel"] = {"1-60":"Low","61-90":"Medium","91-100":"High"};
gen_data["NPCClassLevelLow"] = ["Acolyte","Bandit","Commoner","Cultist","Guard","Noble","Scout","Thug"];
gen_data["NPCClassLevelMedium"] = ["Bandit Captain","Berserker","Cult Fanatic","Druid","Knight","Priest","Spy","Tribal Warrior","Veteran"];
gen_data["NPCClassLevelHigh"] = ["Archmage","Assassin","Gladiator","Mage"];

// --------------------------------------------------------------------------------
// OccupationEmployer
// --------------------------------------------------------------------------------

// Adventure
gen_data["OccupationEmployerAdventureAdjective"] = ["Famous","Infamous","Respected","Shady","Unscrupulous","Washed-up","Well-known"];
gen_data["OccupationEmployerAdventureSize"] = ["Band","Company","Group","Party"];
gen_data["OccupationEmployerAdventureType"] = ["Adventurers","Mercenaries","Monster Hunters","Treasure-Seekers","Troublemakers"];
gen_data["OccupationEmployerAdventureLocation"] = ["Wilderness"];
gen_data["OccupationEmployerAdventureMission"] = ["Barrow","Cavern","Crypt","Dungeon","Mine","Ruin","Tomb"];
gen_data["OccupationEmployerAdventureMissionAdjective"] = ["Abandoned","Cursed","Forgotten","Haunted","Lost","Recently-discovered"];
gen_data["OccupationEmployerAdventureMissionPrefix"] = ["on their way to","on their way back from","preparing for an expedition to","recovering from an expedition to"];

// Agriculture
gen_data["OccupationEmployerAgricultureAdjective"] = ["Profitable","Struggling","Successful"];
gen_data["OccupationEmployerAgricultureLocation"] = ["Rural"];
gen_data["OccupationEmployerAgricultureSize"] = ["Large","Small"];
gen_data["OccupationEmployerAgricultureType"] = ["Farm","Homestead","{MaterialWoodFruit} Orchard","Ranch","Vineyard"];

// Crime
gen_data["OccupationEmployerCrimeAdjective"] = ["Influential","Powerful","Large","Ruthless","Small","Waning","Weak"];
gen_data["OccupationEmployerCrimeType"] = ["Crime Family", "Crime Syndicate", "Criminal Enterprise", "Gang", "Thieves\' Guild"];
gen_data["OccupationEmployerCrimeLocation"] = ["Urban"];
gen_data["OccupationEmployerCrimeHideout"] = ["abandoned {OccupationEmployerIndustryType}","seedy, back-alley {OccupationEmployerHospitalityType}"];
gen_data["OccupationEmployerCrimeMission"] = ["Racket","Ring","Operation"];
gen_data["OccupationEmployerCrimeMissionAdjective"] = ["Blackmail","Counterfeiting","Drug Trafficking","Extortion","Gambling","Loansharking","Pit-fighting","Prostitution","Protection","Robbery","Smuggling"];
gen_data["OccupationEmployerCrimeMissionPrefix"] = ["Running"];

// Education
gen_data["OccupationEmployerEducationAdjective"] = ["Elite","Exclusive","Prestigious","Private","Public","Underfunded"];
gen_data["OccupationEmployerEducationLocation"] = ["Urban"];
gen_data["OccupationEmployerEducationSize"] = ["Large","Small"];
gen_data["OccupationEmployerEducationType"] = ["Academy","College","Lyceum","School","University"];

// Hospitality
gen_data["OccupationEmployerHospitalityAdjective"] = ["Busy","Comfortable","Dimly-lit","Profitable","Quiet","Rundown","Seedy","Squalid","Struggling","Wealthy"];
gen_data["OccupationEmployerHospitalityLocation"] = ["Rural","Urban"];
gen_data["OccupationEmployerHospitalitySize"] = ["Large","Small"];
gen_data["OccupationEmployerHospitalityType"] = ["Ale House","Hostel","Hotel","Inn","Public House","Taphouse","Tavern"];

// Industry
gen_data["OccupationEmployerIndustryAdjective"] = ["Busy","Profitable","Struggling","Successful"];
gen_data["OccupationEmployerIndustryLocation"] = ["Rural","Urban"];
gen_data["OccupationEmployerIndustrySize"] = ["Large","Small"];
gen_data["OccupationEmployerIndustryType"] = ["Brewery","Distillery","Foundry","Ironworks","Lumber Mill","Mill","{MaterialMetal} Mine","{MaterialStone} Quarry","Shipyard","Siegeworks","Warehouse"];

// Military
gen_data["OccupationEmployerMilitaryAdjective"] = ["Elite","Inexperienced","Seasoned","Under-Personality","Veteran"];
gen_data["OccupationEmployerMilitaryLocation"] = ["Rural"];
gen_data["OccupationEmployerMilitaryMissionAlly"] = [
  "assigned to the protective detail of a visiting noble",
  "assigned to a local {OccupationEmployerMilitarySize} as part of an exchange program",
  "assigned to a training detail for the local militia",
  "on leave and taking a long-deserved vacation"
];
gen_data["OccupationEmployerMilitaryMissionArmy"] = [
  "on leave and heading home to see their family",
  "returning from leave and on their way back to their unit",
  "on temporary assignment to help train the local militia",
  "traveling with a supply caravan on their way back to the border",
  "staying at the encampment on the edge of town"
];
gen_data["OccupationEmployerMilitaryMissionPrivate"] = [
  "housed at the {OccupationEmployerNobilityType} of their employer",
  "assigned to the protective detail of their employer",
  "on a secret mission for their employer"
];
gen_data["OccupationEmployerMilitarySize"] = ["Battalion","Brigade","Company","Detachment","Division","Regiment"];
gen_data["OccupationEmployerMilitaryType"] = ["Army of a Foreign Ally","Private Army of a Powerful House","National Army"];

// Merchant
gen_data["OccupationEmployerMerchantAdjective"] = ["Busy","Profitable","Quiet","Struggling","Successful"];
gen_data["OccupationEmployerMerchantLocation"] = ["Urban"];
gen_data["OccupationEmployerMerchantSize"] = ["Large","Small"];
gen_data["OccupationEmployerMerchantType"] = ["Establishment","Shop"];

// Nature
gen_data["OccupationEmployerNatureAdjective"] = ["Makeshift","Plain","Private","Quiet","Rustic","Secluded","Simple","Well-built"];
gen_data["OccupationEmployerNatureLocation"] = ["Rural"];
gen_data["OccupationEmployerNatureSize"] = ["Comfortable","Cozy","Quaint","Small"];
gen_data["OccupationEmployerNatureType"] = ["Bungalow","Cabin","Camp","Cottage","Homestead","House","Hovel","Hut","Shack"];

// Nautical
gen_data["OccupationEmployerNauticalAdjective"] = ["Fishing","Merchant","Naval","Pirate","Smuggler's"];
gen_data["OccupationEmployerNauticalSize"] = ["Large","Small"];
gen_data["OccupationEmployerNauticalType"] = ["Ship","Vessel"];

// Nobility
gen_data["OccupationEmployerNobilityAdjective"] = ["Beautiful","Gorgeous","Impressive","Large","Old","Rundown","Small","Well-kept"];
gen_data["OccupationEmployerNobilityLocation"] = ["Rural","Urban"];
gen_data["OccupationEmployerNobilityType"] = ["Chateau","Estate","Keep","Manor House","Mansion","Townhome","Villa"];

// Police
gen_data["OccupationEmployerPoliceAdjective"] = ["Elite","Inexperienced","Seasoned","Under-Personality","Veteran"];
gen_data["OccupationEmployerPoliceSize"] = ["Detachment","Division","Precinct","Squad","Unit"];
gen_data["OccupationEmployerPoliceType"] = ["Local Militia","Local Watch"];

// Professional
gen_data["OccupationEmployerProfessionalAdjective"] = ["Cluttered","Cozy","Cramped","Quaint","Quiet","Struggling","Successful"];
gen_data["OccupationEmployerProfessionalLocation"] = ["Urban"];
gen_data["OccupationEmployerProfessionalSize"] = ["Large","Small"];
gen_data["OccupationEmployerProfessionalType"] = ["Office"];

// Religion
gen_data["OccupationEmployerReligionAdjective"] = ["Beautiful","Gorgeous","Impressive","Large","Old","Rundown","Small","Well-kept"];
gen_data["OccupationEmployerReligionLocation"] = ["Urban"];
gen_data["OccupationEmployerReligionSize"] = ["Large","Small"];
gen_data["OccupationEmployerReligionType"] = ["Abbey","Cathedral","Chapel","Church","Monastery","Sanctuary","Shrine","Temple"];

// Service
gen_data["OccupationEmployerServiceAdjective"] = ["Disgraced","Influential","Large","Major","Minor","Old","Ostracized","Powerful","Small"];
gen_data["OccupationEmployerServiceLocation"] = ["Rural","Urban"];
gen_data["OccupationEmployerServiceType"] = ["Noble Family", "Noble House"];




// --------------------------------------------------------------------------------
// OccupationExperience - Adjectives to indicate an NPCs experience level in their job.
// --------------------------------------------------------------------------------

// Adventure
gen_data["OccupationExperienceAdventureYoung"] = ["Earnest","Enthusiastic","Inexperienced","New","Promising","Talented","Undisciplined","Young"];
gen_data["OccupationExperienceAdventureAdult"] = ["Capable","Competent","Experienced","Practiced","Polished","Professional","Skilled","Well-rounded"];
gen_data["OccupationExperienceAdventureMature"] = ["Accomplished","Adept","Experienced","Expert","Highly-Skilled","Respected","Seasoned","Veteran","Washed-up","Well-known"];
gen_data["OccupationExperienceAdventureElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceAdventureVenerable"] = ["Legendary","Venerable","Very Old"];

// Agriculture
gen_data["OccupationExperienceAgricultureYoung"] = ["Aspiring","Inexperienced","Young"];
gen_data["OccupationExperienceAgricultureAdult"] = ["Capable","Competent","Experienced"];
gen_data["OccupationExperienceAgricultureMature"] = ["Experienced"];
gen_data["OccupationExperienceAgricultureElderly"] = ["Elderly","Old"];
gen_data["OccupationExperienceAgricultureVenerable"] = ["Very Old"];

// Crime
gen_data["OccupationExperienceCrimeYoung"] = ["Inexperienced","Promising","Talented","Undisciplined","Young"];
gen_data["OccupationExperienceCrimeAdult"] = ["Capable","Competent","Experienced","Practiced","Skilled","Well-rounded"];
gen_data["OccupationExperienceCrimeMature"] = ["Accomplished","Experienced","Expert","Highly-Skilled","Respected","Washed-up","Well-known"];
gen_data["OccupationExperienceCrimeElderly"] = ["Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceCrimeVenerable"] = ["Legendary","Venerable","Very Old"];

// Education
gen_data["OccupationExperienceEducationYoung"] = ["Apprentice","Aspiring","Earnest","Enthusiastic","Gifted","Handy","Inexperienced","New","Promising","Talented","Undisciplined","Unpolished","Young"];
gen_data["OccupationExperienceEducationAdult"] = ["Capable","Competent","Experienced"];
gen_data["OccupationExperienceEducationMature"] = ["Accomplished","Adept","Experienced","Respected","Washed-up","Well-known"];
gen_data["OccupationExperienceEducationElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceEducationVenerable"] = ["Legendary","Venerable","Very Old"];

// Hospitality
gen_data["OccupationExperienceHospitalityYoung"] = ["Apprentice","Aspiring","Earnest","Enthusiastic","Gifted","Handy","Inexperienced","New","Promising","Talented","Undisciplined","Unpolished","Young"];
gen_data["OccupationExperienceHospitalityAdult"] = ["Capable","Competent","Experienced","Practiced","Polished","Professional","Skilled","Well-rounded"];
gen_data["OccupationExperienceHospitalityMature"] = ["Accomplished","Adept","Experienced","Expert","Highly-Skilled","Respected","Seasoned","Veteran","Washed-up","Well-known"];
gen_data["OccupationExperienceHospitalityElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceHospitalityVenerable"] = ["Legendary","Venerable","Very Old"];

// Industry
gen_data["OccupationExperienceIndustryYoung"] = ["Apprentice","Earnest","Enthusiastic","Gifted","Handy","Inexperienced","New","Promising","Talented","Undisciplined","Unpolished","Young"];
gen_data["OccupationExperienceIndustryAdult"] = ["Capable","Competent","Experienced","Practiced","Polished","Professional","Skilled","Well-rounded"];
gen_data["OccupationExperienceIndustryMature"] = ["Accomplished","Experienced","Expert","Highly-Skilled","Respected","Seasoned","Veteran","Washed-up","Well-known"];
gen_data["OccupationExperienceIndustryElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceIndustryVenerable"] = ["Legendary","Venerable","Very Old"];

// Military
gen_data["OccupationExperienceMilitaryYoung"] = ["Earnest","Enthusiastic","Gifted","Inexperienced","New","Promising","Talented","Undisciplined","Unpolished","Young"];
gen_data["OccupationExperienceMilitaryAdult"] = ["Capable","Competent","Experienced","Practiced","Professional","Skilled","Well-rounded"];
gen_data["OccupationExperienceMilitaryMature"] = ["Accomplished","Experienced","Expert","Highly-Skilled","Respected","Seasoned","Veteran","Washed-up","Well-known"];
gen_data["OccupationExperienceMilitaryElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceMilitaryVenerable"] = ["Legendary","Venerable","Very Old"];

// Merchant
gen_data["OccupationExperienceMerchantYoung"] = ["Apprentice","Aspiring","Earnest","Gifted","Inexperienced","New","Promising","Talented","Young"];
gen_data["OccupationExperienceMerchantAdult"] = ["Capable","Competent","Experienced","Practiced","Skilled","Well-rounded"];
gen_data["OccupationExperienceMerchantMature"] = ["Accomplished","Adept","Experienced","Expert","Highly-Skilled","Respected","Well-known"];
gen_data["OccupationExperienceMerchantElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceMerchantVenerable"] = ["Venerable","Very Old","Well-respected"];

// Nature
gen_data["OccupationExperienceNatureYoung"] = ["Inexperienced","New","Talented","Young"];
gen_data["OccupationExperienceNatureAdult"] = ["Capable","Competent","Experienced","Practiced","Skilled"];
gen_data["OccupationExperienceNatureMature"] = ["Experienced","Expert","Highly-Skilled","Respected","Well-known"];
gen_data["OccupationExperienceNatureElderly"] = ["Elderly","Famous","Master","Old","Well-respected"];
gen_data["OccupationExperienceNatureVenerable"] = ["Legendary","Venerable","Very Old"];

// Nautical
gen_data["OccupationExperienceNauticalYoung"] = ["Apprentice","Earnest","Inexperienced","New","Promising","Undisciplined","Young"];
gen_data["OccupationExperienceNauticalAdult"] = ["Capable","Competent","Experienced","Skilled","Well-rounded"];
gen_data["OccupationExperienceNauticalMature"] = ["Accomplished","Experienced","Expert","Respected","Seasoned","Veteran","Washed-up","Well-known"];
gen_data["OccupationExperienceNauticalElderly"] = ["Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceNauticalVenerable"] = ["Legendary","Venerable","Very Old"];

// Nobility
gen_data["OccupationExperienceNobilityYoung"] = ["Earnest","New","Undisciplined","Unpolished","Young"];
gen_data["OccupationExperienceNobilityAdult"] = ["Capable","Competent","Experienced","Polished"];
gen_data["OccupationExperienceNobilityMature"] = ["Experienced","Respected","Well-known"];
gen_data["OccupationExperienceNobilityElderly"] = ["Elder","Elderly","Famous","Old","Well-respected"];
gen_data["OccupationExperienceNobilityVenerable"] = ["Legendary","Venerable","Very Old","Well-respected"];

// Police
gen_data["OccupationExperiencePoliceYoung"] = ["Earnest","Enthusiastic","Inexperienced","New","Promising","Undisciplined","Young"];
gen_data["OccupationExperiencePoliceAdult"] = ["Capable","Competent","Experienced"];
gen_data["OccupationExperiencePoliceMature"] = ["Experienced","Respected","Seasoned","Veteran","Washed-up"];
gen_data["OccupationExperiencePoliceElderly"] = ["Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperiencePoliceVenerable"] = ["Legendary","Venerable","Very Old"];

// Professional
gen_data["OccupationExperienceProfessionalYoung"] = ["Aspiring","Earnest","Enthusiastic","Gifted","Inexperienced","New","Promising","Talented","Young"];
gen_data["OccupationExperienceProfessionalAdult"] = ["Capable","Competent","Experienced","Polished","Professional"];
gen_data["OccupationExperienceProfessionalMature"] = ["Accomplished","Experienced","Expert","Respected","Seasoned","Washed-up","Well-known"];
gen_data["OccupationExperienceProfessionalElderly"] = ["Elder","Elderly","Famous","Master","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceProfessionalVenerable"] = ["Legendary","Venerable","Very Old"];

// Religion
gen_data["OccupationExperienceReligionYoung"] = ["Earnest","Enthusiastic","Gifted","Inexperienced","New","Promising","Talented","Young"];
gen_data["OccupationExperienceReligionAdult"] = ["Capable","Competent","Experienced"];
gen_data["OccupationExperienceReligionMature"] = ["Adept","Experienced","Respected","Well-known"];
gen_data["OccupationExperienceReligionElderly"] = ["Elder","Elderly","Old","Washed-up","Well-respected"];
gen_data["OccupationExperienceReligionVenerable"] = ["Venerable","Very Old"];

// Service
gen_data["OccupationExperienceServiceYoung"] = ["Earnest","Enthusiastic","Inexperienced","New","Promising","Young"];
gen_data["OccupationExperienceServiceAdult"] = ["Capable","Competent","Experienced"];
gen_data["OccupationExperienceServiceMature"] = ["Experienced","Respected"];
gen_data["OccupationExperienceServiceElderly"] = ["Elderly","Old","Well-respected"];
gen_data["OccupationExperienceServiceVenerable"] = ["Retired","Venerable","Very Old"];

// --------------------------------------------------------------------------------
// OccupationTitles -- Broken up by Trade and OccupationGroup
// --------------------------------------------------------------------------------

// Trade - Adventure
gen_data["OccupationTitleAdventureArcane"] = ["{MagicSchoolPractitioner}","Arcanist","Mage"];
gen_data["OccupationTitleAdventureClergy"] = ["Cleric","Healer"];
gen_data["OccupationTitleAdventureMartialMelee"] = ["Fighter"];
gen_data["OccupationTitleAdventureMartialRanged"] = ["Archer","Ranger","Scout"];
gen_data["OccupationTitleAdventureNature"] = ["Druid"];
gen_data["OccupationTitleAdventureNoble"] = ["Cavalier","Fighter","Knight"];
gen_data["OccupationTitleAdventureStealthy"] = ["Rogue","Scout"];

// Trade - Agriculture
gen_data["OccupationTitleAgricultureClergy"] = ["Healer","Farmer"];
gen_data["OccupationTitleAgricultureCommoner"] = ["Farmer"];
gen_data["OccupationTitleAgricultureMartialMelee"] = ["Farmer"];
gen_data["OccupationTitleAgricultureMartialRanged"] = ["Farmer"];

// Trade - Crime
gen_data["OccupationTitleCrimeCommoner"] = ["Bookmaker","Con-Artist","Fence","Loan Shark","Messenger"];
gen_data["OccupationTitleCrimeMartialMelee"] = ["Bandit","Enforcer","Fence","Loan Shark","Robber","Smuggler","Tough"];
gen_data["OccupationTitleCrimeNoble"] = ["Charlatan","Boss","Lieutenant"];
gen_data["OccupationTitleCrimeStealthy"] = ["Assassin","Burglar","Pickpocket","Smuggler","Thief"];

// Trade - Education
gen_data["OccupationTitleEducationArcane"] = ["{MagicSchoolPractitioner}","Alchemist","Arcanist","Archaelogist","Headmaster","Planar-Theorist","Professor of {MagicSchool}","Professor of Arcane-Archaelogy","Professor of Planar Travel"];
gen_data["OccupationTitleEducationClergy"] = ["Professor of Divine Magic"];
gen_data["OccupationTitleEducationCommoner"] = ["Administrator","Clerk","Gardener","Groundskeeper","Janitor","Librarian","Linguist","Historian","Mathematician","Philosopher","Teacher"];
gen_data["OccupationTitleEducationMartialMelee"] = ["Guard"];
gen_data["OccupationTitleEducationMartialRanged"] = ["Gamekeeper"];
gen_data["OccupationTitleEducationNature"] = ["Professor of Natural Magic"];
gen_data["OccupationTitleEducationNoble"] = ["Chancellor","Dean","Headmaster"];

// Trade - Hospitality
gen_data["OccupationTitleHospitalityCommoner"] = ["Baker","Barkeep","Cook","Innkeeper","Porter","Servant","Stablehand","Waiter"];
gen_data["OccupationTitleHospitalityMartialMelee"] = ["Bouncer"];
gen_data["OccupationTitleHospitalityNoble"] = ["Innkeeper"];

// Trade - Industry
gen_data["OccupationTitleIndustryCommoner"] = ["Foreperson","Laborer","Worker"];
gen_data["OccupationTitleIndustryMartialMelee"] = ["Guard","Laborer","Worker"];
gen_data["OccupationTitleIndustryNoble"] = ["Boss","Manager"];

// Trade - Merchant
gen_data["OccupationTitleMerchantArcane"] = ["Alchemist","Arcanist","Enchanter","Seller of Magical Reagents and Supplies","Scribe","Wandmaker"];
gen_data["OccupationTitleMerchantClergy"] = ["Bookseller","Healer"];
gen_data["OccupationTitleMerchantCommoner"] = ["Apothecary","Armorer","Baker","Barber","Blacksmith","Bookseller","Bowyer","Butcher","Carpenter","Cartwright","Clothier","Cobbler","Cooper","Engraver","Fishmonger","Fletcher","Furrier","Glassblower","Grocer","Haberdasher","Hatmaker","Herbalist","Jeweler","Leathersmith","Locksmith","Mercer","Metalsmith","Potter","Shipwright","Stonemason","Tailor","Tinker","Weaponsmith","Weaver","Woodcarver"];
gen_data["OccupationTitleMerchantMartialRanged"] = ["Bowyer","Fletcher","Furrier","Leathersmith"];
gen_data["OccupationTitleMerchantNature"] = ["Apothecary","Herbalist"];

// Trade - Military
gen_data["OccupationTitleMilitaryArcane"] = ["Arcanist","Battlemage","Commander","Officer","Mage"];
gen_data["OccupationTitleMilitaryClergy"] = ["Cleric","Healer"];
gen_data["OccupationTitleMilitaryCommoner"] = ["Cook","Courier","Herald","Porter","Supply Clerk"];
gen_data["OccupationTitleMilitaryMartialMelee"] = ["Sergeant","Sergeant-at-Arms","Soldier"];
gen_data["OccupationTitleMilitaryMartialRanged"] = ["Archer","Scout"];
gen_data["OccupationTitleMilitaryNoble"] = ["Cavalier","Captain","Commander","Knight","Officer"];
gen_data["OccupationTitleMilitaryStealthy"] = ["Assassin","Spy"];

// Trade - Nature
gen_data["OccupationTitleNatureCommoner"] = ["Cartographer","Fisher","Forager","Forester","Trapper"];
gen_data["OccupationTitleNatureMartialMelee"] = ["Forester","Guide","Hunter","Tracker","Trapper"];
gen_data["OccupationTitleNatureMartialRanged"] = ["Guide","Hunter","Ranger","Tracker","Trapper","Warden"];
gen_data["OccupationTitleNatureNature"] = ["Druid","Herbalist","Healer","Shaman"];

// Trade - Nautical
gen_data["OccupationTitleNauticalClergy"] = ["Healer"];
gen_data["OccupationTitleNauticalCommoner"] = ["Carpenter","Cook","Deckhand","Sailor"];
gen_data["OccupationTitleNauticalMartialMelee"] = ["Bosun","Quartermaster"];
gen_data["OccupationTitleNauticalMartialRanged"] = ["Archer"];
gen_data["OccupationTitleNauticalNoble"] = ["Captain","First Mate"];

// Trade - Nobility
gen_data["OccupationTitleNobilityArcane"] = ["Archmage"];
gen_data["OccupationTitleNobilityClergy"] = ["Archbishop","Bishop","High Priest"];
gen_data["OccupationTitleNobilityNoble"] = ["Noble"];

// Trade - Police
gen_data["OccupationTitlePoliceMartialMelee"] = ["Guard","Sentry"];
gen_data["OccupationTitlePoliceMartialRanged"] = ["Archer"];
gen_data["OccupationTitlePoliceNoble"] = ["Captain","Commander","Inspector","Investigator", "Watchmaster"];
gen_data["OccupationTitlePoliceStealthy"] = ["Inspector","Investigator"];

// Trade - Professional
gen_data["OccupationTitleNobilityClergy"] = ["Physician"];
gen_data["OccupationTitleProfessionalMartialMelee"] = ["Bounty Hunter"];
gen_data["OccupationTitleProfessionalNoble"] = ["Barrister","Banker","Money Lender"];
gen_data["OccupationTitleProfessionalStealthy"] = ["Bounty Hunter","Private Investigator"];

// Trade - Religion
gen_data["OccupationTitleReligionClergy"] = ["Acolyte","Cleric","Priest"];

// Trade - Service
gen_data["OccupationTitleServiceArcane"] = ["Adviser","Chamberlain","Vizier"];
gen_data["OccupationTitleServiceClergy"] = ["Chaplain"];
gen_data["OccupationTitleServiceCommoner"] = ["Cook","Gardener","Groundskeeper","Servant","Stablehand","Usher"];
gen_data["OccupationTitleServiceMartialMelee"] = ["Bodyguard","Guard","Housecarl","Reeve"];
gen_data["OccupationTitleServiceMartialRanged"] = ["Gameskeeper","Hunter","Reeve","Warden"];
gen_data["OccupationTitleServiceNature"] = ["Gardener","Groundskeeper"];
gen_data["OccupationTitleServiceNoble"] = ["Chamberlain","Majordomo","Marshall","Steward","Thane"];
gen_data["OccupationTitleServiceStealthy"] = ["Agent"];

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
// OccupationTrades
// --------------------------------------------------------------------------------
gen_data["OccupationTradeAcolyte"] = {"1-5":"Adventure","6-15":"Agriculture","16-20":"Merchant","21-25":"Military","26-30":"Professional","31-95":"Religion","96-100":"Service"};
gen_data["OccupationTradeArchmage"] = {"1-10":"Adventure","11-60":"Education","61-80":"Merchant","81-90":"Military","91-100":"Nobility"};
gen_data["OccupationTradeAssassin"] = {"1-20":"Adventure","21-60":"Crime","61-80":"Military","81-90":"Professional","91-100":"Service"};
gen_data["OccupationTradeBandit"] = {"1-30":"Agriculture","31-100":"Crime"};
gen_data["OccupationTradeBandit-Captain"] = {"1-35":"Adventure","36-85":"Crime","86-100":"Professional"};
gen_data["OccupationTradeBerserker"] = {"1-25":"Adventure","26-30":"Agriculture","31-50":"Crime","51-75":"Industry","76-85":"Military","86-100":"Nature"};
gen_data["OccupationTradeCommoner"] = {"1-30":"Agriculture","31-40":"Crime","41-50":"Education","51-60":"Hospitality","61-75":"Industry","76-85":"Merchant","86-90":"Military","91-95":"Nature","96-100":"Service"};
gen_data["OccupationTradeCult-Fanatic"] = {"1-25":"Adventure","26-45":"Merchant","46-55":"Military","56-85":"Religion","86-100":"Service"};
gen_data["OccupationTradeCultist"] = {"1-30":"Agriculture","31-40":"Crime","41-50":"Education","51-60":"Hospitality","61-75":"Industry","76-85":"Merchant","86-90":"Military","91-95":"Nature","96-100":"Service"};
gen_data["OccupationTradeDruid"] = {"1-20":"Adventure","20-35":"Education","36-55":"Merchant","56-95":"Nature","96-100":"Service"};
gen_data["OccupationTradeGladiator"] = {"1-30":"Adventure","31-35":"Agriculture","36-65":"Crime","66-70":"Hospitality","71-85":"Military","86-95":"Police","96-100":"Service"};
gen_data["OccupationTradeGuard"] = {"1-10":"Agriculture","11-15":"Education","16-20":"Industry","21-40":"Military","41-95":"Police","96-100":"Service"};
gen_data["OccupationTradeKnight"] = {"1-30":"Adventure","31-90":"Military","91-100":"Police"};
gen_data["OccupationTradeMage"] = {"1-30":"Adventure","31-50":"Education","51-70":"Merchant","71-90":"Military","91-100":"Service"};
gen_data["OccupationTradeNoble"] = {"1-5":"Adventure","6-10":"Crime","11-15":"Education","16-20":"Hospitality","21-25":"Industry","26-30":"Merchant","31-35":"Military","36-80":"Nobility","81-95":"Professional","96-100":"Service"};
gen_data["OccupationTradePriest"] = {"1-20":"Adventure","21-30":"Education","31-35":"Merchant","36-40":"Military","41-45":"Nobility","46-100":"Religion"};
gen_data["OccupationTradeScout"] = {"1-10":"Adventure","11-20":"Agriculture","21-25":"Education","26-30":"Merchant","31-50":"Military","51-80":"Nature","81-100":"Service"};
gen_data["OccupationTradeSpy"] = {"1-20":"Adventure","21-55":"Crime","56-60":"Merchant","61-90":"Military","91-95":"Professional","96-100":"Service"};
gen_data["OccupationTradeThug"] = {"1-10":"Adventure","11-20":"Agriculture","21-50":"Crime","51-55":"Hospitality","56-65":"Industry","66-85":"Military","86-90":"Professional","91-100":"Service"};
gen_data["OccupationTradeTribal-Warrior"] = {"1-40":"Agriculture","41-100":"Nature"};
gen_data["OccupationTradeVeteran"] = {"1-20":"Adventure","21-25":"Agriculture","26-40":"Crime","41-45":"Education","46-50":"Hospitality","51-55":"Industry","56-60":"Merchant","61-85":"Military","86-90":"Nature","91-95":"Professional","96-100":"Service"};

// --------------------------------------------------------------------------------
// Pantheon -- Provides lists of gods, demons, and devils that may be worshipped.
// --------------------------------------------------------------------------------

// PantheonList
gen_data["PantheonList"] = {"1-70":"Benevolent","71-80":"Malevolent","81-85":"Lesser","86-90":"Demon","91-95":"Devil"};

// Dawn War / Critical Role
gen_data["PantheonBenevolent"] = ["Avandra","Bahamut","Corellon","Erathis","Ioun","Kord","Melora","Moradin","Pelor","Raven Queen","Sehanine"];
gen_data["PantheonMalevolent"] = ["Asmodeus","Bane","Gruumsh","Lolth","Tharizdun","Tiamat","Torog","Vecna","Zehir"];
gen_data["PantheonLesser"] = ["Artagan","Ceratos","Desirat","Laduegar","Naviask","Quajath","The Hag Mother","The Luxon","Vesh","Xalicas"];

gen_data["PantheonBenevolentAvandra"] = ["change and luck"];
gen_data["PantheonBenevolentBahamut"] = ["justice and nobility"];
gen_data["PantheonBenevolentCorellon"] = ["magic and the arts"];
gen_data["PantheonBenevolentErathis"] = ["civilization and invention"];
gen_data["PantheonBenevolentIoun"] = ["knowledge"];
gen_data["PantheonBenevolentKord"] = ["strength and storms"];
gen_data["PantheonBenevolentMelora"] = ["wilderness and the seas"];
gen_data["PantheonBenevolentMoradin"] = ["creation"];
gen_data["PantheonBenevolentPelor"] = ["sun and agriculture"];
gen_data["PantheonBenevolentRaven Queen"] = ["death and fate"];
gen_data["PantheonBenevolentSehanine"] = ["the moon"];

gen_data["PantheonMalevolentAsmodeus"] = ["tyranny"];
gen_data["PantheonMalevolentBane"] = ["war and conquest"];
gen_data["PantheonMalevolentGruumsh"] = ["destruction"];
gen_data["PantheonMalevolentLolth"] = ["spiders and lies"];
gen_data["PantheonMalevolentTharizdun"] = ["madness and chaos"];
gen_data["PantheonMalevolentTiamat"] = ["wealth, greed, and vengeance"];
gen_data["PantheonMalevolentTorog"] = ["underdark"];
gen_data["PantheonMalevolentVecna"] = ["secrets and forbidden knowledge"];
gen_data["PantheonMalevolentZehir"] = ["darkness and serpents"];

// Demons & Devils
gen_data["PantheonDemon"] = ["Orcus"];
gen_data["PantheonDFlaw"] = ["Zariel"];

// --------------------------------------------------------------------------------
// Personality
// --------------------------------------------------------------------------------

// Personality classes and types heavily based on Myers-Briggs and 16Personalities.com. 
gen_data["PersonalityType"] = ["Adventurer","Advocate","Architect","Campaigner","Commander","Consul","Debater","Defender","Entertainer","Entrepreneur","Executive","Logician","Logistician","Mediator","Protagonist","Virtuoso"];

// Personality Type to Alignment
gen_data["PersonalityTypeChaotic"] = ["Adventurer","Advocate","Architect","Campaigner","Debater","Entertainer","Entrepreneur","Logician","Mediator","Virtuoso"];
gen_data["PersonalityTypeLawful"] = ["Commander","Consul","Defender","Executive","Logistician","Protagonist"];
gen_data["PersonalityTypeNeutral"] = ["{PersonalityTypeChaotic}","{PersonalityTypeLawful}"];

// Adventurer (Introverted, Observant, Feeling, Prospecting)
gen_data["AdventurerPersonality"] = [
  "has a unique <strong>sense of style</strong> that is bold, creative, and well outside local norms.",
  "is <strong>charming</strong> with a <strong>laid-back</strong> demeanor that puts people at ease.",
  "can't stand monotony and is always looking for ways to introduce a little <strong>fun</strong> in their lives.",
  "has a <strong>larger than life</strong> persona in public, but is actually quite <strong>introverted</strong> in private.",
  "<strong>lives in the moment</strong> and rarely puts much thought into planning what they will do next.",
  "brings an <strong>artistic</strong> flair to even the most mundane tasks."
];
gen_data["AdventurerFlaw"] = [
  "is <strong>thin-skinned</strong> and does not take criticism well. Even a well-intentioned comment can set them off.",
  "is incredibly <strong>self-absorbed</strong>. Their first instinct is to look out for themselves as is their second and third.",
  "is <strong>manipulative</strong>, often using their <strong>charm</strong> to get what they want, and often at someone else's expense.",
  "is dangerously <strong>unpredictable</strong>, often giving into their most base and dangerous impulses without concern for the consequences.",
  "is <strong>easily stressed</strong> when things do not go as planned and they will often lash out without warning.",
  "is <strong>overly competitive</strong> and turns everything into a competition. They are insufferable when they win and worse when they lose.",
  "has a serious <strong>gambling problem</strong>. They'll wager on just about anything and have significant debts as a result."
];

// Advocate (Introverted, Intuitive, Feeling, Judging)
gen_data["AdvocatePersonality"] = [
  "is normally <strong>quiet</strong> and <strong>reserved</strong>, but can become quite <strong>passionate</strong> when properly motivated.",
  "is <strong>insightful</strong> with an uncanny ability to <strong>connect with people</strong> and understand their motives and feelings.",
  "is a <strong>good listener</strong> with a natural talent for putting people at ease and getting them to talk about themselves.",
  "is a <strong>team-player</strong> and enjoys lending a hand if the task is aligned with their principles and values.",
  "is <strong>hard-working</strong> and takes a great deal of satisfaction in a job well done."
];
gen_data["AdvocateFlaw"] = [
  "is completely <strong>burned-out</strong> from years of trying to make a difference, leaving them <strong>cynical</strong> and <strong>angry</strong>.",
  "is <strong>thin-skinned</strong> and does not take criticism well. Even a well-intentioned comment can cause them to lose their temper in spectacular fashion.",
  "<strong>internalizes everything</strong>. They just keep bottling everything up inside, until they explode, over something trivial and insignificant.",
  "is <strong>never satisfied</strong>. They obsess over every imperfection and are never happy with anything.",
  "is extremely <strong>critical</strong> of others and their inability to meet their impossibly high standards."
];

// Architect (Introverted, Intuitive, Thinking, Judging)
gen_data["ArchitectPersonality"] = [
  "has a sharp, delightfully <strong>sarcastic</strong> sense of humor with an <strong>irreverent</strong> wit.",
  "<strong>questions</strong> everything. Nothing is taken as fact until they have had time to consider the matter.",
  "is <strong>decisive</strong> without being reckless. They <strong>consider their options</strong> and act with confidence.",
  "is <strong>direct</strong>. They get right to the point and have little use for pleasantries and small talk.",
  "is <strong>honest</strong>. They'll give you the truth, no matter how uncomfortable it may be.",
  "has a natural <strong>confidence</strong> that is both inspiring and terrifying depending on which side you are on.",
  "has a <strong>curious</strong> mind. They love <strong>learning</strong> and how things work."
];
gen_data["ArchitectFlaw"] = [
  "is <strong>arrogant</strong> and <strong>dismissive</strong> of those they deem to be inferior in knowledge or skill.",
  "has no room for <strong>emotion</strong> in their life. Every decision, relationship, and action is <strong>calculated</strong> and <strong>transactional</strong>.",
  "is <strong>combative</strong> and <strong>argumentative</strong> when their ideas or actions are challenged.",
  "is extremely <strong>critical</strong> of others and their inability to meet their impossibly high standards.",
  "has a <strong>problem with authority</strong>. They do not tolerate being told that they can't do something well."
];

// Campaigner (Extraverted, Intuitive, Feeling)
gen_data["CampaignerPersonality"] = [
  "is <strong>outgoing</strong> with a <strong>warm</strong>, <strong>friendly</strong> demeanor.",
  "has an <strong>upbeat</strong> approach to life that often makes them stand out in any crowd.",
  "is very <strong>sociable</strong>. They make friends easily and have no problem striking up a conversation with a perfect stranger.",
  "has a natural <strong>enthusiasm</strong> and <strong>positivity</strong> that is infectious.",
  "is very <strong>perceptive</strong>. They have a talent for picking out the subtlest shifts in someone's mood or expression.",
  "loves a <strong>party</strong> and loves nothing more than having a good time with friends ... or strangers."
];
gen_data["CampaignerFlaw"] = [
  "has a tendency to <strong>read too much</strong> into actions and behaviors and can overreact spectacularly.",
  "is completely <strong>unreliable</strong> and cannot be counted on to do anything they are not enthusiastically behind.",
  "is <strong>easily-bored</strong> by the mundane aspects of daily life and getting them to do anything they're not interested in is impossible.",
  "is <strong>overly optimistic</strong> and can steadfastly refuse to accept an outcome where things did not go as planned."
];

// Commander (Extraverted, Intuitive, Feeling, Prospecting)
gen_data["CommanderPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["CommanderIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["CommanderIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["CommanderIdealEvil"] = [
  "\"\""
];

gen_data["CommanderFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Consul (Extraverted, Observant, Feeling, Judging)
gen_data["ConsulPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["ConsulIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["ConsulIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["ConsulIdealEvil"] = [
  "\"\""
];

gen_data["ConsulFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Debater (Extraverted, Observant, Feeling, Judging)
gen_data["DebaterPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["DebaterIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["DebaterIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["DebaterIdealEvil"] = [
  "\"\""
];

gen_data["DebaterFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Defender (Introverted, Observant, Feeling, Judging)
gen_data["DefenderPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["DefenderIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["DefenderIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["DefenderIdealEvil"] = [
  "\"\""
];

gen_data["DefenderFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Entertainer (Extraverted, Observant, Feeling, Prospecting)
gen_data["EntertainerPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["EntertainerIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["EntertainerIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["EntertainerIdealEvil"] = [
  "\"\""
];

gen_data["EntertainerFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Entrepreneur (Extraverted, Observant, Thinking, Prospecting)
gen_data["EntrepreneurPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["EntrepreneurIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["EntrepreneurIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["EntrepreneurIdealEvil"] = [
  "\"\""
];

gen_data["EntrepreneurFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Executive (Extraverted, Intuitive, Thinking, Prospecting)
gen_data["ExecutivePersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["ExecutiveIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["ExecutiveIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["ExecutiveIdealEvil"] = [
  "\"\""
];

gen_data["ExecutiveFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Logician (Introverted, Intuitive, Thinking, Prospecting)
gen_data["LogicianPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["LogicianIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["LogicianIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["LogicianIdealEvil"] = [
  "\"\""
];

gen_data["LogicianFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Logistician (Introverted, Observant, Thinking, Judging)
gen_data["LogisticianPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["LogisticianIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["LogisticianIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["LogisticianIdealEvil"] = [
  "\"\""
];

gen_data["LogisticianFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Mediator (Introverted, Observant, Thinking, Judging)
gen_data["MediatorPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["MediatorIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["MediatorIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["MediatorIdealEvil"] = [
  "\"\""
];

gen_data["MediatorFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Protagonist (Extraverted, Intuitive, Feeling, Judging)
gen_data["ProtagonistPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["ProtagonistIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["ProtagonistIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["ProtagonistIdealEvil"] = [
  "\"\""
];

gen_data["ProtagonistFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];
// Virtuoso (Introverted, Observant, Thinking, Prospecting)
gen_data["VirtuosoPersonality"] = [
  "",
  "",
  "",
  "",
  "",
  ""
];

gen_data["VirtuosoIdealGood"] = [
  "\"\"",
  "\"\""
];
gen_data["VirtuosoIdealNeutral"] = [
  "\"\"",
  "\"\""
];
gen_data["VirtuosoIdealEvil"] = [
  "\"\""
];

gen_data["VirtuosoFlaw"] = [
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

// --------------------------------------------------------------------------------
// Races
// --------------------------------------------------------------------------------
gen_data["Race"] = {"1":"Dragonborn","2":"Dwarf","3":"Elf","4":"Gnome","5":"Half-Elf","6":"Half-Orc","7":"Halfling","8":"Human","9":"Orc","10":"Tiefling"};

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
gen_data["SubraceTiefling"] = {"1":"Feral","2-10":"Infernal"};

// --------------------------------------------------------------------------------
// Size
// --------------------------------------------------------------------------------
gen_data["Size"] = ["Small","Large"];
gen_data["SizeAll"] = ["Tiny','Small","Medium","Large","Huge","Gargantuan"];
gen_data["SizeCommon"] = ["Tiny','Small","Medium","Large"];