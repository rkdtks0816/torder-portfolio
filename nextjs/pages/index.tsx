"use client";

import React, { useState } from "react";
import ThreeScene from "@/components/common/ThreeScene";
import { TitleContainer } from "@/styles/TitleStyles";
import TitleHeader from "@/components/title/TitleHeader";
import OpenBoardButton from "@/components/common/OpenBoardButton";

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
