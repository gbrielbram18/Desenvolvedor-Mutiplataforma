import  "./App.css"
import Header from "../componentes/Header"
import Banner from "../componentes/banner"
import ImgCard from "../componentes/ImgCard"
import Button from "../componentes/Buttom"
import img1  from "../src/assets/img-card1.jpg"
import img2  from "../src/assets/img-card2.jpg"
import img3  from "../src/assets/img-card3.jpg"

function App() {

  const handleClick =()=>{
    alert("teste")
  }

  return (
    <main className ="container">
      <Header title="Meu site" />
      <Banner>
        <h1>Bem Vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>
      

      <ImgCard 
      caption="Imagen interessante" 
      imagem={img1}
      link ="https://www.youtube.com/@orochidois1692"
      />

      <ImgCard 
      caption="Popeto" 
      imagem={img2}
      link ="https://www.youtube.com/"
      />

      <ImgCard 
      caption="Caio do futebol" 
      imagem={img3}
      link ="https://www.youtube.com/@alanzoka/videos"
      />




      <Button text="Clique aqui" onclick ={handleClick}/>
    </main>
  )
}

export default App; 
