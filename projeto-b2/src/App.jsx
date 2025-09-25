import Header from "../componentes/Header"
import  "./App.css"
import Banner from "../componentes/banner"
import ImgCard from "../componentes/ImgCard"

function App() {


  return (
    <main className ="container">
      <Header title="Meu site" />
      <Banner>
        <h1>Bem Vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>
      

      <ImgCard alt="Imagen interessante"/>

      <Button text="Clique aqui"/>
    </main>
  )
}

export default App; 
