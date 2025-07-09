
let resultado = document.getElementById("resultado")

function calcular(){
    let horas = parseFloat(document.getElementById("horas").value)
    let pedidos = parseFloat(document.getElementById("pedidos").value)
    let bar = parseFloat(document.getElementById("bar").value)
    if (isNaN(horas) || horas <= 0.49 || horas > 200  ||  isNaN(pedidos) || pedidos < 0 || pedidos > 400 ||isNaN(bar) || bar < 0 || bar > 100 || !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return
    }
    let total = (horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)
    resultado.textContent = "Resultado: " + total.toFixed(2) + "€"
}

function reset(){
    horas.value = 0
    pedidos.value = 0
    bar.value = 0
    resultado.textContent = "Resultado: 0.00€"
}

function limpiarValor(input){
    if (input.value == "0"){
        input.value = "";
    }
}
