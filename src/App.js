import "./App.css";
import { Form, Col, InputGroup, Button, FormControl } from "react-bootstrap";
import Game from "./components/Game.js";

function App() {
  return (
    <div>
      <Form className="SubmitForm">
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2"
              label="Remember me"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <div className="App container">
        <Game />
      </div>
    </div>
  );
}

export default App;
