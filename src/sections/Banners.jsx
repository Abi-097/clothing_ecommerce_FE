import { useEffect } from "react";
import banner2 from "../assets/banner2.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
const Banners = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex lg:flex-row flex-col justify-center items-center gap-6 `}
    >
      <div className="lg:w-[50%] w-full ">
        <img src={banner2} alt="banner2" data-aos="zoom-in" />
      </div>
      <div className="lg:w-[50%] lg:p-10 w-full flex flex-col justify-center align-center gap-8">
        <h1
          className="text-center uppercase text-2xl text-slate-500 dark:text-white line-clamp-5"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          upto 60% off
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:text-5xl text-4xl font-bold text-black dark:text-white line-clamp-5 text-center"
        >
          UNLEASH YOUR STYLE <br /> POTENTIAL WITH OUR <br />
          SPECTACULAR CLOTHING SALE
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-center text-xl text-slate-700 dark:text-white"
        >
          A good example of a paragraph contains a topic sentence, details and a
          conclusion. 'There are many different kinds of animals that live in
          China. Tigers and leopards are animals that live in China's forests in
          the north. In the jungles, monkeys swing in the trees and elephants
          walk through the brush.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="800"
          className="px-10 py-4 text-lg text-white dark:bg-white dark:text-black bg-black rounded-md transform hover:scale-105 transition-transform duration-300 font-semibold mt-5 "
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banners;
