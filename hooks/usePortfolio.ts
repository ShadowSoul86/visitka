import { useActions } from "@/redux/useActions";
import { useAppSelector } from "./rtk";
import { useEffect } from "react";

export const usePortfolio = () => {
  const { openModal, getPortfolioList } = useActions();

  const data = useAppSelector(s => s.portfolio.data);

  useEffect(() => {
    getPortfolioList();
  }, [])

  return {
    data,
    openModal,
  };
};
