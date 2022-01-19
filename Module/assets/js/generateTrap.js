/*
Felix MIL
version 1.0
----------------
generateTrap.js
*/

// Generate an Trap
// --------------------------------------------------------------------------------

function generateTrap() {


    // Get the PC tier from the selectPCLevel dropdown.
    selectPCLevel = document.getElementById('selectPCLevel');
    level = selectPCLevel.options[selectPCLevel.selectedIndex].value;

    // If the PCLevel is Any, choose one randomly.
    if (level == "None"){
        level = generate_text("PCLevelTiers");
    };


    // Get the trapDanger tier from the selectTrapDanger dropdown.
    selectTrapDanger = document.getElementById('selectTrapDanger');
    danger = selectTrapDanger.options[selectTrapDanger.selectedIndex].value;

    // If the PCLevel is Any, choose one randomly.
    if (danger == "None"){
        danger = generate_text("trapDanger");
    };

    saveDC = ""
    attackBonus = ""
    damage = ""
      switch(danger) {
            case "Setback":
                saveDC = "10-11";
                attackBonus = "+3 to +5"
                switch(level) {
                    case "1-4":
                        damage = "1d10";
                        break;
                    case "5-10":
                        damage = "2d10";
                        break;
                    case "11-16":
                        damage = "4d10";
                        break;
                    case "17-20":
                        damage = "10d10";
                        break;
                }
                break;
            case "Dangerous":
                saveDC = "12-15";
                attackBonus = "+6 to +8"
                switch(level) {
                    case "1-4":
                        damage = "2d10";
                        break;
                    case "5-10":
                        damage = "4d10";
                        break;
                    case "11-16":
                        damage = "10d10";
                        break;
                    case "17-20":
                        damage = "18d10";
                        break;
                }
                break;
            case "Deadly":
                saveDC = "16-20";
                attackBonus = "+9 to +12"
                switch(level) {
                    case "1-4":
                        damage = "4d10";
                        break;
                    case "5-10":
                        damage = "10d10";
                        break;
                    case "11-16":
                        damage = "18d10";
                        break;
                    case "17-20":
                        damage = "24d10";
                        break;
                }
                break;
    };

    trigger = generate_text("trapTrigger");
    effects = generate_text("trapEffect");


    // Formating
    level = ("<h4>PC Level: <b>" + level + "</b></h4>");
    danger = ("<h4>Trap Danger: <b>" + danger + "</b></h4>");
    saveDC = ("Save DC: <b>" + saveDC + "</b>");
    attackBonus = ("Attack Bonus: <b>" + attackBonus + "</b>");
    damage = ("Trap Damage: <a href=\"/roll/" + damage + "\"><b>" + damage + "</a>" + "</b>");
    trigger = ("<h4>Trap Trigger: <b>" + trigger + "</b></h4>");
    effects = ("<h4>Trap Effects: <b>" + effects + "</b></h4>");

    // Display the NPC and provide the variables to the interface.
    displayTrap()
     
}

// Populate HTML with generated values

function displayTrap() {

    // Header
    PCLevel.innerHTML = level;
    trapDanger.innerHTML = danger;

    // Descriptions
    trapSaveDC.innerHTML = saveDC;
    trapAttackBonus.innerHTML = attackBonus;
    trapDamage.innerHTML = damage;
    trapTrigger.innerHTML = trigger;
    trapEffects.innerHTML = effects;

    
}