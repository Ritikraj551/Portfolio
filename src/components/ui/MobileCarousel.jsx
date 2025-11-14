import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const MobileCarousel = ({
  children: cards,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? cards.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === cards.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {cards.map((card, i) => (
          <div key={i} className="w-full shrink-0">
            {card}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between pt-20 p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-6 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
