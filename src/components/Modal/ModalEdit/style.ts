import { styled } from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    background: var(--Grey-2);
    border-radius: 4px 4px 0px 0px;
  }

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 5px;
      > p {
        color: red;
      }
      > input {
        height: 30px;
        border-radius: 8px;
        padding: 10px;
        border: 1px solid var(--color-gray-400);
      }
    }
    .button-div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      width: 100%;
    }
  }

  @media (max-width: 671px) {
    min-width: fit-content;
  }
`;
