import { Component } from "react";
import fantasy from "../Data/fantasy.json";
import { Row, Container, InputGroup, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import AddComment from "./AddComment";
import CommentArea from "./CommentArea";
import ButtonsGenre from "./ButtonsGenre";

class AllBooks extends Component {
  state = {
    selectedCategory: fantasy,
    search: " ",
    searchedtitles: false,
    currentBook: "",
    activeState: false,
  };

  selectGenre = (newGenreOption) => {
    this.setState({
      selectedCategory: newGenreOption,
      searchedtitles: "",
    });
  };
  selectBook = (newSelectOption) => {
    this.setState({
      currentBook: newSelectOption,
    });
  };
  activeBook = (state) => {
    this.setState({
      activeState: !state,
    });
  };

  render() {
    return (
      <Container fluid>
        <ButtonsGenre selectedGenre={this.selectGenre}></ButtonsGenre>

        <div className="d-flex justify-content-center">
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
                  value={this.state.search}
                  onChange={(e) => {
                    const results = this.state.selectedCategory.filter(
                      (searchBook) => {
                        return searchBook.title
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase());
                      }
                    );
                    this.setState({
                      search: e.target.value,
                      searchedtitles: results,
                    });
                  }}
                />
              </InputGroup>
            </Row>
          </Col>
        </div>
        <Container fluid>
          <Row>
            <Col xs={6} md={9} className="d-flex flex-wrap ">
              {this.state.searchedtitles
                ? this.state.searchedtitles.map((singleBook) => {
                    return (
                      <SingleBook
                        key={singleBook.asin}
                        currentBook={singleBook}
                        selectBookFunc={this.selectBook}
                        activeBook={this.activeBook}
                        activeState={this.activeState}
                      ></SingleBook>
                    );
                  })
                : this.state.selectedCategory.map((singleBook) => {
                    return (
                      <SingleBook
                        key={singleBook.asin}
                        currentBook={singleBook}
                        selectBookFunc={this.selectBook}
                        activeBook={this.activeBook}
                      ></SingleBook>
                    );
                  })}
            </Col>
            {this.state.activeState ? (
              <Col xs={6} md={3}>
                <div className="for-sticky">
                  <h5>{this.state.currentBook.title}</h5>
                  <CommentArea theBook={this.state.currentBook}></CommentArea>
                  <AddComment theBook={this.state.currentBook}></AddComment>
                </div>
              </Col>
            ) : (
              <Col xs={6} md={4}>
                <h3 className="text-info">Click on a Book to See comments</h3>
              </Col>
            )}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AllBooks;
