
const resultado = document.getElementById("resultado")
let total = 0

function calcular(){
    let horas = Number(document.getElementById("horas").value)
    let pedidos = Number(document.getElementById("pedidos").value)
    let bar = Number(document.getElementById("bar").value)
    if ( horas <= 0.49 || horas > 200  ||  
        pedidos < 0 || pedidos > 400 ||
        bar < 0 || bar > 100 || 
        !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        alert("Por favor, ingresa valores válidos para todos los campos.");
        return
    }
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)).toFixed(2) + "€"
    resultado.textContent = "Total: " + total
}

function reset(){
    horas.value = 0
    pedidos.value = 0
    bar.value = 0
    resultado.textContent = "Total: 0.00€"
}

function limpiarValor(input){
    if (input.value == "0"){
        input.value = "";
    }
}

let nominas = []
let historial = document.getElementById("historial")
const guardar = document.getElementById("guardar")

function render(a) {
    let lista = ""
    for (let i = 0; i < a.length; i++) {
        lista += `<li>${a[i]}</li>`
    }
    historial.innerHTML = lista
}

guardar.addEventListener("click", function() {
    nominas.push(total)
    total = ""
    render(nominas)
    reset()
})