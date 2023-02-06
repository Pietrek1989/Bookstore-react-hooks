import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Error from "./Error";

class AddComment extends Component {
  state = {
    commentState: {
      rate: "1",
      comment: "",
      elementId: this.props.theBook.asin,
    },
    isError: false,
    errorMessage: "",
  };
  sendComment = async () => {
    try {
      console.log("I'm about to send this:", this.state.commentState);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentState),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Comment saved!");
      } else {
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isError: true,
        errorMessage: error,
      });
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comment"
            value={this.state.commentState.comment}
            onChange={(e) => {
              this.setState({
                commentState: {
                  ...this.state.commentState,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rating"
            value={this.state.commentState.rate}
            onChange={(e) => {
              this.setState({
                commentState: {
                  ...this.state.commentState,
                  rate: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            // this.setState({
            //     active: false,
            // })
            this.sendComment();
          }}
        >
          Submit
        </Button>
        {this.state.isError && (
          <Error errorMessage={this.state.errorMessage}></Error>
        )}
      </Form>
    );
  }
}

export default AddComment;
