import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = (props) => {
    return (
<Jumbotron fluid id="hero-cover" >
        <Container>
            <h1 className=" p-3 mb-5  name">🖐WELCOME TO OUR {props.name}</h1>
            <h5 className=" p-3 mb-5  name para">Download books instantly to your device and enjoy reading on the go, without any hassle.<br></br>Sign up today and start your journey into a world of endless stories and endless adventures..</h5>
        </Container>
</Jumbotron>
    )
}
export default Hero;