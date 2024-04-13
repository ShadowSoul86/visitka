import { useActions } from "@/redux/useActions";
import { useAppSelector } from "./rtk";

export const useServe = () => {
  const tabs = useAppSelector((s) => s.serve.tabs);
  const activeTab = useAppSelector((s) => s.serve.activeTab);
  const data = useAppSelector((s) => s.serve.data);

  const { setActiveTab } = useActions();

  return {
    tabs,
    activeTab,
    setActiveTab,
    data,
  };
};
