import Item from "./Item";
import { useServe } from "@/hooks/useServe";

const Serve = () => {
  const { tabs, activeTab, setActiveTab, data } = useServe();

  return (
    <div className="flex flex-col gap-[46px]">
      <div className="w-full flex flex-col gap-[18px] pad:flex-row pad:justify-between pad:items-center">
        <h2 className={`font-sans default-h2 pad:text-center`}>Услуги</h2>

        <ul className={`uppercase text-[16px] flex items-center`}>
          {tabs.map((tab) => {
            return (
              <li
                onClick={() => setActiveTab(tab.alias)}
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
        {data?.map((elem, i) => {
          return (
            <div className="flex flex-col gap-[25px]" key={i}>
              <div className="w-full h-[1px] bg-my-grey"></div>
              <Item key={i} data={elem} />
              {i !== data.length - 1 && (
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
