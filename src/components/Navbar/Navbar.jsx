import React from "react";
import logo from "../../assets/img/logo.png";
import noti from "../../assets/img/not.svg";
import avatar from "../../assets/img/avatar.png";
import cloud from "../../assets/img/cloud.png";
import searchl from "../../assets/img/search.png";
import { Link } from "react-router-dom";
import { NotificationPopup } from "../notificationPopup/notificationPopup";

export const Navbar = () => {
  // const url =

  return (
    <>
      <div className="flex justify-around items-center p-[1rem]">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex">
          <div className="flex justify-center items-center py-1 ">
            <label className="relative flex justify-end flex-row items-center !mb-0">
              <input
                className="  placeholder:text-[#999999] block bg-[#F5F8F9]  md:w-[30rem]  border-none rounded-full py-2 pl-4 !pr-0 shadow-sm focus:outline-none  sm:text-sm text-[#999999]"
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
            <button>
              {/* <Link> */}
              <img src={noti} alt="" />
              {/* </Link> */}
            </button>
          </div>

          <div>
            {/* <img src={avatar} alt="" /> */}

            <nav className=" relative  w-full  flex flex-wrap  items-center  justify-between  py-4  bg-gray-100  text-gray-500  hover:text-gray-700  focus:text-gray-700  shadow-lg  navbar navbar-expand-lg navbar-light  ">
              <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                {/* <button
                  className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    className="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button> */}

                <div className="flex items-center relative">
                  {/* <div className="dropdown relative">
                    <a
                      className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
                      href="#"
                      id="dropdownMenuButton1"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="bell"
                        className="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                        ></path>
                      </svg>
                      <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                        1
                      </span>
                    </a>
                    <ul
                      className="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                          href="#"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                          href="#"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="dropdown relative">
                    <a
                      className="dropdown-toggle flex items-center hidden-arrow"
                      href="#"
                      id="dropdownMenuButton2"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={avatar}
                        className="rounded-full h-[25px] w-[25px]"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left    py-2    list-none    text-left    rounded-lg    mt-1    m-0    bg-clip-padding    border-none    left-auto    right-0  "
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <Link
                          to={"/sign-in"}
                          className="dropdown-item text-sm py-2   px-4 font-normal block w-full  whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100"
                        >
                          Вход
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/sign-up"}
                          className=" dropdown-item text-sm  py-2 px-4   font-normal block  w-full  whitespace-nowrap  bg-transparent text-gray-700   hover:bg-gray-100"
                        >
                          Регистрация
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                          href="#"
                        >
                          Something else here
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
// export default Navbar;
