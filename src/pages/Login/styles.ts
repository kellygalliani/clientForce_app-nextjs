import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 5.4rem;

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
      font-size: 1.6rem;
      img {
        max-width: 14rem;
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
        a {
          text-decoration: none;
          color: var(--color-blue-700);
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      > .errorMessage {
        margin-top: -22px;
        font-size: 12px;
        color: red;
      }
      .emptyDiv {
        display: none;
      }
    }
  }
  .formFooter {
    font-size: 1.6rem;
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
  height: 6rem;
  border-radius: 0.8rem;

  label {
    position: absolute;
    top: 0.8em;
    left: 6rem;
    font-size: 1.2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  input {
    padding-left: 2.3rem;
    padding-top: 1.5rem;
    background: #ececec;
    border-radius: 0.8rem;
    border: none;
    width: 87%;
    font-size: 14px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .formIcon {
    position: absolute;
    left: 2rem;
    color: var(--color-gray-800);
    font-size: 1.3em;
  }
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 1em;
  right: 1em;
  color: var(--color-gray-800);
  font-size: 1.5em;
  cursor: pointer;
`;

export const FormButtonStyled = styled.button`
  width: 100%;
  background-color: var(--color-blue-900);
  border-radius: 0.8rem;
  height: 6.9rem;
  font-size: 1.6rem;
  color: var(--color-gray-100);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: none;
`;
