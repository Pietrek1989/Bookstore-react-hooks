import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Error from "./Error";

const CommentsList = (props) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteComment = async () => {
    try {
      console.log("I'm about to delete this:", props.currentComment._ids);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.currentComment._id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("comment deleted!");
        props.load();
      } else {
        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error);
    }
  };

  return (
    <div className="text-center ">
      <Card.Text className="mb-0">
        Comment: {props.currentComment.comment}
      </Card.Text>
      <Card.Text className="mb-0 py-1">
        Rating:
        {new Array(props.currentComment.rate).fill(null).map(() => (
          <i className="fas fa-star" />
        ))}
      </Card.Text>

      <Card.Text className="text-center">
        <Button
          variant="danger"
          size="sm"
          className="mt-0 mb-3"
          type="submit"
          onClick={() => {
            deleteComment();
          }}
        >
          DELETE
        </Button>
        {isError && <Error errorMessage={errorMessage}></Error>}
      </Card.Text>
    </div>
  );
};
export default CommentsList;
