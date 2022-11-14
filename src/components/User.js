import { Card, Col, Button } from "react-bootstrap";

export default function User(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("item deleted");
  };
  return (
    <Col md="4" style={{ marginBottom: "1rem" }}>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            CodeTrain User
          </Card.Subtitle>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
           Email:{props.userInfo.email}
          </Card.Text>
          <Card.Text>Gen:{props.userInfo.gen}</Card.Text>
          <Card.Link href="#">
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Link>
          <Card.Link href="#">Edit</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
