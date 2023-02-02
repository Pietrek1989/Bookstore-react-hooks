import { Component } from "react";
import { Row, Container, InputGroup, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";





  

class BookList extends Component {
    state = {
        search: " ",
        searchedtitles: this.props.genre,
        
    };
    render() {
        return (
            <Container fluid>
                <div className="d-flex justify-content-center">
                <Col xs={12} md={6}>

            <Row>
            <InputGroup  size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fas fa-search"></i></InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Write a title of a searched book"
          value={this.state.search}
          onChange={(e) => {
            const results = this.props.genre.filter(searchBook => {
                return searchBook.title.toLowerCase().includes(e.target.value.toLowerCase())
                })
            this.setState({
                search: e.target.value,
                searchedtitles: results
            })

          }}
        />
        
      </InputGroup>
      </Row>
      </Col>
      </div>
      <Container fluid>
        <Row>
            {this.state.searchedtitles.map((singleBook) => {
                return (
                    <SingleBook currentBook={singleBook} key={singleBook.asin}></SingleBook>
                )
            })
        }

        
            
          </Row>
          </Container>
          </Container>
        );
      
    }
}

export default BookList;