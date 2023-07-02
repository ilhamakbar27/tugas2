import { Menu, Transition } from "@headlessui/react";
import React from "react";

const NavbarMobile = () => {
  return (
    <Menu as="div" className="text-white relative  md:hidden">
      <Menu.Button className="border-white px-3  border-2">Menu</Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex flex-col  gap-1 right-0 mt-6">
          <Menu.Item>
            <a href="#home" className="font-bold border-white px-3  border-2">Home</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#featured " className="font-bold border-white px-3  border-2">Featured </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#work " className="font-bold border-white px-3  border-2">Work</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#contact " className="font-bold border-white px-3  border-2">Contact</a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default NavbarMobile;
