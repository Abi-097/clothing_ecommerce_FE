import { clientImages } from "../components/data";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Clients = () => {
  const { darkMode } = useDarkMode();

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
        darkMode ? "dark bg-black " : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white text-center"
      >
        Top Brands
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold text-black dark:text-white text-center"
      >
        Popular Brands
      </h1>
      <div className="flex flex-wrap flex-col lg:flex-row md:flex-row justify-between items-center gap-6 w-full lg:mt-10 mt-6">
        {clientImages.map((item, index) => (
          <img
            key={index}
            data-aos="zoom-in"
            data-aos-delay={item.delay}
            src={item.image}
            alt="item"
            width={180}
            height={180}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
