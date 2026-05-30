const numeros = document.querySelectorAll(".numero")
const visor = document.getElementById("h1")
const operacoes = document.querySelectorAll(".operacao")

let primeiroNumero = ""
let segundoNumero = ""
let operador = ""
let numeroVazio = false
numeros.forEach(botao => {
    botao.addEventListener("click", ()=>{
        if(!numeroVazio){
            primeiroNumero += botao.textContent
            visor.textContent = primeiroNumero
        }else{
            segundoNumero += botao.textContent;
            visor.textContent = segundoNumero;
        }
    })
})

document.getElementById("mais").addEventListener("click", () =>{
    operador = "+"
    numeroVazio = true
})

document.getElementById("menos").addEventListener("click", () => {
    operador = "-"
    numeroVazio = true
}) 

document.getElementById("vezes").addEventListener("click", () => {
    operador = "*"
    numeroVazio = true
})

document.getElementById("divisao").addEventListener("click", () => {
    operador = "/"
    numeroVazio = true
})

document.getElementById("igual").addEventListener("click", () => {

    const num1 = Number(primeiroNumero)
    const num2 = Number(segundoNumero)
    let resultado;
    switch(operador){
        case "+":
            resultado = num1 + num2
            break
        case "-":
            resultado = num1 - num2
            break
        case "*":
            resultado = num1*num2
            break
        case "/":
            if(num2 == 0){
                alert("Não pode dividir um numero por 0 ")
                
            }else{
                resultado = num1/num2
            }
            break

            default:
                resultado = "Erro"
                
}

    visor.textContent = resultado

    primeiroNumero = resultado.toString()
    segundoNumero = ""
    operador = ""
    numeroVazio = false
})

document.getElementById("limpar").addEventListener("click", () => {
    primeiroNumero = ""
    segundoNumero = ""
    operador = ""
    numeroVazio = false

    visor.textContent = "0"
})