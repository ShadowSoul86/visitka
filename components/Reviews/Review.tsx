import { reviewCard } from "@/redux/reviews/reviews.types";
import Image from "next/image";
import { FC } from "react";

interface ReviewProps {
  s: reviewCard;
}

const Review: FC<ReviewProps> = ({ s }) => { 

  return (
    <div className="min-w-full h-full flex justify-between">
      <div className="w-full h-full flex flex-col gap-5 max-w-[327px] pad:max-w-[442px] mac:max-w-[741px] full:max-w-[870px]">
        <div className="flex flex-col gap-[5px]">
          <div className={`text-[16px] pad:text-[18px] full:text-[20px]`}>
            {s?.fio}
          </div>
          <div
            className={`text-[14px] pad:text-[16px] full:text-[18px] text-my-grey`}
          >
            {s?.date}
          </div>
        </div>
        <div
          className={`max-h-[450px] h-full overflow-x-hidden overflow-y-auto scrollbar-hide text-[18px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
        >
          {s?.description}
        </div>
      </div>

      <div className="w-[324px] pad:w-[435px] pad:h-[300px] mac:w-[580px] mac:h-[400px] full:w-[652px] full:h-[450px]">
        <Image
          width={324}
          height={223}
          src={s?.image || ""}
          alt={"отзыв изображение"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default Review;
