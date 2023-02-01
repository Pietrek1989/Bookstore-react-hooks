import { Component } from "react";
import fantasy from "../Data/fantasy.json"
import history from "../Data/history.json"
import horror from "../Data/horror.json"
import sciFi from "../Data/scifi.json"
import romance from "../Data/romance.json"
import { Row, Container, Button, InputGroup, Form, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";






  

class AllBooks extends Component {
    state = {
        selectedCategory: fantasy,
        search: " ",
        searchedtitles: false,
    };

    render() {
        return (
            <Container fluid>

                <Row className="justify-content-center mb-3 row-buttons">
                    
                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: fantasy,
                        searchedtitles: "",
                    });
                    }}
                    variant="info" id="first-button"
                    > Fantasy 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: horror,
                        searchedtitles: "",
                    });
                    }}
                    variant="info"
                    > Horror 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: romance,
                        searchedtitles: "",
                    });
                    }}
                    variant="info"
                    > Romance 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: sciFi,
                        searchedtitles: "",
                    });
                    }}
                    variant="info"
                    > SciFi 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: history,
                        searchedtitles: "",
                    });
                    }}
                    variant="info"  id="last-button"
                    > History 
                    </Button>



                </Row>
                <div className="d-flex justify-content-center">
                <Col xs={12} md={6}>
                <Row>
                <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"><i className="fas fa-search"></i></InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Write a title of a searched book"
          value={this.state.search}
          onChange={(e) => {
            const results = this.state.selectedCategory.filter(searchBook => {
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

            {this.state.searchedtitles ? this.state.searchedtitles.map((singleBook) => {
                return (

                    <SingleBook key={singleBook.asin} currentBook={singleBook}></SingleBook>
                )
        
            })
             : this.state.selectedCategory.map((singleBook) => {
                return (

                    <SingleBook key={singleBook.asin} currentBook={singleBook}></SingleBook>

                )
            })
            
        }     
            
          </Row>
          </Container>
          </Container>
        );
      
    }
}

export default AllBooks;