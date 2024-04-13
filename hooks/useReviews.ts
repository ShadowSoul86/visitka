import { useActions } from "@/redux/useActions";
import { useAppSelector } from "./rtk";

export const useReviews = () => {
  const slides = useAppSelector((s) => s.reviews.slides);
  const curr = useAppSelector((s) => s.reviews.curr);

  const { next, prev } = useActions();

  const tapNext = () => {
    if (curr !== slides.length - 1) {
      next();
    }
  };
  const tapPrev = () => {
    if (curr !== 0) {
      prev();
    }
  };
  return {
    curr,
    slides,
    tapNext,
    tapPrev,
  };
};
