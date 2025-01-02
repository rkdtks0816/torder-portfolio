"use client";

import React, { useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import { TitleContainer } from "@/styles/TitleStyles";
import TitleHeader from "@/features/TitleHeader";
import OpenBoardButton from "@/features/OpenBoardButton";

const Title: React.FC = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const handleRefresh = () => {
    setIsRefresh(true);
  };
  return (
    <TitleContainer>
      <ThreeScene isRefresh={isRefresh} setIsRefresh={setIsRefresh} />
      <TitleHeader onRefresh={handleRefresh} />
      <OpenBoardButton />
    </TitleContainer>
  );
};

export default Title;
