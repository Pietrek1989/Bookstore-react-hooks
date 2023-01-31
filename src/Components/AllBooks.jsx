import { Component } from "react";
import books from "../Data/fantasy.json"
import { Row, Card, Container, Col } from "react-bootstrap";


class AllBooks extends Component {
    render() {
        return (
            <Container>
                <Row>
            {books.map((singleBook) => {
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