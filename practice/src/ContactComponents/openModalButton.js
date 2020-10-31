import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OpenModalButton = styled(motion.button)`
  font-size: 1.8vw;
  margin-bottom: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  border: none;
  color: maroon;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.03cm;
  font-weight: bolder;
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <OpenModalButton
      onClick={handlClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;
