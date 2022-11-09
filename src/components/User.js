import { Card, Col } from "react-bootstrap";

export default function User (props) {
    return (
      <Col md="4"style={{marginBottom: "1rem"}}>
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              CodeTrain User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Card.Link href="#">Delete</Card.Link>
            <Card.Link href="#">Edit</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
