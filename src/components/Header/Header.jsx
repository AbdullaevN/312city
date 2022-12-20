import React from "react";
import { Carousel } from "../carousel/Carousel";
import { HeaderCategory } from "../HeaderCategory/HeaderCategory";
// import Navbar from "../Navbar/Navbar";
//
export const Header = () => {
  return (
    <>
      <div className="p-[0rem] bg-blue">
        {/* <Navbar /> */}
        <HeaderCategory />
        <Carousel />
      </div>
    </>
  );
};
