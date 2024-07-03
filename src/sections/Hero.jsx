import { useEffect, useState } from "react";
import banner4 from "../assets/banner4.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../components/Carousel";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <section
      id="hero"
      className={`${
        darkMode ? "dark bg-[#19191a]" : "light bg-slate-300"
      } w-full lg:px-10 lg:py-20 py-8 lg:h-screen h-fit dark:bg-slate-700 dark:bg-transparent flex flex-col lg:flex-row justify-between items-center bg-cover bg-center gap-10`}
    >
      <div className="flex flex-col justify-center items-start gap-6 lg:w-[60%] w-full">
        <h1
          data-aos="zoom-in"
          className="text-3xl text-slate-900 italic dark:text-white px-8 py-2"
        >
          Chick Christmas
        </h1>
        <h1
          data-aos="zoom-in"
          className="lg:text-7xl text-6xl text-black  px-8 py-4 font-bold dark:text-white capitalize"
        >
          Effortless <br />
          Glamour For <br /> Every Occasions
        </h1>
        <button
          data-aos="zoom-in"
          className="bg-black px-10 py-4 font-semibold text-white text-lg rounded-lg mt-8 hover:bg-white dark:text-black hover:text-black cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      <div id="image-box" className="lg:w-[40%] w-full">
        <Carousel />
        {/* <img data-aos="zoom-in" src={banner4} alt="banner4" className="bg-cover bg-center"/> */}
      </div>
    </section>
  );
};
export default Hero;
