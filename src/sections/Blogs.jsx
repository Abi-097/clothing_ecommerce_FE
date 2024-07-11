import Slider from "react-slick";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { blogs } from "../components/data";
const Blogs = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section
      id="blogs"
      className={`${
        darkMode ? "dark bg-[#19191a]" : "white bg-slate-200"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white"
      >
        Latest Posts
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold text-black dark:text-white text-center"
      >
        Blogs & Insights
      </h1>
      <div id="blogs-slider" className="w-full mt-3">
        <Slider {...settings}>
          {blogs.map((item, index) => (
            <div
              key={index}
              id="product-box"
              className="flex flex-col justify-center items-start gap-1 bg-white rounded-md dark:bg-black"
            >
              <img
                src={item.image}
                alt="blogs images"
                className="w-full h-[300px] rounded-md p-1"
              />
              <div className="p-2">
                <div
                  id="content-box"
                  className="flex justify-start items-center gap-2"
                >
                  <h1 className="text-lg text-black font-semibold dark:text-white">
                    {item.author}
                  </h1>
                  <h1 className="italics dark:text-white ">{item.date}</h1>
                </div>
                <h1 className="text-xl font-semibold text-black dark:text-white ">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;
