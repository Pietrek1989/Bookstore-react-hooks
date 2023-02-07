import { useState } from "react";
import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  const [active, setActive] = useState(false);

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card
        className={active ? "my-2 red" : "my-2"}
        onClick={() => {
          props.selectBookFunc(props.currentBook);
          // setState({ active: !state.active });
          props.activeBook(active);
          setActive(!active);
        }}
      >
        <small className={active ? "badge" : "d-none"}>
          <i className="bi bi-check-lg"></i>
        </small>
        <Card.Img
          className="card-image"
          variant="top"
          src={props.currentBook.img}
        />
        {/* 
          {state.active && ( //
            <Card.Body
              className="card-body"
              onClick={(e) => e.stopPropagation()}
            >
              <CommentArea theBook={props.currentBook}></CommentArea>
              <AddComment theBook={props.currentBook}></AddComment>
            </Card.Body>
          )} */}
        {active && (
          <Card.Footer className="card-footer">
            <small className="badge badge-success mt-3 ">
              ${props.currentBook.price}
            </small>
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};
export default SingleBook;
