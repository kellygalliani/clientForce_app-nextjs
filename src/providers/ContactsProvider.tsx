import { createContext, useEffect, useState } from "react";
import { ContactsContextValues, iContactsProviderProps } from "./interfaces";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ContactData } from "../components/Modal/ModalCreate/schema";

export const ContactsContext = createContext<ContactsContextValues>(
  {} as ContactsContextValues
);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const token = localStorage.getItem("clientForce:token");
    if (!token) {
      return;
    }

    try {
      const response = await api.get("/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const createContact = (data: ContactData) => {
    console.log(data);
    return data;
  };

  return (
    <ContactsContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        modalOpen,
        modalType,
        createContact,
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
