import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../redux/mySlice";

const EditForm = ({ customer }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Populate the form fields with the current customer's data
    if (customer) {
      setItems(customer.items);
      setDate(customer.date);
      setAmount(customer.amount);
    }
  }, [customer]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedCustomerData = {
      id: customer.id,
      items: items,
      date: date,
      amount: amount,
    };

    dispatch(updateCustomer(updatedCustomerData));

    setItems("");
    setDate("");
    setAmount("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicItems">
          <Form.Label>
            <b>Items:</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Items"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>
            <b>Date:</b>
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>
            <b>Amount:</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
