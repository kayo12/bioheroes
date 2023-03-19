import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

interface DefaultModal {
  mod?: any;
  creaters?: string;
  description?: string;
}

const Modal = (props: DefaultModal) => {
  const ModalDiv = styled.div<{ name: any }>`
    height: 100vh;
    width: 100vw;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    z-index: 1;
    top: 0;
    left: 0;

    .modal-content {
      flex: 0 2 1000px;
      height: 500px;
      background-color: #f3ef83;
      opacity: 1;
      position: relative;
    }

    .modal-close {
      color: #000;
      font-size: 3em;
      text-align: center;
      cursor: pointer;
      position: absolute;
      right: 10px;
    }
  `;
  console.log("Valor do modal: " + props.mod);
  return (
    <ModalDiv id="modal">
      <div className="modal-content">
        <span className="modal-close">&times;</span>
        <div className="modal-body">
          {props.mod != null ? (
            <>
              <p>{props.mod.name}</p>
              <p>{props.mod.description}</p>
              <p>{props.mod.description}</p>
            </>
          ) : (
            "vazio"
          )}
        </div>
      </div>
    </ModalDiv>
  );
};

export default Modal;
