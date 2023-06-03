import {
  HeaderStyled,
  MenuDropDown,
  UserAvatar,
  UserInforStyled,
} from "./styles";
import { RiContactsFill } from "react-icons/ri";
import Avatar from "../../assets/tasks.png";
export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <RiContactsFill />
              <p>ClientForce</p>
            </div>
            <UserInforStyled>
              <p>Natalya</p>
              <UserAvatar>
                <img src={Avatar} alt="" />
              </UserAvatar>
              <MenuDropDown>
                <a href="">Editar Perfil</a>
                <a href="">Logout</a>
              </MenuDropDown>
            </UserInforStyled>
          </div>
        </div>
      </HeaderStyled>
    </>
  );
};
