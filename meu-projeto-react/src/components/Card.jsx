import React from 'react'


function Card({nome,foto, titulo, paragrafo, texto}) {
  return (
   <div className={nome}>
    <h1>{titulo} </h1>
    <img src={foto} alt=""/>
    <p>{paragrafo}</p>
    <button className='btn-card'>{texto}</button>
  </div>
  )
}

export default Card