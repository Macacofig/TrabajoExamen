document.getElementById("buttonEnter").addEventListener("click", function (event) {
    event.preventDefault(); // 👈 Evita que el formulario se envíe
    calculateIMC();
});

function calculateIMC() {
    let weight = parseFloat(document.getElementById("weight").value.replace(",", "."));
    let length = parseFloat(document.getElementById("length").value.replace(",", "."));

    if (isNaN(weight) || isNaN(length)) {
        document.getElementById("result").innerHTML = "Por favor, introduce peso y altura válidos.";
        return;
    }

    var imc = weight / (length * length);
    document.getElementById("result").innerHTML = `Tu IMC es de: ${imc.toFixed(2)}`;
}