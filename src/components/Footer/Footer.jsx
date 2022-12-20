import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/footer-logo.png";
import { CarouselFooter } from "../CarouselFooter/Carousel";

export const Footer = () => {
  return (
    <>
      <CarouselFooter />
      <footer className="footer-1 bg-gray-100 py-8 sm:py-12 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6"></h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link to={"/"}>
                    <img src={footerLogo} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">О ПОРТАЛЕ</h5>
              <ul className="list-none footer-links font-light">
                <li className="mb-2">
                  <Link
                    to={"/about"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    О НАС
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/privacy-policy"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/processing-data"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/about-portal"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    О ПОРТАЛЕ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">ПОЛЬЗОВАТЕЛЯМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    to={"/city-organization"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ОРГАНИЗАЦИЯ ГОРОДА
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/article"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ИНТЕРЕСНЫЕ СТАТЬИ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/news"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    НОВОСТИ ГОРОДА
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/attractions"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ДОСТОПРИМЕЧАТЕЛЬНОСТИ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">ПАРТНЕРАМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    to={"/paid"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ПЛАТНОЕ РАЗМЕЩЕНИЕ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    РЕКЛАМА НА САЙТЕ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/cooperation"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    СОТРУДНИЧЕСТВО
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={"/contacts"}
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">МЫ В СОЦ.СЕТЯХ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/city_312_kg/"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    INSAGRAM
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    FACEBOOK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
