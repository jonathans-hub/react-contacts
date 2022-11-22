import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

export default function Contacts(props) {
  return (
    <Container>
      <Row>
        {props.contactData.map((contact) => {
          return (
            <Contact
              contactInfo={contact}
              key={contact.id}
              removeContact={props.removeContact}
              editContact={props.editContact}
            />
          );
        })} 
      </Row>
    </Container>
  );
}
