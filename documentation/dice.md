<h1>Virtual Dice Roller</h1>
<p>Use this page to roll some virtual dice. Below you will find options to roll the various standard dice as well as a place to enter a custom roll. Just tap a button, or enter a dice notation to roll some dice.</p>
<h2>Standard Dice</h2>
<p>Click on one of these to roll a single standard die<br><input type="button" style="font-size: 9pt" value="Roll a D4" onclick="rollDie(4)"><br><input type="button" style="font-size: 9pt" value="Roll a D6" onclick="rollDie(6)"><br><input type="button" style="font-size: 9pt" value="Roll a D8" onclick="rollDie(8)"><br><input type="button" style="font-size: 9pt" value="Roll a D10" onclick="rollDie(10)"><br><input type="button" style="font-size: 9pt" value="Roll a D12" onclick="rollDie(12)"><br><input type="button" style="font-size: 9pt" value="Roll a D20" onclick="rollDie(20)"></p>
<h2>Custom Die Roll</h2>
<p>Input a custom die roll in the standard notation (i.e. 4d6+3 or 4d6x2)<br><input name="rollstring" id="rollstring" type="text" value="" onkeyup="rollCustom()"></p>
<h2>Results</h2>
<p><input name="result" id="result" type="text" value="" style="width: 90%"></p>
<p><script type="text/javascript">
    function rollDie(die) {
	document.getElementById('result').value = Math.floor(Math.random() * die)+1;
	}
    function rollCustom() {
	let regex = new RegExp("([1-9]\\d*)?[dD]([1-9]\\d*)[ ]*(([/x])(\\d+))?[ ]*(([+-])(\\d+))?");
	var rollstr = document.getElementById('rollstring').value;
	var result = 0;
	var match = regex.exec(rollstr);
	var rolls = [];
	var restx = "";
	var i = 0;
	while (true) {
		let roll = Math.floor(Math.random() * parseInt(match[2]))+1;
		result += roll;
		rolls.push(roll);
		i += 1;
		if (i==match[1]) {
			break;
		}
	}
	restxt = "(" + rolls.join(" + ") + ")";
	if (match[3]) {
		if (match[4] == "x") {
			result = result * parseInt(match[5]);
		} else if (match[4] == "/") {
			result = result / parseInt(match[5]);
		}
		restxt += " " + match[4] + " " + match[5];
	}
	if (match[6]) {
		if (match[7] == "+") {
			result += parseInt(match[8]);
		} else if (match[7] == "-") {
			result -= parseInt(match[8]);
		}
		restxt += " " + match[7] + " " + match[8];
	}

	document.getElementById('result').value = restxt + " = " + result;
	}
</script></p>