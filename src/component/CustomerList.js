import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Modal, Button, ListGroup } from "react-bootstrap";
import EditForm from "./EditForm";
import { deleteCustomer } from "../redux/mySlice";

const CustomerList = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (customerId) => {
    dispatch(deleteCustomer(customerId));
  };

  return (
    <div>
      {customers.map((customer) => (
        <React.Fragment key={customer.id}>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditForm customer={customer} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Card style={{ width: "20rem" }}>
            <Card.Header style={{ backgroundColor: "#36f76a" }}>
              Customer
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <b>Items:</b> {customer.items}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Date:</b> {customer.date}
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Amount:</b> {customer.amount}
              </ListGroup.Item>
              <Card.Body>
                <Button variant="success" onClick={handleShow}>
                  Update
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </ListGroup>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomerList;
