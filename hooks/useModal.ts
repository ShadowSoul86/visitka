import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./rtk";
import { closeModal, selectModalOpen } from "@/redux/modal/modal.slice";

export const useModal = () => {
  const modalData = useAppSelector((s) => s.modal.data);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectModalOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleCloseModal();
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
    handleCloseModal,
    modalData,
  }
}