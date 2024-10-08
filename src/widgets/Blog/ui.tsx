import React from "react";
import styled from "styled-components";
import {Card} from "../../features/Card";

const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Blog: React.FC = ()=> {
return (
    <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </CardContainer>
)
}

export default Blog;