import React from 'react'
import { useState } from "react";
function Contador() {
const [numero, setNumero] = useState(0)
const [curtida, setCurtida] = useState(0)
function aumentar(){
    setNumero(numero +1)
}

function diminuir(){
  setNumero(numero - 1)
}

function reiniciar(){
    setNumero(numero - numero)
}
if(numero <0){
  setNumero(0)
}

function curtir(){
  setCurtida(curtida + 1)
}

const corCurtida = curtida >= 100? 'btn-curtir btn-vermelho' : 'btn-curtir';
  return (
    <>
      <h1>{numero}</h1>
        <button onClick={aumentar}>Mais</button>
        <button onClick={diminuir}>Menos</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <hr /> 
        

        <button className={corCurtida}  onClick={curtir}>❤️: {curtida}</button>
       
    </>
  
  )
}

export default Contador