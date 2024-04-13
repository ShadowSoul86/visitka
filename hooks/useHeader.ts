import { useAppSelector } from "./rtk";
import { useActions } from "@/redux/useActions";

export const useHeader = () => {
  const isOpended = useAppSelector((s) => s.header.isOpended);
  const { setIsOpened } = useActions();

  return {
    isOpended,
    setIsOpened,
  };
};
