import { useContacts } from "../../hooks/useAuth";
import { useSearchValue } from "../../providers/SearchValueContext";
import { ContactCard } from "./ContactCard";
import { ContactsMainStyled } from "./styles";

export const ContactsSession = () => {
  const { contacts, handleOpenModal } = useContacts();
  const { searchValue } = useSearchValue();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.emails[0].email
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      contact.phones[0].phone.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <ContactsMainStyled>
        {filteredContacts.length === 0 ? (
          <div
            className="empty_div"
            onClick={() => handleOpenModal("createContact")}
          >
            <p>Você ainda não tem contatos cadastrados</p>
            <span>Cadastrar Contato</span>
          </div>
        ) : (
          filteredContacts.map((contact) => {
            return <ContactCard contact={contact} key={contact.id} />;
          })
        )}
      </ContactsMainStyled>
    </>
  );
};
