import React, { useState } from "react";
import * as SpiralStyles from "./SpiralStyles";

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
        <SpiralStyles.SpiralSquare
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
        </SpiralStyles.SpiralSquare>
      );
    });

  return (
    <SpiralStyles.SpiralContainer>
      <SpiralStyles.SpiralSquareContainer>
        {squares}
      </SpiralStyles.SpiralSquareContainer>
      <SpiralStyles.RotatedButtonContainer>
        <SpiralStyles.RotatedButton onClick={() => rotateSquare(-1)}>
          ⫷
        </SpiralStyles.RotatedButton>
        <SpiralStyles.RotatedButton onClick={() => setNowIndex(0)}>
          ↻
        </SpiralStyles.RotatedButton>
        <SpiralStyles.RotatedButton onClick={() => rotateSquare(1)}>
          ⫸
        </SpiralStyles.RotatedButton>
      </SpiralStyles.RotatedButtonContainer>
    </SpiralStyles.SpiralContainer>
  );
};

export default Spiral;
