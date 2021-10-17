// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generators_data.js
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// CHARACTER OPTIONS

// Age
gen_data["Age"] = {
  '1-10':"very young",
  '11-30':"young",
  '31-70':"adult",
  '71-90':"old",
  '91-100':"very old"
};

// Eyes
gen_data["Eyes"] = ["{EyeType}, {EyeColor} eyes"];

gen_data["EyeColor"] = {
  '1-10':"brown",
  '11-30':"green",
  '31-70':"blue",
  '71-90':"hazel",
  '91-100':"gray"
};

gen_data["EyeType"] = {
  "1":"large",
  "2":"wide",
  "3":"piercing",
  "4":"blank",
  "5":"crossed",
  "6":"deep-set",
  "7":"bulging",
  "8":"narrow",
  "9":"glassy",
  "10":"squinting",
  "11":"bloodshot",
  "12":"jaundiced"
};


//Hair
gen_data["Hair"] = ["{HairLength}, {HairType}, {HairColor} hair"];

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
  "99":"gray",
  "100":"white"
};
gen_data["HairLength"] = {
  "1-10":"very short",
  "6-45":"short",
  "46-95":"shoulder-length",
  "90-100":"long"
};
gen_data["HairType"] = {
  "1":"neatly combed",
  "2":"braided",
  "3":"coarse",
  "4":"curly",
  "5":"dirty",
  "6":"fine",
  "7":"frizzy",
  "8":"greasy",
  "9":"matted",
  "10":"messy",
  "11":"oily",
  "12":"slicked-back",
  "13":"straight",
  "14":"tangled",
  "15":"thick",
  "16":"thin",
  "17":"tied-up",
  "18":"wavy"
};

// Height
gen_data["Height"] = {
  '1-10':"very short",
  '11-30':"short",
  '31-70':"average",
  '71-90':"tall",
  '91-100':"very tall"
};

// Weight
gen_data["Weight"] = {
  "1":"thin",
  "2":"heavy-set",
  "3":"rotund",
  "4":"lean",
  "5":"stout",
  "6":"muscular",
  "7":"athletic",
  "8":"wiry",
  "9":"fat"
};



//Beard
gen_data["Beard"] = ["{BeardStyle} {HairColor} beard"];
gen_data["BeardStyle"] = ["long","moustache","bearded","tied"];

//Scales
gen_data["Scales"] = ["{Color} {ScalesType} scales"];
gen_data["ScalesType"] = ["pointy", "sharp","rounded"];

//Cloth
gen_data["Cloth"] = ["{Color} {ClothType}"];
gen_data["ClothType"] = ["robe", "tunic", "leather armor"];

//Color
gen_data["Color"] = ["black", "grey", "brown", "red", "blue"];

//Attitude
gen_data["Attitude"] = ["Welcoming","Sad","Discrete","Stoic"]