import { useEffect, useRef } from "react";
import { useContacts } from "../../hooks/useAuth";
import { ModalBackground, ModalWrapper } from "./style";
import { createPortal } from "react-dom";

interface iModal {
  children: React.ReactNode;
  maxwidth: number;
  title: string;
}
export const Modal = ({ children, maxwidth, title }: iModal) => {
  const { handleCloseModal, handleOpenModal } = useContacts();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLDivElement)) {
        handleCloseModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handleCloseModal, handleOpenModal]);

  return createPortal(
    <ModalBackground>
      <ModalWrapper maxwidth={maxwidth} ref={ref}>
        {children}
      </ModalWrapper>
    </ModalBackground>,
    document.body
  );
};
