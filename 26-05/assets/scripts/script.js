// getElementById() captura o elemento via id
const btn = document.getElementById("btn")
// querySelector() captura um elemento por tag, classe ou id
const div = document.querySelector("div")
const h1 = document.querySelector("h1")
// querySelectorAll, captura todos os elemtos daquela tag ou classe
// ele armazena dentro de um array
const h2 = document.querySelectorAll("h2")

const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const link = document.querySelector("a")

// para dar função ao botao, adicionamos um evento a ele, eventos podem ser de varios tipos
// mas vamos usar o de clique
// addEventListener adiciona um evento ao elemento, e precisamos passar dois parametros:
// o primeiro é qual ação vai disparar esse eventom sempre entre aspas,
// e o segundo é qual a função o evento vai disparar
btn.addEventListener("click", () => {
    if(div.style.backgroundColor = "black"){
        div.style.backgroundColor = "white"
        h1.style.color = "black"
    }else{
        div.style.color = "black"
        h1.style.color = "white"
    }
})

btn2.addEventListener("click", () => {
    // for
    /* for(let i = 0; i<h2.length; i++){
        h2[i].style.color = "yellow"
    } */

    // forEach
    /* h2.forEach((h2) =>{
    h2.style.color = "red"
    })
 */
    // for of 
    for (let titulo of h2){
        titulo.style.color = "blue"
    }
})

btn3.addEventListener("click", () => {
    // elemento.textContent serve para capturar ou alterar o texto puro de um elemento
    /* h1.textContent = "Boa, funcionou" */

    if(h1.innerHTML == " este texto vai ser <span>trocado</span>"){
        h1.innerHTML = "O texto <span>mudou</span>"
    }else{
        h1.innerHTML = " este texto vai ser <span>trocado</span>"
    }
})

btn4.addEventListener("click", () => {
    // getAttribute pega o valor de algum atributo
    // setAtribute(atributo, novoValor)
    link.setAttribute("href", "https://canva.com")
    link.textContent = "Canva"
})