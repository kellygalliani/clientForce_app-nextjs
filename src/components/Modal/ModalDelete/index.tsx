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
  const { handleCloseModal, handleOpenModal } = useContacts();
  const { handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(deleteSchema),
  });

  let title;
  let firstDiv;

  if (contentDelete === "deleteContact") {
    title = "Deletar Contato";
    firstDiv = (
      <div>
        <p>Tem certeza que quer deletar o Contato?</p>
      </div>
    );
  } else if (contentDelete === "deleteEmail") {
    title = "Deletar Email";
    firstDiv = (
      <div>
        <p>Tem certeza que quer deletar o Email?</p>
      </div>
    );
  } else if (contentDelete === "deletePhone") {
    title = "Deletar Telefone";
    firstDiv = (
      <div>
        <h3>Tem certeza que quer deletar o Telefone?</h3>
      </div>
    );
  }

  const onSubmit = (data: ContactData) => {
    // handle form submission here
    console.log(data);
  };

  return (
    <Modal maxwidth={500} title="Criar Contato">
      <ModalContent>
        <header>
          <h2>{title}</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          {firstDiv}
          <div className="button-div">
            <MediumButtonBrand type="submit">Deletar</MediumButtonBrand>
            <MediumButtonSecondary
              onClick={() => handleOpenModal("seeMore")}
              type="button"
            >
              Voltar
            </MediumButtonSecondary>
          </div>
        </form>
      </ModalContent>
    </Modal>
  );
};
