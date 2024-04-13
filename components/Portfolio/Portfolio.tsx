import classes from "./Portfolio.module.scss";
import { useAppDispatch } from "@/hooks/rtk";
import { usePortfolio } from "@/hooks/usePortfolio";
import { openModal } from "@/redux/modal/modal.slice";

const Portfolio = () => {
  const dispatch = useAppDispatch();

  const modalOpen = (elem: any) => {
    dispatch(openModal(elem));
  };

  const { data } = usePortfolio();

  return (
    <div>
      <div className="mx-auto max-w-[1269px] mb-[60px]">
        <h2 className={`font-sans default-h2 text-center`}>Портфолио</h2>
        <div
          className={`mt-[18px] text-center text-[16px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
        >
          Вдохновляйтесь моими работами! В этом разделе вы найдёте фотографии и
          истории успеха моих клиентов. От роскошных окрашенных прядей до
          здоровых и гладких волос после процедур ботокса — мои результаты
          говорят сами за себя.
        </div>
      </div>
      <div className={classes.grid}>
        {data?.map((elem, i) => (
          <div
            key={i}
            className={`${classes.grid__item} relative bg-cover bg-center min-h-[248px] medium:min-h-[331px]`}
            style={{
              backgroundImage: `url("${elem.image.src}")`,
            }}
          >
            <div
              className={`absolute px-[30px] w-full flex justify-between bottom-[30px]`}
            >
              <div className="flex flex-col gap-[6px] text-my-white font-normal">
                <div className="uppercase text-[10px]">окрашивание</div>
                <div className="text-[30px]">Название</div>
              </div>
              <button
                onClick={() => modalOpen(elem)}
                className="flex items-center self-end gap-[12px] text-[18px] text-my-grey"
              >
                <span className="pad:hidden mac:inline">Подробнее </span>
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
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
