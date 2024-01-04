import React from "react";
import right from "../assets/icons/right.png";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-3xl mx-auto bg-neutralSilver py-16 ">
      <div className="flex items-center justify-center lg:w-3/6 mx-auto ">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug ">
            Generamos Aplicaciones con Innovación
          </h2>
          <div className="flex items-center justify-center gap-8 ">
            <button className="btn-primary text-white items-center sm:flex">
              Obtener el demo <img src={right} alt="Icon" className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
