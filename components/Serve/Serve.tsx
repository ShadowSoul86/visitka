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

const mockData = [
  {
    title: "Все",
    text: "Создание уникальных и глубоких оттенков для ваших волос. Противопоказания.",
    time: "2-3 hours",
    price: "3000",
  },
  {
    title: "Уход",
    text: "Создание уникальных и глубоких оттенков для ваших волос. Противопоказания.",
    time: "2-3 hours",
    price: "3000",
  },
];

const Serve = () => {
  const tabs = [
    {
      alias: "all",
      title: "Все",
      active: true,
    },
    {
      alias: "care",
      title: "Уход",
      active: false,
    },
    {
      alias: "staining",
      title: "окрашивание",
      active: false,
    },
    {
      alias: "hairs",
      title: "причёски",
      active: false,
    },
  ];
  return (
    <div className="flex flex-col gap-[46px]">
      <div className="w-full flex flex-col gap-[18px] pad:flex-row pad:justify-between pad:items-center">
        <h2
          className={`${kurier.variable} default-h2 pad:text-center`}
        >
          Услуги
        </h2>

        <ul
          className={`${inter.className} uppercase text-[16px] flex items-center`}
        >
          {tabs.map((tab) => {
            return (
              <li
                className={`${tab.active ? "active-li" : "serve-li"} text-[16px] pad:text-[18px]`}
                key={tab.alias}
              >
                {tab.title}
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="flex flex-col gap-[25px]">
        {mockData.map((elem, i) => {
          return (
            <div className="flex flex-col gap-[25px]" key={i}>
              <div className="w-full h-[1px] bg-my-grey"></div>
              <Item key={i} data={elem} />
              {i !== mockData.length - 1 && (
                <div className="w-full h-[1px] bg-my-grey"></div>
              )}
            </div>
          );
        })}
        <div className="w-full h-[1px] bg-my-grey"></div>
      </ul>

      <button
        className={`${inter.className} w-full h-16 font-[600] text-[17px] full:text-[20px] text-my-grey text-center border rounded-lg border-my-grey`}
      >
        Смотреть ещё
      </button>
    </div>
  );
};
export default Serve;

const Item = ({ data }: any) => {
  const { title, text, time, price } = data;

  return (
    <div className="flex justify-between">
      <h3
        className={`${inter.className} text-[16px] pad:text-[18px] full:text-[20px] font-[700] w-full max-w-[183px]`}
      >
        {title}
      </h3>
      
      <div className={`w-full flex justify-between max-w-[317px] medium:max-w-[425px] pad:max-w-[594px] mac:max-w-[910px]`}>
        <div className="flex flex-col gap-[6px] text-[16px] pad:text-[18px] full:text-[20px]">
          <div className={`${inter.className} text-my-grey`}>
            {text}
          </div>
          <div className={`${inter.className} text-my-grey`}>
            {time}
          </div>
          <div className={`${inter.className} text-my-brown`}>
            {price}
          </div>
        </div>

        <div
          className={`${inter.className} flex items-center gap-[12px] text-[16px] full:text-[18px] text-my-grey self-end`}
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
        </div>
      </div>
    </div>
  );
};
