import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import img from "../../assets/GH.png";
import img2 from "../../assets/LINK.png";

function Contact(props) {
  return (
    <CardColumns>
      <Card className="text-center">
        <Card.Img variant="top" src={img} width="75" height="370" />
        <Card.Body>
          <Card.Title>Connect with me on Github!</Card.Title>
          <Card.Text>
            <a href="https://github.com/jacksonpeak1">
              <div>Github</div>
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3 text-center">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            “If You Are Working On Something That You Really Care About, You
            Don’t Have To Be Pushed. The Vision Pulls You.”
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Steve Jobs <cite title="Source Title"></cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={img2} width="75" height="370" />
        <Card.Body>
          <Card.Title>Connect with me on Linkedin!</Card.Title>
          <Card.Text>
            <a href="https://www.linkedin.com/in/jackson-peak-7b679b208/">
              <div>linkedin</div>
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            “Failure Will Never Overtake Me If My Determination To Succeed Is
            Strong Enough.”
          </p>
          <footer className="blockquote-footer">
            <small className="text-danger">
              Og Mandino <cite title="Source Title"></cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Connect With Me By Email</Card.Title>
          <Card.Text>Email: jacksonpeak1@icloud.com</Card.Text>
          <Card.Text>
            <small className="text-muted">Feel free to email me anytime</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="holder.js/100px160" />
      </Card>
      <Card bg="primary" text="white" Card className="text-center">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            “Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We
            Must Do.” – Johann Wolfgang Von Goethe
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Connect With Me By Phone</Card.Title>
          <Card.Text>Phone: 770-555-555</Card.Text>
          <Card.Text>
            <small className="text-muted">
              Feel free to call or text me anytime
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default Contact;
