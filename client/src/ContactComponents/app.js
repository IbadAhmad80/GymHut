import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
import Modal from "./modal";
import OpenModalButton from "./openModalButton";

const ModalContent = styled.div`
  margin-bottom: 2vw;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: green;
    text-align: center;
    font-size: 1.7vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
    letter-spacing: "0.1cm";
  }
`;

export default function App({ Question, Answer }) {
  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }

  return (
    <div className="App">
      <OpenModalButton handlClick={() => handlOpenModal(true)}>
        {Question}
      </OpenModalButton>
      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <ModalContent>
          <h1>{Answer} </h1>
        </ModalContent>
      </Modal>
    </div>
  );
}
