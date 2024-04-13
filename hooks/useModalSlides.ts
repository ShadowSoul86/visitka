import { useActions } from "@/redux/useActions";

export const useModalSlides = (slides: any, curr: any) => {
  const { nextModalSlide, prevModalSlide } = useActions();

  const tapNext = () => {
    if (curr !== slides.length - 1) {
      nextModalSlide();
    }
  };
  const tapPrev = () => {
    if (curr !== 0) {
      prevModalSlide();
    }
  };
  return {
    curr,
    slides,
    tapNext,
    tapPrev,
  };
};
