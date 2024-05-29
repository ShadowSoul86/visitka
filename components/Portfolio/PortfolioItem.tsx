import { FC, useEffect, useState } from "react";
import classes from "./Portfolio.module.scss";
import config from "@/config/config";
import { portfolioCard } from "@/redux/portfolio/portfolio.types";
import { useActions } from "@/redux/useActions";

interface PortfolioItemProps {
  elem: portfolioCard;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ elem }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const { openModal } = useActions();

  useEffect(() => {
    const img = new Image();
    const serverImage = `${config.serverURL + elem.images[0].image}`;
    const fallbackImage = "/img/nophoto.jpg";

    img.onload = () => {
      setBackgroundImage(`url("${serverImage}")`);
    };

    img.onerror = () => {
      setBackgroundImage(`url("${fallbackImage}")`);
    };

    img.src = serverImage;
  }, []);

  return (
    <div
      key={elem.id}
      className={`${classes.grid__item} portfolio-image-container`}
      style={{
        backgroundImage,
      }}
    >
      <div className={`portfolio-image`}>
        <div className="flex flex-col gap-[6px] text-my-white font-normal">
          <div className="uppercase text-[8px] mini:text-[10px]">{elem?.type}</div>
          <div className="text-[20px] mini:text-[30px]">{elem?.title}</div>
        </div>
        <button
          onClick={() => openModal(elem)}
          className="flex items-center self-end gap-[12px] text-[18px] text-my-grey"
        >
          <span className="text-[16px] mini:text-[18px] pad:hidden mac:inline">
            Подробнее{" "}
          </span>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.05973 8.41324C9.45515 8.01782 9.45515 7.37671 9.05973 6.98129L2.61593 0.537493C2.22051 0.14207 1.5794 0.14207 1.18398 0.537493C0.788554 0.932916 0.788554 1.57402 1.18398 1.96945L6.9118 7.69727L1.18398 13.4251C0.788554 13.8205 0.788554 14.4616 1.18398 14.857C1.5794 15.2525 2.22051 15.2525 2.61593 14.857L9.05973 8.41324ZM6.84375 8.70981H8.34375V6.68472H6.84375V8.70981Z"
              fill="#FDFDFD"
              fillOpacity="0.6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
