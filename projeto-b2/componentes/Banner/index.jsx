const Banner =(props) =>{

    /*
    
    o children permite que você passe e renderize 
    o conteúdo dinâmico no componente de um React.

    */



    return(
        <main>
            <section>
                {props.children}
            </section>
        </main>
    )

    
}

export default Banner;