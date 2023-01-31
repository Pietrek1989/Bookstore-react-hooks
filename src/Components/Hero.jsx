import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = (props) => {
    return (
<Jumbotron fluid id="hero-cover" >
        <Container>
            <h1 className=" p-3 mb-5  name">WELCOME TO OUR {props.name}</h1>
            <h5 className=" p-3 mb-5  name">We hope you will enjoy your read!</h5>
        </Container>
</Jumbotron>
    )
}
export default Hero;