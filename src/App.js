import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Grace Alison",
          cnumber: "8024896621",
          location: "Cincinnati, Ohio",
          id: "dxfgbfgvnsdjkfnskf",
        },
        {
          name: "Morris Sawyer",
          cnumber: "9600248023",
          location: "Atlanta, Georgia",
          id: "3453sdfsjkvnsdjkfnskf",
        },
        {
          name: "Ruis Calvier",
          cnumber: "2324891257",
          location: "Conway, Arkansas",
          id: "cbbvdfjkvnwvnsdjku8nskf",
        },
      ],
    };
  }
  addNewCOntact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };
  removeContact = (id) => {
    let undeletedcontacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: undeletedcontacts
    });
  };
  editContact=(id, updatedContact)=>{
    this.setState({
      contacts: this.state.contacts.map(contact=>contact.id === id ? updatedContact: contact)
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddContact addContact={this.addNewCOntact} />
            </Col>
            <Col>
              <Contacts contactData={this.state.contacts} removeContact={this.removeContact} editContact={this.editContact}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
