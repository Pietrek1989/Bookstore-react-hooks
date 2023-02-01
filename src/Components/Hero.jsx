import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Hero = (props) => {
    return (
<Jumbotron fluid id="hero-cover" >
        <Container>
            <h1 className=" p-3 mb-5  name">🖐WELCOME TO OUR {props.name}</h1>
            <h5 className=" p-3 mb-5  name">Discover a world of endless reading possibilities with our online ebook store! <br></br>With over a million titles to choose from, you'll never run out of options for your next great read.<br></br></h5>
        </Container>
</Jumbotron>
    )
}
export default Hero;