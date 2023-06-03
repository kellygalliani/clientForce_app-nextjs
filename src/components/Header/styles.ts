import styled from "styled-components";

export const HeaderStyled = styled.main`
  padding: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  background-color: #ffffff;

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

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const MenuDropDown = styled.div`
  position: absolute;
  background-color: aquamarine;
  top: 4em;
  right: 1em;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 15px;
  width: 200px;
  display: none;
  gap: 15px;
  flex-direction: column;
  border-radius: 0.8rem;

  a {
    text-decoration: none;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
  }
  a:hover {
    text-decoration: underline;
    background-color: aqua;
  }
`;
