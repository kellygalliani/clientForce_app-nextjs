import { ButtonModalSeeMore, ModalContent, ListModal } from "./style";
import { IoIosClose } from "react-icons/io";
import { useContacts } from "../../../hooks/useAuth";
import { Modal } from "..";
import { SmallButtonBrand } from "../../../styles/ButtonStyle";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";

export const ModalSeeMore = () => {
  const { handleCloseModal, createContact, handleOpenModal } = useContacts();

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
            <h2>Nome Completo do Cliente</h2>
          </div>
          <div className="modalContent--header-informations">
            <p>Criado em:</p>
            <span>25/07/20023</span>
          </div>

          <ButtonModalSeeMore>
            <SmallButtonBrand>
              <HiOutlinePencilAlt
                onClick={() => handleOpenModal("editContact")}
              />
            </SmallButtonBrand>

            <SmallButtonBrand>
              <HiOutlineTrash
                onClick={() => handleOpenModal("deleteContact")}
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
          <li>
            <p>EMAIL - Opção número {1}:</p>
            <h2>Nome Completo do Cliente</h2>
            <div>
              <ButtonModalSeeMore>
                <SmallButtonBrand onClick={() => handleOpenModal("editEmail")}>
                  <HiOutlinePencilAlt />
                </SmallButtonBrand>

                <SmallButtonBrand>
                  <HiOutlineTrash
                    onClick={() => handleOpenModal("deleteEmail")}
                  />
                </SmallButtonBrand>
              </ButtonModalSeeMore>
            </div>
          </li>
        </ListModal>
        <div className="divisionModal" />
        <div className="addButton">
          <p>Adicionar novo Telefone</p>
          <BsPlusCircleFill onClick={() => handleOpenModal("createPhone")} />
        </div>
        <ListModal>
          <li>
            <p>PHONE - Opção número {1}:</p>
            <h2>Nome Completo do Cliente</h2>
            <div>
              <ButtonModalSeeMore>
                <SmallButtonBrand>
                  <HiOutlinePencilAlt
                    onClick={() => handleOpenModal("editPhone")}
                  />
                </SmallButtonBrand>

                <SmallButtonBrand>
                  <HiOutlineTrash
                    onClick={() => handleOpenModal("deletePhone")}
                  />
                </SmallButtonBrand>
              </ButtonModalSeeMore>
            </div>
          </li>
        </ListModal>
      </ModalContent>
    </Modal>
  );
};
