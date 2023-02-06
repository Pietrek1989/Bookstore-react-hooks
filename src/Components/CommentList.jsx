import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Error from "./Error";

class CommentsList extends Component {
  state = {
    isError: false,
    errorMessage: "",
  };
  deleteComment = async () => {
    try {
      console.log("I'm about to delete this:", this.props.currentComment._ids);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.currentComment._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQyMDU0OTcsImV4cCI6MTY3NTQxNTA5N30.46ZlnsSty_g9npWTXjIqWXh52mpZtcMP9R3BRtZARWw",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("comment deleted!");
      } else {
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
        errorMessage: error,
      });
    }
  };

  render() {
    return (
      <div className="text-center ">
        <Card.Text className="mb-0">
          Comment: {this.props.currentComment.comment}
        </Card.Text>
        <Card.Text className="mb-0 py-1">
          Rating:
          {new Array(this.props.currentComment.rate).fill(null).map(() => (
            <i class="fas fa-star" />
          ))}
        </Card.Text>

        <Card.Text className="text-center">
          <Button
            variant="danger"
            size="sm"
            className="mt-0 mb-3"
            type="submit"
            onClick={() => {
              this.deleteComment();
            }}
          >
            DELETE
          </Button>
          <hr />
          {this.state.isError && (
            <Error errorMessage={this.state.errorMessage}></Error>
          )}
        </Card.Text>
      </div>
    );
  }
}
export default CommentsList;
