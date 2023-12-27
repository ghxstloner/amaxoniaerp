import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/main-illustration.png";
import play from "../assets/play.png";
import stars from "../assets/icons/star.svg";

const Hero = () => {
  return (
    <div className="bg-neutralSilver" id="inicio">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2  ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug ">
                Gestión Empresarial tu solución{" "}
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  ERP Integral
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 ">
                Con características adaptadas a la legislación local,{" "}
                <span className="text-brandPrimary">Amaxonia </span>
                es tu aliado confiable para gestionar de manera eficiente y
                precisa los detalles fundamentales de tu negocio.
              </p>

              <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        src={stars}
                        key={index}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 font-semibold text-gray900">
                  2000+
                  <span className="regular-16 lg:regular-20 ml-1">
                    Buenas reseñas
                  </span>
                </p>
              </div>

              <div className="flex flex-col w-full gap-6 sm:flex-row">
                <button className="btn-primary hidden items-center sm:flex">
                  Cotizar
                </button>

                <button className="btn-secondary hidden items-center sm:flex">
                  <img src={play} alt="Icon" className="mr-2" />
                  Ver Video
                </button>
              </div>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2  ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug ">
                Gestión Empresarial tu solución{" "}
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  ERP Integral
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 ">
                Con características adaptadas a la legislación local,{" "}
                <span className="text-brandPrimary">Amaxonia </span>
                es tu aliado confiable para gestionar de manera eficiente y
                precisa los detalles fundamentales de tu negocio.
              </p>

              <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        src={stars}
                        key={index}
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 font-semibold text-gray900">
                  2000+
                  <span className="regular-16 lg:regular-20 ml-1">
                    Buenas reseñas
                  </span>
                </p>
              </div>

              <div className="flex flex-col w-full gap-6 sm:flex-row">
                <button className="btn-primary hidden items-center sm:flex">
                  Cotizar
                </button>

                <button className="btn-secondary hidden items-center sm:flex">
                  <img src={play} alt="Icon" className="mr-2" />
                  Ver Video
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
