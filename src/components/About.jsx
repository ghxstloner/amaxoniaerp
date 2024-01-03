import React from "react";
import aboutImg from "../assets/about1.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  "
        id="nosotros"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12  ">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5  ">
              Optimiza procesos, simplifica tareas y alcanza el éxito con
              nosotros
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 ">
              En{" "}
              <span className="font-mbf-canno text-brandPrimary">amaxonia</span>
              , entendemos la importancia de una gestión empresarial eficiente.
              Nuestro software no solo simplifica las operaciones diarias, sino
              que también impulsa el crecimiento y la productividad. Desde la
              gestión de recursos humanos hasta el cumplimiento normativo,
              estamos aquí para brindarte una solución integral. Descubre cómo
              podemos llevar tu empresa al siguiente nivel.
            </p>
            <button className="btn-primary">Solicitar demo</button>
          </div>
        </div>
      </div>
      {/* company state */}
      <div className="flex flex-wrap justify-between bg-[#f5f7fa] py-8 px-4 sm:px-8 md:px-16">
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <p className="text-[#0033cc] text-4xl font-bold">
                {isVisible ? <CountUp end={15} /> : "0"}+
              </p>
            )}
          </VisibilitySensor>
          <p className="text-gray-600">Años en el mercado</p>
        </div>
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <p className="text-[#0033cc] text-4xl font-bold">
                {isVisible ? <CountUp end={200000} /> : "0"}+
              </p>
            )}
          </VisibilitySensor>
          <p className="text-gray-600">Clientes felices</p>
        </div>
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <p className="text-[#0033cc] text-4xl font-bold">
                {isVisible ? <CountUp end={99} /> : "0"}%
              </p>
            )}
          </VisibilitySensor>
          <p className="text-gray-600">Activos</p>
        </div>
        <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <p className="text-[#0033cc] text-4xl font-bold">
                {isVisible ? <CountUp end={98} /> : "0"}%
              </p>
            )}
          </VisibilitySensor>
          <p className="text-gray-600">Tasa de retención de clientes</p>
        </div>
        <div className="text-center w-full sm:w-auto">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <p className="text-[#0033cc] text-4xl font-bold">
                {isVisible ? <CountUp end={24} /> : "0"}/7
              </p>
            )}
          </VisibilitySensor>
          <p className="text-gray-600">Soporte</p>
        </div>
      </div>
    </div>
  );
};

export default About;
