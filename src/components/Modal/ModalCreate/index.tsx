import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContent } from "./style";
import { IoIosClose } from "react-icons/io";
import { useContacts } from "../../../hooks/useAuth";
import { Modal } from "..";
import { ContactData, contactSchema } from "./schema";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";

interface iModalCreate {
  contentCreate: string;
}

export const ModalCreateContacts = ({ contentCreate }: iModalCreate) => {
  const { handleCloseModal, createContact, handleOpenModal } = useContacts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  let title;
  let formFields;

  if (contentCreate === "createContact") {
    title = "Criar um Contato";
    formFields = (
      <>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && errors.name.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && errors.email.message && (
            <p>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" {...register("phone")} />
          {errors.phone && errors.phone.message && (
            <p>{errors.phone.message}</p>
          )}
        </div>
      </>
    );
  } else if (contentCreate === "createEmail") {
    title = "Criar um Email";
    formFields = (
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && errors.email.message && <p>{errors.email.message}</p>}
      </div>
    );
  } else if (contentCreate === "createPhone") {
    title = "Criar um Telefone";
    formFields = (
      <div>
        <label htmlFor="phone">Telefone:</label>
        <input type="tel" id="phone" {...register("phone")} />
        {errors.phone && errors.phone.message && <p>{errors.phone.message}</p>}
      </div>
    );
  }

  return (
    <Modal maxwidth={500} title="">
      <ModalContent>
        <header>
          <h2>{title}</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <form onSubmit={handleSubmit(createContact)}>
          {formFields}
          <div className="button-div">
            <MediumButtonBrand type="submit">Cadastrar</MediumButtonBrand>
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
