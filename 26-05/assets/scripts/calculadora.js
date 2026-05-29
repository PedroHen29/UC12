// Numeros
const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")

// Operações
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const divisao = document.getElementById("divisao")
const vezes = document.getElementById("vezes")
const igual = document.getElementById("igual")
const limpar = document.getElementById("limpar")

//Visor
const h1 = document.querySelector("h1")

btn.addEventListener("click", () =>{
    h1.textContent = "0"
})