import { InputStyled } from "./styles";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMail, HiPhone, HiUser } from "react-icons/hi";

export const SearchInput = () => {
  return (
    <>
      <InputStyled>
        <BiSearch />
        <input
          type="text"
          placeholder="Procurar por Email, Telefone, Contato"
        />
        <div className="division" />
        <div className="icons_group">
          <HiOutlineMail />
          <HiPhone />
          <HiUser />
        </div>
      </InputStyled>
    </>
  );
};
