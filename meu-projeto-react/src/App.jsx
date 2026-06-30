import { useState } from 'react'

import './App.css'
import Botao from './components/Botao'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  function mostarMensagem(){
    alert('Terceiro botao')
  }
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <Botao background={'btn-primario'} text={"clique aqui"} func={() => {alert("Primeiro botao")}}/>
        <Botao background={'btn-secundario'} text={'sobre nós'} func={() => {alert("Segundo botao")}}/>
        <Botao background={'btn-desativado'} text={'saiba mais'} func={mostarMensagem}/>
        <Card nome={'btn-um'}/>
        
      </div>
      
    </>
  )
}

export default App
