import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactInfo.name,
      cnumber: props.contactInfo.cnumber,
      location: props.contactInfo.location,
      id: props.contactInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editContact(this.state.id, this.state);
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              value={this.state.cnumber}
              name="cnumber"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your number with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Location"
              value={this.state.location}
              name="location"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
