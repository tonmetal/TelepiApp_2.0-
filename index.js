
const resultado = document.getElementById("resultado")
const horasa = document.getElementById("horas")
const pedidosa = document.getElementById("pedidos")
const bara = document.getElementById("bar")
const vacacionesa = document.getElementById("vacaciones")
const guardar = document.getElementById("guardar")
const reiniciar = document.getElementById("reiniciar")
const borrar = document.getElementById("borrar")
let historial = document.getElementById("historial")
let total = ""
let nominas = []
let lista = ""

function calcular(){
    let horas = Number(horasa.value)
    let pedidos = Number(pedidosa.value)
    let bar = Number(bara.value)
    let vacaciones = Number(vacacionesa.value)
    if (  horas > 200  || pedidos > 400 || bar > 100 || 
        !Number.isInteger(bar) ||!Number.isInteger(pedidos)){
        return
    }

    let suma = 0
    for(let i = 0; i< nominas.length; i++){
            suma += Number(nominas[i])
        }
    
    let media = Number(suma / nominas.length)


    if(vacaciones === 0){
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5)).toFixed(2) 
    resultado.textContent = "Total: " + total + "€"
    }else if (vacaciones > 0 && vacaciones <= 31){
    total = ((horas * 7.67) + (pedidos * 0.48) + (bar * 0.5) + (vacaciones *( media/30))).toFixed(2) 
    resultado.textContent = "Total: " + total  + "€"  
    }
}

horasa.addEventListener("input",calcular)
pedidosa.addEventListener("input", calcular)
bara.addEventListener("input", calcular)
vacacionesa.addEventListener("input",  calcular )

function reset(){
    horasa.value = 0
    pedidosa.value = 0
    bara.value = 0
    vacacionesa.value = 0
    resultado.textContent = "Total: 0.00€"
}

function limpiarValor(input){
    if (input.value == "0"){a
        input.value = "";
    }
}


function render(a) {
    
    if( nominas.length < 7){
    lista = ""
    for (let i = 0; i < a.length; i++) {
        lista += `<li>${a[i]} €</li>`
    }
    historial.innerHTML = lista
}
    console.log(nominas)
}

guardar.addEventListener("click", function() {
    if (total && nominas.length < 6){
        nominas.unshift(total)
    }else if (total && nominas.length === 6){
        nominas.unshift(total)
        nominas.pop() 
        
    }
    total = ""
    render(nominas)
    reset()
})


borrar.addEventListener("click", function() {
    nominas.shift()
    historial.innerHTML = lista
    render(nominas)
    console.log(nominas)
})

reiniciar.addEventListener("click", function() {
    nominas = []
    historial.innerHTML = ""
    console.log(nominas)
})

