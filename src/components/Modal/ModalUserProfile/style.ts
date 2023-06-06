import { styled } from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  max-width: 900px;
  max-height: 100%;
  padding-bottom: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    background: var(--Grey-2);
    border-radius: 4px 4px 0px 0px;
    color: var(--Grey-0);
  }

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .modalContent--header {
    display: flex;
    justify-content: space-between;

    width: 97%;
    padding: 25px;
    background-color: var(--color-gray-300);
    > .modalContent--header-informations {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    h2 {
      font-size: 16px;
    }
  }
  @media (max-width: 570px) {
    .modalContent--header {
      flex-direction: column;
      gap: 25px;
    }
  }
  .divisionModal {
    width: 97%;
    height: 2px;
    background-color: var(--color-gray-400);
  }
  .addButton {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    width: 97%;
    padding: 10px;
    background-color: var(--color-gray-300);
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export const ListModal = styled.ul`
  width: 97%;
  background-color: var(--color-gray-300);
  list-style: none;
  max-height: 200px;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  overflow-x: hidden;
  li {
    width: 100%;
    min-width: 250px;
    max-width: 250px;
    background-color: var(--color-gray-200);
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 671px) {
    flex-wrap: nowrap;
    padding-right: 0;
    overflow-x: scroll;
  }
`;

export const ButtonModalSeeMore = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
