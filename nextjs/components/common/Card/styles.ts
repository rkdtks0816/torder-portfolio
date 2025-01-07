import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const CardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  margin: 0;
`;

export const CardTag = styled.p`
  color: gray;
  margin: 0;
  margin-top: 10px;
`;
