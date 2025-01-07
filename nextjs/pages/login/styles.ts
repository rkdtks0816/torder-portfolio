import { COLORS } from "@/shared/constants";
import styled from "styled-components";

export const LoginForm = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LoginInput = styled.input`
  padding: 10px 20px;
`;

export const LoginButton = styled.button`
  padding: 10px 40px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${COLORS.text};
  color: #fff;
  cursor: pointer;
`;
