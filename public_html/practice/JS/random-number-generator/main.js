let x, y, z, maxValue, minValue;

document.getElementById("rollButton").onclick = function() {
    minValue = Number(document.getElementById("min").value);
    maxValue = Number(document.getElementById("max").value);

    if (minValue <= maxValue) {
        maxValue = maxValue - minValue + 1;
    
        a = Math.floor(Math.random() * maxValue) + minValue;
        // b = Math.floor(Math.random() * maxValue) + minValue;
        // c = Math.floor(Math.random() * maxValue) + minValue;
        // d = Math.floor(Math.random() * maxValue) + minValue;
        // e = Math.floor(Math.random() * maxValue) + minValue;
    
        document.getElementById("aLabel").innerHTML = a;
        // document.getElementById("bLabel").innerHTML = b;
        // document.getElementById("cLabel").innerHTML = c;
        // document.getElementById("dLabel").innerHTML = d;
        // document.getElementById("eLabel").innerHTML = e;

    } else {
        alert("Max value must be higher than min value");
    }
}