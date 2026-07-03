
import './App.css'
import Botao from './components/Botao'
import Header from './components/Header'
import Hero from './components/Hero'
import { linksNav } from './data/conteudo'
import TituloSecao from './components/TituloSecao'
import CardProduto from './components/CardProduto'
import Depoimento from './components/Depoimento'
function App() {
  

  return (
    <>
    <Header links={linksNav}/>
    <Hero titulo="Café especial, torrado com cuidado" subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor." imagem="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?b=1&s=612x612&w=0&k=20&c=lAGMnmHWAE_XOwaWvAFJplZVt9fn_OzrDYH46FPGgWg="/>
    <TituloSecao subtitulo='dygadgahjudgahdga' titulo='udhauidhaiudhaui' descricao="dhajdhajkdnadadadadadadadadadadadaddadadadadadadadadadada"/>
    <CardProduto nome='Cafe' descricao="café bom de mais" preco="19.90" imagem='https://media.istockphoto.com/id/2025692222/pt/foto/espresso-coffee-glass-cup-on-a-brown-background.jpg?b=1&s=612x612&w=0&k=20&c=fv7TXggdpcIzG3oDvooR5pdDNoc3HASd5NUBC2pxgh0='/>
    <Depoimento texto="dabdadhaidha duiaohdiouahda duiadiha" autor={"dghaiudhaiud"} cargo={"bdajdbajik"}/>
    </>
  )
}

export default App
