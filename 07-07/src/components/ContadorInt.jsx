import React, { createElement, useEffect, useState } from 'react'

function ContadorInt() {
    const [contador, setContador] = useState(0)
    const [campoTexto, setTexto] = useState("")
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
        
    }, [contador, campoTexto])
  return (
    <>
    <h1>{contador}</h1>
    <button onClick={() => setContador(contador +1)}>Clique aqui</button>
    <hr />
    <input id='meuInput' type="text" />
    </>
  )
}

export default ContadorInt