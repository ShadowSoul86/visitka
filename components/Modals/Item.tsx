import { FC } from "react";

interface ItemProps {
  title: string;
  text: string;
  last?: boolean;
}

const Item: FC<ItemProps> = ({ title, text, last }) => {
  return (
    <li className="flex flex-col gap-[15px]">
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
      <div className={`${last ? "h-[1px] w-full bg-my-modal-line" : null}`} />
    </li>
  );
};
export default Item;
