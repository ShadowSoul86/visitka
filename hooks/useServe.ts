import { useActions } from "@/redux/useActions";
import { useAppSelector } from "./rtk";
import { useEffect } from "react";

export const useServe = () => {
  const tabs = useAppSelector((s) => s.serve.tabs);
  const activeTab = useAppSelector((s) => s.serve.activeTab);
  const data = useAppSelector((s) => s.serve.data);
  const loadedStatus = useAppSelector((s) => s.serve.loadedStatus);

  const { setActiveTab, getServiceList } = useActions();

  useEffect(() => {
    getServiceList();
  }, []);

  return {
    tabs,
    activeTab,
    setActiveTab,
    data,
    loadedStatus,
  };
};
