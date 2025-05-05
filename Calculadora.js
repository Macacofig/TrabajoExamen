document.getElementById("buttonEnter").addEventListener("click", function() {
    calculateIMC();
        });
function calculateIMC() {
    var weight = parseFloat(document.getElementById("weight").value);
    var length = parseFloat(document.getElementById("length").value);
    var imc =parseFloat( weight / (length * length));
    document.getElementById("result").innerHTML = `Tu IMC es de: ${imc.toFixed(2)}<br>`;

    
}   