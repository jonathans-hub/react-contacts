import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditUserForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: props.userInfo.name,
            email: props.userInfo.email,
            gen: props.userInfo.gen,
            id: props.userInfo.id,  
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({
             [e.target.name]: e.target.value,
            }
            )  
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.editUser(this.state.id, this.state )
        this.props.closeModal()
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={this.state.name}  name="name" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group><Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Enter Gen" value={this.state.gen} name="gen" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    ); 
  }
}
