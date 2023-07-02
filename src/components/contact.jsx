import { Icon } from "@iconify/react";
import React from "react";

const contact = () => {
  return (
    <div id="contact" className="bg-black px-[10vw] flex flex-col gap-10 justify-center items-center py-16   ">
      <h1 className="text-3xl font-semibold text-white ">Contact me</h1>
      <p className="text-lg w-[40%] max-md:w-full text-center text-[#959595]">
        If you are looking to hire a Front end engineer, I’m currently available
        for freelance work
      </p>
      <button
        className="px-10 py-3 w-[30%] max-md:w-[60%] hover:bg-slate-300    text-white
           rounded-sm flex justify-center items-center bg-[#9D9D9D]"
      >
        <span>
          <Icon width={20} height={20} icon="ic:outline-email" />
        </span>
        milham.ak10@gmail.com
      </button>
    </div>
  );
};

export default contact;
