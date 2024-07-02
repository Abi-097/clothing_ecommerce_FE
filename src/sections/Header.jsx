import React, { useEffect, useState } from "react";
import siteLogo from "../assets/clients/sitelogo.svg";
import { IoSearch, IoPersonAddOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // its optional
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "Collections",
      path: "collections",
    },
    {
      link: "Products",
      path: "products",
    },
    {
      link: "Blogs",
      path: "blogs",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-black" : " light bg-white"
      } w-full flex lg:flex-col flex-row justify-between items-center gap-4 lg:px-20 px-6 lg:py-1 lg:static sticky top-0 z-[999]`}
    >
      <div
        id="top"
        className="relative w-full flex justify-center items-center"
      >
        <img
          src={siteLogo}
          alt="siteLogo"
          className="lg:w-[400px] lg:h-[200px] h-[100px] dark:filter dark:invert"
        />
        <div
          data-aos="zoom-in"
          id="header-icons"
          className="lg:flex hidden justify-center items-center gap-8 absolute top-24 right-0 dark:text-white"
        >
          <IoSearch className="w-[25px] h-[25px] transform hover:scale-150 transition-transform duration-300 cursor-pointer" />

          <IoPersonAddOutline className="w-[25px] h-[25px] transform hover:scale-150 transition-transform duration-300 cursor-pointer" />

          <FaRegHeart className="w-[25px] h-[25px] transform hover:scale-150 transition-transform duration-300 cursor-pointer" />

          <div className="relative ">
            <FiShoppingCart className="w-[25px] h-[25px] transform hover:scale-150 transition-transform duration-300 cursor-pointer" />

            <div className="bg-black dark:bg-white dark:text-black px-2 text-white rounded-full absolute -top-[15px] -right-[22px] text-sm">
              23
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in " id="menus section" className="w-full pb-5 flex lg:justify-center justify-end items-center sticky top-0 left-0 h-fit bg-white dark:bg-black">
        
      </div>
    </nav>
  );
};

export default Header;
