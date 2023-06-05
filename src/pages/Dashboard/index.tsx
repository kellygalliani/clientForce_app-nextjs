import { useEffect } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { MainStyled } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { ContactsSession } from "../../components/ContactsSession";
import { BigButtonBrand } from "../../styles/ButtonStyle";
import { HiArrowCircleUp } from "react-icons/hi";
import { useAuth, useContacts } from "../../hooks/useAuth";
import { ModalCreateContacts } from "../../components/Modal/ModalCreate";
import { ModalSeeMore } from "../../components/Modal/ModalSeeMore";
import { ModalEdit } from "../../components/Modal/ModalEdit";
import { ModalDelete } from "../../components/Modal/ModalDelete";

export const Dashboard = () => {
  const { modalOpen, modalType, handleOpenModal, contacts } = useContacts();
  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await api.get("/users");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <MainStyled id="inicio">
        <SearchInput />
        <div className="button_session">
          <BigButtonBrand onClick={() => handleOpenModal("createContact")}>
            Cadastrar Contato
          </BigButtonBrand>
        </div>
        <ContactsSession />

        <a href="#inicio">
          <HiArrowCircleUp className="arrow-up" />
        </a>
      </MainStyled>

      {modalOpen && modalType === "createContact" && (
        <ModalCreateContacts contentCreate={"createContact"} />
      )}
      {modalOpen && modalType === "createEmail" && (
        <ModalCreateContacts contentCreate={"createEmail"} />
      )}
      {modalOpen && modalType === "createPhone" && (
        <ModalCreateContacts contentCreate={"createPhone"} />
      )}
      {modalOpen && modalType === "editContact" && (
        <ModalEdit contentEdition={"editContact"} />
      )}
      {modalOpen && modalType === "editEmail" && (
        <ModalEdit contentEdition={"editEmail"} />
      )}
      {modalOpen && modalType === "editPhone" && (
        <ModalEdit contentEdition={"editPhone"} />
      )}
      {modalOpen && modalType === "deleteContact" && (
        <ModalDelete contentDelete={"deleteContact"} />
      )}
      {modalOpen && modalType === "deleteEmail" && (
        <ModalDelete contentDelete={"deleteEmail"} />
      )}
      {modalOpen && modalType === "deletePhone" && (
        <ModalDelete contentDelete={"deletePhone"} />
      )}
      {modalOpen && modalType === "seeMore" && <ModalSeeMore />}

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};
