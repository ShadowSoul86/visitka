import { FC, useEffect } from "react";
import { closeModal, selectModalOpen } from "@/redux/modal/modal.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

const kurier = localFont({
  src: [
    {
      path: "../../public/fonts/KurierLight-Regular.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Kurier-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kurier-Bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-kurier",
});

const inter = Inter({ subsets: ["latin"] });

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
    <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
      <div className="relative bg-white px-[60px] pt-[45px] pb-[130px] rounded-[25px] shadow-md w-[1010px]">
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

        <div className="flex flex-col gap-[18px] max-w-[630px] text-center mx-auto">
          <h2
            className={`${kurier.variable} font-sans font-bold text-[48px] text-center`}
          >
            {modalData?.title}
          </h2>
          <div className={`${inter.className} text-[24px] text-my-brown`}>
            {modalData?.descr}
          </div>
        </div>

        <ul className="mt-[60px] mb-[80px]">
          {modalData?.list?.map(({ title, text }, i) => {
            return (
              <li className="flex flex-col gap-[25px]" key={i}>
                <div className={`h-[1px] w-full bg-my-modal-line`} />
                <div className={` ${inter.className} text-[20px] flex justify-between items-center`}>
                  <div className="font-bold">{title}</div>
                  <div className="max-w-[580px] w-full font-normal text-my-grey text-left">{text}</div>
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
