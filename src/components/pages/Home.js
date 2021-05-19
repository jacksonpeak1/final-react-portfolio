import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <div>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Jackson Peak Full Stack Developer</Card.Title>
            <Card.Text>
              Hello my name is Jackson Peak. Welcome to my Portfolio I created
              using React.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Leave me an email</ListGroupItem>
            <ListGroupItem>Connect with me on github</ListGroupItem>
            <ListGroupItem>Take a copy of my resume</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Home;
