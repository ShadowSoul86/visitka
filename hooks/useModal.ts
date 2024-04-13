import { useEffect } from "react";
import { useAppSelector } from "./rtk";
import { useActions } from "@/redux/useActions";

export const useModal = () => {
  const modalData = useAppSelector((s) => s.modal.data);
  const isOpen = useAppSelector((s) => s.modal.isOpen);

  const { closeModal } = useActions();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return {
    isOpen,
    closeModal,
    modalData,
  };
};
