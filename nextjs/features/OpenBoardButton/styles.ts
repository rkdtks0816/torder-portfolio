import styled from "styled-components";

export const OpenBoardButtonContainer = styled.div`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
