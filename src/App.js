import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Uta Jamieson",
          email: "uta@aol.com",
          gen: "20",
          id: "dfsdjkvnsdjkfnskf",
        },
        {
          name: "Chris Alton",
          email: "chrisal@aol.com",
          gen: "18",
          id: "45fsdsjkvnsdjkfnskf",
        },
        {
          name: "Berus Sama",
          email: "berus@aol.com",
          gen: "22",
          id: "weonbfjkvnwvnsdjkfnskf",
        },
      ],
    };
  }
  addNewUSer = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  removeUser = (id) => {
    let undeletedusers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedusers
    });
  };
  editUser=(id, updatedUser)=>{
    this.setState({
      users: this.state.users.map(user=>user.id === id ? updatedUser: user)
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUSer} />
            </Col>
            <Col>
              <Users userData={this.state.users} removeUser={this.removeUser} editUser={this.editUser}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
