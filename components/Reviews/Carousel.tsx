import { useAppSelector } from "@/hooks/rtk";
import { useActions } from "@/redux/useActions";
import { useEffect } from "react";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideinterval = 3000,
}: any) => {
  const curr = useAppSelector((s) => s.reviews.curr);
  const { next } = useActions();

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => next(), autoSlideinterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides}
      </div>
    </div>
  );
};
export default Carousel;
