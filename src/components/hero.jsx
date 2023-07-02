import React, { Fragment } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import NavbarMobile from "./navbarmobile";

const hero = () => {
  return (
    <nav className="px-[8vw] sticky top-0 flex w-full h-[80px] md:fixed bg-gray items-center z-10  justify-between">
      <div className="text-3xl md:text-4xl text-white flex justify-between items-center  font-bold">
        Ilham.
      </div>
      <ul className="md:flex hidden gap-12 text-white  justify-center items-center  text-lg font-normal">
      <a href="#home" className="">Home</a>
        <a href="#featured " className="">Featured </a>
        <a href="#work" className="">Work</a>
        <a href="#contact" className="">Contact</a>
      </ul>
      {/* Mobile */}
      <NavbarMobile />
    </nav>
  );
};

export default hero;
