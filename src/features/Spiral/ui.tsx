import React, { useState } from "react";
import {
  SpiralContainer,
  SpiralSquareContainer,
  SpiralSquare,
  RotatedButtonContainer,
  RotatedButton,
} from "@/shared/styles/SpiralStyles";

interface SpiralProps {
  titles: string[];
  onSquareClick: (index: number) => void;
}

const Spiral: React.FC<SpiralProps> = ({ titles, onSquareClick }) => {
  const [nowIndex, setNowIndex] = useState(0);

  const rotateSquare = (next: number) => {
    if (nowIndex + next < 0) setNowIndex(0);
    else if (nowIndex + next >= titles.length) setNowIndex(titles.length - 1);
    else setNowIndex(nowIndex + next);
  };

  const squares = titles
    .slice(nowIndex, Math.min(titles.length, nowIndex + 20))
    .map((title, i) => {
      const size = 70 - i * 3;
      const rotation = i * 45;
      const distance = 20 - 0.8 * i;
      const isEven = (nowIndex + i + 1) % 2 === 0;

      return (
        <SpiralSquare
          key={i}
          $size={size}
          $rotation={rotation}
          $distance={distance}
          $isEven={isEven}
          onClick={() => {
            if (i !== 0) {
              setNowIndex(nowIndex + i);
            }
            onSquareClick(nowIndex + i);
          }}
        >
          {title}
        </SpiralSquare>
      );
    });

  return (
    <SpiralContainer>
      <SpiralSquareContainer>{squares}</SpiralSquareContainer>
      <RotatedButtonContainer>
        <RotatedButton onClick={() => rotateSquare(-1)}>⫷</RotatedButton>
        <RotatedButton onClick={() => setNowIndex(0)}>↻</RotatedButton>
        <RotatedButton onClick={() => rotateSquare(1)}>⫸</RotatedButton>
      </RotatedButtonContainer>
    </SpiralContainer>
  );
};

export default Spiral;
