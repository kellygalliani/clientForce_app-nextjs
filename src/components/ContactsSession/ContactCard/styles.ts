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
    padding: 20px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    .card_content--content {
      display: flex;
      justify-content: space-between;
      width: 80%;
      gap: 30px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 150px;
        overflow: hidden;
      }
      h2 {
        font-size: 14px;
        font-weight: 600;
      }
      /* @media (max-width: 1068px) {
        > div {
          width: 100%;
        }
      } */
    }
    .aside_content-card {
      display: flex;
      margin: 20px;
      width: 100px;
      justify-content: flex-end;
      padding: 0;
    }
    .division {
      border-left: 1px solid var(--color-gray-200);
      height: 100%;
      width: 1px;
    }
  }

  @media (max-width: 723px) {
    flex-direction: column;
    background-color: var(--color-gray-300);
    gap: 2px;
    .card_content {
      flex-direction: column;
    }
    .aside_content-card {
      display: flex;
      margin: 20px;
      width: 100px;
      justify-content: flex-end;
      padding: 0;
    }
  }
  @media (max-width: 511px) {
    .card_content--content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;

export const ButtonAsideStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media (max-width: 723px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
