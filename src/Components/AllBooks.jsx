import { useState } from "react";
import fantasy from "../Data/fantasy.json";
import { Row, Container, InputGroup, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import ButtonsGenre from "./ButtonsGenre";

const AllBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState(fantasy);
  const [search, setSearch] = useState(" ");
  const [searchedtitles, setSearchedtitles] = useState(false);
  const [currentBook, setCurrentBook] = useState("");
  const [activeState, setActiveState] = useState(false);

  const selectGenre = (newGenreOption) => {
    setSelectedCategory(newGenreOption);
    searchedtitles("");
  };
  const selectBook = (newSelectOption) => {
    setCurrentBook(newSelectOption);
  };
  const activeBook = (state) => {
    setActiveState(!state);
  };

  return (
    <Container fluid>
      <ButtonsGenre selectedGenre={selectGenre}></ButtonsGenre>

      <div className="d-flex justify-content-center mt-0 pt-0">
        <Col xs={12} md={6}>
          <Row>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                aria-label="Search"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Write a title of a searched book"
                value={search}
                onChange={(e) => {
                  const results = selectedCategory.filter((searchBook) => {
                    return searchBook.title
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  });
                  setSearch(e.target.value);
                  setSearchedtitles(results);
                }}
              />
            </InputGroup>
          </Row>
        </Col>
      </div>
      <Container fluid>
        <Row>
          <Col xs={6} md={9} className="d-flex flex-wrap ">
            {searchedtitles
              ? searchedtitles.map((singleBook) => {
                  return (
                    <SingleBook
                      key={singleBook.asin}
                      currentBook={singleBook}
                      selectBookFunc={selectBook}
                      activeBook={activeBook}
                      activeState={activeState}
                      selectedBook={currentBook}
                    ></SingleBook>
                  );
                })
              : selectedCategory.map((singleBook) => {
                  return (
                    <SingleBook
                      key={singleBook.asin}
                      currentBook={singleBook}
                      selectBookFunc={selectBook}
                      activeBook={activeBook}
                      activeState={activeState}
                      selectedBook={currentBook}
                    ></SingleBook>
                  );
                })}
          </Col>
          {activeState ? (
            <Col xs={6} md={3}>
              <div className="for-sticky">
                <h5>{currentBook.title}</h5>
                <CommentArea theBook={currentBook}></CommentArea>
                {/* <AddComment theBook={currentBook}></AddComment> */}
              </div>
            </Col>
          ) : (
            <Col xs={6} md={3}>
              <h3 className="text-info">Click on a Book to See comments</h3>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default AllBooks;
