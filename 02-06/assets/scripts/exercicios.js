// EXERCICIO 1
const titulo = document.getElementById("titulo")
const btnMudarTitulo = document.getElementById("mudarTitulo")

btnMudarTitulo.addEventListener("click", () =>{
    titulo.textContent = "Funcionou"
})

// EXERCICIO 2
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
    box.classList.toggle("ativo");
});

// EXERCICIO 3
const lista = document.getElementById("lista")
const adicionar = document.getElementById("adicionar")

adicionar.addEventListener("click", () =>{
    const item = document.createElement("li")
    item.textContent = "cimento"
    lista.appendChild(item)
})

// EXERCICIO 4
const container = document.querySelector(".container")
const remover = document.getElementById("remover")

remover.addEventListener("click", () => {
    container.remove()
})

// EXERCICIO 5
const input = document.getElementById("input")
const textos = document.querySelector(".texto")

input.addEventListener("change", () => {
    textos.textContent = input.value
})
