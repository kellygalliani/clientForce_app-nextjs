import { IoIosClose } from "react-icons/io";
import { Modal } from "..";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";
import { ModalContent } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditData } from "./schema";
import { useContacts } from "../../../hooks/useAuth";
import { emailSchema } from "../ModalCreate/schema";

interface iModalEdit {
  contentEdition: string;
}
export const ModalEdit = ({ contentEdition }: iModalEdit) => {
  const {
    handleCloseModal,
    edit,
    handleOpenModal,
    currentItem,
    currentContact,
  } = useContacts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditData>({
    resolver: zodResolver(emailSchema),
  });

  let title;
  let firstDiv;

  if (contentEdition === "editContact") {
    title = "Editar Contato";
    firstDiv = (
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && errors.name.message && <p>{errors.name.message}</p>}
      </div>
    );
  } else if (contentEdition === "editEmail") {
    title = "Editar Email";
    firstDiv = (
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && errors.email.message && <p>{errors.email.message}</p>}
      </div>
    );
  } else if (contentEdition === "editPhone") {
    title = "Editar Telefone";
    firstDiv = (
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input type="tel" id="phone" {...register("phone")} />
        {errors.phone && errors.phone.message && <p>{errors.phone.message}</p>}
      </div>
    );
  }

  return (
    <Modal maxwidth={500} title="Criar Contato">
      <ModalContent>
        <header>
          <h2>{title}</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <form onSubmit={handleSubmit((data) => edit(data, currentItem))}>
          {firstDiv}
          <div className="button-div">
            <MediumButtonBrand type="submit">Editar</MediumButtonBrand>
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
