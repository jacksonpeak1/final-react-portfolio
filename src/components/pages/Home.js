import React from "react";
import { Card, ListGroup, ListGroupItem, Container } from "react-bootstrap";
import img from "../../assets/welcome.jpg";
import img2 from "../../assets/welcome.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 258px;
  height: 10vh;
`;

const Paragraph = styled.p`
  height: 50vh;
`;

function Home() {
  return (
    <Container fluid>
      <div className="col d-flex flex-wrap container">
        <Card className="bg-secondary">
          <div>
            <img
              class="card-img-top"
              src={img}
              width="225"
              height="480"
              alt="Card image cap"
            />
          </div>
          <Card.Body>
            <Card.Title className="text-center text-light">
              Jackson Peak Full Stack Developer
            </Card.Title>
            <Card.Text className="text-center text-light">
              Hello my name is Jackson Peak. Im so glad you took the time to
              check out my online portfolio! Learn more about me by checking out
              my about me section. Also check out some of my coding projects
              i've come up with!
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="text-primary">
              Check out the about me section to learn more about me!
            </ListGroupItem>
            <ListGroupItem className="text-primary">
              Check out the work section to view some of my projects!
            </ListGroupItem>
            <ListGroupItem className="text-primary">
              Check out my resume to view my experiences!
            </ListGroupItem>
            <ListGroupItem className="text-primary">
              Check out the contact me section to contact me!
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            {/* <div>
              <img
                class="card-img-bottom"
                src={img2}
                width="225"
                height="200"
                alt="Card image cap"
              />
            </div> */}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Home;
