document.getElementById("buttonEnter").addEventListener("click", function () {
    calculateIMC();
});

function calculateIMC() {
    var weight = parseFloat(document.getElementById("weight").value);
    var length = parseFloat(document.getElementById("length").value);

    if (!weight || !length) {
        document.getElementById("result").innerHTML = "Por favor, introduce peso y altura válidos.";
        return;
    }

    var imc = weight / (length * length);
    document.getElementById("result").innerHTML =`Tu IMC es de: ${imc.toFixed(2)}   ` ;
}