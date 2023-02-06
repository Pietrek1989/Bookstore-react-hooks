import { Component } from "react";
import CommentsList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
    errorMessage: "",
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.theBook.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
        });
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

  componentDidMount() {
    this.fetchComments(); //
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.theBook !== this.props.theBook) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loading></Loading>}
        {this.state.isError && (
          <Error errorMessage={this.state.errorMessage}></Error>
        )}
        {this.state.comments.map((singleComment) => {
          return (
            <CommentsList
              currentComment={singleComment}
              bookName={this.props.theBook}
              key={singleComment.elementId}
            ></CommentsList>
          );
        })}
        {/* <Button  variant="primary">Add new Comment</Button> */}
        {/* <AddComment></AddComment> */}
      </>
    );
  }
}

export default CommentArea;
