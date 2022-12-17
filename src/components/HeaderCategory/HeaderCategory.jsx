import React from "react";
import spravochnik from "../../assets/img/foundation.png";
import uslugi from "../../assets/img/uslugi.png";
import ob from "../../assets/img/obyavlenie.png";
import avto from "../../assets/img/avto.png";
import nedvijimost from "../../assets/img/nedvijimost.png";
import rabota from "../../assets/img/rabota.png";
import novosti from "../../assets/img/novosti.png";

export const HeaderCategory = () => {
  return (
    <>
      <div className="flex  flex-wrap p-[1rem]">
        <div className="flex items-center flex-row">
          <span>Справочник</span>
          <img src={spravochnik} alt="" />
        </div>
        <div className="flex items-center flex-row">
          <span>Услуги</span>
          <img src={uslugi} alt="" />
        </div>
        <div className="flex items-center">
          <span>Объявления</span>
          <img src={ob} alt="" />
        </div>
        <div className="flex items-center">
          <span>Авто</span>
          <img src={avto} alt="" />
        </div>
        <div className="flex items-center flex-row">
          <span>Недвижимость</span>
          <img src={nedvijimost} alt="" />
        </div>
        <div className="flex items-center">
          <span>Работа</span>
          <img src={rabota} alt="" />
        </div>
        <div className="flex items-center flex-row">
          <span>Новости</span>
          <img src={novosti} alt="" />
        </div>
      </div>
    </>
  );
};
