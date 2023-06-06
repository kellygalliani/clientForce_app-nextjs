import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContent } from "./style";
import { IoIosClose } from "react-icons/io";
import { useContacts } from "../../../hooks/useAuth";
import { Modal } from "..";
import {
  ContactData,
  EmailData,
  PhoneData,
  contactSchema,
  emailSchema,
  phoneSchema,
} from "./schema";
import {
  MediumButtonBrand,
  MediumButtonSecondary,
} from "../../../styles/ButtonStyle";

interface iModalCreate {
  contentCreate: string;
}

export const ModalCreateUserContacts = ({ contentCreate }: iModalCreate) => {
  const schema =
    contentCreate === "createContact"
      ? contactSchema
      : contentCreate === "createEmail"
      ? emailSchema
      : phoneSchema;
  type FormData = ContactData | EmailData | PhoneData;
  const { handleCloseModal, create, handleOpenModal, currentContact } =
    useContacts();
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  let title;
  let formFields;

  if (contentCreate === "createEmail") {
    title = "Criar um Email";
    formFields = (
      <>
        <p>Incluir um e-mail na sua lista?</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} required />
        </div>
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
      </>
    );
  } else if (contentCreate === "createPhone") {
    title = "Criar um Telefone";
    formFields = (
      <>
        <p>Incluir um telefone na lista?</p>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" {...register("phone")} required />
        </div>
      </>
    );
  }

  return (
    <Modal maxwidth={500} title="">
      <ModalContent>
        <header>
          <h2>{title}</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <form onSubmit={handleSubmit(create)}>
          {formFields}
          <div className="button-div">
            <MediumButtonBrand type="submit">Cadastrar</MediumButtonBrand>
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
