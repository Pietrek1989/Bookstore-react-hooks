import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
    state = {
        active: false,
    };
    setTrue = () => {
        this.setState({
            active: true,
            });
    }
    // setFalse = () => {
    //     this.setState({
    //         active: false,
    //         });
    // }
    render() {
    return (
        <Col xs={6} sm={6} md={4} lg={3} xl={2} >
        <Card className={this.state.active ? "my-2 red" : "my-2"}   onClick={() => this.setState({ active: !this.state.active})}>
        <small className={this.state.active ? "badge" : "d-none"}><i className="bi bi-check-lg"></i></small>
        {/* onClick={() => this.setState({ active: !this.state.active})}> */}
            <Card.Img className="card-image"  variant="top" src={this.props.currentBook.img} />
    
            {this.state.active && ( // 
        <Card.Body className="card-body" onClick={(e) => e.stopPropagation()}>
            <CommentArea theBook={this.props.currentBook} ></CommentArea>
            <AddComment theBook={this.props.currentBook}></AddComment>
        </Card.Body>

    )}


            <Card.Footer className="card-footer">
                <small className="badge badge-success ">${this.props.currentBook.price}</small>
            </Card.Footer>


        </Card>
    </Col>
    )
}
}
export default SingleBook;