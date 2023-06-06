import { IoIosClose } from "react-icons/io";
import { Modal } from "..";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";
import { ModalContent } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditData, editUserSchema } from "./schema";
import { useAuth, useContacts } from "../../../hooks/useAuth";

interface iModalEdit {
  contentEdition: string;
}
export const ModalEditUserProfile = ({ contentEdition }: iModalEdit) => {
  const {
    handleCloseModal,
    handleOpenModal,
    currentItem,
    editUser,
    emailClicked,
  } = useContacts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditData>({
    resolver: zodResolver(editUserSchema),
  });

  let title;
  let firstDiv;

  if (contentEdition === "editUser") {
    title = "Editar suas Informações";
    firstDiv = (
      <>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && errors.name.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" {...register("avatar")} />
          {errors.avatar && errors.avatar.message && (
            <p>{errors.avatar.message}</p>
          )}
        </div>
      </>
    );
  } else if (contentEdition === "editEmail") {
    title = "Editar Email";
    firstDiv = (
      <>
        {" "}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && errors.email.message && (
            <p>{errors.email.message}</p>
          )}
        </div>
        {!emailClicked?.isPrimary && (
          <div>
            <label htmlFor="loginEmail">Tornar este o email de login?</label>
            <div className="radioInput">
              <input
                type="radio"
                id="loginEmailYes"
                name="loginEmail"
                value="yes"
              />

              <label htmlFor="loginEmailYes">Sim</label>
              <input
                type="radio"
                id="loginEmailNo"
                name="loginEmail"
                value="no"
                defaultChecked
              />
              <label htmlFor="loginEmailNo">Não</label>
            </div>
          </div>
        )}
      </>
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
        <form onSubmit={handleSubmit((data) => editUser(data, currentItem))}>
          {firstDiv}
          <div className="button-div">
            <MediumButtonBrand type="submit">Editar</MediumButtonBrand>
            <MediumButtonSecondary
              onClick={() => handleOpenModal("seeProfile")}
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
