import { Component } from "react";
import { Card, Col } from "react-bootstrap";


class SingleBook extends Component {
    state = {
        active: false,
    };
    setTrue = () => {
        this.setState({
            active: true,
            });
    }
    setFalse = () => {
        this.setState({
            active: false,
            });
    }
    render() {
    return (
        <Col xs={6} sm={6} md={4} lg={3} xl={2} key={this.props.currentBook.asin} >
        <Card className={this.state.active ? "my-2 red" : "my-2"}   onClick={this.state.active? this.setFalse : this.setTrue}>
            <Card.Img className="card-image"  variant="top" src={this.props.currentBook.img} />
            {/* <Card.Body className="card-body">
                <Card.Title className="card-title d-flex align-items-center font-italic">{this.props.currentBook.title}</Card.Title>
                <Card.Text>
                {this.props.currentBook.cattegory}
                </Card.Text>
            </Card.Body> */}
            <Card.Footer className="card-footer">
                <small className="badge badge-success ">${this.props.currentBook.price}</small>
            </Card.Footer>
            <small className={this.state.active ? "badge" : "d-none"}><i class="bi bi-check-lg"></i></small>

        </Card>
    </Col>
    )
}
}
export default SingleBook;