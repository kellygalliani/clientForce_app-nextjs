import { createContext, useEffect, useState } from "react";
import {
  Contact,
  ContactsContextValues,
  UserDataEdit,
  iContactsProviderProps,
} from "./interfaces";
import { api } from "../services/api";
import { ContactData } from "../components/Modal/ModalCreate/schema";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuth";
export const ContactsContext = createContext<ContactsContextValues>(
  {} as ContactsContextValues
);

export const ContactsProvider = ({ children }: iContactsProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentContact, setCurrentContact] = useState<Contact>();
  const [currentItem, setCurrentItem] = useState<string>("");
  const { user, setUser } = useAuth();

  const getUser = async () => {
    const token = localStorage.getItem("clientForce:token");
    if (!token) {
      return;
    }

    try {
      const response = await api.get("/users");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
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
        const responsePromise = api.post("/contacts", data);
        toast.promise(responsePromise, {
          pending: "Criando contato...",
          success: "Contato criado com sucesso 👌",
          error: "Não foi possível criar o contato, tente novamente 🤯",
        });
        const response = await responsePromise;
        setContacts((prevContacts) => [response.data, ...prevContacts]);
        handleCloseModal();
      } else if (data.email || data.phone) {
        const responsePromise = api.patch(
          `/contacts/${currentContact?.id}`,
          data
        );
        toast.promise(responsePromise, {
          pending: "Atualizando contato...",
          success: "Contato atualizado com sucesso 👌",
          error: "Não foi possível atualizar o contato, tente novamente 🤯",
        });
        await responsePromise;

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
      let responsePromise;
      if (data.name) {
        responsePromise = api.patch(`/contacts/${idItem}`, data);
      } else if (data.email) {
        responsePromise = api.patch(`/contacts/email/${idItem}`, data);
      } else if (data.phone) {
        responsePromise = api.patch(`/contacts/phone/${idItem}`, data);
      }
      if (responsePromise) {
        toast.promise(responsePromise, {
          pending: "Editando contato...",
          success: "Contato editado com sucesso 👌",
          error: "Não foi possível editar o contato, tente novamente 🤯",
        });
        await responsePromise;
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

  const deleteItem = async (idItem: string, type: string) => {
    try {
      let responsePromise;
      if (type === "contact") {
        responsePromise = api.delete(`/contacts/${idItem}`);
      } else if (type === "email") {
        responsePromise = api.delete(`/contacts/email/${idItem}`);
      } else if (type === "phone") {
        responsePromise = api.delete(`/contacts/phone/${idItem}`);
      }
      if (responsePromise) {
        toast.promise(responsePromise, {
          pending: "Deletando...",
          success: "Deletado com sucesso 👌",
          error: "Não foi possível deletar, tente novamente 🤯",
        });
        await responsePromise;
      }
      getContacts();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (data: UserDataEdit, id: string) => {
    console.log(data);
    try {
      let responsePromise;
      if (data.avatar && !data.name) {
        data.name = user?.name;
      }
      if (data.name || data.avatar) {
        responsePromise = api.patch(`/users/${id}`, data);
      } else if (data.email) {
        responsePromise = api.patch(`/users/email/${id}`, data);
      } else if (data.phone) {
        responsePromise = api.patch(`/users/phone/${id}`, data);
      }
      if (responsePromise) {
        toast.promise(responsePromise, {
          pending: "Editando usuário...",
          success: "Usuário editado com sucesso 👌",
          error: "Não foi possível editar o usuário, tente novamente 🤯",
        });
        const response = await responsePromise;
        handleOpenModal("seeProfile");
        getUser();
        setUser((prevUser) => {
          if (!prevUser) return null;
          return {
            ...prevUser,
            name: data.name || prevUser.name,
            avatar: data.avatar || prevUser.avatar,
            email: data.email
              ? prevUser.email.map((email) =>
                  email.id === id
                    ? { ...email, email: data.email as string }
                    : email
                )
              : prevUser.email,
            phone: data.phone
              ? prevUser.phone.map((phone) =>
                  phone.id === id
                    ? { ...phone, phone: data.phone as string }
                    : phone
                )
              : prevUser.phone,
          };
        });
      }
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
        deleteItem,
        editUser,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
