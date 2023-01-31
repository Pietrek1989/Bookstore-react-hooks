import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = (props) => {
    return (
<Jumbotron fluid id="hero-cover" >
        <Container>
            <h1 className="shadow p-3 mb-5 rounded name">WELCOME TO OUR {props.name}</h1>
        </Container>
</Jumbotron>
    )
}
export default Hero;