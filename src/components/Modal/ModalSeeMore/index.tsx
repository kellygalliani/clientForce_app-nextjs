import { ButtonModalSeeMore, ModalContent, ListModal } from "./style";
import { IoIosClose } from "react-icons/io";
import { useContacts } from "../../../hooks/useAuth";
import { Modal } from "..";
import { SmallButtonBrand } from "../../../styles/ButtonStyle";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";

export const ModalSeeMore = () => {
  const {
    handleCloseModal,
    handleOpenModal,
    currentContact,
    deleteItem,
    setCurrentItem,
  } = useContacts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Modal maxwidth={900} title="Criar Contato">
      <ModalContent>
        <header>
          <h2>Detalhes do Contato</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <div className="modalContent--header">
          <div className="modalContent--header-informations">
            <p>Nome do Contato:</p>
            <h2>{currentContact?.name}</h2>
          </div>
          <div className="modalContent--header-informations">
            <p>Criado em:</p>
            <span>
              {currentContact && formatDate(currentContact?.createdAt)}
            </span>
          </div>

          <ButtonModalSeeMore>
            <SmallButtonBrand>
              <HiOutlinePencilAlt
                onClick={() => {
                  setCurrentItem(currentContact!.id);
                  handleOpenModal("editContact");
                }}
              />
            </SmallButtonBrand>

            <SmallButtonBrand>
              <HiOutlineTrash
                onClick={() => {
                  setCurrentItem(currentContact!.id);
                  handleOpenModal("deleteContact");
                }}
              />
            </SmallButtonBrand>
          </ButtonModalSeeMore>
        </div>
        <div className="divisionModal" />
        <div className="addButton">
          <p>Adicionar novo Email</p>
          <BsPlusCircleFill onClick={() => handleOpenModal("createEmail")} />
        </div>
        <ListModal>
          {currentContact?.emails.map((email, index) => (
            <li key={index}>
              <p>EMAIL - Opção número {index + 1}:</p>
              <h2>{email.email}</h2>
              <div>
                <ButtonModalSeeMore>
                  <SmallButtonBrand
                    onClick={() => {
                      setCurrentItem(email!.id);
                      handleOpenModal("editEmail");
                    }}
                  >
                    <HiOutlinePencilAlt />
                  </SmallButtonBrand>

                  <SmallButtonBrand>
                    <HiOutlineTrash
                      onClick={() => {
                        setCurrentItem(email!.id);
                        handleOpenModal("deleteEmail");
                      }}
                    />
                  </SmallButtonBrand>
                </ButtonModalSeeMore>
              </div>
            </li>
          ))}
        </ListModal>
        <div className="divisionModal" />
        <div className="addButton">
          <p>Adicionar novo Telefone</p>
          <BsPlusCircleFill onClick={() => handleOpenModal("createPhone")} />
        </div>
        <ListModal>
          {currentContact?.phones.map((phone, index) => (
            <li key={index}>
              <p>PHONE - Opção número {index + 1}:</p>
              <h2>{phone.phone}</h2>
              <div>
                <ButtonModalSeeMore>
                  <SmallButtonBrand
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      setCurrentItem(phone!.id);
                      handleOpenModal("editPhone");
                    }}
                  >
                    <HiOutlinePencilAlt />
                  </SmallButtonBrand>

                  <SmallButtonBrand
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      setCurrentItem(phone!.id);
                      handleOpenModal("deletePhone");
                    }}
                  >
                    <HiOutlineTrash />
                  </SmallButtonBrand>
                </ButtonModalSeeMore>
              </div>
            </li>
          ))}
        </ListModal>
      </ModalContent>
    </Modal>
  );
};
