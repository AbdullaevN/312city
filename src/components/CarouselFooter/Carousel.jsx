import React from "react";
// import "./carousel.css";
import photoOne from "../../assets/img/sliderM.jpg";
import star from "../../assets/img/star.png";
// import sliderM from '../../assets/img/sliderM.png'

export const CarouselFooter = () => {
  return (
    // <>
    //   <div
    //     id="carouselExampleCaptions"
    //     className="carousel slide relative p-0"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner relative w-full overflow-hidden">
    //       <div className="carousel-item active relative float-left w-full h-3/5  h-[38rem]">
    //         <div>
    //           <img
    //             src={photoOne}
    //             className=" block w-full object-contain"
    //             alt="..."
    //           />
    //         </div>

    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">First slide label</h5>
    //           <p></p>
    //         </div>
    //       </div>
    //       <div className="carousel-item relative float-left w-full h-3/5">
    //         <img
    //           src="http://gw.alicdn.com/imgextra/i4/1979138663/TB2dRL8bFXXXXXTXpXXXXXXXXXX_!!1979138663.jpg"
    //           className="block w-full h-[38rem] object-cover"
    //           alt="..."
    //         />
    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">Second slide label</h5>
    //           <p></p>
    //         </div>
    //       </div>
    //       <div className="carousel-item relative float-left w-full h-3/5">
    //         <img
    //           src="https://images.solecollector.com/complex/image/upload/iwgdmljmneqzprkwfua9.jpg"
    //           className="block w-full h-[38rem] object-cover"
    //           alt="..."
    //         />
    //         <div className="carousel-caption hidden md:block absolute text-center">
    //           <h5 className="text-xl">Third slide label</h5>
    //           <p></p>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon inline-block bg-no-repeat"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </>

    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className=" items-center carousel-indicators indicat absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active  w-[6px] h-[6px]"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative overflow-hidden ">
          <div className="carousel-item active relative float-left w-full ">
            <div className={`flex justify-evenly bg-yellow py-10`}>
              <div className=" flex  w-6/12">
                <div className="py-3">
                  <h1>
                    МСТИТЕЛИ: <br />
                  </h1>
                  <span>ЭРА АЛЬТРОНА</span>
                  <div className="flex ">
                    <img src={star} className="object-contain" alt="" />
                    8.5 IMDB
                  </div>
                  <p>
                    Detiv. Begen tede i bionobel. Räckviddsångest dessade sedan
                    sadosm. Vigon senogt, prenona. Hexasobel miger. Pode.
                    Antinde behörat.
                  </p>
                </div>
              </div>
              <div className="w-6/12  leading-10 font-black flex  text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                   md:text-8xl  text-3xl "
                >
                  tdryfguhi
                </p>
                {/* <p className="  w-6/12  text-3xl   md:text-8xl ">ПОДАРКИ 1</p> */}
              </div>
            </div>
          </div>

          <div className="carousel-item  relative float-left w-full">
            <div className="flex justify-evenly bg-[#8ABFBB] py-10">
              <div className=" flex  w-auto">
                <img
                  className="hidden   left-4 md:flex md:w-auto  md:h-[25rem]"
                  // src={eco}
                  alt=""
                />
                <img
                  className="md:hidden  flex justify-center items-center w-36 h-36 "
                  // src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex leading-10 font-black    text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                 w-6/12   md:text-8xl   text-3xl "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12     text-3xl md:text-8xl ">ПОДАРКИ 2</p>
              </div>
            </div>
          </div>

          <div className="carousel-item  relative float-left w-full">
            <div className="flex justify-evenly bg-[#8ABFBB] py-10">
              <div className=" flex  w-auto">
                <img
                  className="hidden   left-4 md:flex md:w-auto  md:h-[25rem]"
                  // src={eco}
                  alt=""
                />
                <img
                  className="md:hidden  flex justify-center items-center w-36 h-36 "
                  // src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex  leading-10 font-black  text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                 w-6/12   md:text-8xl   text-3xl"
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12   text-3xl  md:text-8xl ">ПОДАРКИ 3</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
