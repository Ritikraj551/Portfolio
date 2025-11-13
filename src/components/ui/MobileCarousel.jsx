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
    const SlideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(SlideInterval);
  });

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {cards}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <div
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
0;
