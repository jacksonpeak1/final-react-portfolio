import React from "react";
import styled from "styled-components";
import img from "../../assets/Resume.png";


const Img = styled.img`
  width: 2000px;
  height: 60vh;
`;

function Resume() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-2 section-title">
        <h2 id="resume">Resume</h2>
      </div>
      <div className="card">
          <Img className="card-img-top" src={img} alt="jackson5" />
        <div className="card-body card bg-info text-white">
          <h5 className="card-title">Resume</h5>
          <p className="card-text">Here is a copy of my resume!</p>
          <a href="http://awards.cali.org/2ff44e60" class="btn btn-secondary">
            Cali Award #1
          </a>
          <a href="http://awards.cali.org/2ff3c1c0" class="btn btn-success">
            Cali Award #2
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
