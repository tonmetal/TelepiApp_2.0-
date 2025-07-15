
const resultado = document.getElementById("resultado")
const horas = document.getElementById("horas")
const pedidos = document.getElementById("pedidos")
const bar = document.getElementById("bar")
let total = ""


horas.addEventListener("input",function calcular(){
    let horas = Number(document.getElementById("horas").value)
    let pedidos = Number(document.getElementById("pedidos").value)
    let bar = Number(document.getElementById("bar").value)
    if (  horas > 200  || pedidos > 400 || bar > 100 || 
        !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        return
    }
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)).toFixed(2) + "€"
    resultado.textContent = "Total: " + total
})

pedidos.addEventListener("input",function calcular(){
    let horas = Number(document.getElementById("horas").value)
    let pedidos = Number(document.getElementById("pedidos").value)
    let bar = Number(document.getElementById("bar").value)
    if ( horas > 200  || pedidos > 400 || bar > 100 ||  
        !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        return
    }
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)).toFixed(2) + "€"
    resultado.textContent = "Total: " + total
})

bar.addEventListener("input",function calcular(){
    let horas = Number(document.getElementById("horas").value)
    let pedidos = Number(document.getElementById("pedidos").value)
    let bar = Number(document.getElementById("bar").value)
    if ( horas > 200  || pedidos > 400 || bar > 100 ||  
        !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        return
    }
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)).toFixed(2) + "€"
    resultado.textContent = "Total: " + total
})


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
let lista = ""
let historial = document.getElementById("historial")
const guardar = document.getElementById("guardar")
const reiniciar = document.getElementById("reiniciar")
const borrar = document.getElementById("borrar")

function render(a) {
    
    if( nominas.length < 7){
    lista = ""
    for (let i = 0; i < a.length; i++) {
        lista += `<li>${a[i]}</li>`
    }
    historial.innerHTML = lista
}
    console.log(nominas)
}

guardar.addEventListener("click", function() {
    if (total && nominas.length < 6){nominas.unshift(total)}
    total = ""
    render(nominas)
    reset()
})


borrar.addEventListener("click", function() {
    nominas.shift()
    historial.innerHTML = lista
    console.log(nominas)
})

reiniciar.addEventListener("click", function() {
    nominas = []
    historial.innerHTML = ""
    console.log(nominas)
})

