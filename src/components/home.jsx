import { Icon } from "@iconify/react";
import React from "react";
import foto from "../assets/foto11.png";
import foto2 from "../assets/hero.jpg";

const home = () => {
  return (
    <div id="home">
      <div className="px-[10vw] flex justify-between max-md:justify-center items-center h-screen bg-black">
        <div className=" w-[60%] max-md:w-full flex flex-col gap-7 ">
          <h1 className="text-white text-6xl max-md:text-5xl font-bold">
            {" "}
            Hi, I am Ilham Akbar <br /> A Front-end Developer based in City.
          </h1>

          <p className="text-xl  text-[#959595] w-[70%] max-md:w-full">
            I help businesses and companies reach their goals by designing
            user-centric digital products & interactive experiences.
          </p>
          <button
            className="px-10 py-3 w-[45%] max-md:w-[60%] hover:bg-slate-300    text-white
           rounded-sm flex justify-center items-center bg-[#9D9D9D]"
          >
            <span>
              <Icon width={20} height={20} icon="ic:outline-email" />
            </span>
            hi@yourname.com
          </button>
        </div>
        <div className="w-[35%]   md:block hidden">
          <img className="w-[90%%] md:w-full aspect-square rounded-full object-cover" src={foto2} />
        </div>
      </div>
    </div>
  );
};

export default home;
