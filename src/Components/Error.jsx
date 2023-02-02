import { Alert } from "react-bootstrap";

const Error = (props) => {
    return (
        <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {props.errorMessage}
        </p>
      </Alert>

    )
    
}

export default Error;