import React from 'react'

// assim criamos um componente reutilizavel
function Botao({text, background, func}) {
  return (
    // em JSX não existe 'classe' e sim 'className'
    <button className='bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600 transition-all duration-300 cursor-pointer' >{text}</button>
  )
}

export default Botao