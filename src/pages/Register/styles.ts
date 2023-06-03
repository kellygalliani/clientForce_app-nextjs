import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: row-reverse;
  gap: 4.5rem;

  > div:nth-child(1) {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 60rem;
      min-width: 20rem;
    }
  }

  > div:nth-child(2) {
    width: 90%;
    max-width: 60rem;
    background-color: white;
    border-radius: 0.8rem;
    padding: 6.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
    box-shadow: 2px 1px 25px 2px rgba(0, 0, 0, 0.3);

    div:nth-child(1) {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      div:nth-child(1) {
        display: flex;
        flex-direction: column;
        img {
          max-width: 14rem;
        }
      }
      div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          text-decoration: none;
          color: var(--color-blue-700);
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      > .errorMessage {
        margin-top: -22px;
        font-size: 12px;
        color: red;
      }
    }
  }

  @media (max-width: 1440px) {
    justify-content: center;
    > div:nth-child(1) {
      display: none;
    }
    > div:nth-child(2) {
      padding: 20px;
    }
  }
`;

export const FormInputDiv = styled.div`
  background-color: #ececec;
  display: flex;
  position: relative;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;

  label {
    position: absolute;
    top: 0.5em;
    left: 4em;
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  input {
    padding-left: 3.5em;
    padding-top: 1em;
    background: #ececec;
    border-radius: 0.8rem;
    border: none;
    width: 100%;
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  svg:not(.eye-icon) {
    position: absolute;
    top: 1em;
    left: 0.8em;
    color: var(--color-gray-800);
    font-size: 1.2em;
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 1em;
  right: 1em;
  color: var(--color-gray-800);
  cursor: pointer;
`;

export const FormButtonStyled = styled.button`
  width: 100%;
  background-color: var(--color-blue-900);
  border-radius: 0.8rem;
  height: 5rem;
  font-size: 16px;
  color: var(--color-gray-100);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
`;
