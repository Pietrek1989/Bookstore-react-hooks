import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import fantasy from "../Data/fantasy.json";
import history from "../Data/history.json";
import horror from "../Data/horror.json";
import sciFi from "../Data/scifi.json";
import romance from "../Data/romance.json";

class ButtonsGenre extends Component {
  render() {
    return (
      <Row className="justify-content-center mb-3 row-buttons">
        <Button
          onClick={() => {
            this.props.selectedGenre(fantasy);
          }}
          variant="info"
          id="first-button"
        >
          {" "}
          Fantasy
        </Button>

        <Button
          onClick={() => {
            this.props.selectedGenre(horror);
          }}
          variant="info"
        >
          {" "}
          Horror
        </Button>

        <Button
          onClick={() => {
            this.props.selectedGenre(romance);
          }}
          variant="info"
        >
          {" "}
          Romance
        </Button>

        <Button
          onClick={() => {
            this.props.selectedGenre(sciFi);
          }}
          variant="info"
        >
          {" "}
          SciFi
        </Button>

        <Button
          onClick={() => {
            this.props.selectedGenre(history);
          }}
          variant="info"
          id="last-button"
        >
          {" "}
          History
        </Button>
      </Row>
    );
  }
}

export default ButtonsGenre;
