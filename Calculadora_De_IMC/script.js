function Calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = Number((peso/altura));

    document.getElementById("result").textContent = imc;
}

