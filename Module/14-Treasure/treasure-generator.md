---
name: Treasure Generator
slug: treasure-generator
parent: treasure
---
### Treasure Generator
[Home](dm-operations-center) > [Treasure](treasure-menu) > Treasure Generator {.small-text}

<div style="margin-bottom: 1.5rem; text-align:center;">
    <select id="selectMonster">
        <option disabled="" selected="">- Source -</option>
        <option>Individual</option>
        <option>Hoard</option>
    </select>
    <select id="selectChallenge">
        <option disabled="" selected="">- CR -</option>
        <option>CR 0–4</option>
        <option>CR 5–10</option>
        <option>CR 11–16</option>
        <option>CR 17+</option>
    </select>
    <button id="buttonGenerateTreasure" onclick="generateTreasure()"> 
        Generate 
    </button> 
</div>

<div class="result">
    <span id="treasure"></span>
</div>

<script>
function generateTreasure() {
  let selectMonster = document.getElementById('selectMonster');
  let monster = selectMonster.options[selectMonster.selectedIndex].value;
  let selectChallenge = document.getElementById('selectChallenge');
  let challenge = selectChallenge.options[selectChallenge.selectedIndex].value;

  var loot = "";

  if (monster == "Individual") {
    loot = generateIndividual(challenge);
  } else if (monster == "Hoard") {
    loot = generateHoard(challenge);
  }
  treasure.innerHTML = loot;
}

function rollDice(amount, die) {
  var total = 0;
  for (var i = 0; i < amount; i++) {
    total += Math.floor(Math.random() * die) + 1;
  }
  return total;
}

function generateIndividual(cr) {
  var loot = "";
  var rolledDie = rollDice(1, 100);
  if (cr == "CR 0–4") {
    if (rolledDie >= 1 && rolledDie <= 30) {
      loot = rollDice(5, 6) + " cp";
    } else if (rolledDie >= 31 && rolledDie <= 60) {
      loot = rollDice(4, 6) + " sp";
    } else if (rolledDie >= 61 && rolledDie <= 70) {
      loot = rollDice(3, 6) + " ep";
    } else if (rolledDie >= 71 && rolledDie <= 95) {
      loot = rollDice(3, 6) + " gp";
    } else if (rolledDie >= 96 && rolledDie <= 100) {
      loot = rollDice(1, 6) + " pp";
    }
  } else if (cr == "CR 5–10") {
    if (rolledDie >= 1 && rolledDie <= 30) {
      loot = rollDice(1, 6) * 10 + " ep, " + rollDice(4, 6) * 100 + " cp";
    } else if (rolledDie >= 31 && rolledDie <= 60) {
      loot = rollDice(2, 6) * 10 + " gp, " + rollDice(6, 6) * 10 + " sp";
    } else if (rolledDie >= 61 && rolledDie <= 70) {
      loot = rollDice(2, 6) * 10 + " gp, " + rollDice(3, 6) * 10 + " ep";
    } else if (rolledDie >= 71 && rolledDie <= 95) {
      loot = rollDice(4, 6) * 10 + " gp";
    } else if (rolledDie >= 96 && rolledDie <= 100) {
      loot = rollDice(3, 6) + " pp, " + rollDice(2, 6) * 10 + " gp";
    }
  } else if (cr == "CR 11–16") {
    if (rolledDie >= 1 && rolledDie <= 20) {
      loot = rollDice(1, 6) * 100 + " gp, " + rollDice(4, 6) * 100 + " sp";
    } else if (rolledDie >= 21 && rolledDie <= 35) {
      loot = rollDice(1, 6) * 100 + " gp, " + rollDice(1, 6) * 100 + " ep";
    } else if (rolledDie >= 36 && rolledDie <= 75) {
      loot = rollDice(1, 6) * 10 + " pp, " + rollDice(2, 6) * 100 + " gp";
    } else if (rolledDie >= 76 && rolledDie <= 100) {
      loot = rollDice(2, 6) * 10 + " pp, " + rollDice(2, 6) * 100 + " gp";
    }
  } else if (cr == "CR 17+") {
    if (rolledDie >= 1 && rolledDie <= 15) {
      loot = rollDice(8, 6) * 100 + " gp, " + rollDice(2, 6) * 1000 + " ep";
    } else if (rolledDie >= 16 && rolledDie <= 55) {
      loot = rollDice(1, 6) * 100 + " pp, " + rollDice(1, 6) * 1000 + " gp";
    } else if (rolledDie >= 56 && rolledDie <= 100) {
      loot = rollDice(2, 6) * 100 + " pp, " + rollDice(1, 6) * 1000 + " gp";
    }
  }
  return loot;
}

function generateHoard(cr) {
  var loot = "";
  var rolledDie = rollDice(1, 100);
  var objects = "";
  var magicItems = ";"
  var objectCount = 0;
  var magicItemList = "";
  var magicItemCount = 0;
  if (cr == "CR 0–4") {
    loot = rollDice(2, 6) * 10 + " gp, " + rollDice(3, 6) * 100 + " sp, " + rollDice(6, 6) * 100 + " cp";
    if (rolledDie >= 7 && rolledDie <= 16) {
      loot += generateGemArtObject(gem10, rollDice(2, 6));
    } else if (rolledDie >= 17 && rolledDie <= 26) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
    } else if (rolledDie >= 27 && rolledDie <= 36) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
    } else if (rolledDie >= 37 && rolledDie <= 44) {
      loot += generateGemArtObject(gem10, rollDice(2, 6));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 45 && rolledDie <= 52) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 53 && rolledDie <= 60) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 61 && rolledDie <= 65) {
      loot += generateGemArtObject(gem10, rollDice(2, 6));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 66 && rolledDie <= 70) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 71 && rolledDie <= 75) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 76 && rolledDie <= 78) {
      loot += generateGemArtObject(gem10, rollDice(2, 6));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 79 && rolledDie <= 80) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 81 && rolledDie <= 85) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 86 && rolledDie <= 92) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 93 && rolledDie <= 97) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 98 && rolledDie <= 99) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableG(1);
    } else if (rolledDie == 100) {
      loot += generateGemArtObject(gem50, rollDice(2, 6));
      loot += magicItemTableG(1);
    }
  } else if (cr == "CR 5–10") {
    loot = rollDice(3, 6) * 10 + " pp, " + rollDice(6, 6) * 100 + " gp, " + rollDice(2, 6) * 1000 + " sp, " + rollDice(2, 6) * 100 + " cp";
    if (rolledDie >= 5 && rolledDie <= 10) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
    } else if (rolledDie >= 11 && rolledDie <= 16) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
    } else if (rolledDie >= 17 && rolledDie <= 22) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
    } else if (rolledDie >= 23 && rolledDie <= 28) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
    } else if (rolledDie >= 29 && rolledDie <= 32) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 33 && rolledDie <= 36) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 37 && rolledDie <= 40) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 41 && rolledDie <= 44) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableA(rollDice(1, 6));
    } else if (rolledDie >= 45 && rolledDie <= 49) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 50 && rolledDie <= 54) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 55 && rolledDie <= 59) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 60 && rolledDie <= 63) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableB(rollDice(1, 4));
    } else if (rolledDie >= 64 && rolledDie <= 66) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 67 && rolledDie <= 69) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 70 && rolledDie <= 72) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 73 && rolledDie <= 74) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableC(rollDice(1, 4));
    } else if (rolledDie >= 75 && rolledDie <= 76) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableD(1);
    } else if (rolledDie >= 77 && rolledDie <= 78) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
      loot += magicItemTableD(1);
    } else if (rolledDie == 79) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableD(1);
    } else if (rolledDie == 80) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableD(1);
    } else if (rolledDie >= 81 && rolledDie <= 84) {
      loot += generateGemArtObject(art25, rollDice(2, 4));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 85 && rolledDie <= 88) {
      loot += generateGemArtObject(gem50, rollDice(3, 6));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 89 && rolledDie <= 91) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 92 && rolledDie <= 94) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableF(rollDice(1, 4));
    } else if (rolledDie >= 95 && rolledDie <= 96) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 97 && rolledDie <= 98) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie == 99) {
      loot += generateGemArtObject(gem100, rollDice(3, 6));
      loot += magicItemTableH(1);
    } else if (rolledDie == 100) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableH(1);
    }
  } else if (cr == "CR 11–16") {
    loot = rollDice(5, 6) * 100 + " pp, " + rollDice(4, 6) * 1000 + " gp";
    if (rolledDie >= 4 && rolledDie <= 6) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
    } else if (rolledDie >= 7 && rolledDie <= 9) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
    } else if (rolledDie >= 10 && rolledDie <= 12) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
    } else if (rolledDie >= 13 && rolledDie <= 15) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
    } else if (rolledDie >= 16 && rolledDie <= 19) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableA(rollDice(1, 4));
      loot += magicItemTableB(rollDice(1, 6));
    } else if (rolledDie >= 20 && rolledDie <= 23) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableA(rollDice(1, 4));
      loot += magicItemTableB(rollDice(1, 6));
    } else if (rolledDie >= 24 && rolledDie <= 26) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableA(rollDice(1, 4));
      loot += magicItemTableB(rollDice(1, 6));
    } else if (rolledDie >= 27 && rolledDie <= 29) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableA(rollDice(1, 4));
      loot += magicItemTableB(rollDice(1, 6));
    } else if (rolledDie >= 30 && rolledDie <= 35) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableC(rollDice(1, 6));
    } else if (rolledDie >= 36 && rolledDie <= 40) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableC(rollDice(1, 6));
    } else if (rolledDie >= 41 && rolledDie <= 45) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableC(rollDice(1, 6));
    } else if (rolledDie >= 46 && rolledDie <= 50) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableC(rollDice(1, 6));
    } else if (rolledDie >= 51 && rolledDie <= 54) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableD(rollDice(1, 4));
    } else if (rolledDie >= 55 && rolledDie <= 58) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableD(rollDice(1, 4));
    } else if (rolledDie >= 59 && rolledDie <= 62) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableD(rollDice(1, 4));
    } else if (rolledDie >= 63 && rolledDie <= 66) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableD(rollDice(1, 4));
    } else if (rolledDie >= 67 && rolledDie <= 68) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableE(1);
    } else if (rolledDie >= 69 && rolledDie <= 70) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableE(1);
    } else if (rolledDie >= 71 && rolledDie <= 72) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableE(1);
    } else if (rolledDie >= 73 && rolledDie <= 74) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableE(1);
    } else if (rolledDie >= 75 && rolledDie <= 76) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableF(1);
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 77 && rolledDie <= 78) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableF(1);
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 79 && rolledDie <= 80) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableF(1);
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 81 && rolledDie <= 82) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableF(1);
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 83 && rolledDie <= 85) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 86 && rolledDie <= 88) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 89 && rolledDie <= 90) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 91 && rolledDie <= 92) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 93 && rolledDie <= 94) {
      loot += generateGemArtObject(art250, rollDice(2, 4));
      loot += magicItemTableI(1);
    } else if (rolledDie >= 95 && rolledDie <= 96) {
      loot += generateGemArtObject(art750, rollDice(2, 4));
      loot += magicItemTableI(1);
    } else if (rolledDie >= 97 && rolledDie <= 98) {
      loot += generateGemArtObject(gem500, rollDice(3, 6));
      loot += magicItemTableI(1);
    } else if (rolledDie >= 99 && rolledDie <= 100) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableI(1);
    }
  } else if (cr == "CR 17+") {
    loot = rollDice(8, 6) * 1000 + " pp, " + rollDice(12, 6) * 1000 + " gp";
    if (rolledDie >= 3 && rolledDie <= 5) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableC(rollDice(1, 8));
    } else if (rolledDie >= 6 && rolledDie <= 8) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableC(rollDice(1, 8));
    } else if (rolledDie >= 9 && rolledDie <= 11) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableC(rollDice(1, 8));
    } else if (rolledDie >= 12 && rolledDie <= 14) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableC(rollDice(1, 8));
    } else if (rolledDie >= 15 && rolledDie <= 22) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableD(rollDice(1, 6));
    } else if (rolledDie >= 23 && rolledDie <= 30) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableD(rollDice(1, 6));
    } else if (rolledDie >= 31 && rolledDie <= 38) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableD(rollDice(1, 6));
    } else if (rolledDie >= 39 && rolledDie <= 46) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableD(rollDice(1, 6));
    } else if (rolledDie >= 47 && rolledDie <= 52) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableE(rollDice(1, 6));
    } else if (rolledDie >= 53 && rolledDie <= 58) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableE(rollDice(1, 6));
    } else if (rolledDie >= 59 && rolledDie <= 63) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableE(rollDice(1, 6));
    } else if (rolledDie >= 64 && rolledDie <= 68) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableE(rollDice(1, 6));
    } else if (rolledDie == 69) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie == 70) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie == 71) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie == 72) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableG(rollDice(1, 4));
    } else if (rolledDie >= 73 && rolledDie <= 74) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 75 && rolledDie <= 76) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 77 && rolledDie <= 78) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 79 && rolledDie <= 80) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableH(rollDice(1, 4));
    } else if (rolledDie >= 81 && rolledDie <= 85) {
      loot += generateGemArtObject(gem1000, rollDice(3, 6));
      loot += magicItemTableI(rollDice(1, 4));
    } else if (rolledDie >= 86 && rolledDie <= 90) {
      loot += generateGemArtObject(art2500, rollDice(1, 10));
      loot += magicItemTableI(rollDice(1, 4));
    } else if (rolledDie >= 91 && rolledDie <= 95) {
      loot += generateGemArtObject(art7500, rollDice(1, 4));
      loot += magicItemTableI(rollDice(1, 4));
    } else if (rolledDie >= 96 && rolledDie <= 100) {
      loot += generateGemArtObject(gem5000, rollDice(1, 8));
      loot += magicItemTableI(rollDice(1, 4));
    }
  }
  return loot;
}

function generateGemArtObject(object, count) {
  var objectList = [];
  var loot = "";
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, object.length) - 1);
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    while (objectList[i] == objectList[i + 1]) {
      j++;
      i++;
    }
    if (j > 1) {
      loot += j + " x ";
    }
    loot += object[objectList[i]];
  }
  return loot;
}

function magicItemTableA(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 50) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 50) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-healing\">Potion of Healing</a></i>";
    } else if (objectList[i] >= 51 && objectList[i] <= 60) {
      while (objectList[i + 1] >= 51 && objectList[i + 1] <= 60) {
        j++;
        i++;
      }
      subType = itemSubType(spell0, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-cantrip\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell0[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell0[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 61 && objectList[i] <= 70) {
      while (objectList[i + 1] >= 61 && objectList[i + 1] <= 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-climbing\">Potion of Climbing</a></i>";
    } else if (objectList[i] >= 71 && objectList[i] <= 90) {
      while (objectList[i + 1] >= 71 && objectList[i + 1] <= 90) {
        j++;
        i++;
      }
      subType = itemSubType(spell1, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-1st-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell1[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell1[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 91 && objectList[i] <= 94) {
      while (objectList[i + 1] >= 91 && objectList[i + 1] <= 94) {
        j++;
        i++;
      }
      subType = itemSubType(spell2, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-2nd-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell2[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell2[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 95 && objectList[i] <= 98) {
      while (objectList[i + 1] >= 95 && objectList[i + 1] <= 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-greater-healing\">Potion of Greater Healing</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bag-of-holding\">Bag of Holding</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/driftglobe\">Driftglobe</a></i>";
    }
  }
  return loot;
}

function magicItemTableB(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 15) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 15) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-greater-healing\">Potion of Greater Healing</a></i>";
    } else if (objectList[i] >= 16 && objectList[i] <= 22) {
      while (objectList[i + 1] >= 16 && objectList[i + 1] <= 22) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-fire-breath\">Potion of Fire Breath</a></i>";
    } else if (objectList[i] >= 23 && objectList[i] <= 29) {
      while (objectList[i + 1] >= 23 && objectList[i + 1] <= 29) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/potion-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Potion of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] >= 30 && objectList[i] <= 34) {
      while (objectList[i + 1] >= 30 && objectList[i + 1] <= 34) {
        j++;
        i++;
      }
      subType = itemSubType(ammo, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/1-" + ammo[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+1 " + ammo[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 35 && objectList[i] <= 39) {
      while (objectList[i + 1] >= 35 && objectList[i + 1] <= 39) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-animal-friendship\">Potion of Animal Friendship</a></i>";
    } else if (objectList[i] >= 40 && objectList[i] <= 44) {
      while (objectList[i + 1] >= 40 && objectList[i + 1] <= 44) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-hill-giant-strength\">Potion of Hill Giant Strength</a></i>";
    } else if (objectList[i] >= 45 && objectList[i] <= 49) {
      while (objectList[i + 1] >= 45 && objectList[i + 1] <= 49) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-growth\">Potion of Growth</a></i>";
    } else if (objectList[i] >= 50 && objectList[i] <= 54) {
      while (objectList[i + 1] >= 50 && objectList[i + 1] <= 54) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-water-breathing\">Potion of Water Breathing</a></i>";
    } else if (objectList[i] >= 55 && objectList[i] <= 59) {
      while (objectList[i + 1] >= 55 && objectList[i + 1] <= 59) {
        j++;
        i++;
      }
      subType = itemSubType(spell2, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-2nd-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell2[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell2[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 60 && objectList[i] <= 64) {
      while (objectList[i + 1] >= 60 && objectList[i + 1] <= 64) {
        j++;
        i++;
      }
      subType = itemSubType(spell3, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-3rd-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell3[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell3[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 65 && objectList[i] <= 67) {
      while (objectList[i + 1] >= 65 && objectList[i + 1] <= 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bag-of-holding\">Bag of Holding</a></i>";
    } else if (objectList[i] >= 68 && objectList[i] <= 70) {
      while (objectList[i + 1] >= 68 && objectList[i + 1] <= 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/keoghtom-s-ointment\">Keoghtom’s Ointment</a></i>";
    } else if (objectList[i] >= 71 && objectList[i] <= 73) {
      while (objectList[i + 1] >= 71 && objectList[i + 1] <= 73) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/oil-of-slipperiness\">Oil of Slipperiness</a></i>";
    } else if (objectList[i] >= 74 && objectList[i] <= 75) {
      while (objectList[i + 1] >= 74 && objectList[i + 1] <= 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dust-of-disappearance\">Dust of Disappearance</a></i>";
    } else if (objectList[i] >= 76 && objectList[i] <= 77) {
      while (objectList[i + 1] >= 76 && objectList[i + 1] <= 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dust-of-dryness\">Dust of Dryness</a></i>";
    } else if (objectList[i] >= 78 && objectList[i] <= 79) {
      while (objectList[i + 1] >= 78 && objectList[i + 1] <= 79) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dust-of-sneezing-and-choking\">Dust of Sneezing and Choking</a></i>";
    } else if (objectList[i] >= 80 && objectList[i] <= 81) {
      while (objectList[i + 1] >= 80 && objectList[i + 1] <= 81) {
        j++;
        i++;
      }
      subType = itemSubType(elementalGem, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/elemental-gem-" + elementalGem[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Elemental Gem (" + elementalGem[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] >= 82 && objectList[i] <= 83) {
      while (objectList[i + 1] >= 82 && objectList[i + 1] <= 83) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/philter-of-love\">Philter of Love</a></i>";
    } else if (objectList[i] == 84) {
      while (objectList[i + 1] == 84) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/alchemy-jug\">Alchemy Jug</a></i>";
    } else if (objectList[i] == 85) {
      while (objectList[i + 1] == 85) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cap-of-water-breathing\">Cap of Water Breathing</a></i>";
    } else if (objectList[i] == 86) {
      while (objectList[i + 1] == 86) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-the-manta-ray\">Cloak of the Manta Ray</a></i>";
    } else if (objectList[i] == 87) {
      while (objectList[i + 1] == 87) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/driftglobe\">Driftglobe</a></i>";
    } else if (objectList[i] == 88) {
      while (objectList[i + 1] == 88) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/driftglobe\">Driftglobe</a></i>";
    } else if (objectList[i] == 89) {
      while (objectList[i + 1] == 89) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/helm-of-comprehending-languages\">Helm of Comprehending Languages</a></i>";
    } else if (objectList[i] == 90) {
      while (objectList[i + 1] == 90) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/immovable-rod\">Immovable Rod</a></i>";
    } else if (objectList[i] == 91) {
      while (objectList[i + 1] == 91) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/lantern-of-revealing\">Lantern of Revealing</a></i>";
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      subType = itemSubType(armorLMH, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/mariner-s-" + armorLMH[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Mariner’s " + armorLMH[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      subType = itemSubType(armorMHnH, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/mithral-" + armorMHnH[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Mithral " + armorMHnH[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-poison\">Potion of Poison</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-swimming\">Ring of Swimming</a></i>";
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/robe-of-useful-items\">Robe of Useful Items</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rope-of-climbing\">Rope of Climbing</a></i>";
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/saddle-of-the-cavalier\">Saddle of the Cavalier</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-magic-detection\">Wand of Magic Detection</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-secrets\">Wand of Secrets</a></i>";
    }
  }
  return loot;
}

function magicItemTableC(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 15) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 15) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-superior-healing\">Potion of Superior Healing</a></i>";
    } else if (objectList[i] >= 16 && objectList[i] <= 22) {
      while (objectList[i + 1] >= 16 && objectList[i + 1] <= 22) {
        j++;
        i++;
      }
      subType = itemSubType(spell4, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-4th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell4[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell4[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 23 && objectList[i] <= 27) {
      while (objectList[i + 1] >= 23 && objectList[i + 1] <= 27) {
        j++;
        i++;
      }
      subType = itemSubType(ammo, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/2-" + ammo[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+2 " + ammo[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 28 && objectList[i] <= 32) {
      while (objectList[i + 1] >= 28 && objectList[i + 1] <= 32) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-clairvoyance\">Potion of Clairvoyance</a></i>";
    } else if (objectList[i] >= 33 && objectList[i] <= 37) {
      while (objectList[i + 1] >= 33 && objectList[i + 1] <= 37) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-diminution\">Potion of Diminution</a></i>";
    } else if (objectList[i] >= 38 && objectList[i] <= 42) {
      while (objectList[i + 1] >= 38 && objectList[i + 1] <= 42) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-gaseous-form\">Potion of Gaseous Form</a></i>";
    } else if (objectList[i] >= 43 && objectList[i] <= 47) {
      while (objectList[i + 1] >= 43 && objectList[i + 1] <= 47) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-frost-giant-strength\">Potion of Frost Giant Strength</a></i>";
    } else if (objectList[i] >= 48 && objectList[i] <= 52) {
      while (objectList[i + 1] >= 48 && objectList[i + 1] <= 52) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-stone-giant-strength\">Potion of Stone Giant Strength</a></i>";
    } else if (objectList[i] >= 53 && objectList[i] <= 57) {
      while (objectList[i + 1] >= 53 && objectList[i + 1] <= 57) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-heroism\">Potion of Heroism</a></i>";
    } else if (objectList[i] >= 58 && objectList[i] <= 62) {
      while (objectList[i + 1] >= 58 && objectList[i + 1] <= 62) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-invulnerability\">Potion of Invulnerability</a></i>";
    } else if (objectList[i] >= 63 && objectList[i] <= 67) {
      while (objectList[i + 1] >= 63 && objectList[i + 1] <= 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-mind-reading\">Potion of Mind Reading</a></i>";
    } else if (objectList[i] >= 68 && objectList[i] <= 72) {
      while (objectList[i + 1] >= 68 && objectList[i + 1] <= 72) {
        j++;
        i++;
      }
      subType = itemSubType(spell5, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-5th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell5[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell5[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 73 && objectList[i] <= 75) {
      while (objectList[i + 1] >= 73 && objectList[i + 1] <= 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/elixir-of-health\">Elixir of Health</a></i>";
    } else if (objectList[i] >= 76 && objectList[i] <= 78) {
      while (objectList[i + 1] >= 76 && objectList[i + 1] <= 78) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/oil-of-etherealness\">Oil of Etherealness</a></i>";
    } else if (objectList[i] >= 79 && objectList[i] <= 81) {
      while (objectList[i + 1] >= 79 && objectList[i + 1] <= 81) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-fire-giant-strength\">Potion of Fire Giant Strength</a></i>";
    } else if (objectList[i] >= 82 && objectList[i] <= 84) {
      while (objectList[i + 1] >= 82 && objectList[i + 1] <= 84) {
        j++;
        i++;
      }
      subType = itemSubType(quaal, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (quaal[subType[k]] == quaal[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/quaal-s-feather-token-" + quaal[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Quaal’s Feather Token (" + quaal[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] >= 85 && objectList[i] <= 87) {
      while (objectList[i + 1] >= 85 && objectList[i + 1] <= 87) {
        j++;
        i++;
      }
      subType = itemSubType(creatureType, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (creatureType[subType[k]] == creatureType[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/scroll-of-protection-from-" + creatureType[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Scroll of Protection from " + creatureType[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 88 && objectList[i] <= 89) {
      while (objectList[i + 1] >= 88 && objectList[i + 1] <= 89) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bag-of-beans\">Bag of Beans</a></i>";
    } else if (objectList[i] >= 90 && objectList[i] <= 91) {
      while (objectList[i + 1] >= 90 && objectList[i + 1] <= 91) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bead-of-force\">Bead of Force</a></i>";
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/chime-of-opening\">Chime of Opening</a></i>";
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/decanter-of-endless-water\">Decanter of Endless Water</a></i>";
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/eyes-of-minute-seeing\">Eyes of Minute Seeing</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/folding-boat\">Folding Boat</a></i>";
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/heward-s-handy-haversack\">Heward’s Handy Haversack</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/horseshoes-of-speed\">Horseshoes of Speed</a></i>";
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/necklace-of-fireballs\">Necklace of Fireballs</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/periapt-of-health\">Periapt of Health</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/sending-stones\">Sending Stones</a></i>";
    }
  }
  return loot;
}

function magicItemTableD(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 20) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 20) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-supreme-healing\">Potion of Supreme Healing</a></i>";
    } else if (objectList[i] >= 21 && objectList[i] <= 30) {
      while (objectList[i + 1] >= 21 && objectList[i + 1] <= 30) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-invisibility\">Potion of Invisibility</a></i>";
    } else if (objectList[i] >= 31 && objectList[i] <= 40) {
      while (objectList[i + 1] >= 31 && objectList[i + 1] <= 40) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-speed\">Potion of Speed</a></i>";
    } else if (objectList[i] >= 41 && objectList[i] <= 50) {
      while (objectList[i + 1] >= 41 && objectList[i + 1] <= 50) {
        j++;
        i++;
      }
      subType = itemSubType(spell6, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-6th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell6[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell6[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 51 && objectList[i] <= 57) {
      while (objectList[i + 1] >= 51 && objectList[i + 1] <= 57) {
        j++;
        i++;
      }
      subType = itemSubType(spell7, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-7th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell7[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell7[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 58 && objectList[i] <= 62) {
      while (objectList[i + 1] >= 58 && objectList[i + 1] <= 62) {
        j++;
        i++;
      }
      subType = itemSubType(ammo, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/3-" + ammo[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+3 " + ammo[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 63 && objectList[i] <= 67) {
      while (objectList[i + 1] >= 63 && objectList[i + 1] <= 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/oil-of-sharpness\">Oil of Sharpness</a></i>";
    } else if (objectList[i] >= 68 && objectList[i] <= 72) {
      while (objectList[i + 1] >= 68 && objectList[i + 1] <= 72) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-flying\">Potion of Flying</a></i>";
    } else if (objectList[i] >= 73 && objectList[i] <= 77) {
      while (objectList[i + 1] >= 73 && objectList[i + 1] <= 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-cloud-giant-strength\">Potion of Cloud Giant Strength</a></i>";
    } else if (objectList[i] >= 78 && objectList[i] <= 82) {
      while (objectList[i + 1] >= 78 && objectList[i + 1] <= 82) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-longevity\">Potion of Longevity</a></i>";
    } else if (objectList[i] >= 83 && objectList[i] <= 87) {
      while (objectList[i + 1] >= 83 && objectList[i + 1] <= 87) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-vitality\">Potion of Vitality</a></i>";
    } else if (objectList[i] >= 88 && objectList[i] <= 92) {
      while (objectList[i + 1] >= 88 && objectList[i + 1] <= 92) {
        j++;
        i++;
      }
      subType = itemSubType(spell8, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-8th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell8[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell8[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 93 && objectList[i] <= 95) {
      while (objectList[i + 1] >= 93 && objectList[i + 1] <= 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/horseshoes-of-a-zephyr\">Horseshoes of a Zephyr</a></i>";
    } else if (objectList[i] >= 96 && objectList[i] <= 98) {
      while (objectList[i + 1] >= 96 && objectList[i + 1] <= 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/nolzur-s-marvelous-pigments\">Nolzur’s Marvelous Pigments</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bag-of-devouring\">Bag of Devouring</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/portable-hole\">Portable Hole</a></i>";
    }
  }
  return loot;
}

function magicItemTableE(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 30) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 30) {
        j++;
        i++;
      }
      subType = itemSubType(spell8, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-8th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell8[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell8[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 31 && objectList[i] <= 55) {
      while (objectList[i + 1] >= 31 && objectList[i + 1] <= 55) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-storm-giant-strength\">Potion of Storm Giant Strength</a></i>";
    } else if (objectList[i] >= 56 && objectList[i] <= 70) {
      while (objectList[i + 1] >= 56 && objectList[i + 1] <= 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/potion-of-supreme-healing\">Potion of Supreme Healing</a></i>";
    } else if (objectList[i] >= 71 && objectList[i] <= 85) {
      while (objectList[i + 1] >= 71 && objectList[i + 1] <= 85) {
        j++;
        i++;
      }
      subType = itemSubType(spell9, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/spell-scroll-9th-level\">Spell Scroll</a></i> (<i><a href=\"/spell/" + spell9[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">" + spell9[subType[k]] + "</a></i>)";
      }
    } else if (objectList[i] >= 86 && objectList[i] <= 93) {
      while (objectList[i + 1] >= 86 && objectList[i + 1] <= 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/universal-solvent\">Universal Solvent</a></i>";
    } else if (objectList[i] >= 94 && objectList[i] <= 98) {
      while (objectList[i + 1] >= 94 && objectList[i + 1] <= 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/arrow-of-slaying\">Arrow of Slaying</a></i>";
    } else if (objectList[i] >= 99 && objectList[i] <= 100) {
      while (objectList[i + 1] >= 99 && objectList[i + 1] <= 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/sovereign-glue\">Sovereign Glue</a></i>";
    }
  }
  return loot;
}

function magicItemTableF(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 15) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 15) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAny, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/1-" + weaponAny[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+1 " + weaponAny[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 16 && objectList[i] <= 18) {
      while (objectList[i + 1] >= 16 && objectList[i + 1] <= 18) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-shield\">+1 Shield</a></i>";
    } else if (objectList[i] >= 19 && objectList[i] <= 21) {
      while (objectList[i + 1] >= 19 && objectList[i + 1] <= 21) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/sentinel-shield\">Sentinel Shield</a></i>";
    } else if (objectList[i] >= 22 && objectList[i] <= 23) {
      while (objectList[i + 1] >= 22 && objectList[i + 1] <= 23) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/amulet-of-proof-against-detection-and-location\">Amulet of Proof against Detection and Location</a></i>";
    } else if (objectList[i] >= 24 && objectList[i] <= 25) {
      while (objectList[i + 1] >= 24 && objectList[i + 1] <= 25) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/boots-of-elvenkind\">Boots of Elvenkind</a></i>";
    } else if (objectList[i] >= 26 && objectList[i] <= 27) {
      while (objectList[i + 1] >= 26 && objectList[i + 1] <= 27) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/boots-of-striding-and-springing\">Boots of Striding and Springing</a></i>";
    } else if (objectList[i] >= 28 && objectList[i] <= 29) {
      while (objectList[i + 1] >= 28 && objectList[i + 1] <= 29) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bracers-of-archery\">Bracers of Archery</a></i>";
    } else if (objectList[i] >= 30 && objectList[i] <= 31) {
      while (objectList[i + 1] >= 30 && objectList[i + 1] <= 31) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/brooch-of-shielding\">Brooch of Shielding</a></i>";
    } else if (objectList[i] >= 32 && objectList[i] <= 33) {
      while (objectList[i + 1] >= 32 && objectList[i + 1] <= 33) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/broom-of-flying\">Broom of Flying</a></i>";
    } else if (objectList[i] >= 34 && objectList[i] <= 35) {
      while (objectList[i + 1] >= 34 && objectList[i + 1] <= 35) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-elvenkind\">Cloak of Elvenkind</a></i>";
    } else if (objectList[i] >= 36 && objectList[i] <= 37) {
      while (objectList[i + 1] >= 36 && objectList[i + 1] <= 37) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-protection\">Cloak of Protection</a></i>";
    } else if (objectList[i] >= 38 && objectList[i] <= 39) {
      while (objectList[i + 1] >= 38 && objectList[i + 1] <= 39) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gauntlets-of-ogre-power\">Gauntlets of Ogre Power</a></i>";
    } else if (objectList[i] >= 40 && objectList[i] <= 41) {
      while (objectList[i + 1] >= 40 && objectList[i + 1] <= 41) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/hat-of-disguise\">Hat of Disguise</a></i>";
    } else if (objectList[i] >= 42 && objectList[i] <= 43) {
      while (objectList[i + 1] >= 42 && objectList[i + 1] <= 43) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/javelin-of-lightning\">Javelin of Lightning</a></i>";
    } else if (objectList[i] >= 44 && objectList[i] <= 45) {
      while (objectList[i + 1] >= 44 && objectList[i + 1] <= 45) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/pearl-of-power\">Pearl of Power</a></i>";
    } else if (objectList[i] >= 46 && objectList[i] <= 47) {
      while (objectList[i + 1] >= 46 && objectList[i + 1] <= 47) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-rod-of-the-pact-keeper\">+1 Rod of the Pact Keeper</a></i>";
    } else if (objectList[i] >= 48 && objectList[i] <= 49) {
      while (objectList[i + 1] >= 48 && objectList[i + 1] <= 49) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/slippers-of-spider-climbing\">Slippers of Spider Climbing</a></i>";
    } else if (objectList[i] >= 50 && objectList[i] <= 51) {
      while (objectList[i + 1] >= 50 && objectList[i + 1] <= 51) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-the-adder\">Staff of the Adder</a></i>";
    } else if (objectList[i] >= 52 && objectList[i] <= 53) {
      while (objectList[i + 1] >= 52 && objectList[i + 1] <= 53) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-the-python\">Staff of the Python</a></i>";
    } else if (objectList[i] >= 54 && objectList[i] <= 55) {
      while (objectList[i + 1] >= 54 && objectList[i + 1] <= 55) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "-of-vengeance\">" + weaponSword[subType[k]] + " of Vengeance</a></i>";
      }
    } else if (objectList[i] >= 56 && objectList[i] <= 57) {
      while (objectList[i + 1] >= 56 && objectList[i + 1] <= 57) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/trident-of-fish-command\">Trident of Fish Command</a></i>";
    } else if (objectList[i] >= 58 && objectList[i] <= 59) {
      while (objectList[i + 1] >= 58 && objectList[i + 1] <= 59) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-magic-missiles\">Wand of Magic Missiles</a></i>";
    } else if (objectList[i] >= 60 && objectList[i] <= 61) {
      while (objectList[i + 1] >= 60 && objectList[i + 1] <= 61) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-wand-of-the-war-mage\">+1 Wand of the War Mage</a></i>";
    } else if (objectList[i] >= 62 && objectList[i] <= 63) {
      while (objectList[i + 1] >= 62 && objectList[i + 1] <= 63) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-web\">Wand of Web</a></i>";
    } else if (objectList[i] >= 64 && objectList[i] <= 65) {
      while (objectList[i + 1] >= 64 && objectList[i + 1] <= 65) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAny, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + weaponAny[subType[k]].replace(/\s+/g, '-').toLowerCase() + "-of-warning\">" + weaponAny[subType[k]] + " of Warning</a></i>";
      }
    } else if (objectList[i] == 66) {
      while (objectList[i + 1] == 66) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-chain-mail\">Adamantine Chain Mail</a></i>";
    } else if (objectList[i] == 67) {
      while (objectList[i + 1] == 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-chain-shirt\">Adamantine Chain Shirt</a></i>";
    } else if (objectList[i] == 68) {
      while (objectList[i + 1] == 68) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-scale-mail\">Adamantine Scale Mail</a></i>";
    } else if (objectList[i] == 69) {
      while (objectList[i + 1] == 69) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gray-bag-of-tricks\">Gray Bag of Tricks</a></i>";
    } else if (objectList[i] == 70) {
      while (objectList[i + 1] == 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rust-bag-of-tricks\">Rust Bag of Tricks</a></i>";
    } else if (objectList[i] == 71) {
      while (objectList[i + 1] == 71) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tan-bag-of-tricks\">Tan Bag of Tricks</a></i>";
    } else if (objectList[i] == 72) {
      while (objectList[i + 1] == 72) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/boots-of-the-winterlands\">Boots of the Winterlands</a></i>";
    } else if (objectList[i] == 73) {
      while (objectList[i + 1] == 73) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/circlet-of-blasting\">Circlet of Blasting</a></i>";
    } else if (objectList[i] == 74) {
      while (objectList[i + 1] == 74) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/deck-of-illusions\">Deck of Illusions</a></i>";
    } else if (objectList[i] == 75) {
      while (objectList[i + 1] == 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/eversmoking-bottle\">Eversmoking Bottle</a></i>";
    } else if (objectList[i] == 76) {
      while (objectList[i + 1] == 76) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/eyes-of-charming\">Eyes of Charming</a></i>";
    } else if (objectList[i] == 77) {
      while (objectList[i + 1] == 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/eyes-of-the-eagle\">Eyes of the Eagle</a></i>";
    } else if (objectList[i] == 78) {
      while (objectList[i + 1] == 78) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/figurine-of-wondrous-power-silver-raven\">Figurine of Wondrous Power (Silver Raven)</a></i>";
    } else if (objectList[i] == 79) {
      while (objectList[i + 1] == 79) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gem-of-brightness\">Gem of Brightness</a></i>";
    } else if (objectList[i] == 80) {
      while (objectList[i + 1] == 80) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gloves-of-missile-snaring\">Gloves of Missile Snaring</a></i>";
    } else if (objectList[i] == 81) {
      while (objectList[i + 1] == 81) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gloves-of-swimming-and-climbing\">Gloves of Swimming and Climbing</a></i>";
    } else if (objectList[i] == 82) {
      while (objectList[i + 1] == 82) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gloves-of-thievery\">Gloves of Thievery</a></i>";
    } else if (objectList[i] == 83) {
      while (objectList[i + 1] == 83) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/headband-of-intellect\">Headband of Intellect</a></i>";
    } else if (objectList[i] == 84) {
      while (objectList[i + 1] == 84) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/helm-of-telepathy\">Helm of Telepathy</a></i>";
    } else if (objectList[i] == 85) {
      while (objectList[i + 1] == 85) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/doss-lute\">Doss Lute</a></i>";
    } else if (objectList[i] == 86) {
      while (objectList[i + 1] == 86) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/fochlucan-bandore\">Fochlucan Bandore</a></i>";
    } else if (objectList[i] == 87) {
      while (objectList[i + 1] == 87) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mac-fuimidh-cittern\">Mac-Fuimidh Cittern</a></i>";
    } else if (objectList[i] == 88) {
      while (objectList[i + 1] == 88) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/medallion-of-thoughts\">Medallion of Thoughts</a></i>";
    } else if (objectList[i] == 89) {
      while (objectList[i + 1] == 89) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/necklace-of-adaptation\">Necklace of Adaptation</a></i>";
    } else if (objectList[i] == 90) {
      while (objectList[i + 1] == 90) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/periapt-of-wound-closure\">Periapt of Wound Closure</a></i>";
    } else if (objectList[i] == 91) {
      while (objectList[i + 1] == 91) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/pipes-of-haunting\">Pipes of Haunting</a></i>";
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/pipes-of-the-sewers\">Pipes of the Sewers</a></i>";
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-jumping\">Ring of Jumping</a></i>";
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-mind-shielding\">Ring of Mind Shielding</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-warmth\">Ring of Warmth</a></i>";
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-water-walking\">Ring of Water Walking</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/quiver-of-ehlonna\">Quiver of Ehlonna</a></i>";
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/stone-of-good-luck-luckstone\">Stone of Good Luck (Luckstone)</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wind-fan\">Wind Fan</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/winged-boots\">Winged Boots</a></i>";
    }
  }
  return loot;
}

function magicItemTableG(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 11) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 11) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAny, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/2-" + weaponAny[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+2 " + weaponAny[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 12 && objectList[i] <= 14) {
      while (objectList[i + 1] >= 12 && objectList[i + 1] <= 14) {
        j++;
        i++;
      }
      subType = itemSubType(figure, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (figure[subType[k]] == figure[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/figurine-of-wondrous-power-" + figure[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Figurine of Wondrous Power (" + figure[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] == 15) {
      while (objectList[i + 1] == 15) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-breastplate\">Adamantine Breastplate</a></i>";
    } else if (objectList[i] == 16) {
      while (objectList[i + 1] == 16) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-splint\">Adamantine Splint</a></i>";
    } else if (objectList[i] == 17) {
      while (objectList[i + 1] == 17) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/amulet-of-health\">Amulet of Health</a></i>";
    } else if (objectList[i] == 18) {
      while (objectList[i + 1] == 18) {
        j++;
        i++;
      }
      subType = itemSubType(vulnerable, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/armor-of-vulnerability-" + vulnerable[subType[k]].toLowerCase() + "\">Armor of Vulnerability (" + vulnerable[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] == 19) {
      while (objectList[i + 1] == 19) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/arrow-catching-shield\">Arrow-Catching Shield</a></i>";
    } else if (objectList[i] == 20) {
      while (objectList[i + 1] == 20) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/belt-of-dwarvenkind\">Belt of Dwarvenkind</a></i>";
    } else if (objectList[i] == 21) {
      while (objectList[i + 1] == 21) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/belt-of-hill-giant-strength\">Belt of Hill Giant Strength</a></i>";
    } else if (objectList[i] == 22) {
      while (objectList[i + 1] == 22) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAxe, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/berserker-" + weaponAxe[subType[k]].toLowerCase() + "\">Berserker " + weaponAxe[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 23) {
      while (objectList[i + 1] == 23) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/boots-of-levitation\">Boots of Levitation</a></i>";
    } else if (objectList[i] == 24) {
      while (objectList[i + 1] == 24) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/boots-of-speed\">Boots of Speed</a></i>";
    } else if (objectList[i] == 25) {
      while (objectList[i + 1] == 25) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bowl-of-commanding-water-elementals\">Bowl of Commanding Water Elementals</a></i>";
    } else if (objectList[i] == 26) {
      while (objectList[i + 1] == 26) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/bracers-of-defense\">Bracers of Defense</a></i>";
    } else if (objectList[i] == 27) {
      while (objectList[i + 1] == 27) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/brazier-of-commanding-fire-elementals\">Brazier of Commanding Fire Elementals</a></i>";
    } else if (objectList[i] == 28) {
      while (objectList[i + 1] == 28) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cape-of-the-mountebank\">Cape of the Mountebank</a></i>";
    } else if (objectList[i] == 29) {
      while (objectList[i + 1] == 29) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/censer-of-controlling-air-elementals\">Censer of Controlling Air Elementals</a></i>";
    } else if (objectList[i] == 30) {
      while (objectList[i + 1] == 30) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-chain-mail\">+1 Chain Mail</a></i>";
    } else if (objectList[i] == 31) {
      while (objectList[i + 1] == 31) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/chain-mail-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Chain Mail of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 32) {
      while (objectList[i + 1] == 32) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-chain-shirt\">+1 Chain shirt</a></i>";
    } else if (objectList[i] == 33) {
      while (objectList[i + 1] == 33) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/chain-shirt-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Chain Shirt of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 34) {
      while (objectList[i + 1] == 34) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-displacement\">Cloak of Displacement</a></i>";
    } else if (objectList[i] == 35) {
      while (objectList[i + 1] == 35) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-the-bat\">Cloak of the Bat</a></i>";
    } else if (objectList[i] == 36) {
      while (objectList[i + 1] == 36) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cube-of-force\">Cube of Force</a></i>";
    } else if (objectList[i] == 37) {
      while (objectList[i + 1] == 37) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/daern-s-instant-fortress\">Daern’s Instant Fortress</a></i>";
    } else if (objectList[i] == 38) {
      while (objectList[i + 1] == 38) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dagger-of-venom\">Dagger of Venom</a></i>";
    } else if (objectList[i] == 39) {
      while (objectList[i + 1] == 39) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dimensional-shackles\">Dimensional Shackles</a></i>";
    } else if (objectList[i] == 40) {
      while (objectList[i + 1] == 40) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/dragon-slayer-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Dragon Slayer " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 41) {
      while (objectList[i + 1] == 41) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/elven-chain\">Elven Chain</a></i>";
    } else if (objectList[i] == 42) {
      while (objectList[i + 1] == 42) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/flame-tongue-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Flame Tongue " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 43) {
      while (objectList[i + 1] == 43) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/gem-of-seeing\">Gem of Seeing</a></i>";
    } else if (objectList[i] == 44) {
      while (objectList[i + 1] == 44) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAS, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/giant-slayer-" + weaponAS[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Giant Slayer " + weaponAS[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 45) {
      while (objectList[i + 1] == 45) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/glamoured-studded-leather\">Glamoured Studded Leather</a></i>";
    } else if (objectList[i] == 46) {
      while (objectList[i + 1] == 46) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/helm-of-teleportation\">Helm of Teleportation</a></i>";
    } else if (objectList[i] == 47) {
      while (objectList[i + 1] == 47) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/horn-of-blasting\">Horn of Blasting</a></i>";
    } else if (objectList[i] == 48) {
      while (objectList[i + 1] == 48) {
        j++;
        i++;
      }
      subType = itemSubType(valhallaG, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/horn-of-blasting-" + valhallaG[subType[k]].toLowerCase() + "\">Horn of Blasting (" + valhallaG[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] == 49) {
      while (objectList[i + 1] == 49) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/canaith-mandolin\">Canaith Mandolin</a></i>";
    } else if (objectList[i] == 50) {
      while (objectList[i + 1] == 50) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cli-lyre\">Cli Lyre</a></i>";
    } else if (objectList[i] == 51) {
      while (objectList[i + 1] == 51) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-awareness\">Ioun Stone of Awareness</a></i>";
    } else if (objectList[i] == 52) {
      while (objectList[i + 1] == 52) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-protection\">Ioun Stone of Protection</a></i>";
    } else if (objectList[i] == 53) {
      while (objectList[i + 1] == 53) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-reserve\">Ioun Stone of Reserve</a></i>";
    } else if (objectList[i] == 54) {
      while (objectList[i + 1] == 54) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-sustenance\">Ioun Stone of Sustenance</a></i>";
    } else if (objectList[i] == 55) {
      while (objectList[i + 1] == 55) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/iron-bands-of-bilarro\">Iron Bands of Bilarro</a></i>";
    } else if (objectList[i] == 56) {
      while (objectList[i + 1] == 56) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-leather-armor\">+1 Leather Armor</a></i>";
    } else if (objectList[i] == 57) {
      while (objectList[i + 1] == 57) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/leather-armor-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Leather Armor of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 58) {
      while (objectList[i + 1] == 58) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mace-of-disruption\">Mace of Disruption</a></i>";
    } else if (objectList[i] == 59) {
      while (objectList[i + 1] == 59) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mace-of-smiting\">Mace of Smiting</a></i>";
    } else if (objectList[i] == 60) {
      while (objectList[i + 1] == 60) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mace-of-terror\">Mace of Terror</a></i>";
    } else if (objectList[i] == 61) {
      while (objectList[i + 1] == 61) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mantle-of-spell-resistance\">Mantle of Spell Resistance</a></i>";
    } else if (objectList[i] == 62) {
      while (objectList[i + 1] == 62) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/necklace-of-prayer-beads\">Necklace of Prayer Beads</a></i>";
    } else if (objectList[i] == 63) {
      while (objectList[i + 1] == 63) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/periapt-of-proof-against-poison\">Periapt of Proof against Poison</a></i>";
    } else if (objectList[i] == 64) {
      while (objectList[i + 1] == 64) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-animal-influence\">Ring of Animal Influence</a></i>";
    } else if (objectList[i] == 65) {
      while (objectList[i + 1] == 65) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-evasion\">Ring of Evasion</a></i>";
    } else if (objectList[i] == 66) {
      while (objectList[i + 1] == 66) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-feather-falling\">Ring of Feather Falling</a></i>";
    } else if (objectList[i] == 67) {
      while (objectList[i + 1] == 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-free-action\">Ring of Free Action</a></i>";
    } else if (objectList[i] == 68) {
      while (objectList[i + 1] == 68) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-protection\">Ring of Protection</a></i>";
    } else if (objectList[i] == 69) {
      while (objectList[i + 1] == 69) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/ring-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Ring of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 70) {
      while (objectList[i + 1] == 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-spell-storing\">Ring of Spell Storing</a></i>";
    } else if (objectList[i] == 71) {
      while (objectList[i + 1] == 71) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-the-ram\">Ring of the Ram</a></i>";
    } else if (objectList[i] == 72) {
      while (objectList[i + 1] == 72) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-x-ray-vision\">Ring of X-ray Vision</a></i>";
    } else if (objectList[i] == 73) {
      while (objectList[i + 1] == 73) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/robe-of-eyes\">Robe of Eyes</a></i>";
    } else if (objectList[i] == 74) {
      while (objectList[i + 1] == 74) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-rulership\">Rod of Rulership</a></i>";
    } else if (objectList[i] == 75) {
      while (objectList[i + 1] == 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-rod-of-the-pact-keeper\">+2 Rod of the Pact Keeper</a></i>";
    } else if (objectList[i] == 76) {
      while (objectList[i + 1] == 76) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rope-of-entanglement\">Rope of Entanglement</a></i>";
    } else if (objectList[i] == 77) {
      while (objectList[i + 1] == 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-scale-mail\">+1 Scale Mail</a></i>";
    } else if (objectList[i] == 78) {
      while (objectList[i + 1] == 78) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/scale-mail-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Scale Mail of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 79) {
      while (objectList[i + 1] == 79) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-shield\">+2 Shield</a></i>";
    } else if (objectList[i] == 80) {
      while (objectList[i + 1] == 80) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/shield-of-missile-attraction\">Shield of Missile Attraction</a></i>";
    } else if (objectList[i] == 81) {
      while (objectList[i + 1] == 81) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-charming\">Staff of Charming</a></i>";
    } else if (objectList[i] == 82) {
      while (objectList[i + 1] == 82) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-healing\">Staff of Healing</a></i>";
    } else if (objectList[i] == 83) {
      while (objectList[i + 1] == 83) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-swarming-insects\">Staff of Swarming Insects</a></i>";
    } else if (objectList[i] == 84) {
      while (objectList[i + 1] == 84) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-the-woodlands\">Staff of the Woodlands</a></i>";
    } else if (objectList[i] == 85) {
      while (objectList[i + 1] == 85) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-withering\">Staff of Withering</a></i>";
    } else if (objectList[i] == 86) {
      while (objectList[i + 1] == 86) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/stone-of-controlling-earth-elementals\">Stone of Controlling Earth Elementals</a></i>";
    } else if (objectList[i] == 87) {
      while (objectList[i + 1] == 87) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/sun-blade\">Sun Blade</a></i>";
    } else if (objectList[i] == 88) {
      while (objectList[i + 1] == 88) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "-of-life-stealing\">" + weaponSword[subType[k]] + " of Life Stealing</a></i>";
      }
    } else if (objectList[i] == 89) {
      while (objectList[i + 1] == 89) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "-of-wounding\">" + weaponSword[subType[k]] + " of Wounding</a></i>";
      }
    } else if (objectList[i] == 90) {
      while (objectList[i + 1] == 90) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tentacle-rod\">Tentacle Rod</a></i>";
    } else if (objectList[i] == 91) {
      while (objectList[i + 1] == 91) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAny, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/vicious-" + weaponAny[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Vicious " + weaponAny[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-binding\">Wand of binding</a></i>";
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-enemy-detection\">Wand of Enemy Detection</a></i>";
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-fear\">Wand of Fear</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-fireballs\">Wand of Fireballs</a></i>";
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-lightning-bolts\">Wand of Lightning Bolts</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-paralysis\">Wand of Paralysis</a></i>";
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-wand-of-the-war-mage\">+2 Wand of the War Mage</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-wonder\">Wand of Wonder</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wings-of-flying\">Wings of Flying</a></i>";
    }
  }
  return loot;
}

function magicItemTableH(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 10) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 11) {
        j++;
        i++;
      }
      subType = itemSubType(weaponAny, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/3-" + weaponAny[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+3 " + weaponAny[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 11 && objectList[i] <= 12) {
      while (objectList[i + 1] >= 11 && objectList[i + 1] <= 12) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/amulet-of-the-planes\">Amulet of the Planes</a></i>";
    } else if (objectList[i] >= 13 && objectList[i] <= 14) {
      while (objectList[i + 1] >= 13 && objectList[i + 1] <= 14) {
        j++;
        i++;
      }
      subType = itemSubType(carpet, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/carpet-of-flying-" + carpet[subType[k]].replace(/\W+/g, '-').replace(/\s+/g, '-').toLowerCase() + "\">Carpet of Flying (" + carpet[subType[k]] + ".)</a></i>";
      }
    } else if (objectList[i] >= 15 && objectList[i] <= 16) {
      while (objectList[i + 1] >= 15 && objectList[i + 1] <= 16) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/crystal-ball\">Crystal Ball</a></i>";
    } else if (objectList[i] >= 17 && objectList[i] <= 18) {
      while (objectList[i + 1] >= 17 && objectList[i + 1] <= 18) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-regeneration\">Ring of Regeneration</a></i>";
    } else if (objectList[i] >= 19 && objectList[i] <= 20) {
      while (objectList[i + 1] >= 19 && objectList[i + 1] <= 20) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-shooting-stars\">Ring of Shooting Stars</a></i>";
    } else if (objectList[i] >= 21 && objectList[i] <= 22) {
      while (objectList[i + 1] >= 21 && objectList[i + 1] <= 22) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-telekinesis\">Ring of Telekinesis</a></i>";
    } else if (objectList[i] >= 23 && objectList[i] <= 24) {
      while (objectList[i + 1] >= 23 && objectList[i + 1] <= 24) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/robe-of-scintillating-colors\">Robe of Scintillating Colors</a></i>";
    } else if (objectList[i] >= 25 && objectList[i] <= 26) {
      while (objectList[i + 1] >= 25 && objectList[i + 1] <= 26) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/robe-of-stars\">Robe of Stars</a></i>";
    } else if (objectList[i] >= 27 && objectList[i] <= 28) {
      while (objectList[i + 1] >= 27 && objectList[i + 1] <= 28) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-absorption\">Rod of Absorption</a></i>";
    } else if (objectList[i] >= 29 && objectList[i] <= 30) {
      while (objectList[i + 1] >= 29 && objectList[i + 1] <= 30) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-alertness\">Rod of Alertness</a></i>";
    } else if (objectList[i] >= 31 && objectList[i] <= 32) {
      while (objectList[i + 1] >= 31 && objectList[i + 1] <= 32) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-security\">Rod of Security</a></i>";
    } else if (objectList[i] >= 33 && objectList[i] <= 34) {
      while (objectList[i + 1] >= 33 && objectList[i + 1] <= 34) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-rod-of-the-pact-keeper\">+3 Rod of the Pact Keeper</a></i>";
    } else if (objectList[i] >= 35 && objectList[i] <= 36) {
      while (objectList[i + 1] >= 35 && objectList[i + 1] <= 36) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/scimitar-of-speed\">Scimitar of Speed</a></i>";
    } else if (objectList[i] >= 37 && objectList[i] <= 38) {
      while (objectList[i + 1] >= 37 && objectList[i + 1] <= 38) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-shield\">+3 Shield</a></i>";
    } else if (objectList[i] >= 39 && objectList[i] <= 40) {
      while (objectList[i + 1] >= 39 && objectList[i + 1] <= 40) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-fire\">Staff of Fire</a></i>";
    } else if (objectList[i] >= 41 && objectList[i] <= 42) {
      while (objectList[i + 1] >= 41 && objectList[i + 1] <= 42) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-frost\">Staff of Frost</a></i>";
    } else if (objectList[i] >= 43 && objectList[i] <= 44) {
      while (objectList[i + 1] >= 43 && objectList[i + 1] <= 44) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-power\">Staff of Power</a></i>";
    } else if (objectList[i] >= 45 && objectList[i] <= 46) {
      while (objectList[i + 1] >= 45 && objectList[i + 1] <= 46) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-striking\">Staff of Striking</a></i>";
    } else if (objectList[i] >= 47 && objectList[i] <= 48) {
      while (objectList[i + 1] >= 47 && objectList[i + 1] <= 48) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-thunder-and-lightning\">Staff of Thunder and Lightning</a></i>";
    } else if (objectList[i] >= 49 && objectList[i] <= 50) {
      while (objectList[i + 1] >= 49 && objectList[i + 1] <= 50) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "-of-sharpness\">" + weaponSword[subType[k]] + " of Sharpness</a></i>";
      }
    } else if (objectList[i] >= 51 && objectList[i] <= 52) {
      while (objectList[i + 1] >= 51 && objectList[i + 1] <= 52) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/wand-of-polymorph\">Wand of Polymorph</a></i>";
    } else if (objectList[i] >= 53 && objectList[i] <= 54) {
      while (objectList[i + 1] >= 53 && objectList[i + 1] <= 54) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-wand-of-the-war-mage\">+3 Wand of the War Mage</a></i>";
    } else if (objectList[i] == 55) {
      while (objectList[i + 1] == 55) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-half-plate-armor\">Adamantine Half Plate Armor</a></i>";
    } else if (objectList[i] == 56) {
      while (objectList[i + 1] == 56) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/adamantine-plate-armor\">Adamantine Plate Armor</a></i>";
    } else if (objectList[i] == 57) {
      while (objectList[i + 1] == 57) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/animated-shield\">Animated Shield</a></i>";
    } else if (objectList[i] == 58) {
      while (objectList[i + 1] == 58) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/belt-of-fire-giant-strength\">Belt of Fire Giant Strength</a></i>";
    } else if (objectList[i] == 59) {
      while (objectList[i + 1] == 59) {
        j++;
        i++;
      }
      subType = itemSubType(giantBelt, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/belt-of-" + giantBelt[subType[k]].toLowerCase() + "-giant-strength\">Belt of " + giantBelt[subType[k]] + " Giant Strength</a></i>";
      }
    } else if (objectList[i] == 60) {
      while (objectList[i + 1] == 60) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-breastplate\">+1 Breastplate</a></i>";
    } else if (objectList[i] == 61) {
      while (objectList[i + 1] == 61) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/breastplate-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Breastplate of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 62) {
      while (objectList[i + 1] == 62) {
        j++;
        i++;
      }
      subType = itemSubType(alignment, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (alignment[subType[k]] == alignment[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/candle-of-invocation\">Candle of Invocation (" + alignment[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] == 63) {
      while (objectList[i + 1] == 63) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-chain-mail\">+2 Chain Mail</a></i>";
    } else if (objectList[i] == 64) {
      while (objectList[i + 1] == 64) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-chain-shirt\">+2 Chain Shirt</a></i>";
    } else if (objectList[i] == 65) {
      while (objectList[i + 1] == 65) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-arachnida\">Cloak of Arachnida</a></i>";
    } else if (objectList[i] == 66) {
      while (objectList[i + 1] == 66) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/dancing-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Dancing " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 67) {
      while (objectList[i + 1] == 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/demon-armor\">Demon Armor</a></i>";
    } else if (objectList[i] == 68) {
      while (objectList[i + 1] == 68) {
        j++;
        i++;
      }
      subType = itemSubType(dragon, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + dragon[subType[k]].toLowerCase() + "-dragon-scale-mail\">" + dragon[subType[k]] + " Dragon Scale Mail</a></i>";
      }
    } else if (objectList[i] == 69) {
      while (objectList[i + 1] == 69) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dwarven-plate\">Dwarven Plate</a></i>";
    } else if (objectList[i] == 70) {
      while (objectList[i + 1] == 70) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/dwarven-thrower\">Dwarven Thrower</a></i>";
    } else if (objectList[i] == 71) {
      while (objectList[i + 1] == 71) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/efreeti-bottle\">Efreeti Bottle</a></i>";
    } else if (objectList[i] == 72) {
      while (objectList[i + 1] == 72) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/figurine-of-wondrous-power-obsidian-steed\">Figurine of Wondrous Power (Obsidian Steed)</a></i>";
    } else if (objectList[i] == 73) {
      while (objectList[i + 1] == 73) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/frost-brand-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Frost Brand " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 74) {
      while (objectList[i + 1] == 74) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/helm-of-brilliance\">Helm of Brilliance</a></i>";
    } else if (objectList[i] == 75) {
      while (objectList[i + 1] == 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/horn-of-valhalla-bronze\">Horn of Valhalla (Bronze)</a></i>";
    } else if (objectList[i] == 76) {
      while (objectList[i + 1] == 76) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/anstruth-harp\">Anstruth Harp</a></i>";
    } else if (objectList[i] == 77) {
      while (objectList[i + 1] == 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-absorption\">Ioun Stone of Absorption</a></i>";
    } else if (objectList[i] == 78) {
      while (objectList[i + 1] == 78) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-agility\">Ioun Stone of Agility</a></i>";
    } else if (objectList[i] == 79) {
      while (objectList[i + 1] == 79) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-fortitude\">Ioun Stone of Fortitude</a></i>";
    } else if (objectList[i] == 80) {
      while (objectList[i + 1] == 80) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-insight\">Ioun Stone of Insight</a></i>";
    } else if (objectList[i] == 81) {
      while (objectList[i + 1] == 81) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-intellect\">Ioun Stone of Intellect</a></i>";
    } else if (objectList[i] == 82) {
      while (objectList[i + 1] == 82) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-leadership\">Ioun Stone of Leadership</a></i>";
    } else if (objectList[i] == 83) {
      while (objectList[i + 1] == 83) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-strength\">Ioun Stone of Strength</a></i>";
    } else if (objectList[i] == 84) {
      while (objectList[i + 1] == 84) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-leather-armor\">+2 Leather Armor</a></i>";
    } else if (objectList[i] == 85) {
      while (objectList[i + 1] == 85) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/manual-of-bodily-health\">Manual of Bodily Health</a></i>";
    } else if (objectList[i] == 86) {
      while (objectList[i + 1] == 86) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/manual-of-gainful-exercise\">Manual of Gainful Exercise</a></i>";
    } else if (objectList[i] == 87) {
      while (objectList[i + 1] == 87) {
        j++;
        i++;
      }
      subType = itemSubType(golem, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (golem[subType[k]] == golem[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/manual-of-" + golem[subType[k]].toLowerCase() + "-golems\">Manual of " + golem[subType[k]] + " Golems</a></i>";
      }
    } else if (objectList[i] == 88) {
      while (objectList[i + 1] == 88) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/manual-of-quickness-of-action\">Manual of Quickness of Action</a></i>";
    } else if (objectList[i] == 89) {
      while (objectList[i + 1] == 89) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/mirror-of-life-trapping\">Mirror of Life Trapping</a></i>";
    } else if (objectList[i] == 90) {
      while (objectList[i + 1] == 90) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/nine-lives-stealer-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Nine Lives Stealer " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 91) {
      while (objectList[i + 1] == 91) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/oathbow\">Oathbow</a></i>";
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-scale-mail\">+2 Scale Mail</a></i>";
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/spellguard-shield\">Spellguard Shield</a></i>";
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-splint-armor\">+1 Splint Armor</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/splint-armor-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Splint Armor of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-studded-leather-armor\">+1 Studded Leather Armor</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/studded-leather-armor-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Studded Leather Armor of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tome-of-clear-thought\">Tome of Clear Thought</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tome-of-leadership-and-influence\">Tome of Leadership and Influence</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tome-of-understanding\">Tome of Understanding</a></i>";
    }
  }
  return loot;
}

function magicItemTableI(count) {
  var objectList = [];
  var loot = "";
  var subType = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, 100));
  }
  objectList.sort((a, b) => a - b);
  for (var i = 0; i < objectList.length; i++) {
    loot += ", ";
    var j = 1;
    if (objectList[i] >= 1 && objectList[i] <= 5) {
      while (objectList[i + 1] >= 1 && objectList[i + 1] <= 5) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/defender-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Defender " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 6 && objectList[i] <= 10) {
      while (objectList[i + 1] >= 6 && objectList[i + 1] <= 10) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/hammer-of-thunderbolts\">Hammer of Thunderbolts</a></i>";
    } else if (objectList[i] >= 11 && objectList[i] <= 15) {
      while (objectList[i + 1] >= 11 && objectList[i + 1] <= 15) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/luck-blade-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Luck Blade " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 16 && objectList[i] <= 20) {
      while (objectList[i + 1] >= 16 && objectList[i + 1] <= 20) {
        j++;
        i++;
      }
      subType = itemSubType(answering, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/sword-of-answering-" + answering[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Sword of Answering (" + answering[subType[k]] + ")</a></i>";
      }
    } else if (objectList[i] >= 21 && objectList[i] <= 23) {
      while (objectList[i + 1] >= 21 && objectList[i + 1] <= 23) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSword, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/holy-avenger-" + weaponSword[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Holy Avenger " + weaponSword[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 24 && objectList[i] <= 26) {
      while (objectList[i + 1] >= 24 && objectList[i + 1] <= 26) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-djinni-summoning\">Ring of Djinni Summoning</a></i>";
    } else if (objectList[i] >= 27 && objectList[i] <= 29) {
      while (objectList[i + 1] >= 27 && objectList[i + 1] <= 29) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-invisibility\">Ring of Invisibility</a></i>";
    } else if (objectList[i] >= 30 && objectList[i] <= 32) {
      while (objectList[i + 1] >= 30 && objectList[i + 1] <= 32) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-spell-turning\">Ring of Spell Turning</a></i>";
    } else if (objectList[i] >= 33 && objectList[i] <= 35) {
      while (objectList[i + 1] >= 33 && objectList[i + 1] <= 35) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-lordly-might\">Rod of Lordly Might</a></i>";
    } else if (objectList[i] >= 36 && objectList[i] <= 38) {
      while (objectList[i + 1] >= 36 && objectList[i + 1] <= 38) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/staff-of-the-magi\">Staff of the Magi</a></i>";
    } else if (objectList[i] >= 39 && objectList[i] <= 41) {
      while (objectList[i + 1] >= 39 && objectList[i + 1] <= 41) {
        j++;
        i++;
      }
      subType = itemSubType(weaponSlash, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/vorpal-" + weaponSlash[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Vorpal " + weaponSlash[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 42 && objectList[i] <= 43) {
      while (objectList[i + 1] >= 42 && objectList[i + 1] <= 43) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/belt-of-cloud-giant-strength\">Belt of Cloud Giant Strength</a></i>";
    } else if (objectList[i] >= 44 && objectList[i] <= 45) {
      while (objectList[i + 1] >= 44 && objectList[i + 1] <= 45) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-breastplate\">+2 Breastplate</a></i>";
    } else if (objectList[i] >= 46 && objectList[i] <= 47) {
      while (objectList[i + 1] >= 46 && objectList[i + 1] <= 47) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-chain-mail\">+3 Chain Mail</a></i>";
    } else if (objectList[i] >= 48 && objectList[i] <= 49) {
      while (objectList[i + 1] >= 48 && objectList[i + 1] <= 49) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-chain-shirt\">+3 Chain Shirt</a></i>";
    } else if (objectList[i] >= 50 && objectList[i] <= 51) {
      while (objectList[i + 1] >= 50 && objectList[i + 1] <= 51) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cloak-of-invisibility\">Cloak of Invisibility</a></i>";
    } else if (objectList[i] >= 52 && objectList[i] <= 53) {
      while (objectList[i + 1] >= 52 && objectList[i + 1] <= 53) {
        j++;
        i++;
      }
      subType = itemSubType(crystalBall, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/crystal-ball-of-" + crystalBall[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">Crystal Ball of " + crystalBall[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] >= 54 && objectList[i] <= 55) {
      while (objectList[i + 1] >= 54 && objectList[i + 1] <= 55) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-half-plate-armor\">+1 Half Plate Armor</a></i>";
    } else if (objectList[i] >= 56 && objectList[i] <= 57) {
      while (objectList[i + 1] >= 56 && objectList[i + 1] <= 57) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/iron-flask\">Iron Flask</a></i>";
    } else if (objectList[i] >= 58 && objectList[i] <= 59) {
      while (objectList[i + 1] >= 58 && objectList[i + 1] <= 59) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/3-leather-armor\">+3 Leather Armor</a></i>";
    } else if (objectList[i] >= 60 && objectList[i] <= 61) {
      while (objectList[i + 1] >= 60 && objectList[i + 1] <= 61) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-plate-armor\">+1 Plate Armor</a></i>";
    } else if (objectList[i] >= 62 && objectList[i] <= 63) {
      while (objectList[i + 1] >= 62 && objectList[i + 1] <= 63) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/robe-of-the-archmagi\">Robe of the Archmagi</a></i>";
    } else if (objectList[i] >= 64 && objectList[i] <= 65) {
      while (objectList[i + 1] >= 64 && objectList[i + 1] <= 65) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/rod-of-resurrection\">Rod of Resurrection</a></i>";
    } else if (objectList[i] >= 66 && objectList[i] <= 67) {
      while (objectList[i + 1] >= 66 && objectList[i + 1] <= 67) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/1-scale-mail\">+1 Scale Mail</a></i>";
    } else if (objectList[i] >= 68 && objectList[i] <= 69) {
      while (objectList[i + 1] >= 68 && objectList[i + 1] <= 69) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/scarab-of-protection\">Scarab of Protection</a></i>";
    } else if (objectList[i] >= 70 && objectList[i] <= 71) {
      while (objectList[i + 1] >= 70 && objectList[i + 1] <= 71) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-splint-armor\">+2 Splint Armor</a></i>";
    } else if (objectList[i] >= 72 && objectList[i] <= 73) {
      while (objectList[i + 1] >= 72 && objectList[i + 1] <= 73) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/2-studded-leather-armor\">+2 Studded Leather Armor</a></i>";
    } else if (objectList[i] >= 74 && objectList[i] <= 75) {
      while (objectList[i + 1] >= 74 && objectList[i + 1] <= 75) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/well-of-many-worlds\">Well of Many Worlds</a></i>";
    } else if (objectList[i] == 76) {
      while (objectList[i + 1] == 76) {
        j++;
        i++;
      }
      subType = itemSubType(magicArmor, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (magicArmor[subType[k]] == magicArmor[subType[k + 1]]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/" + magicArmor[subType[k]].replace(/\s+/g, '-').toLowerCase() + "\">+" + magicArmor[subType[k]] + "</a></i>";
      }
    } else if (objectList[i] == 77) {
      while (objectList[i + 1] == 77) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/apparatus-of-kwalish\">Apparatus of Kwalish</a></i>";
    } else if (objectList[i] == 78) {
      while (objectList[i + 1] == 78) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/armor-of-invulnerability\">Armor of Invulnerability</a></i>";
    } else if (objectList[i] == 79) {
      while (objectList[i + 1] == 79) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/belt-of-storm-giant-strength\">Belt of Storm Giant Strength</a></i>";
    } else if (objectList[i] == 80) {
      while (objectList[i + 1] == 80) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/cubic-gate\">Cubic Gate</a></i>";
    } else if (objectList[i] == 81) {
      while (objectList[i + 1] == 81) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/deck-of-many-things\">Deck of Many Things</a></i>";
    } else if (objectList[i] == 82) {
      while (objectList[i + 1] == 82) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/efreeti-chain\">Efreeti Chain</a></i>";
    } else if (objectList[i] == 83) {
      while (objectList[i + 1] == 83) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/half-plate-armor-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Half Plate Armor of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 84) {
      while (objectList[i + 1] == 84) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/horn-of-valhalla-iron\">Horn of Valhalla (Iron)</a></i>";
    } else if (objectList[i] == 85) {
      while (objectList[i + 1] == 85) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ollamh-harp\">Ollamh Harp</a></i>";
    } else if (objectList[i] == 86) {
      while (objectList[i + 1] == 86) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-greater-absorption\">Ioun Stone of Greater Absorption</a></i>";
    } else if (objectList[i] == 87) {
      while (objectList[i + 1] == 87) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-mastery\">Ioun Stone of Mastery</a></i>";
    } else if (objectList[i] == 88) {
      while (objectList[i + 1] == 88) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ioun-stone-of-regeneration\">Ioun Stone of Regeneration</a></i>";
    } else if (objectList[i] == 89) {
      while (objectList[i + 1] == 89) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/plate-armor-of-etherealness\">Plate Armor of Etherealness</a></i>";
    } else if (objectList[i] == 90) {
      while (objectList[i + 1] == 90) {
        j++;
        i++;
      }
      subType = itemSubType(resist, j);
      for (var k = 0; k < subType.length; k++) {
        var l = 1;
        if (k > 0) {
          loot += ", ";
        }
        while (subType[k] == subType[k + 1]) {
          k++;
          l++;
        }
        if (l > 1) {
          loot += l + " x ";
        }
        loot += "<i><a href=\"/item/plate-armor-of-" + resist[subType[k]].toLowerCase() + "-resistance\">Plate Armor of " + resist[subType[k]] + " Resistance</a></i>";
      }
    } else if (objectList[i] == 91) {
      while (objectList[i + 1] == 91) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-air-elemental-command\">Ring of Air Elemental Command</a></i>";
    } else if (objectList[i] == 92) {
      while (objectList[i + 1] == 92) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-earth-elemental-command\">Ring of Earth Elemental Command</a></i>";
    } else if (objectList[i] == 93) {
      while (objectList[i + 1] == 93) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-fire-elemental-command\">Ring of Fire Elemental Command</a></i>";
    } else if (objectList[i] == 94) {
      while (objectList[i + 1] == 94) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-three-wishes\">Ring of Three Wishes</a></i>";
    } else if (objectList[i] == 95) {
      while (objectList[i + 1] == 95) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/ring-of-water-elemental-command\">Ring of Water Elemental Command</a></i>";
    } else if (objectList[i] == 96) {
      while (objectList[i + 1] == 96) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/sphere-of-annihilation\">Sphere of Annihilation</a></i>";
    } else if (objectList[i] == 97) {
      while (objectList[i + 1] == 97) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/talisman-of-pure-good\">Talisman of Pure Good</a></i>";
    } else if (objectList[i] == 98) {
      while (objectList[i + 1] == 98) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/talisman-of-the-sphere\">Talisman of the Sphere</a></i>";
    } else if (objectList[i] == 99) {
      while (objectList[i + 1] == 99) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/talisman-of-ultimate-evil\">Talisman of Ultimate Evil</a></i>";
    } else if (objectList[i] == 100) {
      while (objectList[i + 1] == 100) {
        j++;
        i++;
      }
      if (j > 1) {
        loot += j + " x ";
      }
      loot += "<i><a href=\"/item/tome-of-the-stilled-tongue\">Tome of the Stilled Tongue</a></i>";
    }
  }
  return loot;
}

function itemSubType(subType, count) {
  var objectList = [];
  for (var i = 0; i < count; i++) {
    objectList.push(rollDice(1, subType.length) - 1);
  }
  objectList.sort((a, b) => a - b);
  return objectList;
}

const gem10 = ["Azurite (10 gp)", "Banded agate (10 gp)", "Blue quartz (10 gp)", "Eye agate (10 gp)", "Hematite (10 gp)", "Lapis lazuli (10 gp)", "Malachite (10 gp)", "Moss agate (10 gp)", "Obsidian (10 gp)", "Rhodochrosite (10 gp)", "Tiger eye (10 gp)", "Turquoise (10 gp)"];
const gem50 = ["Bloodstone (50 gp)", "Carnelian (50 gp)", "Chalcedony (50 gp)", "Chrysoprase (50 gp)", "Citrine (50 gp)", "Jasper (50 gp)", "Moonstone (50 gp)", "Onyx (50 gp)", "Quartz (50 gp)", "Sardonyx (50 gp)", "Star rose quartz (50 gp)", "Zircon (50 gp)"];
const gem100 = ["Amber (100 gp)", "Amethyst (100 gp)", "Chrysoberyl (100 gp)", "Coral (100 gp)", "Garnet (100 gp)", "Jade (100 gp)", "Jet (100 gp)", "Pearl (100 gp)", "Spinel (100 gp)", "Tourmaline (100 gp)"];
const gem500 = ["Alexandrite (500 gp)", "Aquamarine (500 gp)", "Black pearl (500 gp)", "Blue spinel (500 gp)", "Peridot (500 gp)", "Topaz (500 gp)"];
const gem1000 = ["Black opal (1000 gp)", "Blue sapphire (1000 gp)", "Emerald (1000 gp)", "Fire opal (1000 gp)", "Opal (1000 gp)", "Star ruby (1000 gp)", "Star sapphire (1000 gp)", "Yellow sapphire (1000 gp)"];
const gem5000 = ["Black sapphire (5000 gp)", "Diamond (5000 gp)", "Jacinth (5000 gp)", "Ruby (5000 gp)"];

const art25 = ["Silver ewer (25 gp)", "Carved bone statuette (25 gp)", "Small gold bracelet (25 gp)", "Cloth-of-gold vestments (25 gp)", "Black velvet mask stitched with silver thread (25 gp)", "Copper chalice with silver filigree (25 gp)", "Pair of engraved bone dice (25 gp)", "Small mirror set in a painted wooden frame (25 gp)", "Embroidered silk handkerchief (25 gp)", "Gold locket with a painted portrait inside (25 gp)"];
const art250 = ["Gold ring set with bloodstones (250 gp)", "Carved ivory statuette (250 gp)", "Large gold bracelet (250 gp)", "Silver necklace with a gemstone pendant (250 gp)", "Bronze crown (250 gp)", "Silk robe with gold embroidery (250 gp)", "Large well-made tapestry (250 gp)", "Brass mug with jade inlay (250 gp)", "Box of turquoise animal figurines (250 gp)", "Gold bird cage with electrum filigree (250 gp)"];
const art750 = ["Silver chalice set with moonstones (750 gp)", "Silver-plated steel longsword with jet set in hilt (750 gp)", "Carved harp of exotic wood with ivory inlay and zircon gems (750 gp)", "Small gold idol (750 gp)", "Gold dragon comb set with red garnets as eyes (750 gp)", "Bottle stopper cork embossed with gold leaf and set with amethysts (750 gp)", "Ceremonial electrum dagger with a black pearl in the pommel (750 gp)", "Silver and gold brooch (750 gp)", "Obsidian statuette with gold fittings and inlay (750 gp)", "Painted gold war mask (750 gp)"];
const art2500 = ["Fine gold chain set with a fire opal (2500 gp)", "Old masterpiece painting (2500 gp)", "Embroidered silk and velvet mantle set with numerous moonstones (2500 gp)", "Platinum bracelet set with a sapphire (2500 gp)", "Embroidered glove set with jewel chips (2500 gp)", "Jeweled anklet (2500 gp)", "Gold music box (2500 gp)", "Gold circlet set with four aquamarines (2500 gp)", "Eye patch with a mock eye set in blue sapphire and moonstone (2500 gp)", "A necklace string of small pink pearls (2500 gp)"];
const art7500 = ["Jeweled gold crown (7500 gp)", "Jeweled platinum ring (7500 gp)", "Small gold statuette set with rubies (7500 gp)", "Gold cup set with emeralds (7500 gp)", "Gold jewelry box with platinum filigree (7500 gp)", "Painted gold child’s sarcophagus (7500 gp)", "Jade game board with solid gold playing pieces (7500 gp)", "Bejeweled ivory drinking horn with gold filigree (7500 gp)"];

const spell0 = ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Druidcraft", "Eldritch Blast", "Encode Thoughts", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Guidance", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Magic Stone", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Primal Savagery", "Produce Flame", "Ray of Frost", "Resistance", "Sacred Flame", "Sapping Sting", "Shape Water", "Shillelagh", "Shocking Grasp", "Spare the Dying", "Sword Burst", "Thaumaturgy", "Thorn Whip", "Thunderclap", "Toll the Dead", "True Strike", "Vicious Mockery", "Word of Radiance"];
const spell1 = ["Absorb Elements", "Alarm", "Animal Friendship", "Armor of Agathys", "Arms of Hadar", "Bane", "Beast Bond", "Bless", "Burning Hands", "Catapult", "Cause Fear", "Ceremony", "Chaos Bolt", "Charm Person", "Chromatic Orb", "Color Spray", "Command", "Compelled Duel", "Comprehend Languages", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Disguise Self", "Dissonant Whispers", "Distort Value", "Divine Favor", "Earth Tremor", "Ensnaring Strike", "Entangle", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Frost Fingers", "Gift of Alacrity", "Goodberry", "Grease", "Guiding Bolt", "Hail of Thorns", "Healing Word", "Hellish Rebuke", "Heroism", "Hex", "Hunter’s Mark", "Ice Knife", "Identify", "Illusory Script", "Inflict Wounds", "Jim’s Magic Missile", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Magnify Gravity", "Protection from Evil and Good", "Purify Food and Drink", "Ray of Sickness", "Sanctuary", "Searing Smite", "Shield", "Shield of Faith", "Silent Image", "Sleep", "Snare", "Speak with Animals", "Tasha’s Caustic Brew", "Tasha’s Hideous Laughter", "Tenser’s Floating Disk", "Thunderous Smite", "Thunderwave", "Unseen Servant", "Witch Bolt", "Wrathful Smite", "Zephyr Strike"];
const spell2 = ["Aganazzar’s Scorcher", "Aid", "Alter Self", "Animal Messenger", "Arcane Lock", "Augury", "Barkskin", "Beast Sense", "Blindness/Deafness", "Blur", "Branding Smite", "Calm Emotions", "Cloud of Daggers", "Continual Flame", "Cordon of Arrows", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Dragon’s Breath", "Dust Devil", "Earthbind", "Enhance Ability", "Enlarge/Reduce", "Enthrall", "Find Steed", "Find Traps", "Flame Blade", "Flaming Sphere", "Flock of Familiars", "Fortune’s Favor", "Gentle Repose", "Gift of Gab", "Gust of Wind", "Healing Spirit", "Heat Metal", "Hold Person", "Immovable Object", "Invisibility", "Jim’s Glowing Coin", "Knock", "Lesser Restoration", "Levitate", "Locate Animals or Plants", "Locate Object", "Magic Mouth", "Magic Weapon", "Maximillian’s Earthen Grasp", "Melf’s Acid Arrow", "Mind Spike", "Mirror Image", "Misty Step", "Moonbeam", "Nystul’s Magic Aura", "Pass Without Trace", "Phantasmal Force", "Prayer of Healing", "Protection from Poison", "Pyrotechnics", "Ray of Enfeeblement", "Rope Trick", "Scorching Ray", "See Invisibility", "Shadow Blade", "Shatter", "Silence", "Skywrite", "Snilloc’s Snowball Storm", "Spider Climb", "Spike Growth", "Spiritual Weapon", "Suggestion", "Summon Beast", "Tasha’s Mind Whip", "Warding Bond", "Warding Wind", "Web", "Wristpocket", "Zone of Truth"];
const spell3 = ["Animate Dead", "Aura of Vitality", "Beacon of Hope", "Bestow Curse", "Blinding Smite", "Blink", "Call Lightning", "Catnap", "Clairvoyance", "Conjure Animals", "Conjure Barrage", "Counterspell", "Create Food and Water", "Crusader’s Mantle", "Daylight", "Dispel Magic", "Elemental Weapon", "Enemies Abound", "Erupting Earth", "Fast Friends", "Fear", "Feign Death", "Fireball", "Flame Arrows", "Fly", "Galder’s Tower", "Gaseous Form", "Glyph of Warding", "Haste", "Hunger of Hadar", "Hypnotic Pattern", "Incite Greed", "Intellect Fortress", "Leomund’s Tiny Hut", "Life Transference", "Lightning Arrow", "Lightning Bolt", "Magic Circle", "Major Image", "Mass Healing Word", "Meld into Stone", "Melf’s Minute Meteors", "Motivational Speech", "Nondetection", "Phantom Steed", "Plant Growth", "Protection from Energy", "Pulse Wave", "Remove Curse", "Revivify", "Sending", "Sleet Storm", "Slow", "Speak with Dead", "Speak with Plants", "Spirit Guardians", "Spirit Shroud", "Stinking Cloud", "Summon Fey", "Summon Lesser Demons", "Summon Shadowspawn", "Summon Undead", "Thunder Step", "Tidal Wave", "Tiny Servant", "Tongues", "Vampiric Touch", "Wall of Sand", "Wall of Water", "Water Breathing", "Water Walk", "Wind Wall"];
const spell4 = ["Arcane Eye", "Aura of Life", "Aura of Purity", "Banishment", "Blight", "Charm Monster", "Compulsion", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Death Ward", "Dimension Door", "Divination", "Dominate Beast", "Elemental Bane", "Evard’s Black Tentacles", "Fabricate", "Find Greater Steed", "Fire Shield", "Freedom of Movement", "Galder’s Speedy Courier", "Giant Insect", "Grasping Vine", "Gravity Sinkhole", "Greater Invisibility", "Guardian of Faith", "Guardian of Nature", "Hallucinatory Terrain", "Ice Storm", "Leomund’s Secret Chest", "Locate Creature", "Mordenkainen’s Faithful Hound", "Mordenkainen’s Private Sanctum", "Otiluke’s Resilient Sphere", "Phantasmal Killer", "Polymorph", "Shadow of Moil", "Sickening Radiance", "Staggering Smite", "Stone Shape", "Stoneskin", "Storm Sphere", "Summon Aberration", "Summon Construct", "Summon Elemental", "Summon Greater Demon", "Vitriolic Sphere", "Wall of Fire", "Watery Sphere"];
const spell5 = ["Animate Objects", "Antilife Shell", "Awaken", "Banishing Smite", "Bigby’s Hand", "Circle of Power", "Cloudkill", "Commune", "Commune with Nature", "Cone of Cold", "Conjure Elemental", "Conjure Volley", "Contact Other Plane", "Contagion", "Control Winds", "Creation", "Danse Macabre", "Dawn", "Destructive Wave", "Dispel Evil and Good", "Dominate Person", "Dream", "Enervation", "Far Step", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Hold Monster", "Holy Weapon", "Immolation", "Infernal Calling", "Insect Plague", "Legend Lore", "Maelstrom", "Mass Cure Wounds", "Mislead", "Modify Memory", "Negative Energy Flood", "Passwall", "Planar Binding", "Raise Dead", "Rary’s Telepathic Bond", "Reincarnate", "Scrying", "Seeming", "Skill Empowerment", "Steel Wind Strike", "Summon Celestial", "Swift Quiver", "Synaptic Static", "Telekinesis", "Teleportation Circle", "Temporal Shunt", "Transmute Rock", "Tree Stride", "Wall of Force", "Wall of Light", "Wall of Stone", "Wrath of Nature"];
const spell6 = ["Arcane Gate", "Blade Barrier", "Bones of the Earth", "Chain Lightning", "Circle of Death", "Conjure Fey", "Contingency", "Create Homunculus", "Create Undead", "Disintegrate", "Drawmij’s Instant Summons", "Druid Grove", "Eyebite", "Find the Path", "Flesh to Stone", "Forbiddance", "Globe of Invulnerability", "Gravity Fissure", "Guards and Wards", "Harm", "Heal", "Heroes’ Feast", "Investiture of Flame", "Investiture of Ice", "Investiture of Stone", "Investiture of Wind", "Magic Jar", "Mass Suggestion", "Mental Prison", "Move Earth", "Otiluke’s Freezing Sphere", "Otto’s Irresistible Dance", "Planar Ally", "Primordial Ward", "Programmed Illusion", "Scatter", "Soul Cage", "Summon Fiend", "Sunbeam", "Tasha’s Otherworldly Guise", "Tenser’s Transformation", "Transport via Plants", "True Seeing", "Wall of Ice", "Wall of Thorns", "Wind Walk", "Word of Recall"];
const spell7 = ["Conjure Celestial", "Create Magen", "Crown of Stars", "Delayed Blast Fireball", "Divine Word", "Dream of the Blue Veil", "Etherealness", "Finger of Death", "Fire Storm", "Forcecage", "Mirage Arcane", "Mordenkainen’s Magnificent Mansion", "Mordenkainen’s Sword", "Plane Shift", "Power Word: Pain", "Prismatic Spray", "Project Image", "Regenerate", "Resurrection", "Reverse Gravity", "Sequester", "Simulacrum", "Symbol", "Teleport", "Temple of the Gods", "Tether Essence", "Whirlwind"];
const spell8 = ["Abi-Dalzim’s Horrid Wilting", "Animal Shapes", "Antimagic Field", "Antipathy/Sympathy", "Clone", "Control Weather", "Dark Star", "Demiplane", "Dominate Monster", "Earthquake", "Feeblemind", "Glibness", "Holy Aura", "Illusory Dragon", "Incendiary Cloud", "Maddening Darkness", "Maze", "Mighty Fortress", "Mind Blank", "Power Word: Stun", "Reality Break", "Sunburst", "Telepathy", "Tsunami"];
const spell9 = ["Astral Projection", "Blade of Disaster", "Foresight", "Gate", "Imprisonment", "Invulnerability", "Mass Heal", "Mass Polymorph", "Meteor Swarm", "Power Word: Heal", "Power Word: Kill", "Prismatic Wall", "Psychic Scream", "Ravenous Void", "Shapechange", "Storm of Vengeance", "Time Ravage", "Time Stop", "True Polymorph", "True Resurrection", "Weird", "Wish"];

const ammo = ["Arrow", "Blowgun Needle", "Crossbow Bolt", "Sling Bullet"];
const armorLMH = ["Padded Armor", "Leather Armor", "Studded Leather Armor", "Hide Armor", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate Armor", "Spiked Armor", "Ring Mail", "Chain Mail", "Splint Armor", "Plate Armor"];
const armorMHnH = ["Chain Shirt", "Scale Mail", "Breastplate", "Half Plate Armor", "Spiked Armor", "Ring Mail", "Chain Mail", "Splint Armor", "Plate Armor"];
const weaponAny = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Yklwa", "Light Crossbow", "Dart", "Shortbow", "Sling", "Battleaxe", "Double-Bladed Scimitar", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War pick", "Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"];
const weaponAxe = ["Handaxe", "Battleaxe", "Greataxe"];
const weaponSword = ["Double-Bladed Scimitar", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword"];
const weaponAS = ["Handaxe", "Battleaxe", "Double-Bladed Scimitar", "Greatsword", "Longsword", "Greataxe", "Rapier", "Scimitar", "Shortsword"];
const weaponSlash = ["Double-Bladed Scimitar", "Greatsword", "Longsword", "Scimitar"];

const resist = ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"];
const elementalGem = ["Blue Sapphire", "Yellow Diamond", "Red Corundum", "Emerald"];
const quaal = ["Anchor", "Anchor", "Anchor", "Anchor", "Bird", "Bird", "Bird", "Fan", "Fan", "Fan", "Swan Boat", "Swan Boat", "Swan Boat", "Tree", "Tree", "Tree", "Tree", "Tree", "Whip", "Whip"];
const creatureType = ["Aberrations", "Aberrations", "Beasts", "Beasts", "Celestials", "Celestials", "Elementals", "Elementals", "Fey", "Fey", "Fiends", "Fiends", "Fiends", "Fiends", "Fiends", "Plants", "Undead", "Undead", "Undead", "Undead"];
const figure = ["Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Onyx Dog", "Onyx Dog", "Serpentine Owl"];
const vulnerable = ["Bludgeoning", "Piercing", "Slashing"];
const valhallaG = ["Silver", "Brass"];
const carpet = ["3 ft. × 5 ft", "4 ft. × 6 ft", "5 ft. × 7 ft", "6 ft. × 9 ft"];
const giantBelt = ["Frost", "Stone"];
const alignment = ["Chaotic Evil", "Chaotic Evil", "Chaotic Neutral", "Chaotic Neutral", "Chaotic Good", "Chaotic Good", "Chaotic Good", "Neutral Evil", "Neutral Evil", "Neutral", "Neutral", "Neutral Good", "Neutral Good", "Lawful Evil", "Lawful Evil", "Lawful Neutral", "Lawful Neutral", "Lawful Good", "Lawful Good", "Lawful Good"];
const dragon = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];
const golem = ["Clay", "Clay", "Clay", "Clay", "Clay", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Flesh", "Iron", "Stone", "Stone"];
const answering = ["Answerer","Back Talker","Concluder","Last Quip","Rebutter","Replier","Retorter","Scather","Squelcher"];
const crystalBall = ["Mind Reading", "Telepathy", "True Seeing"];
const magicArmor = ["2 Half Plate Armor","2 Half Plate Armor","2 Plate Armor","2 Plate Armor","3 Studded Leather Armor","3 Studded Leather Armor","3 Breastplate","3 Breastplate","3 Splint Armor","3 Splint Armor","3 Half Plate Armor","3 Plate Armor"];

</script>
