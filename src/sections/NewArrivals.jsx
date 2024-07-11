import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { newArrivals } from "../components/data";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { useEffect } from "react";

const NewArrivals = () => {
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
        darkMode ? "dark bg-[#19191a]" : "light bg-slate-200"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6 `}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white text-center"
      >
        Top Products
      </h1>
      <h1
        data-aos="zoom-in"
        className="uppercase text-4xl text-black dark:text-white text-center font-semibold"
      >
        New Arrivals
      </h1>
      <div
        data-aos="slide-up"
        className="w-full flex lg:flex-row md:flex-row flex-col justify-center items-center flex-wrap gap-8 mt-3"
      >
        {newArrivals.map((item, index) => (
          <div
            key={index}
            id="product-box"
            className="flex flex-col justify-center items-start gap-2 bg-white dark:bg-black rounded-xl"
          >
            <div id="image-box" className=" relative cursor-pointer ">
              <img
                src={item.image}
                alt="image"
                className="w-[400px] h-[300px]"
              />
              <div
                id="icon-box"
                className="flex-col justify-center items-center gap-2 absolute top-3 right-3 hidden"
              >
                <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-250">
                  <FaRegHeart />
                </div>
                <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-250">
                  <IoSearch />
                </div>
                <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-250">
                  <AiOutlineShopping />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 p-4">
                <p className="italic dark:text-white">{item.category}</p>
                <p className="text-xl dark:text-white text-black font-semibold">
                  {item.title}
                </p>
                <h1 className="text-red-600 dark:text-white font-bold text-2xl">
                  {item.price}
                </h1>
                <button className="dark:bg-white bg-black font-bold dark:text-black text-sm text-white px-5 py-2 rounded-md transform hover:scale-105 transition-transform duration-300 mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        className="text-black text-md font-semibold px-8 py-4 rounded-md transform hover:scale-105 transition-transform duration-300 mt-10 bg-transparent border-black border-2 dark:border-white dark:text-white"
      >
        More Products
      </button>
    </section>
  );
};

export default NewArrivals;
