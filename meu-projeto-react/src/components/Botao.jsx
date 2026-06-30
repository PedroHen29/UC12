import React from 'react'

// assim criamos um componente reutilizavel
function Botao({text, background, func}) {
  return (
    // em JSX não existe 'classe' e sim 'className'
    <button onClick={func} className={background}>{text}</button>
  )
}

export default Botao