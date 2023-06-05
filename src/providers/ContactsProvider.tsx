import { createContext, useEffect, useState } from "react";
import {
  Contact,
  ContactsContextValues,
  iContactsProviderProps,
} from "./interfaces";
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
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentContact, setCurrentContact] = useState<Contact>();
  const [currentItem, setCurrentItem] = useState<string>("");

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

  const create = async (data: ContactData) => {
    try {
      if (data.email && data.name && data.phone) {
        const response = await api.post("/contacts", data);
        setContacts((prevContacts) => [response.data, ...prevContacts]);
        handleCloseModal();
      } else if (data.email || data.phone) {
        await api.patch(`/contacts/${currentContact?.id}`, data);

        setCurrentContact((prevCurrentContact) => {
          if (!prevCurrentContact) return undefined;
          return {
            ...prevCurrentContact,
            emails: data.email
              ? [
                  ...prevCurrentContact.emails,
                  { email: data.email, id: "", isPrimary: false },
                ]
              : prevCurrentContact.emails,
            phones: data.phone
              ? [
                  ...prevCurrentContact.phones,
                  { phone: data.phone, id: "", isPrimary: false },
                ]
              : prevCurrentContact.phones,
          };
        });
        handleOpenModal("seeMore");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const edit = async (data: ContactData, idItem: string) => {
    try {
      if (data.name) {
        await api.patch(`/contacts/${idItem}`, data);
      } else if (data.email) {
        await api.patch(`/contacts/email/${idItem}`, data);
      } else if (data.phone) {
        await api.patch(`/contacts/phone/${idItem}`, data);
      }
      getContacts();
      handleOpenModal("seeMore");

      setCurrentContact((prevCurrentContact) => {
        if (!prevCurrentContact) return undefined;
        return {
          ...prevCurrentContact,
          name: data.name || prevCurrentContact.name,
          emails: data.email
            ? prevCurrentContact.emails.map((email) =>
                email.id === idItem ? { ...email, email: data.email } : email
              )
            : prevCurrentContact.emails,
          phones: data.phone
            ? prevCurrentContact.phones.map((phone) =>
                phone.id === idItem ? { ...phone, phone: data.phone } : phone
              )
            : prevCurrentContact.phones,
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        modalOpen,
        modalType,
        create,
        contacts,
        setContacts,
        currentContact,
        setCurrentContact,
        edit,
        currentItem,
        setCurrentItem,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
