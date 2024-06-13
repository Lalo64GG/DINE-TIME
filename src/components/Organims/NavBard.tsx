import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi"; // Nuevo icono

export const NavBard = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-12 w-full left-0 right-0 transition z-10 bg-white">
        <ul className="text-center text-xl p-20">
          <Link to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded flex justify-center items-center">
              <FaHome className="mr-2" /> Home
            </li>
          </Link>
          <Link to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded flex justify-center items-center">
              <GiHamburger className="mr-2" /> Menú
            </li>
          </Link>
          <Link to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded flex justify-center items-center">
              <FaInfoCircle className="mr-2" /> About us
            </li>
          </Link>
          <Link to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-[#d0d6d4] hover:rounded flex justify-center items-center">
              <FaEnvelope className="mr-2" /> Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className=" sticky">
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">DINE-TIME</span>
        </div>

        <div className="lg:flex md:flex flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 text-[18px]">
              <Link to="/home" className="group">
                <li className="relative py-2 px-4 cursor-pointer flex items-center">
                  <FaHome className="mr-2" />
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#03A460] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>

              <Link to="/" className="group">
                <li className="relative py-2 px-4 cursor-pointer flex items-center">
                  <GiHamburger className="mr-2" />
                  Menú
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#03A460] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>

              <Link to="/" className="group">
                <li className="relative py-2 px-4 cursor-pointer flex items-center">
                  <FaInfoCircle className="mr-2" />
                  About us
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#03A460] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>

              <Link to="/" className="group">
                <li className="relative py-2 px-4 cursor-pointer flex items-center">
                  <FaEnvelope className="mr-2" />
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#03A460] transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};
