import { useEffect, useState } from "react";
import coat1 from "../assets/coat1.jpg";
import coat2 from "../assets/coat2.jpg";
import coat3 from "../assets/coat3 (1).png";
import coat4 from "../assets/coat4.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight  } from "react-icons/md";
const slideImages = [coat1, coat2, coat3, coat4];
const Carousel = () => {
  const [curr, setCurr] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slideImages.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slideImages.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // Auto-slide
  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide]);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slideImages.map((s) => (
          <img data-aos="zoom-in" key={s} src={s} alt="s" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white"
        >
          <MdKeyboardArrowLeft size={40} data-aos="zoom-in" />
        </button>
        <button
          onClick={next}
          className="rounded-full shadow bg-slate-300 text-gray-800 hover:bg-white"
        >
          <MdKeyboardArrowRight size={40} data-aos="zoom-in" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slideImages.map((_, i) => (
            <div
              key={i}
              className={`
     transition-all w-3 h-3 bg-white rounded-full
     ${curr === i ? "p-2" : "bg-opacity-50"}
   `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
