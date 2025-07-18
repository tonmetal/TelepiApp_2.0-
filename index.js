import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js"
import { getDatabase,
        ref,
        push,
        onValue,
        remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-d1426-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "nomina")


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

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const  nomiValores = snapshot.val()
        const nominas = Object.values(nomiValores)
        render(nominas)
    } 

})


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

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
    if (input.value === "0") input.value = "";
    })
})


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
        push(referenceInDB, total)
    }else if (total && nominas.length === 6){
        nominas.unshift(total)
        nominas.pop() 
        push(referenceInDB, total)
    }
    
    total = ""
    render(nominas)
    reset()
})


borrar.addEventListener("click", function() {

    const confirmado = confirm("¿Estás seguro de que quieres continuar?")

    if (confirmado) {
    nominas.shift()
    historial.innerHTML = lista
    render(nominas)
    reset()
    console.log(nominas)
    } else {
    return
    }


})

reiniciar.addEventListener("click", function() {

    const confirmado = confirm("¿Estás seguro de que quieres continuar?")

    if (confirmado) {
    remove(referenceInDB)
    nominas = []
    historial.innerHTML = ""
    console.log(nominas)
    reset()
    } else {
    return
    }

})

