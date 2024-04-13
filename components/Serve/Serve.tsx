import { useAppDispatch, useAppSelector } from "@/hooks/rtk";
import Item from "./Item";
import { setActiveTab } from "@/redux/serve/serve.slice";

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
  const tabs = useAppSelector((s) => s.serve.tabs);
  const activeTab = useAppSelector((s) => s.serve.activeTab);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-[46px]">
      <div className="w-full flex flex-col gap-[18px] pad:flex-row pad:justify-between pad:items-center">
        <h2 className={`font-sans default-h2 pad:text-center`}>Услуги</h2>

        <ul className={`uppercase text-[16px] flex items-center`}>
          {tabs.map((tab) => {
            return (
              <li
                onClick={() => dispatch(setActiveTab(tab.alias))}
                className={`${
                  tab.alias === activeTab ? "active-li" : "serve-li"
                } text-[16px] pad:text-[18px]`}
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
        className={`w-full h-16 font-[600] text-[17px] full:text-[20px] text-my-grey text-center border rounded-lg border-my-grey`}
      >
        Смотреть ещё
      </button>
    </div>
  );
};
export default Serve;
