import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media (max-width: 760px) {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }
`;

const Card: React.FC = () => {
  return <CardContainer>Card</CardContainer>;
};

export default Card;
