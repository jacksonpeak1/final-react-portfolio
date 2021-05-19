import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Card";
import workday1 from "../../assets/workday1.png";
import workday2 from "../../assets/workday2.png";
import cat1 from "../../assets/catz.jpg";
import cat2 from "../../assets/cat2.jpg";
import proj1 from "../../assets/project-1.png";
import proj2 from "../../assets/project-2.png";

function Work() {
  const cardData = [
    {
      img1: workday1,
      img2: workday2,
      title: "Work Day Scheduler",
      description:
        "Here is a picture, and two links to both the repo and deployed site for my work day scheduler homework assignment!",
      link1: "https://jacksonpeak1.github.io/Work-Day-Scheduler/",
      link2: "https://github.com/jacksonpeak1/Work-Day-Scheduler",
    },
    {
      img1: cat1,
      img2: cat2, 
      title: "Scratch Game",
      description:
        "Here is a picture, and a link to a game I created with Scratch!",
      link1: "https://scratch.mit.edu/users/Jcodder8282/",
      link2: " https://github.com/jacksonpeak1/Password-Generator-",
    },
    {
      img1: proj1,
      img2: proj2,
      title: "Project 1",
      description: "Here is a picture, and two links to both the repo and deployed site or our first group project!",
      link1: "https://jacksonpeak1.github.io/Project-1/",
      link2: "https://github.com/jacksonpeak1/Project-1",
    }
  ];
  return (
    <Container fluid>
      {cardData.map((data) => {
        return <Card data={data} />;
      })}
      {/* <div class="card">
        <img
          class="card-img-top"
          src="./assets/screencapture-file-C-Users-Jacks-gt-homework-Work-Day-Scheduler-index-html-2021-03-27-20_38_24.png"
          alt="Card image cap"
        />
        <img
          class="card-img-top"
          src="./assets/05-third-party-apis-homework-demo.gif"
          alt="Card image cap"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Work Day Scheduler</h5>
          <p class="card-text">
            Here is a picture, and two links to both the repo and deployed site
            for my work day scheduler homework assignment!
          </p>
          <a
            href="https://jacksonpeak1.github.io/Work-Day-Scheduler/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Work-Day-Scheduler"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="./assets/cat.jpg" alt="Card image cap" />
        <img
          class="card-img-top"
          src="./assets/cat2.jpg"
          alt="Card image cap"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Scratch Game</h5>
          <p class="card-text">
            Here is a picture, and a link to a game I created wiht Scratch!
          </p>
          <a
            href="https://scratch.mit.edu/users/Jcodder8282/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Password-Generator-"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="./assets/cat.jpg" alt="Card image cap" />
        <img
          class="card-img-top"
          src="./assets/cat2.jpg"
          alt="Card image cap"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Scratch Game</h5>
          <p class="card-text">
            Here is a picture, and a link to a game I created wiht Scratch!
          </p>
          <a
            href="https://scratch.mit.edu/users/Jcodder8282/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Password-Generator-"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div>

      <div class="card">
        <img
          class="card-img-top"
          src="./assets/project 1.png"
          alt="Project 1"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Project 1</h5>
          <p class="card-text">
            Here is a picture, and two links to both the repo and deployed site
            for our first group project!
          </p>
          <a
            href="https://jacksonpeak1.github.io/Project-1/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Project-1"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="./assets/screencapture-file-C-Users-Jacks-gt-homework-Code-quiz-index-html-2021-03-24-22_17_24.png"
          alt="Card image cap"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Code Quiz</h5>
          <p class="card-text">
            Here is a picture, and two links to both the repo and deployed site
            for my coding quiz homework assignment!
          </p>
          <a
            href="https://jacksonpeak1.github.io/Code-quiz/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Code-quiz"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="./assets/screencapture-jacksonpeak1-github-io-Password-Generator-2021-03-20-16_48_48.png"
          alt="Card image cap"
        />
        <div class="card-body card bg-secondary text-white">
          <h5 class="card-title">Password Generator</h5>
          <p class="card-text">
            Here is a picture, and two links to both the repo and deployed site
            for my Password Generator homework assignment!
          </p>
          <a
            href="https://jacksonpeak1.github.io/Password-Generator-/"
            class="btn btn-primary"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/jacksonpeak1/Password-Generator-"
            class="btn btn-success"
          >
            Repo Link
          </a>
        </div>
      </div> */}
    </Container>
  );
}

export default Work;
