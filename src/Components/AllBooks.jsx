import { Component } from "react";
import fantasy from "../Data/fantasy.json"
import history from "../Data/history.json"
import horror from "../Data/horror.json"
import sciFi from "../Data/scifi.json"
import romance from "../Data/romance.json"
import { Row, Card, Container, Col, Button } from "react-bootstrap";


class AllBooks extends Component {
    state = {
        selectedCategory: fantasy,
    };
    render() {
        return (
            <Container>
                <Row className="justify-content-center mb-3 row-buttons">
                    
                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: fantasy,
                        });
                    }}
                    variant="info"
                    > Fantasy 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: horror,
                        });
                    }}
                    variant="info"
                    > Horror 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: romance,
                        });
                    }}
                    variant="info"
                    > Romance 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: sciFi,
                        });
                    }}
                    variant="info"
                    > SciFi 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: history,
                        });
                    }}
                    variant="info"
                    > History 
                    </Button>

                </Row>
            <Row>

            {this.state.selectedCategory.map((singleBook) => {
                return (
            <Col xs={6} sm={6} md={4} lg={3} xl={3} key={singleBook.asin} >
                <Card className="mb-2">
                    <Card.Img className="card-image" variant="top" src={singleBook.img} />
                    <Card.Body>
                        <Card.Title className="card-title d-flex align-items-center">{singleBook.title}</Card.Title>
                        <Card.Text>
                        {singleBook.cattegory}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">${singleBook.price}</small>
                    </Card.Footer>
                </Card>
            </Col>
                )
            })
        }
            
          </Row>
          </Container>
        );
      
    }
}

export default AllBooks;