
import styled from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  height: 100vh;
`;

const Card = ({ data }) => {
  return (
    <CardContainer class="card">
      <img class="card-img-top" src={data.img1} alt="Card image cap" />
      <img class="card-img-top" src={data.img2} alt="Card image cap" />
      <div class="card-body card bg-secondary text-white">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">{data.description}</p>
        <a href={data.link1} class="btn btn-primary">
          Deployed Site
        </a>
        <a href={data.link2} class="btn btn-success">
          Repo Link
        </a>
      </div>
    </CardContainer>
  );
};

export default Card;
