import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col
            md="6"
            style={{
              width: "380px",
              height: "420px",
              background: "#36f76a",
              borderRadius: "10px",
            }}
          >
            <CustomerForm />
          </Col>

          <Col md="6">
            <CustomerList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
