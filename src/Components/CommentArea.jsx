import { useEffect, useState } from "react";
import CommentsList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          props.theBook.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzU2OTA2NjgsImV4cCI6MTY3NjkwMDI2OH0.-AeKZaaujuikJR8lWtgBYVNVji6Wqo1OEgwI9GrBNVU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setComments(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);

        // eslint-disable-next-line no-throw-literal
        throw response.status + " " + response.statusText;
      }
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      setIsError(true);
      setErrorMessage(error);
    }
  };

  const afterLoad = () => {
    fetchComments();
  };
  useEffect(() => {
    fetchComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.theBook]);

  return (
    <>
      {isLoading && <Loading></Loading>}
      {isError && <Error errorMessage={errorMessage}></Error>}
      {comments.map((singleComment) => {
        return (
          <CommentsList
            key={singleComment.asin}
            currentComment={singleComment}
            bookName={props.theBook}
            load={afterLoad}
          />
        );
      })}
      <AddComment theBook={props.theBook} load={afterLoad}></AddComment>
      {/* <Button  variant="primary">Add new Comment</Button> */}
      {/* <AddComment></AddComment> */}
    </>
  );
};

export default CommentArea;
