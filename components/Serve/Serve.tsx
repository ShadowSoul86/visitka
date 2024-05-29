import { useEffect, useState } from "react";
import Item from "./Item";
import { useServe } from "@/hooks/useServe";
import { serveType } from "@/redux/serve/serve.types";

const Serve = () => {
  const { tabs, activeTab, setActiveTab, data, loadedStatus } = useServe();

  const [filteredData, setFilteredData] = useState<serveType[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(5);

  useEffect(() => {
    if (loadedStatus) {
      const newFilteredData = data?.filter((elem) =>
        activeTab === "Все" ? true : elem.type === activeTab
    );
      setFilteredData(newFilteredData);
      setVisibleCount(Math.min(newFilteredData?.length, 5));
    }
  }, [data, activeTab, loadedStatus]);
  
  const servicesToShow = filteredData?.slice(0, visibleCount);
  
  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 5, data.length));
  };

  return (
    <div className="flex flex-col gap-[46px]">
      <div className="w-full flex flex-col gap-[18px] pad:flex-row pad:justify-between pad:items-center">
        <h2 id="serve" className={`font-sans default-h2 pad:text-center`}>
          Услуги
        </h2>

        <ul
          className={`scrollbar-hide uppercase text-[16px] flex items-center overflow-x-auto`}
        >
          {tabs?.map((tab) => {
            return (
              <li
                onClick={() => setActiveTab(tab)}
                className={`${
                  tab === activeTab ? "active-li" : "serve-li"
                } text-[16px] pad:text-[18px]`}
                key={tab}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </div>

      {loadedStatus && servicesToShow?.length > 0 && (
        <ul className="flex flex-col gap-[25px]">
          {servicesToShow?.map((elem, i) => {
            return (
              <div className="flex flex-col gap-[25px]" key={i}>
                <div className="w-full h-[1px] bg-my-grey"></div>
                <Item key={i} data={elem} />
              </div>
            );
          })}
          <div className="w-full h-[1px] bg-my-grey"></div>
        </ul>
      )}

      {visibleCount < filteredData?.length && (
        <button
          onClick={handleShowMore}
          className={`w-full h-[51px] mini:h-16 font-[600] text-[17px] full:text-[20px] text-my-grey text-center border rounded-lg border-my-grey`}
        >
          Смотреть ещё
        </button>
      )}
    </div>
  );
};
export default Serve;
