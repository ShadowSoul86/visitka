import classes from "./Portfolio.module.scss";
import { usePortfolio } from "@/hooks/usePortfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const { data, loadedStatus } = usePortfolio();

  return (
    <div>
      <div className="mx-auto max-w-[1269px] mini:mb-[60px]">
        <h2 id="portfolio" className={`font-sans default-h2 mini:text-center`}>
          Портфолио
        </h2>
        <div
          className={`mt-[18px] text-left mini:text-center text-[16px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
        >
          Вдохновляйтесь моими работами! В этом разделе вы найдёте фотографии и
          истории успеха моих клиентов. От роскошных окрашенных прядей до
          здоровых и гладких волос после процедур ботокса — мои результаты
          говорят сами за себя.
        </div>
      </div>
      <div className={`${classes.grid} mt-[18px] mini:mt-0`}>
        {!loadedStatus
          ? "Loading"
          : data?.map((elem) => <PortfolioItem key={elem?.id} elem={elem} />)}
      </div>
    </div>
  );
};
export default Portfolio;
