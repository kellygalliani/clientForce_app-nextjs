import { useContacts } from "../../hooks/useAuth";
import { useSearchValue } from "../../providers/SearchValueContext";
import { ContactCard } from "./ContactCard";
import { ContactsMainStyled } from "./styles";

export const ContactsSession = () => {
  const { contacts } = useContacts();
  const { searchValue } = useSearchValue();

  return (
    <>
      <ContactsMainStyled>
        {contacts
          .filter(
            (contact) =>
              contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              contact.emails[0].email
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              contact.phones[0].phone
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          )
          .map((contact) => {
            return <ContactCard contact={contact} key={contact.id} />;
          })}
      </ContactsMainStyled>
    </>
  );
};
