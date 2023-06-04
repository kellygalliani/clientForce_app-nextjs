import {
  BigButtonBrand,
  MediumButtonBrand,
  SmallButtonBrand,
} from "../../../styles/ButtonStyle";
import { ButtonAsideStyled, ContactCardStyled } from "./styles";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export const ContactCard = () => {
  return (
    <>
      <ContactCardStyled>
        <div className="card_content">
          <div>
            <p>Nome do Contato:</p>
            <p>Nome Completo do Cliente</p>
          </div>
          <div className="division" />
          <div>
            <p>Email:</p>
            <p>Nome Completo do Cliente</p>
          </div>
          <div className="division" />
          <div>
            <p>Telefone:</p>
            <div>
              <p>Comercial:</p>
              <p>Nome Completo do Cliente</p>
            </div>
          </div>
          <div className="aside_content-card">
            <MediumButtonBrand>Ver Mais</MediumButtonBrand>
          </div>
        </div>
        <ButtonAsideStyled>
          <SmallButtonBrand>
            <HiOutlinePencilAlt />
          </SmallButtonBrand>

          <SmallButtonBrand>
            <HiOutlineTrash />
          </SmallButtonBrand>
        </ButtonAsideStyled>
      </ContactCardStyled>
    </>
  );
};
