import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: calc(100% - 40px);
  max-width: 1080px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
