import React from "react";
import foto2 from "../assets/Rectangle 4 (2).png";
import foto3 from "../assets/Rectangle 4 (3).png";
import foto4 from "../assets/Rectangle 4 (4).png";



const personal = () => {
  return (
    <div className="bg-black px-[10vw] pb-24">
      <div className="text-center flex flex-col gap-8">
        <h2 className="text-white font-semibold text-4xl ">Personal Project</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 ">
                <div>
                    <img src={foto2}/>
                </div>
                <div>
                    <img src={foto3}/>
                </div>
                <div>
                    <img src={foto4}/>
                </div>
        </div>

      </div>
      <div className=" divide-y-2 divide-[#696969] "></div>
    </div>
  );
};

export default personal;
