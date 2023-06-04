import styled, { keyframes } from "styled-components";

export const HeaderStyled = styled.main`
  position: fixed;
  padding: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  z-index: 10;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .logo {
    font-size: 22px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    display: flex;
  }

  .header-user {
    display: flex;
  }
`;

export const UserInforStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  p {
    font-size: 1.5rem;
  }
`;

export const UserAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid var(--color-brand-1);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuDropDown = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  top: 4em;
  right: 1em;
  font-size: 1.4rem;
  padding: 15px;
  width: 200px;
  border-radius: 0.8rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  animation: ${fadeIn} 0.3s ease-in-out;

  display: flex;
  gap: 15px;
  flex-direction: column;
  cursor: pointer;

  a {
    text-decoration: none;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    color: #333;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
    background-color: #ddd;
    transform: scale(1.05);
  }
`;
