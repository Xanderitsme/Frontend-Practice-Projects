let sideA;
let sideB;
let hypotenuse;

// sideA = window.prompt("Enter side A");
// sideB = window.prompt("Enter side B");

document.getElementById("submitButton").onclick = function() {
    sideA = Number(document.getElementById("aTextBox").value);
    sideB = Number(document.getElementById("bTextBox").value);
    hypotenuse = Math.sqrt(Math.pow(Number(sideA), 2) + Math.pow(Number(sideB), 2));
    
    document.getElementById("HyLabel").innerHTML = hypotenuse;
}

hypotenuse = Math.sqrt(Math.pow(Number(sideA), 2) + Math.pow(Number(sideB), 2));

console.log("Side A:", sideA);
console.log("Side B:", sideB);
console.log("Hypotenuse:", hypotenuse);