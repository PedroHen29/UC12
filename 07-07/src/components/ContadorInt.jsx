import React, { createElement, useEffect, useState } from 'react'

function ContadorInt() {
    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState("")
    const [temaEscuro, setTemaEscuro] = useState(false)
    useEffect(() => {
        if(contador == 10){
            alert("chegou a 10")
        }else if(contador == 20){
            document.title = "chegou a 20"
        }else if(contador == 30){
            const mensagem = document.createElement("h1")
            const corpo = document.body
            mensagem.textContent = "o contador chegou a 30"
            corpo.appendChild(mensagem)   
            
        }

        if(!nome.length == 0){
            document.title = nome
            alert(`Olá ${nome}, seja bem vindo(a)!`)
        }
        
        
        
        document.body.classList.toggle("tema-escuro", temaEscuro)
        if(document.body.classList == "tema-escuro"){
            document.title = "Escuro"
        }else if(document.body.classList == "tema-claro"){
            document.title = "Claro"
        }
        

        
    }, [contador, nome, temaEscuro])
  return (
    <>
    <h1>{contador}</h1>
    <button onClick={() => setContador(contador +1)}>Clique aqui</button>
    <hr />
    <input id='nome-input' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
    <hr />
    <button id='btn-tema' onClick={() => setTemaEscuro(!temaEscuro)}>Trocar Tema</button>
    </>
  )
}

export default ContadorInt