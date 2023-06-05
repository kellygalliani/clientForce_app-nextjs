import { InputStyled } from "./styles";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMail, HiPhone, HiUser } from "react-icons/hi";
import { useContacts } from "../../hooks/useAuth";
import { useSearchValue } from "../../providers/SearchValueContext";

export const SearchInput = () => {
  const { setSearchValue } = useSearchValue();

  function filter(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.currentTarget.value);
  }

  return (
    <>
      <InputStyled>
        <BiSearch />
        <input
          type="text"
          placeholder="Procurar por Email, Telefone, Contato"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            filter(event)
          }
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
