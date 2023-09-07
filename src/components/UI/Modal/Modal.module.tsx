import styled from "styled-components";

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background: rgba(0,0, 0, 0.5);
`;
export const ModalContent = styled.div`
  padding: 45px;
  background: #FFF;
  border-radius:16px;
  min-width: 250px;
`;
/*
* display: flex;
* justify-content: center;
* align-items: center;
* */