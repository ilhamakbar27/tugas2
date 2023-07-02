import { Icon } from "@iconify/react";
import React from "react";

const footer = () => {
  return (
    <div className="bg-black px-[10vw] border-t-2 border-[#696969]">
      <div className="flex max-md:flex-col max-md:justify-center max-md:gap-5 justify-between items-center py-7 ">
        <p className="text-[#959595] text-md font-[300] text-center">
          Made by <span className="text-white">Ilham </span> — Copyright 2023
        </p>
        <div className="flex gap-3">
          <Icon
            className="rotate-12 hover:rotate-0 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300 "
            width={30}
            color="white"
            icon="mdi:instagram"
          />
          <Icon
            className="rotate-12 hover:scale-125 hover:rotate-0 hover:translate-y-0 transition-all duration-300 "
            width={30}
            color="white"
            icon="ic:baseline-whatsapp"
          />
          <Icon
            className="rotate-12 hover:rotate-0 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300  "
            width={30}
            color="white"
            icon="mdi:twitter"
          />
          <Icon
            className="rotate-12 hover:rotate-0 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300  "
            width={30}
            color="white"
            icon="mdi:linkedin"
          />
          <Icon
            className="rotate-12 hover:rotate-0 hover:scale-125 hover:-translate-y-0.5 transition-all duration-300  "
            width={30}
            color="white"
            icon="mdi:github"
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
