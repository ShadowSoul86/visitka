import { serveType } from "@/redux/serve/serve.types";
import { FC } from "react";

interface ItemProps {
  data: serveType;
}

const Item: FC<ItemProps> = ({ data }) => {
  const { title, price, description, execution_time } = data;

  return (
    <div className="flex flex-col mini:flex-row mini:justify-between">
      <h3
        className={`text-[16px] pad:text-[18px] full:text-[20px] font-[700] w-full max-w-[183px] mb-[14px] mini:mb-0`}
      >
        {title}
      </h3>

      <div
        className={`w-full flex justify-between mini:max-w-[317px] medium:max-w-[425px] pad:max-w-[594px] mac:max-w-[910px]`}
      >
        <div className="flex flex-col gap-[6px] text-[16px] pad:text-[18px] full:text-[20px]">
          <div className={`text-my-grey`}>{description}</div>
          <div className={`text-my-grey`}>Противопоказания: </div>
          <div className={`text-my-grey`}>
            Время выполнения: {execution_time}
          </div>
          <div className={`text-my-brown`}>{price}</div>
        </div>

        <a
          href="#registry"
          className={`flex items-center gap-[12px] text-[16px] full:text-[18px] text-my-grey self-end`}
        >
          <span className="hidden pad:inline">Записаться</span>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1005_261)">
              <path
                d="M8.95816 8.45377C9.35359 8.05835 9.35359 7.41724 8.95816 7.02182L2.51437 0.578021C2.11895 0.182597 1.47784 0.182597 1.08242 0.578021C0.686992 0.973444 0.686992 1.61455 1.08242 2.00997L6.81023 7.73779L1.08242 13.4656C0.686992 13.861 0.686992 14.5021 1.08242 14.8976C1.47784 15.293 2.11895 15.293 2.51437 14.8976L8.95816 8.45377ZM6.74219 8.75034H8.24219V6.72525H6.74219V8.75034Z"
                fill="#909090"
              />
            </g>
            <defs>
              <clipPath id="clip0_1005_261">
                <rect width="10" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Item;
