import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ContactsContext } from "../providers/ContactsProvider";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export const useContacts = () => {
  const contactsContext = useContext(ContactsContext);

  return contactsContext;
};
