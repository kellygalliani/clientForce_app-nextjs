import { IoIosClose } from "react-icons/io";
import { Modal } from "..";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";
import { ModalContent } from "./style";
import { useContacts } from "../../../hooks/useAuth";

interface iModalEdit {
  contentDelete: string;
}
export const ModalDeleteUser = ({ contentDelete }: iModalEdit) => {
  const { handleCloseModal, handleOpenModal, currentItem, deleteItem } =
    useContacts();

  let title;
  let firstDiv;
  let type = "";

  if (contentDelete === "deleteUser") {
    title = "Deletar Usuário";
    firstDiv = (
      <div>
        <h3>Tem certeza que quer deletar sua conta?</h3>
      </div>
    );
    type = "user";
  } else if (contentDelete === "deleteEmail") {
    title = "Deletar Email";
    firstDiv = (
      <div>
        <h3>Tem certeza que quer deletar o Email?</h3>
      </div>
    );
    type = "email";
  } else if (contentDelete === "deletePhone") {
    title = "Deletar Telefone";
    firstDiv = (
      <div>
        <h3>Tem certeza que quer deletar o Telefone?</h3>
      </div>
    );
    type = "phone";
  }

  return (
    <Modal maxwidth={500} title="Criar Contato">
      <ModalContent>
        <header>
          <h2>{title}</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <main>
          {firstDiv}
          <div className="button-div">
            <MediumButtonBrand
              onClick={() => deleteItem(currentItem, type)}
              type="submit"
            >
              Deletar
            </MediumButtonBrand>
            <MediumButtonSecondary
              onClick={() => handleOpenModal("seeProfile")}
              type="button"
            >
              Voltar
            </MediumButtonSecondary>
          </div>
        </main>
      </ModalContent>
    </Modal>
  );
};
