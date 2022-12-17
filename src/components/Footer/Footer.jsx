import React from "react";
import footerLogo from "../../assets/img/footer-logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer-1 bg-gray-100 py-8 sm:py-12 bg-[#111111] text-white">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6"></h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <img src={footerLogo} alt="" />
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">О ПОРТАЛЕ</h5>
              <ul className="list-none footer-links font-light">
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    О НАС
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    О ПОРТАЛЕ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">ПОЛЬЗОВАТЕЛЯМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ОРГАНИЗАЦИЯ ГОРОДА
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ИНТЕРЕСНЫЕ СТАТЬИ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    НОВОСТИ ГОРОДА
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ДОСТОПРИМЕЧАТЕЛЬНОСТИ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">ПАРТНЕРАМ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    ПЛАТНОЕ РАЗМЕЩЕНИЕ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    РЕКЛАМА НА САЙТЕ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    СОТРУДНИЧЕСТВО
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="font-light text-xs not-italic	 border-b border-solid border-transparent hover:border-purple-800 text-white hover:text-white"
                  >
                    КОНТАКТЫ
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-700 mb-6">МЫ В СОЦ.СЕТЯХ</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
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
