import { next, prev } from "@/redux/reviews/reviews.slice";
import { useAppDispatch, useAppSelector } from "./rtk";

export const useReviews = () => {
  const dispatch = useAppDispatch();
  
  const slides = useAppSelector((s) => s.reviews.slides);
  const curr = useAppSelector((s) => s.reviews.curr);

  const tapNext = () => {
    if (curr !== slides.length - 1) {
      dispatch(next());
    }
  };
  const tapPrev = () => {
    if (curr !== 0) {
      dispatch(prev());
    }
  };
  return {
    curr,
    slides,
    tapNext,
    tapPrev
  }
}