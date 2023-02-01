import { Component } from "react";
import { Row, Container, InputGroup, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";





  

class BookList extends Component {
    state = {
        search: " ",
        searchedtitles: this.props.genre,
        
    };
    render() {
        return (
            <Container fluid>

            <Row>
            <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          value={this.state.search}
          onChange={(e) => {
            const results = this.props.genre.filter(book => {
                if (e.target.value === "") return this.props.genre
                return book.title.toLowerCase().includes(e.target.value.toLowerCase())
                })
            this.setState({
                search: e.target.value,
                searchedtitles: results
            })

          }}
        />
      </InputGroup>
            {this.state.searchedtitles.map((singleBook) => {
                return (
                    <SingleBook currentBook={singleBook}></SingleBook>
                )
            })
        }

        
            
          </Row>
          </Container>
        );
      
    }
}

export default BookList;