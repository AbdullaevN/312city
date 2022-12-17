import React from "react";
// import "./carousel.css";

export const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative p-0"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full h-3/5">
            <img
              src="https://stageboxbrand.ru/image/catalog/17244/krossovki-nike-x-off-white-air-force-1-low-3.jpg"
              className="block w-full h-[38rem] object-cover"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-3/5">
            <img
              src="http://gw.alicdn.com/imgextra/i4/1979138663/TB2dRL8bFXXXXXTXpXXXXXXXXXX_!!1979138663.jpg"
              className="block w-full h-[38rem] object-cover"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full h-3/5">
            <img
              src="https://images.solecollector.com/complex/image/upload/iwgdmljmneqzprkwfua9.jpg"
              className="block w-full h-[38rem] object-cover"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p></p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
