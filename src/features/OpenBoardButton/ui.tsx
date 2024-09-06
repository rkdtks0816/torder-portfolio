import React from "react";
import Lottie from "lottie-react";
import tornado from "./tornado.json";

const OpenBoardButton: React.FC = () => {
  return <Lottie animationData={tornado} loop={true} autoplay={true} />;
};

export default OpenBoardButton;
