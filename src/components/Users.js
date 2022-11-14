import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";

export default function Users(props) {
  return (
    <Container>
      <Row>
        {props.userData.map((user) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              removeUser={props.removeUser}
              editUser={props.editUser}
            />
          );
        })} 
      </Row>
    </Container>
  );
}
