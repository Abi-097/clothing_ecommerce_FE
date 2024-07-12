import { useEffect } from "react";
import ItemsContainer from "../components/Footer/ItemsContainer";
import SocialIcons from "../components/Footer/SocialIcons";
import { Icons } from "../components/data";
import { useDarkMode } from "../components/DarkModeContext";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <span className="text-teal-400">Free</span> until you're ready to
            launch
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter Your ph.no"
              className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
            >
              Request Code
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2020 Appy. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </footer>
      <div>
        {/* dark mode button */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-gray-900 fixed top-[700px] right-[30px]"
        >
          {darkMode ? (
            <FaMoon size={30} className="text-white" />
          ) : (
            <FaSun size={30} className="text-white" />
          )}
        </button>
      </div>
      {/* scroll button */}
      <div
        id="icon-box"
        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />{" "}
        </Link>
      </div>
    </>
  );
};

export default Footer;
