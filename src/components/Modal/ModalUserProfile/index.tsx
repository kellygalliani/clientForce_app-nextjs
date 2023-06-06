import { ButtonModalSeeMore, ModalContent, ListModal } from "./style";
import { IoIosClose } from "react-icons/io";
import { useAuth, useContacts } from "../../../hooks/useAuth";
import { Modal } from "..";
import { SmallButtonBrand } from "../../../styles/ButtonStyle";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";
import { UserAvatar } from "../../Header/styles";
import Avatar from "../../../assets/user-avatar.jpg";

export const ModalSeeProfile = () => {
  const { handleCloseModal, handleOpenModal, setCurrentItem } = useContacts();

  const { user } = useAuth();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Modal maxwidth={900} title="Criar Contato">
      <ModalContent>
        <header>
          <h2>Editar Perfil</h2>
          <IoIosClose onClick={() => handleCloseModal()} />
        </header>
        <div className="modalContent--header">
          <div className="modalContent--header-informations">
            <p>Avatar:</p>
            <UserAvatar>
              <img src={user?.avatar || Avatar} alt="avatar" />
            </UserAvatar>
          </div>
          <div className="modalContent--header-informations">
            <p>Nome do Usuário:</p>
            <h2>{user?.name}</h2>
          </div>
          <div className="modalContent--header-informations">
            <p>Criado em:</p>
            <span>{user && formatDate(user?.createdAt)}</span>
          </div>
          <div className="modalContent--header-informations">
            <ButtonModalSeeMore>
              <SmallButtonBrand>
                <HiOutlinePencilAlt
                  onClick={() => {
                    setCurrentItem(user!.id);
                    handleOpenModal("editProfile");
                  }}
                />
              </SmallButtonBrand>

              <SmallButtonBrand>
                <HiOutlineTrash
                  onClick={() => {
                    setCurrentItem(user!.id);
                    handleOpenModal("deleteProfile");
                  }}
                />
              </SmallButtonBrand>
            </ButtonModalSeeMore>
          </div>
        </div>
        <div className="divisionModal" />
        <div className="addButton">
          <p>Adicionar novo Email</p>
          <BsPlusCircleFill
            onClick={() => handleOpenModal("createUserEmail")}
          />
        </div>
        <ListModal>
          {user?.email.map((email, index) => (
            <li key={index}>
              <p>
                EMAIL -{" "}
                {email.isPrimary
                  ? "Email de Login"
                  : `Opção número ${index + 1}`}
                :
              </p>
              <h2>{email.email}</h2>
              <div>
                <ButtonModalSeeMore>
                  <SmallButtonBrand
                    onClick={() => {
                      setCurrentItem(email!.id);
                      handleOpenModal("editUserEmail");
                    }}
                  >
                    <HiOutlinePencilAlt />
                  </SmallButtonBrand>

                  <SmallButtonBrand>
                    <HiOutlineTrash
                      onClick={() => {
                        setCurrentItem(email!.id);
                        handleOpenModal("deleteUserEmail");
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
          <BsPlusCircleFill
            onClick={() => handleOpenModal("createUserPhone")}
          />
        </div>
        <ListModal>
          {user?.phone.map((phone, index) => (
            <li key={index}>
              <p>PHONE - Opção número {index + 1}:</p>
              <h2>{phone.phone}</h2>
              <div>
                <ButtonModalSeeMore>
                  <SmallButtonBrand
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      setCurrentItem(phone!.id);
                      handleOpenModal("editUserPhone");
                    }}
                  >
                    <HiOutlinePencilAlt />
                  </SmallButtonBrand>

                  <SmallButtonBrand
                    onClick={() => {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      setCurrentItem(phone!.id);
                      handleOpenModal("deleteUserPhone");
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
