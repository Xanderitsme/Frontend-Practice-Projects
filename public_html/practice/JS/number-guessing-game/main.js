let attemps = 0;
let minValue = 1;
let maxValue = 10;
let range = maxValue - minValue;
let randomNumber = getRandomNumber(minValue, maxValue);

document.getElementById("playerHelp").innerHTML = `Certain help: ${Math.round(range * 0.3)} units`;

document.getElementById("minValue").value = minValue;
document.getElementById("maxValue").value = maxValue;

// Comment line below if you don't want to see the random number
// document.getElementById("randomNum").innerHTML = randomNumber;

document.getElementById("newGame").onclick = function() {
    document.getElementById("playerMessage").innerHTML = "Please pick a number";
    newGame();
}

document.getElementById("testNum").onclick = function() {
    if (minValue != Number(document.getElementById("minValue").value) || maxValue != Number(document.getElementById("maxValue").value)) {
        newGame();
        return;
    } else if (document.getElementById("playerNum").value == "") {
        document.getElementById("playerMessage").innerHTML = "";
        attemps++;
        document.getElementById("attemps").innerHTML = `${attemps} attemps`;
        return;
    }

    playerNum = Number(document.getElementById("playerNum").value);
    document.getElementById("playerMessage").innerHTML = testNum(playerNum, randomNumber);
    document.getElementById("attemps").innerHTML = `${attemps} attemps`;
}

function newGame() {
    attemps = 0;
    minValue = Number(document.getElementById("minValue").value);
    maxValue = Number(document.getElementById("maxValue").value);
    randomNumber = getRandomNumber(minValue, maxValue);
    document.getElementById("playerHelp").innerHTML = `Certain help: ${Math.round(range * 0.3)} units`;
    document.getElementById("playerNum").value = "";
    document.getElementById("attemps").innerHTML = `${attemps} attemps`;

    // Comment line below if you don't want to see the random number
    // document.getElementById("randomNum").innerHTML = randomNumber;
}

function testNum(num, original) {
    near = Math.abs(original - num);
    attemps++;
    return num == original
    ? "You Win!"
    : num < minValue || num > maxValue
        ? `Please pick a number between ${minValue} - ${maxValue}`
        : num < original
            ?  near < range * 0.3
                ? "You're so close, but it's too small!"
                : "Too small"
            : near < range * 0.3
                ? "You're so close, but it's too large!"
                : "Too large";
}

function getRandomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}