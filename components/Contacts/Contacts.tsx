import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Link from "next/link";

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

const Contacts = () => {
  return (
    <div
      className={`${kurier.variable} font-sans flex justify-between items-center pt-[90px] pb-[60px]`}
    >
      <div className="max-w-[460px] w-full">
        <h2 className="text-[30px] font-bold mb-[65px]">Контакты</h2>
        <div
          className={`${inter.className} flex justify-between items-center text-[20px] font-normal text-my-grey`}
        >
          <div>
            <h3 className="font-[600] text-my-brown mb-3">Адрес</h3>
            <div>ул. Ленина, 11, Самара</div>
            <div>hello@gmail.com</div>
            <div>+ 7 999 555 44 33</div>
          </div>
          <div>
            <h3 className="font-[600] text-my-brown mb-3">Соцсети</h3>
            <div><Link href={"#"}>Telegram</Link></div>
            <div><Link href={"#"}>VK</Link></div>
            <div><Link href={"#"}>Viber</Link></div>
          </div>
        </div>
      </div>
      <div className="max-w-[460px] w-full">
        <h2 className="text-[30px] font-bold mb-[65px]">
          Присоединяйтесь к нам
        </h2>
        <div className="flex flex-col gap-[25px]">
          <div className="text-[20px] font-normal">
            Следите за нашими обновлениями в соцсетях
          </div>
          <button className="w-[375px] h-[64px] bg-my-green border-none rounded-md text-[20px] font-semibold text-center">
            <Link
              className="flex justify-center items-center gap-3 font-sans"
              href={"#"}
            >
              Присоединиться{" "}
              <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.000202368 0.997627C-0.005105 0.738319 0.0941716 0.487793 0.275684 0.302538C0.457196 0.117263 0.70562 0.0128725 0.964986 0.0128725H5.39101C5.91673 0.0128725 6.3457 0.433678 6.35581 0.959279C6.46697 6.73999 8.53585 9.5391 10.3832 10.6486V0.977844C10.3832 0.44491 10.8151 0.0128725 11.3482 0.0128725H15.504C16.0368 0.0128725 16.4689 0.44491 16.4689 0.977844V6.05794C17.1337 5.75965 17.8234 5.25723 18.4728 4.5736C19.4681 3.52585 20.2808 2.14106 20.6869 0.702847C20.8042 0.287099 21.1834 0 21.6155 0H25.7584C26.0483 0 26.3227 0.130271 26.5061 0.35482C26.6894 0.57935 26.762 0.87438 26.7039 1.15833C26.3395 2.94004 25.6115 4.62748 24.5657 6.11522C23.8241 7.16995 22.9341 8.1082 21.9253 8.90203C23.0953 9.66453 24.144 10.6036 25.0331 11.6885C26.2573 13.1823 27.1508 14.9186 27.655 16.7832C27.7333 17.073 27.6723 17.383 27.4897 17.6215C27.307 17.8601 27.0239 18 26.7234 18H22.1559C21.7364 18 21.365 17.729 21.2371 17.3295C20.4692 14.9353 18.7319 13.0814 16.4689 12.4546V17.035C16.4689 17.5679 16.0368 18 15.504 18H15.0022H14.9892C10.3531 18 6.61433 16.4041 4.02338 13.4C1.45164 10.4182 0.106118 6.16019 0.000202368 0.997627Z"
                  fill="#67605B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9892 16.0701V17.035V18H15.0022V17.035V16.0701H14.9892Z"
                  fill="#67605B"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
