"use client";

import React, { useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import { TitleContainer } from "@/styles/TitleStyles";
import TitleHeader from "@/features/TitleHeader";

const Title: React.FC = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const handleRefresh = () => {
    setIsRefresh(true);
  };
  return (
    <TitleContainer>
      <ThreeScene isRefresh={isRefresh} setIsRefresh={setIsRefresh} />
      <TitleHeader onRefresh={handleRefresh} />
    </TitleContainer>
  );
};

export default Title;
