import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addCustomer } from "../redux/mySlice";

const CustomerForm = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCustomer = {
      id: uuid(),
      items: items,
      date: date,
      amount: amount,
    };
    console.log(newCustomer);
    // Use the newUser object as needed, such as dispatching an action to update the state
    dispatch(addCustomer(newCustomer));
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
            type="items"
            placeholder="Items"
            name="items"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>
            <b>Date:</b>
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="00/00/0000"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAmount">
          <Form.Label>
            <b>Amount:</b>
          </Form.Label>
          <Form.Control
            type="amount"
            placeholder="GHC"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CustomerForm;
