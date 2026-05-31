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
            visor.textContent = primeiroNumero+operador+segundoNumero;
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

const img = document.getElementById("dianoite")
const body = document.getElementById("corpo")
const base = document.querySelector(".base")
const mudarTema = document.getElementById("mudarTema")
mudarTema.addEventListener("click", () =>{
    if(img.getAttribute("src") == "assets/images/sun.png"){
        mudarTema.style.background = "#dfdddd"
        mudarTema.style.border = "1px solid gray"
        body.style.backgroundColor = "#e2dfdf"
        base.style.backgroundColor = "#d3d4d6"
        base.style.border = "2px solid gray"
        
        img.setAttribute("src", "assets/images/moon.png")

        numeros.forEach(botao => {
           botao.style.backgroundColor = "#e2dfdf" 
           botao.style.border = "2px solid gray"
        })

        operacoes.forEach(botao =>
            botao.style.backgroundColor = "#615ada"
        )
        
        
    }else{
        img.setAttribute("src", "assets/images/sun.png")
        body.style.backgroundColor = "#000000"
        base.style.backgroundColor = "#363636"
        base.style.border = "2px solid white"

        

        numeros.forEach(botao => {
           botao.style.backgroundColor = "#4F4F4F" 
           botao.style.border = "2px solid white"
        })

        operacoes.forEach(botao =>
            botao.style.backgroundColor = "#EE7621"
        )
    }
})