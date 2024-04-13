import Image from "next/image";
import ClosedMenu from "@/public/img/menu.svg";
import OpenedMenu from "@/public/img/closemenu.svg";

import { useHeader } from "@/hooks/useHeader";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Menu = () => {
  const { isOpended, setIsOpened } = useHeader();

  return (
    <div
      style={inter.style}
      onClick={() => setIsOpened(!isOpended)}
      className="block mac:hidden"
    >
      {!isOpended ? (
        <Image width={40} height={21} src={ClosedMenu} alt="closeSign" />
      ) : (
        <div className="mobile-menu-bg">
          <nav className="mobile-menu rounded-b-sm">
            <div className="relative pt-[60px]">
              <Image
                width={40}
                height={21}
                src={OpenedMenu}
                className="absolute top-0 right-[30px]"
                alt="menu"
              />
              <ul className="flex flex-col gap-10 text-[18px]">
                <li>
                  <a href="#about">Обо мне</a>
                </li>
                <li>
                  <a href="#portfolio">Портфолио</a>
                </li>
                <li>
                  <a href="#serve">Услуги</a>
                </li>
                <li>
                  <a href="#registry">Запись</a>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Menu;
