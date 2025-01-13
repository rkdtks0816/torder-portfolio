import React from "react";
import { PlusButtonContainer } from "./styles";
import { PATHS } from "@/shared/constants";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const PlusButton: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <PlusButtonContainer
      $isAuthenticated={isAuthenticated === true}
      onClick={() => router.push(PATHS.WRITE)}
    >
      +
    </PlusButtonContainer>
  );
};

export default PlusButton;
