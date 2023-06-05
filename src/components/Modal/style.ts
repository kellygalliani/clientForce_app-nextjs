import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--BackgroundModal);
`;

interface ModalWrapperProps {
  maxwidth?: number;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  width: 90%;
  max-width: ${({ maxwidth }) => (maxwidth ? `${maxwidth}px` : "980px")};
  height: auto;
  max-height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-gray-200);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;
