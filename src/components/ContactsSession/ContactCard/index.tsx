import { useContacts } from "../../../hooks/useAuth";
import {
  MediumButtonBrand,
  SmallButtonBrand,
} from "../../../styles/ButtonStyle";
import { ButtonAsideStyled, ContactCardStyled } from "./styles";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export const ContactCard = () => {
  const { handleOpenModal } = useContacts();
  return (
    <>
      <ContactCardStyled>
        <div className="card_content">
          <div className="card_content--content">
            <div>
              <p>Nome do Contato:</p>
              <h2>Nome Completo do Cliente</h2>
            </div>

            <div>
              <p>Email:</p>
              <h2>Nome Completo do Cliente</h2>
            </div>

            <div>
              <p>Telefone:</p>
              <div>
                <h2>Comercial:</h2>
                <h2>(47) 32226-5225</h2>
              </div>
            </div>
          </div>
          <div className="aside_content-card">
            <MediumButtonBrand onClick={() => handleOpenModal("seeMore")}>
              Ver Mais
            </MediumButtonBrand>
          </div>
        </div>
      </ContactCardStyled>
    </>
  );
};
