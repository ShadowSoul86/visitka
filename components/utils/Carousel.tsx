import { useActions } from "@/redux/useActions";
import { useEffect } from "react";

const Carousel = ({
  curr,
  children: slides,
  autoSlide = false,
  autoSlideinterval = 3000,
}: any) => {
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
