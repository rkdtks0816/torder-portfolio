import styled from "styled-components";

export const ProjectContainer = styled.div`
  max-width: 720px;
  width: 100%;
  height: calc(100vh - 84px);
  overflow: auto;
`;

export const ProjectImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  gap: 20px;
`;
export const ProjectImg = styled.div<{ $imgUrl: string }>`
  width: calc(50% - 10px);
  background-image: url(${(props) => props.$imgUrl});
  background-size: contain;
  background-position: center;
  aspect-ratio: 1;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100%;
  }
`;
