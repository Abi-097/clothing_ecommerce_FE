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
      </div>
    </section>
  );
};

export default Banners;
