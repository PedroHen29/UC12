import React from 'react'

function TituloSecao({subtitulo, titulo, descricao}){
    return(
        <div className='mac-w-xl max-auto text-center mb-24'>
            <span className='font-body text-sm uppercase text-musgo font-medium'>
                {subtitulo}
            </span>

            <h2 className='font-display text-4xl font-semibold text-cafe-900 mt-3'>
                {titulo}
            </h2>

            {/** 
              o codigo abaixp so mostra a descricao de ela existir, ou seja, se eu passar descricao para o componente ele mostra, se nao,
              fica sem nada mesmo
            */}
            {
                descricao && (
                    <p className='mt-4 text-cafe-600'>
                        {descricao}
                    </p>
                )
            }
        </div>
    )
}