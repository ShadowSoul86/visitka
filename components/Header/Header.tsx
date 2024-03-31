import Image from "next/image";

import Logo from "@/public/img/logo.svg";
import ClosedMenu from "@/public/img/menu.svg";
import OpenedMenu from "@/public/img/closemenu.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { setIsOpened } from "@/redux/header/header.slice";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

import classes from "./Header.module.scss";

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

const Header = () => {
  const isOpended = useAppSelector((s) => s.header.isOpended);
  const dispatch = useAppDispatch();

  return (
    <div className={`${kurier.variable}`}>
      {/* navigation */}
      <div className="flex justify-between font-sans items-center">
        <Image
          width={32}
          height={44}
          className="flex items-center justify-center object-cover"
          src={Logo}
          alt="logo"
        />
        <nav className={classes.navbar}>
          <ul
            className={`flex gap-[48px] items-center text-white ${inter.className}`}
          >
            <li className={classes.navbar_list_item}>
              <a href="">Обо мне</a>
            </li>
            <li className={classes.navbar_list_item}>
              <a href="">Портфолио</a>
            </li>
            <li className={classes.navbar_list_item}>
              <a href="">Услуги</a>
            </li>
            <li className={classes.navbar_list_item}>
              <a href="">Запись</a>
            </li>
            <li className={classes.navbar_list_item}>
              <a href="">Отзывы</a>
            </li>
            <li className={classes.navbar_list_item}>
              <a href="">Контакты</a>
            </li>
          </ul>
        </nav>
        {/* <div onClick={() => dispatch(setIsOpened(!isOpended))} className={classes.menu}>
          {isOpended ? (
            <Image width={40} height={21} src={OpenedMenu} alt="menu" />
          ) : (
            <Image width={40} height={21} src={ClosedMenu} alt="menu" />
          )}
        </div> */}
      </div>

      {/* content */}
      <div>
        <h1 className={`mac:text-[148px] text-[178px] font-sans font-bold ${kurier.variable}`}>
          <div className="text-left text-my-brown uppercase">Искусство</div>
          <div className="text-right text-my-white uppercase">Волос</div>
        </h1>

        <div
          className={`${inter.className} mac:w-[546px] w-[708px] flex flex-col gap-[45px]`}
        >
          <div className="text-my-brown font-normal text-[28px] leading-[160%]">
            Имя Фамилия откроет вам мир, где красота волос становится
            искусством.
          </div>
          <div className="flex justify-between gap-[25px]">
            <button className="mac:w-[259px] w-[377px] h-16 cursor-pointer bg-my-green border-none rounded-lg">
              Записаться
            </button>
            <button className="mac:w-[259px] w-[377px] h-16 cursor-pointer border border-solid border-my-green rounded-lg">
              Смотреть услуги
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
