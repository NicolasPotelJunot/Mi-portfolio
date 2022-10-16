import { useState } from "react";
import { Link } from "react-scroll";
import "../../../styles/stylesMenuButton.css";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../../stateManagement/slicer/menuSlicer";
import "./navBarCommon.css";

export const NavBarCommon = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.menu.value);

  const [modal, setModal] = useState({
    open: "uno",
    openImage: "block",
  });

  const handleButton = () => {
    if (selector) {
      dispatch(open(""));
      setModal({
        open: "uno",
        openImage: "block",
      });
    } else {
      dispatch(open("is-active"));
      setModal({
        open: "dos",
        openImage: "hidden",
      });
    }
  };

  const handleButtonUp = () => {
    window,
      scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="fixed
     flex bg-light justify-between h-14 pl-2 w-full z-30 pb-2 md:pl-10 md:pr-5 lg:pr-0 xl:h-16"
    >
      <button onClick={handleButtonUp} className="">
        <img
          className="h-14 sm:h-full py-3 md:py-2 md:flex md:items-center"
          src="/logo-nicolasPotelJunot.svg"
        />
      </button>

      <button
        className={`flex justify-center h-20 items-center bg-transparent z-30 md:hidden`}
        onClick={handleButton}
      >
        <img
          src="menuButton.svg"
          className={`h-20 absolute md:flex md:items-center ${modal.openImage}`}
        />
        <div
          className={`${selector} hamburger hamburger--collapse z-20`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </button>

      <ul
        className={`fixed right-0 flex flex-col justify-center h-screen w-full md:flex-row md:justify-end md:static md:h-full  ease-in transition-all duration-700 bg-nav-responsive ${modal.open}`}
      >
        <Link
          onClick={handleButton}
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="w-full py-10 hover-1 cursor-pointer font-bold flex justify-center items-center text-white md:text-slate-500 text-lg lg:text-2xl md:py-0 md:mx-1 lg:mx-10 md:w-28 lg:w-36 xl:w-44"
        >
          About
        </Link>
        <Link
          onClick={handleButton}
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="w-full py-10 hover-1 cursor-pointer font-bold flex justify-center items-center text-white md:text-slate-500 text-lg lg:text-2xl md:py-0 md:mx-1 lg:mx-10 md:w-28 lg:w-36 xl:w-44"
        >
          Proyectos
        </Link>
        <Link
          onClick={handleButton}
          to="contact"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="w-full py-10 hover-1 cursor-pointer font-bold flex justify-center items-center text-white md:text-slate-500 text-lg lg:text-2xl md:py-0 md:mx-1 lg:ml-10 md:w-28 lg:w-36 xl:w-44"
        >
          Contacto
        </Link>
      </ul>
    </nav>
  );
};
