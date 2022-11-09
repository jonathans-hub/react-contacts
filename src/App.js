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
        },
        {
          name: "Chris Alton",
          email: "chrisal@aol.com",
          gen: "18",
        },
        {
          name: "Berus Sama",
          email: "berus@aol.com",
          gen: "22",
        },
      ],
    };
  }
  addNewUSer=(user)=>{
    this.setState({
      users:[...this.state.users, user]
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.addNewUSer}/>
            </Col>
            <Col>
              <Users  userData={this.state.users}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
