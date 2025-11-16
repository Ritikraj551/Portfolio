import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({
  children: images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

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
        {images.map((image, i) => (
          <div key={i} className="w-full shrink-0">
            {image}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-6 pointer-events-none">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-primary-dark/70 text-gray hover:bg-white pointer-events-auto"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-primary-dark/70 text-gray hover:bg-white pointer-events-auto"
        >
          <ChevronRight size={25} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 pointer-events-none">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-primary-dark rounded-full ${
                curr === i ? "p-2" : "opacity-70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
