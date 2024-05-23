import Link from "next/link";

const Registry = () => {
  return (
    <div
      id="registry"
      className="flex flex-col registry mac:flex-row mac:justify-between"
    >
      <div className="flex flex-col gap-[18px] max-w-[365px] medium:max-w-[443px] pad:max-w-[720px] mac:max-w-[607px] full:max-w-[763px]">
        <h2 className={`font-sans default-h2`}>Запись</h2>
        <div
          className={`text-[16px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
        >
          Выберите удобный способ связи, и мы обсудим запись на окрашивание
          волос, учитывая ваши предпочтения.
        </div>
      </div>

      <div className="flex flex-wrap mini:max-w-[466px] items-center justify-between mini:justify-start gap-10 mac:items-end">
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.21 -0.00195312H20.7919C3.98438 -0.00195312 0 3.98242 0 20.7899V39.208C0 56.0155 3.98438 59.9999 20.7919 59.9999H39.21C56.0175 59.9999 60.0019 56.0155 60.0019 39.208V20.7899C60.0019 3.98242 55.9781 -0.00195312 39.21 -0.00195312ZM48.4388 42.8005H44.0831C42.4331 42.8005 41.925 41.4918 38.9569 38.4843C36.3787 35.9849 35.2369 35.653 34.6012 35.653C33.7031 35.653 33.4481 35.9062 33.4481 37.138V41.0737C33.4481 42.1293 33.1162 42.763 30.3225 42.763C25.7025 42.763 20.5763 39.9693 16.9819 34.7643C11.5613 27.1368 10.0781 21.4237 10.0781 20.2424C10.0781 19.6068 10.3312 19.0124 11.5519 19.0124H15.9169C17.0212 19.0124 17.4412 19.5205 17.8706 20.7018C20.0287 26.9324 23.6231 32.3905 25.1063 32.3905C25.6538 32.3905 25.9069 32.1374 25.9069 30.7405V24.3055C25.74 21.3374 24.1781 21.0824 24.1781 20.0287C24.1781 19.5205 24.5981 19.0124 25.2713 19.0124H32.1356C33.0638 19.0124 33.405 19.5205 33.405 20.6137V29.2949C33.405 30.2324 33.825 30.5643 34.0781 30.5643C34.6256 30.5643 35.0944 30.2324 36.1087 29.2162C39.2437 25.7005 41.49 20.2799 41.49 20.2799C41.7825 19.6443 42.2906 19.0499 43.395 19.0499H47.76C49.0687 19.0499 49.3613 19.723 49.0687 20.6605C48.5213 23.1993 43.1794 30.7387 43.1794 30.7387C42.72 31.4999 42.5437 31.8318 43.1794 32.6812C43.6481 33.3168 45.1725 34.6349 46.1869 35.8162C48.0525 37.9349 49.4869 39.7124 49.8694 40.9424C50.2988 42.163 49.665 42.7987 48.4331 42.7987L48.4388 42.8005Z"
              fill="white"
            />
            <path
              d="M48.4388 42.8008H44.0831C42.4331 42.8008 41.925 41.4921 38.9569 38.4846C36.3787 35.9852 35.2369 35.6533 34.6012 35.6533C33.7031 35.6533 33.4481 35.9064 33.4481 37.1383V41.0739C33.4481 42.1296 33.1162 42.7633 30.3225 42.7633C25.7025 42.7633 20.5763 39.9696 16.9819 34.7646C11.5612 27.1371 10.0781 21.4239 10.0781 20.2427C10.0781 19.6071 10.3312 19.0127 11.5519 19.0127H15.9169C17.0213 19.0127 17.4412 19.5208 17.8706 20.7021C20.0287 26.9327 23.6231 32.3908 25.1063 32.3908C25.6538 32.3908 25.9069 32.1377 25.9069 30.7408V24.3058C25.74 21.3377 24.1781 21.0827 24.1781 20.0289C24.1781 19.5208 24.5981 19.0127 25.2713 19.0127H32.1356C33.0637 19.0127 33.405 19.5208 33.405 20.6139V29.2952C33.405 30.2327 33.825 30.5646 34.0781 30.5646C34.6256 30.5646 35.0944 30.2327 36.1087 29.2164C39.2437 25.7008 41.49 20.2802 41.49 20.2802C41.7825 19.6446 42.2906 19.0502 43.395 19.0502H47.76C49.0688 19.0502 49.3612 19.7233 49.0687 20.6608C48.5212 23.1996 43.1794 30.7389 43.1794 30.7389C42.72 31.5002 42.5438 31.8321 43.1794 32.6814C43.6481 33.3171 45.1725 34.6352 46.1869 35.8164C48.0525 37.9352 49.4869 39.7127 49.8694 40.9427C50.2988 42.1633 49.665 42.7989 48.4331 42.7989L48.4388 42.8008Z"
              fill="#909090"
            />
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.2638 17.9574C42.2757 17.9574 42.2917 17.9574 42.3076 17.9574C42.7239 17.9574 43.1104 18.0869 43.4271 18.31L43.4211 18.306C43.6522 18.5072 43.8076 18.7901 43.8454 19.1088V19.1148C43.8852 19.3578 43.9072 19.6367 43.9072 19.9215C43.9072 20.051 43.9032 20.1785 43.8932 20.306V20.288C43.445 25.007 41.5008 36.4509 40.5128 41.7337C40.0945 43.9706 39.2718 44.7196 38.475 44.7913C36.744 44.9527 35.4293 43.648 33.7521 42.5484C31.1266 40.8253 29.6426 39.7536 27.0949 38.0744C24.1487 36.1362 26.059 35.0665 27.7363 33.3255C28.1765 32.8674 35.8078 25.9253 35.9572 25.2959C35.9651 25.258 35.9691 25.2162 35.9691 25.1724C35.9691 25.017 35.9114 24.8756 35.8177 24.768C35.7141 24.7003 35.5847 24.6624 35.4492 24.6624C35.3596 24.6624 35.2739 24.6803 35.1942 24.7102L35.1982 24.7082C34.9353 24.768 30.7415 27.5395 22.6169 33.0227C21.7305 33.7219 20.611 34.1642 19.3919 34.2159H19.3799C17.6529 34.0068 16.0852 33.6223 14.5972 33.0745L14.7446 33.1223C12.8761 32.5128 11.3921 32.1921 11.5196 31.1602C11.5873 30.6237 12.327 30.0746 13.7387 29.5129C22.4343 25.7241 28.233 23.2269 31.1346 22.0211C34.3357 20.3219 38.0468 18.9235 41.949 18.0172L42.2618 17.9554L42.2638 17.9574ZM29.9295 -0.000244141C13.3921 0.0395954 0 13.4556 0 29.9989C0 46.5662 13.4299 59.9981 29.9992 59.9981C46.5684 59.9981 59.9983 46.5682 59.9983 29.9989C59.9983 13.4556 46.6063 0.0395954 30.0729 -0.000244141H30.0689C30.0224 -0.000244141 29.9759 -0.000244141 29.9295 -0.000244141Z"
              fill="white"
            />
            <path
              d="M42.2635 17.9571C42.2755 17.9571 42.2914 17.9571 42.3073 17.9571C42.7237 17.9571 43.1101 18.0866 43.4268 18.3097L43.4209 18.3057C43.6519 18.5069 43.8073 18.7897 43.8452 19.1084V19.1144C43.885 19.3574 43.9069 19.6363 43.9069 19.9212C43.9069 20.0506 43.9029 20.1781 43.893 20.3056V20.2877C43.4448 25.0067 41.5006 36.4506 40.5126 41.7333C40.0943 43.9703 39.2716 44.7193 38.4748 44.791C36.7438 44.9523 35.4291 43.6476 33.7518 42.548C31.1264 40.825 29.6424 39.7533 27.0946 38.074C24.1485 36.1358 26.0588 35.0662 27.736 33.3252C28.1763 32.867 35.8075 25.925 35.9569 25.2955C35.9649 25.2577 35.9689 25.2158 35.9689 25.172C35.9689 25.0166 35.9111 24.8752 35.8175 24.7676C35.7139 24.6999 35.5844 24.6621 35.449 24.6621C35.3593 24.6621 35.2737 24.68 35.194 24.7099L35.198 24.7079C34.935 24.7676 30.7413 27.5391 22.6167 33.0224C21.7302 33.7216 20.6107 34.1638 19.3917 34.2156H19.3797C17.6527 34.0064 16.085 33.622 14.597 33.0742L14.7444 33.122C12.8759 32.5124 11.3919 32.1917 11.5194 31.1599C11.5871 30.6234 12.3268 30.0743 13.7384 29.5125C22.4341 25.7238 28.2327 23.2265 31.1344 22.0207C34.3355 20.3215 38.0465 18.9232 41.9488 18.0168L42.2615 17.9551L42.2635 17.9571Z"
              fill="#909090"
            />
          </svg>
        </Link>
        <Link href={"#"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 59 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5921 59.7478C17.6651 59.7881 17.7401 59.8248 17.8167 59.8577C19.2101 60.4569 20.9302 59.119 24.3703 56.4434L27.8175 53.7623C34.72 53.9909 40.6911 53.085 45.3075 51.4698C50.4701 49.6633 54.5291 45.6042 56.3356 40.4417C58.8251 33.3274 58.8251 20.2787 56.3356 13.1644C54.5291 8.0018 50.4701 3.94272 45.3075 2.13623C37.0871 -0.740177 20.9621 -0.686518 12.8951 2.13623C7.73252 3.94272 3.67348 8.0018 1.86699 13.1644C-0.62242 20.2787 -0.62242 33.3274 1.86699 40.4417C3.67348 45.6042 7.73252 49.6633 12.8951 51.4698C13.9079 51.8241 15.0407 52.2128 16.2636 52.4786C16.2636 56.8367 16.2636 59.0158 17.5921 59.7478Z"
              fill="white"
            />
            <path
              d="M32.9639 9.52173C31.7735 9.52173 30.8086 10.4867 30.8086 11.677C30.8086 12.8674 31.7735 13.8323 32.9639 13.8323C35.7073 13.8323 37.8258 14.7373 39.253 16.1646C40.6803 17.5919 41.5854 19.7103 41.5854 22.4535C41.5854 23.6439 42.5503 24.6088 43.7407 24.6088C44.9311 24.6088 45.8961 23.6439 45.8961 22.4535C45.8961 18.7308 44.6457 15.461 42.3011 13.1165C39.9566 10.772 36.6867 9.52173 32.9639 9.52173Z"
              fill="#909090"
            />
            <path
              d="M12.8685 19.3227C13.1344 17.2199 15.8673 14.3619 18.0361 14.6791L18.0326 14.6756C19.8455 15.0201 21.3339 17.7487 22.3148 19.5469C22.4759 19.8423 22.6234 20.1126 22.7563 20.3431C23.4239 21.5283 22.9904 22.7291 22.3679 23.2359C22.2959 23.2939 22.2204 23.3538 22.1428 23.4154C21.3143 24.0731 20.2379 24.9275 20.4899 25.785C20.9798 27.4524 26.7969 33.2695 29.6579 34.9231C30.534 35.4295 31.215 34.4461 31.7984 33.6041C31.9361 33.4051 32.0685 33.2141 32.1967 33.0524C32.684 32.4018 33.8858 32.013 35.0683 32.6552C36.8343 33.6836 38.498 34.8789 40.0365 36.2245C40.8048 36.8668 40.9851 37.8159 40.4528 38.819C39.515 40.5857 36.8029 42.9156 34.8342 42.4421C31.3956 41.6154 17.4896 36.2245 13.0229 20.6069C12.789 19.9189 12.8277 19.6294 12.8613 19.3781L12.8685 19.3227Z"
              fill="#909090"
            />
            <path
              d="M32.9639 15.9875C31.7735 15.9875 30.8086 16.9525 30.8086 18.1428C30.8086 19.3332 31.7735 20.2981 32.9639 20.2981C33.3407 20.2981 33.8976 20.5082 34.4035 21.0139C34.9092 21.5197 35.1193 22.0768 35.1193 22.4534C35.1193 23.6438 36.0842 24.6087 37.2746 24.6087C38.465 24.6087 39.43 23.6438 39.43 22.4534C39.43 20.6748 38.5625 19.0766 37.4516 17.9659C36.3409 16.8552 34.7425 15.9875 32.9639 15.9875Z"
              fill="#909090"
            />
          </svg>
        </Link>
        <div className="flex items-center justify-between gap-10 w-full max-w-[60%] mini:max-w-0">
          <Link href={"#"}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 62 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.6317 -0.000976562C15.0632 -0.000976562 1.63176 13.4305 1.63176 29.999C1.63176 35.2507 2.98359 40.1942 5.35927 44.4925L0.433043 56.019C-0.00244795 57.0382 0.190586 58.217 0.928329 59.0439C1.66607 59.871 2.81547 60.1967 3.87739 59.8796L16.7329 56.0433C21.1244 58.5604 26.2137 59.999 31.6317 59.999C48.2003 59.999 61.6317 46.5676 61.6317 29.999C61.6317 13.4305 48.2003 -0.000976562 31.6317 -0.000976562Z"
                fill="white"
              />
              <path
                d="M16.1301 21.2785C16.4267 18.9324 19.4758 15.7438 21.8956 16.0976L21.8917 16.0938C23.9143 16.4781 25.5749 19.5224 26.6693 21.5286C26.8491 21.8582 27.0136 22.1598 27.1619 22.4169C27.9068 23.7393 27.4231 25.079 26.7285 25.6444C26.6482 25.7091 26.564 25.7759 26.4774 25.8447C25.5531 26.5785 24.3521 27.5318 24.6332 28.4884C25.1799 30.3487 31.6699 36.8388 34.862 38.6838C35.8394 39.2487 36.5993 38.1516 37.2501 37.2121C37.4038 36.9901 37.5515 36.777 37.6945 36.5966C38.2381 35.8707 39.579 35.4369 40.8983 36.1534C42.8687 37.3009 44.7248 38.6345 46.4413 40.1358C47.2986 40.8523 47.4997 41.9112 46.9058 43.0303C45.8596 45.0015 42.8336 47.6009 40.6371 47.0726C36.8007 46.1502 21.2858 40.1358 16.3023 22.7112C16.0413 21.9437 16.0845 21.6207 16.122 21.3403L16.1301 21.2785Z"
                fill="#909090"
              />
            </svg>
          </Link>
          <Link href={"#"}>
            <svg
              width="54"
              height="43"
              viewBox="0 0 68 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.632812"
                y="0.499512"
                width="66.8164"
                height="52.999"
                rx="10.6667"
                fill="white"
              />
              <path
                d="M19.2227 40.3779V16.2174C19.2227 15.3231 20.2573 14.8259 20.9556 15.3846L34.3666 26.1151L47.7777 15.3846C48.476 14.8259 49.5106 15.3231 49.5106 16.2174V40.3779"
                stroke="#909090"
                strokeWidth="5.2394"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Registry;
