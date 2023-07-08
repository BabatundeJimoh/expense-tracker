import React from "react";
import { Container, Row } from "react-bootstrap";
import CustomerList from "./CustomerList";

const Customer = (props) => {
  return (
    <Container>
      <Row>
        {props.customersData.map((customer, index) => {
          return <Customer customerInfo={customer} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default Customer;
