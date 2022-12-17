import React from "react";
import logo from "../../assets/img/logo.png";
import noti from "../../assets/img/not.svg";
import avatar from "../../assets/img/avatar.png";
import cloud from "../../assets/img/cloud.png";
import searchl from "../../assets/img/search.png";

const Navbar = () => {
  // const url =

  return (
    <>
      <div className="flex justify-around items-center p-[1rem]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <div className="flex justify-center items-center py-1 ">
            <label className="relative flex justify-end flex-row items-center !mb-0">
              <input
                className="  placeholder:text-[#999999] block bg-[#F5F8F9]  md:w-[50rem]  border-none rounded-full py-2 pl-4 !pr-0 shadow-sm focus:outline-none  sm:text-sm text-[#999999]"
                placeholder="Поиск..."
                type="text"
                name="search"
              />
              <img
                className="absolute left-auto focus:outline-none h-2 w-auto sm:h-5"
                src={searchl}
                alt=""
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <img src={cloud} className="object-contain" alt="" />
            <span>11°</span>
          </div>
          <div className="px-4">
            <img src={noti} alt="" />
          </div>

          <div>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
