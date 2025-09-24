

const Header = (props) => {


    const headerStyle={
        backgound: '#bebebe',
        padding:'20px',
        textAlign:'center',
        borderBottom:'2px solid #696969',
    }

    return(
        <header style={headerStyle}>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;