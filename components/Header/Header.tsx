import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import ClosedMenu from "@/public/img/menu.svg";
import OpenedMenu from "@/public/img/closemenu.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import { setIsOpened } from "@/redux/header/header.slice";

const Header = () => {
  const isOpended = useAppSelector((s) => s.header.isOpended);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* navigation */}
      <div className="flex justify-between font-sans items-center">
        <Image
          width={32}
          height={44}
          className="flex items-center justify-center object-cover"
          src={Logo}
          alt="logo"
        />

        <div
          onClick={() => dispatch(setIsOpened(!isOpended))}
          className="block mac:hidden"
        >
          {isOpended ? (
            <Image width={40} height={21} src={OpenedMenu} alt="menu" />
          ) : (
            <Image width={40} height={21} src={ClosedMenu} alt="menu" />
          )}
        </div>

        <nav className="hidden mac:block">
          <ul
            className={`flex gap-[48px] items-center text-white text-[16px] full:text-[18px]`}
          >
            <li>
              <a href="">Обо мне</a>
            </li>
            <li>
              <a href="">Портфолио</a>
            </li>
            <li>
              <a href="">Услуги</a>
            </li>
            <li>
              <a href="">Запись</a>
            </li>
            <li>
              <a href="">Отзывы</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* content */}
      <div>
        <h1
          className={`font-sans header-h1`}
        >
          <div className="text-left text-my-brown uppercase w-full max-w-[472px] pad:max-w-[827px] mac:max-w-[1249px]">
            Искусство
          </div>
          <div className="mr-[7%] mini:mr-0 text-right text-my-white uppercase">
            Волос
          </div>
        </h1>

        <div
          className={`header-content`}
        >
          <div className="header-text">
            Имя Фамилия откроет вам мир, где красота волос становится
            искусством.
          </div>

          <div className="header-btns">
            <button className="header-btn text-my-brown bg-my-green border-none ">
              Записаться
            </button>
            <button className="header-btn text-my-grey border border-solid border-my-green ">
              Смотреть услуги
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
