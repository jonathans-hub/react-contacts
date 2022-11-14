import { Card, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import EditUserForm from "./EditUserForm";

export default function User(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.removeUser(props.userInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              CodeTrain User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>Email:{props.userInfo.email}</Card.Text>
            <Card.Text>Gen:{props.userInfo.gen}</Card.Text>
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
