import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const PlusButtonContainer = styled.div<{ $isAuthenticated: boolean }>`
  position: absolute;
  right: 10px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  background: ${(props) => (props.$isAuthenticated ? COLORS.text : "#ccc")};
  border-radius: 50%;
  padding: 1px;
  cursor: pointer;
`;
