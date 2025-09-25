import "./ImgCard.css"
import img1  from "../../src/assets/img-card1.jpg"

export default function ImgCard(props) {
    console.log(props)
  return (
    <div className='img-card'>
        <img src={img1} alt={props.caption || 'Imagem simples'}/>
        <p className="image-card-caption">
            {props.caption}
        </p>
    </div>
  )
}
