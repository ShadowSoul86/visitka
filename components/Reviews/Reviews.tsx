import Image from "next/image";
import { FC } from "react";
import Carousel from "./Carousel";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { next, prev } from "@/redux/reviews/reviews.slice";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

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

const Reviews: FC = () => {
  const slides = useAppSelector((s) => s.reviews.slides);
  const dispatch = useAppDispatch();

  const curr = useAppSelector((s) => s.reviews.curr);

  const tapNext = () => {
    if (curr !== slides.length - 1) {
      dispatch(next());
    }
  };
  const tapPrev = () => {
    if (curr !== 0) {
      dispatch(prev());
    }
  };

  return (
    <div className="flex flex-col gap-[35px]">
      <h2
        className={`${kurier.variable} font-sans font-bold uppercase text-[48px]`}
      >
        отзывы
      </h2>
      <div className="flex flex-col gap-[45px]">
        <div>
          <Carousel>
            {slides.map((s, i) => (
              <div className="min-w-full h-full flex justify-between" key={i}>
                <div className="max-w-[740px] w-full flex flex-col gap-5">
                  <div className="flex flex-col gap-[5px]">
                    <div className={`${inter.className} text-[20px]`}>{s.name}</div>
                    <div className={`${inter.className} text-[20px] text-my-grey`}>{s.date}</div>
                  </div>
                  <div className={`${inter.className} text-[28px]`}>{s.text}</div>
                </div>

                <div className="max-w-[652.5px] w-full">
                  <Image
                    width={652}
                    height={450}
                    src={s.img}
                    alt={s.alt}
                    className="h-full max-w-[652px] object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={tapPrev}
            className={`${curr !== 0 ? "cursor-pointer" : "cursor-auto"}`}
          >
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_381_1500)">
                <path
                  d="M1.18934 10.4393C0.603553 11.0251 0.603553 11.9749 1.18934 12.5607L10.7353 22.1066C11.3211 22.6924 12.2708 22.6924 12.8566 22.1066C13.4424 21.5208 13.4424 20.5711 12.8566 19.9853L4.37132 11.5L12.8566 3.01472C13.4424 2.42893 13.4424 1.47919 12.8566 0.893398C12.2708 0.307611 11.3211 0.307611 10.7353 0.893398L1.18934 10.4393ZM3.25 10H2.25V13H3.25V10Z"
                  fill={curr === 0 ? "#909090" : "#261C15"}
                />
              </g>
              <defs>
                <clipPath id="clip0_381_1500">
                  <rect
                    width="14"
                    height="23"
                    fill="white"
                    transform="translate(0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="flex items-center justify-between gap-[63.5px]">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                transition-all w-[200px] mac:w-[165px] h-1 ${
                  curr === i ? "bg-my-green" : "bg-my-slider"
                }
              `}
              />
            ))}
          </div>
          <button
            onClick={tapNext}
            className={`${
              curr !== slides.length - 1 ? "cursor-pointer" : "cursor-auto"
            }`}
          >
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_381_1509)">
                <path
                  d="M13.8107 10.4393C14.3964 11.0251 14.3964 11.9749 13.8107 12.5607L4.26472 22.1066C3.67893 22.6924 2.72919 22.6924 2.1434 22.1066C1.55761 21.5208 1.55761 20.5711 2.1434 19.9853L10.6287 11.5L2.1434 3.01472C1.55761 2.42893 1.55761 1.47919 2.1434 0.893398C2.72919 0.307611 3.67893 0.307611 4.26472 0.893398L13.8107 10.4393ZM11.75 10H12.75V13H11.75V10Z"
                  fill={curr === slides.length - 1 ? "#909090" : "#261C15"}
                />
              </g>
              <defs>
                <clipPath id="clip0_381_1509">
                  <rect
                    width="14"
                    height="23"
                    fill="white"
                    transform="translate(0.75)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
