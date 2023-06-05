import styled from "styled-components";

export const InputStyled = styled.div`
  width: 98%;
  max-width: 1080px;
  background-color: var(--color-gray-100);
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;

  box-shadow: -3px -1px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  font-size: 20px;
  > input {
    width: 80%;
    height: 100%;
    border: none;
    font-size: 14px;
    padding-left: 5px;
  }
  .division {
    height: 50%;
    background-color: none;
    border-left: 2px solid var(--color-gray-400);
    margin: 2px;
  }
  .icons_group {
    display: flex;
    gap: 10px;
  }
`;
