import React from "react";
import starbucks from "../../assets/img/starbucks.png";
import arrow from "../../assets/img/arrow.png";
import arrowOrange from "../../assets/img/arrowOrange.png";

export const BusinessProfiles = () => {
  return (
    <>
      {/* min-h-screen gap-16 */}
      {/* <div className="flex justify-between items-center p-4">
        <h2>БИЗНЕС-ПРОФИЛИ</h2>
        <div className="flex justify-center">
          <span>Все профили</span>
          <img src={arrowOrange} className="object-contain" alt="" />
        </div>
      </div> */}

      <div className="py-5 flex justify-between font-nunito">
        <span className="font-semibold">БИЗНЕС-ПРОФИЛИ</span>
        <div className="flex">
          <span className="text-[#FF961F] font-bold">Все профили</span>
          <img src={arrowOrange} className="object-contain" alt="" />
        </div>
      </div>

      <div className="p-6  flex flex-col md:flex-row justify-center items-center ">
        <div className="bg-white shadow-md w-52 overflow-hidden rounded-2xl">
          <div className="relative ">
            <img
              src={starbucks}
              alt="STARBUCKS"
              className="h-56 object-cover"
            />
            <span className="flex absolute top-[11rem] text-[20px] left-8 capitalize text-white font-extrabold gap-2 rounded px-3 py-1">
              STARBUCKS
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white shadow-md w-52 overflow-hidden rounded-2xl">
          <div className="relative">
            <img
              src={starbucks}
              alt="STARBUCKS"
              className="h-56 object-cover"
            />
            <span className="flex gap-2 absolute top-[11rem] text-[20px] left-8 capitalize text-white font-extrabold	  rounded px-3 py-1">
              STARBUCKS
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white shadow-md w-52 overflow-hidden rounded-2xl">
          <div className="relative">
            <img
              src={starbucks}
              alt="STARBUCKS"
              className="h-56 object-cover"
            />
            <span className="flex gap-2 absolute top-[11rem] text-[20px] left-8 capitalize text-white font-extrabold	  rounded px-3 py-1">
              STARBUCKS
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
        {/*  */}
        <div className="bg-white shadow-md w-52 overflow-hidden rounded-2xl">
          <div className="relative">
            <img
              src={starbucks}
              alt="STARBUCKS"
              className="h-56 object-cover"
            />
            <span className="flex gap-2 absolute top-[11rem] text-[20px] left-8 capitalize text-white font-extrabold	  rounded px-3 py-1">
              STARBUCKS
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
