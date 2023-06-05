import styled from "styled-components";

export const ContactsMainStyled = styled.div`
  width: 98%;
  max-width: 1080px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  padding: 15px;
  padding-top: 28px;
  align-items: center;

  box-shadow: -3px -1px 20px rgba(0, 0, 0, 0.09);
  border-radius: 10px;

  .empty_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: auto;
    padding: 2rem;
    background-color: var(--color-gray-200);
    border: 0.094rem dashed var(--color-gray-400);
    border-radius: 10px;
    cursor: pointer;

    > p {
      font-size: 16px;
    }
  }
`;
