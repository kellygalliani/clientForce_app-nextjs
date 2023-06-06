import { useState, useEffect, useRef } from "react";
import {
  HeaderStyled,
  MenuDropDown,
  UserAvatar,
  UserInforStyled,
} from "./styles";
import { RiContactsFill } from "react-icons/ri";
import Avatar from "../../assets/user-avatar.jpg";
import { useAuth, useContacts } from "../../hooks/useAuth";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  const { modalType, handleOpenModal } = useContacts();
  const { signOut, user } = useAuth();

  const handleMenuDropDown = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      avatarRef.current &&
      !avatarRef.current.contains(event.target as Node) &&
      nameRef.current &&
      !nameRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <p ref={nameRef} onClick={handleMenuDropDown}>
                {user?.name}
              </p>
              <UserAvatar ref={avatarRef} onClick={handleMenuDropDown}>
                <img src={user?.avatar || Avatar} alt="avatar" />
              </UserAvatar>
              {menuOpen && (
                <MenuDropDown ref={menuRef}>
                  <a href="#" onClick={() => handleOpenModal("seeProfile")}>
                    Editar Perfil
                  </a>
                  <a href="" onClick={signOut}>
                    Logout
                  </a>
                </MenuDropDown>
              )}
            </UserInforStyled>
          </div>
        </div>
      </HeaderStyled>
    </>
  );
};
