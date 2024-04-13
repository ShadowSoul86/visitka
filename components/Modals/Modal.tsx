import { FC, useEffect } from "react";
import { closeModal, selectModalOpen } from "@/redux/modal/modal.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";

const Modal: FC<any> = () => {
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

  return isOpen ? (
    <div className="modal-bg">
      <div className="modal w-[468px] medium:w-[635px]">
        <button
          className="absolute z-50 top-0 right-[-50px]"
          onClick={handleCloseModal}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 2L2 32"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2 2L32 32"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-[18px] max-w-[407px] text-center mx-auto">
          <h2 className={`font-sans font-bold text-[40px] text-center`}>
            {modalData?.title}
          </h2>
          <div className={`text-[16px] text-my-brown`}>{modalData?.descr}</div>
        </div>

        <ul className="mt-[40px] mb-[50px]">
          {modalData?.list?.map(({ title, text }, i) => {
            return (
              <li className="flex flex-col gap-[15px]" key={i}>
                <div className={`h-[1px] w-full bg-my-modal-line`} />
                <div
                  className={`text-[16px] flex justify-between items-center`}
                >
                  <div className="font-bold">{title}</div>
                  <div className="w-full font-normal text-my-grey text-left max-w-[265px] ">
                    {text}
                  </div>
                </div>
                <div
                  className={`${
                    i === modalData.list.length - 1
                      ? "h-[1px] w-full bg-my-modal-line"
                      : null
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default Modal;
