import localFont from "next/font/local";
import { Inter } from "next/font/google";

import classes from "./Portfolio.module.scss";

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

const Portfolio = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1269px] mb-[60px]">
        <h2
          className={`${kurier.variable} font-sans font-bold uppercase text-[48px] text-center`}
        >
          Портфолио
        </h2>
        <div className={`${inter.className} text-[28px] mt-[22px] text-center`}>
          Вдохновляйтесь моими работами! В этом разделе вы найдёте фотографии
          и истории успеха моих клиентов. От роскошных окрашенных прядей
          до здоровых и гладких волос после процедур ботокса — мои результаты
          говорят сами за себя.
        </div>
      </div>
      <div className={classes.grid}>
        <div className={classes.grid__item}>1</div>
        <div className={classes.grid__item}>2</div>
        <div className={classes.grid__item}>3</div>
        <div className={classes.grid__item}>4</div>
        <div className={classes.grid__item}>5</div>
        <div className={classes.grid__item}>6</div>
        <div className={classes.grid__item}>7</div>
      </div>
    </div>
  );
};
export default Portfolio;
