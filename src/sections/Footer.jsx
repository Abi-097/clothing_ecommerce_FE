import { AiFillInstagram, AiOutlineFullscreen } from "react-icons/ai";
import footerLogo from "../assets/clients/footer-logo.svg";
import { footerIcons } from "../components/data";
import { FaFacebook, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { useEffect } from "react";
const Footer = () => {
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
    <>
      <section
        className={`${
          darkMode ? "dark bg-black" : "light bg-white"
        } w-full lg:px-20 px-10 lg:py-20 flex flex-col justify-center items-center gap-6`}
      >
        <div
          data-aos="zoom-in"
          id="icon-boxes"
          className="flex justify-between lg:items-center items-start lg:flex-row flex-col w-full gap-6"
        >
          {footerIcons.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-3 "
            >
              <div
                id="icon-box"
                className="border-2 dark:text-white border-slate-300 rounded-full p-4 hover:bg-black hover:text-white cursor-pointer"
              >
                {item.icon && <item.icon className="w-[25px] h-[25px]" />}{" "}
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-2xl text-black font-semibold dark:text-white">
                  {item.title}
                </h1>
                <h1 className="text-[17px] text-slate-600 dark:text-white">
                  {item.para}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="main-footer"
        className={`${
          darkMode ? "dark bg-[#19191a] " : "light bg-black"
        } w-full text-white lg:px-10 lg:py-10 grid lg:grid-cols-5 grid-cols-1 justify-between items-start gap-14`}
      ></section>
    </>
  );
};

export default Footer;
