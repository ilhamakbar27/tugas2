import React from "react";
import foto15 from "../assets/foto15.png";
import foto16 from "../assets/foto16.png";
import foto17 from "../assets/Rectangle 9.png";
import foto18 from "../assets/Rectangle 11.png";
import foto19 from "../assets/Rectangle 12.png";
import { Icon } from "@iconify/react";

const work = () => {
  return (
    <section  className="bg-black">
         <div  className="text-md flex px-[10vw] font-thin gap-4 tracking-widest text-slate-300 py-12">
          <Icon width={20} height={20} icon="solar:arrow-down-linear" />{" "}
           WORK
        </div>
      <div id="work">
        <img src={foto15} />
      </div>
      
      <div  className="px-[10vw]">
        
        <div  className="py-14 flex flex-col gap-2 ">
          <p className="font-thin text-[#dedede] text-sm tracking-widest">
            COVIBE
          </p>
          <h2 className="text-white font-semibold max-sm:text-2xl text-3xl">
            Co-working spaces for
          </h2>
          <h2 className="text-white font-semibold  max-sm:text-2xl text-3xl">
            tech startups
          </h2>
        </div>
        <div className="py-14 flex max-sm:grid max-sm:grid-cols-2 max-sm:gap-8 justify-between ">
          <div className="flex flex-col gap-2">
            <p className="text-[#dedede]  text-xs tracking-widest">CLIENT</p>
            <p className="text-white font-[500] text-sm ">Covibe</p>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-[#dedede]  text-xs tracking-widest">ROLE</p>
            <p className="text-white font-[500] text-sm ">Product Designer</p>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-[#dedede] text-xs tracking-widest">INDUSTRY</p>
            <p className="text-white font-[500] text-sm ">Co-working</p>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-[#dedede] text-xs tracking-widest">DURATION</p>
            <p className="text-white font-[500] text-sm ">3 Months</p>
          </div>
        </div>
        <div className="py-28">
          <div className="flex flex-col gap-2">
            <p className="text-[#dedede] tracking-widest text-sm uppercase ">
              {" "}
              defining the problem
            </p>
            <p className="text-white font-semibold max-sm:text-2xl text-3xl  ">
              {" "}
              Designing a product that helps new startups setup their business
              in a coworking{" "}
              <span className="md:hidden ">
                {" "}
                space with budget constraints{" "}
              </span>{" "}
            </p>
            <p className="text-white font-semibold max-sm:text-2xl text-3xl max-md:hidden ">
              {" "}
              space with budget constraints.
            </p>
          </div>
        </div>
        <div className="text-sm text-[#dedede] tracking-widest uppercase  divide-y-2 divide-white">
          {" "}
          launch prototype
          <div className=" w-[158px] h-[1px] mt-2 bg-[#a5a5a5]"></div>
        </div>
      </div>
      <div className="py-20 max-md:py-12">
        <img src={foto16} />
      </div>
      <div className="px-[10vw] flex flex-col gap-20 py-16">
        <div className="flex justify-between ">
          <div>
            <img className="max-md:w-[80%] md:w-[78%]" src={foto17} />
          </div>
          <div className="flex flex-col gap-4 justify-center items-start ">
            <p className="text-[#dedede] tracking-widest text-xs uppercase">
              {" "}
              solution 1
            </p>
            <h2 className="text-white font-semibold text-3xl max-md:text-lg ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </h2>
          </div>
        </div>
        <div className="flex flex-row-reverse max-md:gap-6 justify-between  ">
          <div>
            <img className="max-md:w-[80%] md:w-[78%]" src={foto18} />
          </div>
          <div className="flex flex-col gap-4 justify-center items-start ">
            <p className="text-[#dedede] tracking-widest text-xs uppercase">
              {" "}
              solution 1
            </p>
            <h2 className="text-white font-semibold text-3xl max-md:text-lg ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
            </h2>
          </div>
        </div>
        <div className="py-20 flex flex-col gap-5">
          <p className="text-[#dedede] tracking-widest text-xs uppercase">
            conclusion
          </p>
          <h2 className="text-white font-semibold text-3xl max-md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            aenean aliquet pellentesque lectus. Libero convallis velit, morbi
            nullam pellentesque quis. Massa nascetur in commodo posuere
            porttitor.
          </h2>
          <img className="py-10 md:py-20" src={foto19} />
        </div>
      </div>
    </section>
  );
};

export default work;
