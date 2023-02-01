import { Component } from "react";
import fantasy from "../Data/fantasy.json"
import history from "../Data/history.json"
import horror from "../Data/horror.json"
import sciFi from "../Data/scifi.json"
import romance from "../Data/romance.json"
import { Row, Container, Button, InputGroup, Form } from "react-bootstrap";
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
                        });
                    }}
                    variant="info" id="first-button"
                    > Fantasy 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: horror,
                        });
                    }}
                    variant="info"
                    > Horror 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: romance,
                        });
                    }}
                    variant="info"
                    > Romance 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: sciFi,
                        });
                    }}
                    variant="info"
                    > SciFi 
                    </Button>

                    <Button onClick={() => {
                    this.setState({
                        selectedCategory: history,
                        });
                    }}
                    variant="info"  id="last-button"
                    > History 
                    </Button>

                </Row>
                <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
          value={this.state.search}
          onChange={(e) => {
            const results = this.state.selectedCategory.filter(book => {
                if (e.target.value === "") return this.state.selectedCategory
                return book.title.toLowerCase().includes(e.target.value.toLowerCase())
                })
            this.setState({
                search: e.target.value,
                searchedtitles: results
            })

          }}
        />
      </InputGroup>
            <Row>

            {this.state.searchedtitles ? this.state.searchedtitles.map((singleBook) => {
                return (

                    <SingleBook currentBook={singleBook}></SingleBook>
                )
            })
             : this.state.selectedCategory.map((singleBook) => {
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

export default AllBooks;