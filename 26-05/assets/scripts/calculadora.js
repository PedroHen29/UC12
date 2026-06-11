<<<<<<< HEAD
const numeros = document.querySelectorAll(".numero");
const operacoes = document.querySelectorAll(".operacao");
const visor = document.querySelector("h1")




=======
const numeros = document.querySelectorAll(".numero")
const visor = document.getElementById("h1")
const operacoes = document.querySelectorAll(".operacao")



>>>>>>> 10092f66cf69448e89c34cb59b300bb6ccf557d5
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
<<<<<<< HEAD
                resultado = "Erro"
=======
                alert("Não pode dividir um numero por 0 ")
>>>>>>> 10092f66cf69448e89c34cb59b300bb6ccf557d5
                
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


<<<<<<< HEAD
document.getElementById("C").addEventListener("click", () => {
=======
document.getElementById("limpar").addEventListener("click", () => {
>>>>>>> 10092f66cf69448e89c34cb59b300bb6ccf557d5
    primeiroNumero = ""
    segundoNumero = ""
    operador = ""
    numeroVazio = false

    visor.textContent = "0"
})

<<<<<<< HEAD
const img = document.querySelector(".noite_dia")
const fundo = document.querySelector(".fundo")
const base = document.querySelector(".base")
const resultado = document.querySelector(".resultado")
const limpar = document.getElementById("C")
const mudarTema = document.querySelector(".mudarTema")
document.querySelector(".mudarTema").addEventListener("click", () => {
    if(img.getAttribute("src" ) == "assets/img/sun.png"){
        img.setAttribute("src", "assets/img/moon.png")
        mudarTema.style.backgroundColor = "#e0d8cc"
        fundo.style.backgroundColor = "#e4e0e0"
        base.style.backgroundColor = "#e0d8cc"
        resultado.style.backgroundColor = "#EFEAE2"
        resultado.style.color = "#302b2b"
        document.querySelector(".noite_dia").style.backgroundColor = "#00000000"
        

        numeros.forEach(botao => {
            botao.style.backgroundColor = "white"
            botao.style.color = "#4A3E3D"
        })

        operacoes.forEach(botao => {
            botao.style.backgroundColor = "#aed2d3"
            botao.style.color = "#4A3E3D"
        })

        limpar.style.backgroundColor = "#3786ee"
    }else{
        img.setAttribute("src", "assets/img/sun.png")
        mudarTema.style.backgroundColor = "#2c2e35"
        fundo.style.backgroundColor = "rgb(32, 32, 32)"
        base.style.backgroundColor = "#1E1E24"
        resultado.style.backgroundColor = "#121214"
        resultado.style.color = "#ffffff"
        document.querySelector(".noite_dia").style.backgroundColor = "#00000000"
        

        numeros.forEach(botao => {
            botao.style.backgroundColor = "#2A2A32"
            botao.style.color = "#E0E0E0"
        })

        operacoes.forEach(botao => {
            botao.style.backgroundColor = "#FF9100"
            botao.style.color = "#0c0c0c"
        })
        limpar.style.backgroundColor = "#d64040"
=======
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
>>>>>>> 10092f66cf69448e89c34cb59b300bb6ccf557d5
    }
})