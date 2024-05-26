import { useActions } from "@/redux/useActions";
import { useEffect } from "react";
import { useAppSelector } from "./rtk";

export const useReviews = () => {
  const { data: slides, loadedStatus, curr } = useAppSelector((s) => s.reviews);

  const { next, prev, getReviewsList } = useActions();

  const tapNext = () => {
    // if (curr !== slides.length - 1) {
    //   next();
    // }
    next();
  };

  const tapPrev = () => {
    // if (curr !== 0) {
    // }
    prev();
  };

  useEffect(() => {
    getReviewsList();
  }, []);

  return {
    curr,
    slides,
    loadedStatus,
    tapNext,
    tapPrev,
  };
};
