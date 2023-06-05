import { IoIosClose } from "react-icons/io";
import { Modal } from "..";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";
import { ModalContent } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, deleteSchema } from "./schema";
import { useContacts } from "../../../hooks/useAuth";

interface iModalEdit {
  contentDelete: string;
}
export const ModalDelete = ({ contentDelete }: iModalEdit) => {
  const { handleCloseModal, handleOpenModal, currentItem, deleteItem } =
    useContacts();
  const { handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(deleteSchema),
  });

  let title;
  let firstDiv;
  let type = "";

  if (contentDelete === "deleteContact") {
    title = "Deletar Contato";
    firstDiv = (
      <div>
        <h3>Tem certeza que quer deletar o Contato?</h3>
      </div>
    );
    type = "contact";
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
              onClick={() => handleOpenModal("seeMore")}
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
