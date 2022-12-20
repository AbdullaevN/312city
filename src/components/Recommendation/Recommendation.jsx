import React from "react";
import "./Recommendation.css";

import arrowOrange from "../../assets/img/arrowOrange.png";

import call from "../../assets/img/tel.png";

export const Recommendation = () => {
  return (
    <>
      {/* pt-5 pb-5 */}
      <section className="">
        <div className="px-3">
          <div className="py-2 flex justify-between font-nunito">
            <h3 className="font-semibold">БИЗНЕС-ПРОФИЛИ</h3>
            <div className="text-[#FF961F] font-bold flex ">
              <h3> Все профили</h3>
              <img src={arrowOrange} className="object-contain" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-12 flex items-center">
              <div>
                <a
                  className="bg-[#FF961F] rounded-3xl border-0 btn btn-primary:hover-[#FF961F] mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left"></i>
                </a>
              </div>

              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      {/*  */}
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <div className="carousel-item ">
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      {/*  */}
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*  */}
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid rounded-lg"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="card-body">
                            <h4 className="card-title flex place-content-start font-bold">
                              Кофейня №1
                            </h4>
                            <span className="flex place-content-start text-sm">
                              Деловой партнер
                            </span>
                            <p className="card-text flex justify-between items-center">
                              <button className="bg-[#FF961F] rounded-full h-8 text-white flex items-center">
                                Смотреть
                              </button>
                              <button>
                                <img src={call} alt="" />
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                  className="bg-[#FF961F] !important rounded-3xl border-0 btn btn-primary:hover-[#FF961F]  mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
