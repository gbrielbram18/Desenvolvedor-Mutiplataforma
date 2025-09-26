import "./ImgCard.css"


export default function ImgCard(props) {
    console.log(props)
  return (
    <div className='image-card'>
        <img src={props.imagem} alt={props.caption || 'Imagem simples'}/>
        <p className="image-card-caption">
            {props.caption}
        </p>

        <a href={props.link} target="_black">{props.link}</a>
    </div>



  )
}

