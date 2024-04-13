import { useActions } from "@/redux/useActions";

export const useSlides = (slides: any, curr: any) => {
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
