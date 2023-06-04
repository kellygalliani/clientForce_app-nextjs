import styled from "styled-components";

export const ContactCardStyled = styled.li`
  width: 98%;
  max-width: 1080px;
  display: flex;
  justify-content: space-around;

  align-items: center;
  gap: 10px;

  border-radius: 10px;

  .card_content {
    display: flex;
    width: 100%;
    background-color: var(--color-gray-300);
    padding: 15px;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    .aside_content-card {
      display: flex;
      margin: 20px;
      width: 100px;
      justify-content: flex-end;
      padding: 0;
    }
  }
`;

export const ButtonAsideStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
