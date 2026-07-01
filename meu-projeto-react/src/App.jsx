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
        <Botao text={'Clique'}/>
        <div className='cards'>
        <Card nome={'card-um'} titulo={'Card-1'} foto={"https://ufsb.edu.br/governanca/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"} paragrafo={'dhjajkodbajkidhajidnadjkihauidabndjkahduiahdkajjdga'} texto={'Clique'}/>
        <Card nome={'card-dois'} titulo={'Card-2'} foto={"https://static.vecteezy.com/ti/fotos-gratis/t2/68964462-uma-vibrante-beija-flor-dentro-voo-alimentando-a-partir-de-uma-brilhante-vermelho-flor-agua-gotas-adicionar-para-a-imagem-foto.jpg"} paragrafo={'fijsdiofnasdklahasdhalkjhujiahdklahjfoiaushfalkfhjauiofhg'} texto={'Clique aqui'}/>
        <Card nome={'card-tres'} titulo={'Card-3'} foto={'https://img.magnific.com/fotos-gratis/honey-bee-pollinating-a-bright-yellow-dahlia-flower-in-a-garden_1308-189351.jpg?semt=ais_hybrid&w=740&q=80'} paragrafo={'kjfpgjbskfbvagdfadafgposuiagfjamdpoaahujanalçfgksfpoysauigbsklj'} texto={'CLIQUE AQUI AGORA!!'}/>
        </div>
      </div>
      
    </>
  )
}

export default App
