import { useModal } from "@/hooks/useModal";
import { FC } from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/rtk";
import { useModalSlides } from "@/hooks/useModalSlides";
import Carousel from "../utils/Carousel";

const Modal: FC<any> = () => {
  const { isOpen, closeModal, modalData } = useModal();
  const curr = useAppSelector((s) => s.modal.currSlide);
  const { tapNext, tapPrev } = useModalSlides(modalData?.slides, curr);

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

        <div className="overflow-y-auto max-h-[700px] full:max-h-[1100px] scrollbar-hide">
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

          <div className="relative w-full overflow-hidden">
            <Carousel curr={curr}>
              {modalData?.slides?.map((s, i) => (
                <div
                  className="relative min-w-full h-[275px] medium:w-[580px] medium:h-[480px] flex"
                  key={i}
                >
                  <Image
                    width={400}
                    height={275}
                    src={s.img}
                    alt={s.alt}
                    className="flex justify-center items-center h-full w-full object-cover"
                  />
                  <div className="absolute w-full px-6 top-[50%] flex items-center justify-between">
                    <button
                      onClick={tapPrev}
                      className={`${
                        curr !== 0 ? "cursor-pointer" : "cursor-auto"
                      } outline-none`}
                    >
                      <svg
                        width="14"
                        height="23"
                        viewBox="0 0 14 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_543_2150)">
                          <path
                            d="M0.93934 10.4394C0.353553 11.0252 0.353553 11.9749 0.93934 12.5607L10.4853 22.1067C11.0711 22.6924 12.0208 22.6924 12.6066 22.1067C13.1924 21.5209 13.1924 20.5711 12.6066 19.9853L4.12132 11.5001L12.6066 3.01478C13.1924 2.42899 13.1924 1.47925 12.6066 0.893459C12.0208 0.307673 11.0711 0.307673 10.4853 0.893459L0.93934 10.4394ZM3 10.0001H2L2 13.0001H3V10.0001Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_543_2150">
                            <rect width="14" height="23" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>

                    <button
                      onClick={tapNext}
                      className={`${
                        curr !== modalData?.slides?.length - 1
                          ? "cursor-pointer"
                          : "cursor-auto"
                      }`}
                    >
                      <svg
                        width="15"
                        height="23"
                        viewBox="0 0 15 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_543_2152)">
                          <path
                            d="M13.5607 12.5607C14.1464 11.9749 14.1464 11.0252 13.5607 10.4394L4.01472 0.893459C3.42893 0.307673 2.47919 0.307673 1.8934 0.893459C1.30761 1.47925 1.30761 2.42899 1.8934 3.01478L10.3787 11.5001L1.8934 19.9853C1.30761 20.5711 1.30761 21.5209 1.8934 22.1067C2.47919 22.6924 3.42893 22.6924 4.01472 22.1067L13.5607 12.5607ZM11.5 13.0001H12.5V10.0001H11.5V13.0001Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_543_2152">
                            <rect
                              width="14"
                              height="23"
                              fill="white"
                              transform="matrix(-1 0 0 -1 14.5 23.0001)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>

            <div className="absolute bottom-[15px] left-[50%] translate-x-[-55%] flex items-center justify-between gap-[20px]">
              {modalData?.slides.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all rounded-full w-[10px] h-[10px] border-white border-solid border-[1px] ${
                    curr === i ? "bg-white" : "bg-none"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
