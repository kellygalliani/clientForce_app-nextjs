import { useContacts } from "../../../hooks/useAuth";
import { Contact } from "../../../providers/interfaces";
import { MediumButtonBrand } from "../../../styles/ButtonStyle";
import { ContactCardStyled } from "./styles";

interface iContactCard {
  contact: Contact;
}
export const ContactCard = ({ contact }: iContactCard) => {
  const { handleOpenModal, setCurrentContact } = useContacts();

  return (
    <>
      <ContactCardStyled>
        <div className="card_content">
          <div className="card_content--content">
            <div>
              <p>Nome do Contato:</p>
              <h2>{contact.name}</h2>
            </div>

            <div>
              <p>Email:</p>
              <h2>{contact.emails[0].email}</h2>
            </div>

            <div>
              <p>Telefone:</p>
              <div>
                <h2>{contact.phones[0].phone}</h2>
              </div>
            </div>
          </div>
          <div className="aside_content-card">
            <MediumButtonBrand
              onClick={() => {
                setCurrentContact(contact);
                handleOpenModal("seeMore");
              }}
            >
              Ver Mais
            </MediumButtonBrand>
          </div>
        </div>
      </ContactCardStyled>
    </>
  );
};
