import { Card, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import EditContact from "./EditContact";

export default function Contact(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.removeContact(props.contactInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact contactInfo={props.contactInfo} editContact={props.editContact} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Contacts
            </Card.Subtitle>
            <Card.Title>{props.contactInfo.name}</Card.Title>
            <Card.Text>Number: {props.contactInfo.cnumber}</Card.Text>
            <Card.Text>Location: {props.contactInfo.location}</Card.Text>
            <Card.Link href="#">
              <Button
                variant="primary"
                size="sm"
                onClick={handleShow}
                style={{ width: "60px" }}
              >
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
