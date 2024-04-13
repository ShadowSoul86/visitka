import { useModal } from "@/hooks/useModal";
import { FC } from "react";

const Modal: FC<any> = () => {
  const { isOpen, closeModal, modalData } = useModal();

  return isOpen ? (
    <div className="modal-bg">
      <div className="modal w-[468px] medium:w-[635px] pad:w-[832px] mac:w-[900px] full:w-[1010px]">
        <button
          className="absolute z-50 top-[15px] right-[-40px]"
          onClick={() => closeModal()}
        >
          <svg
            className="medium:w-[30px] medium:h-[30px]"
            width={`25`}
            height={`25`}
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

        <div className="flex flex-col gap-[18px] text-center mx-auto max-w-[407px] medium:max-w-[532px] mac:max-w-[569px] full:max-w-[630px]">
          <h2
            className={`font-sans font-bold text-center text-[40px] medium:text-[48px]`}
          >
            {modalData?.title}
          </h2>
          <div
            className={`text-my-brown text-[16px] pad:text-[20px] full:text-[24px]`}
          >
            {modalData?.descr}
          </div>
        </div>

        <ul className="mt-[40px] mb-[50px]">
          {modalData?.list?.map(({ title, text }, i) => {
            return (
              <li className="flex flex-col gap-[15px]" key={i}>
                <div className={`h-[1px] w-full bg-my-modal-line`} />
                <div
                  className={`text-[16px] pad:text-[18px] full:text-[20px] flex justify-between`}
                >
                  <div className="font-bold w-full max-w-[93px] medium:max-w-[200px] full:max-w-[300px] text-wrap">
                    {title}
                  </div>
                  <div className="w-full font-normal text-my-grey text-left max-w-[265px] medium:max-w-[360px] pad:max-w-[466px] mac:max-w-[496px] full:max-w-[580px]">
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
