import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { MainStyled } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { ContactsSession } from "../../components/ContactsSession";
import {
  BigButtonBrand,
  MediumButtonSecondary,
} from "../../styles/ButtonStyle";
import { HiArrowCircleUp } from "react-icons/hi";
import { useAuth, useContacts } from "../../hooks/useAuth";
import { ModalCreateContacts } from "../../components/Modal/ModalCreate";
import { ModalSeeMore } from "../../components/Modal/ModalSeeMore";
import { ModalEdit } from "../../components/Modal/ModalEdit";
import { ModalDelete } from "../../components/Modal/ModalDelete";
import { ReactPDF } from "../../components/ReactPDF/ReactPDF";
import { ModalSeeProfile } from "../../components/Modal/ModalUserProfile";
import { ModalEditUserProfile } from "../../components/Modal/ModalEdit/editUserProfile";
import { ModalDeleteUser } from "../../components/Modal/ModalDelete/deleteUser";
import { ModalCreateUserContacts } from "../../components/Modal/ModalCreate/createUserInformations";

export const Dashboard = () => {
  const { modalOpen, modalType, handleOpenModal } = useContacts();
  const { setUser } = useAuth();
  const [showReport, _setShowReport] = useState(false);

  const handleGenerateReport = () => {
    return <ReactPDF />;
  };

  return (
    <>
      <Header />
      <MainStyled id="inicio">
        <SearchInput />
        <div className="button_session">
          <MediumButtonSecondary onClick={handleGenerateReport}>
            Gerar Relatório
          </MediumButtonSecondary>
          <BigButtonBrand onClick={() => handleOpenModal("createContact")}>
            Cadastrar Contato
          </BigButtonBrand>
        </div>

        <ContactsSession />

        <a href="#inicio">
          <HiArrowCircleUp className="arrow-up" />
        </a>
      </MainStyled>
      <ReactPDF />

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
      {modalOpen && modalType === "seeProfile" && <ModalSeeProfile />}
      {modalOpen && modalType === "createUserEmail" && (
        <ModalCreateUserContacts contentCreate={"createEmail"} />
      )}
      {modalOpen && modalType === "createUserPhone" && (
        <ModalCreateUserContacts contentCreate={"createPhone"} />
      )}
      {modalOpen && modalType === "editProfile" && (
        <ModalEditUserProfile contentEdition={"editUser"} />
      )}
      {modalOpen && modalType === "editUserEmail" && (
        <ModalEditUserProfile contentEdition={"editEmail"} />
      )}
      {modalOpen && modalType === "editUserPhone" && (
        <ModalEditUserProfile contentEdition={"editPhone"} />
      )}
      {modalOpen && modalType === "deleteProfile" && (
        <ModalDeleteUser contentDelete={"deleteUser"} />
      )}
      {modalOpen && modalType === "deleteUserEmail" && (
        <ModalDeleteUser contentDelete={"deleteEmail"} />
      )}
      {modalOpen && modalType === "deleteUserPhone" && (
        <ModalDeleteUser contentDelete={"deletePhone"} />
      )}

      {/* {showReport && <ReactPDF />} */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};
