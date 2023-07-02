import { Icon } from "@iconify/react";
import React from "react";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";
import foto6 from "../assets/foto6.png";
import foto7 from "../assets/foto7.png";
import foto8 from "../assets/foto8.png";
import foto9 from "../assets/foto9.png";
import foto10 from "../assets/foto10.png";

const featured = () => {
  return (
    <div id="featured">
      <div className="bg-black px-[10vw]">
        <div className="text-md flex font-thin gap-4 tracking-widest text-slate-300 py-5">
          <Icon width={20} height={20} icon="solar:arrow-down-linear" />{" "}
          FEATURED WORK
        </div>
        <div className="grid grid-cols-2   gap-3 py-10 mb-20">
          <div className=" relative group ">
            <img src={foto1} />
            <div className="w-full flex justify-center text-white font-semibold text-xl md:text-5xl  items-center  group-hover:opacity-100 opacity-0 transition-all duration-300 bg-black/50  absolute h-full top-0 ">
              InVersion
            </div>
          </div>
          <div className="relative group">
            <img src={foto2} />
            <div className="w-full h-full flex justify-center items-center font-semibold text-xl md:text-5xl text-white group-hover:opacity-100 opacity-0 transition-all duration-300 top-0 absolute  bg-black/60 ">
              Ilham akbar
            </div>
          </div>
          <div className="w-full">
            <img src={foto3} />
          </div>
          <div className="relative group">
            <img src={foto4} />
            <div className="w-full h-full flex justify-center items-center font-semibold max-md:text-xl text-6xl text-white group-hover:opacity-100 opacity-0 transition-all duration-300 top-0 absolute  bg-black/60 ">
              Kota Jambi
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-7 text-center">
          <h2 className="font-semibold text-white text-3xl">
            Visual Explorations
          </h2>
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 mb-28">
            <div className="w-full">
              <img src={foto5} />
            </div>
            <div className="w-full">
              <img src={foto6} />
            </div>
            <div className="w-full">
              <img src={foto7} />
            </div>
            <div className="w-full">
              <img src={foto8} />
            </div>
            <div className="w-full">
              <img src={foto9} />
            </div>
            <div className="w-full">
              <img src={foto10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featured;
