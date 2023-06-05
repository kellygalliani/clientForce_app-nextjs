import { styled } from "styled-components";

export const MainStyled = styled.main`
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 38px;
  z-index: 0;
  position: relative;

  .button_session {
    width: 100%;
    max-width: 1080px;
    margin: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  > a {
    color: var(--color-gray-500);
  }
  .arrow-up {
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 50px;
    cursor: pointer;
  }
`;
