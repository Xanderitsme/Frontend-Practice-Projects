let counter = 0;

document.getElementById("decreaseButton").onclick = function() {
    counter -= 1;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("reset").onclick = function() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("increase").onclick = function() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}