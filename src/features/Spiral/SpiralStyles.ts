import styled from "styled-components";
import { COLORS } from "@/shared/constants/colors";

export const SpiralContainer = styled.div`
  width: 100%;
  max-width: 720px;
  height: calc(100vh - 84px);
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SpiralSquareContainer = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpiralSquare = styled.div<{
  $size: number;
  $rotation: number;
  $distance: number;
  $isEven: boolean;
}>`
  position: absolute;
  width: ${(props) => props.$size * 0.16}vh;
  height: fit-content;
  transform: rotate(${(props) => props.$rotation}deg)
    translateY(${(props) => -1 * props.$distance}vh);
  font-size: ${(props) => props.$size * 0.03}vh;
  z-index: ${(props) => props.$size};
  background-color: ${(props) =>
    props.$isEven ? COLORS.secondary : COLORS.accent};
  border-bottom: 1px solid ${COLORS.text};
  padding: 10px;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:nth-child(1) {
    font-size: ${(props) => props.$size * 0.044}vh;
    transform: rotate(${(props) => props.$rotation}deg)
      translateY(${(props) => -1 * props.$distance - 4}vh); /* 5vh 추가 이동 */
    width: fit-content;
  }
`;

export const RotatedButtonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  max-width: 720px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const RotatedButton = styled.h1`
  cursor: pointer;
  width: 20%;
  text-align: center;
  font-size: 5vh;
  color: ${COLORS.text};
  z-index: 1000;
`;
