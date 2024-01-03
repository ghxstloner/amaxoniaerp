import React from "react";
import aboutImg from "../assets/mobile-login.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
("../variants.js");

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Experiencia Intuitiva",
      description:
        "Nuestro sistema permite organizar la asistencia de cada empleado a través del software de reconocimiento facial",
      image: "/src/assets/icons/card1.png",
      color: "brandPrimary",
    },
    {
      id: 2,
      title: "Estamos activos 24/7",
      description:
        "Con nuestro software de Punto de venta, se podrá administrar todo tu ciclo comercial de negocio. Teniendo como: Lector de etiquetas y controlador fiscal.",
      image: "/src/assets/icons/card2.png",
      color: "redCard",
    },
    {
      id: 3,
      title: "Potente Integración",
      description:
        "Un POS es una herramienta esencial para cualquier negocio que busque optimizar sus procesos de ventas, gestión y atención al cliente",
      image: "/src/assets/icons/card3.png",
      color: "yellowCard",
    },
    {
      id: 4,
      title: "Informes Detallados",
      description:
        "genera informes personalizables y detallados para obtener una visión integral de tu negocio, facilitando la toma de decisiones estratégicas. en el formato que se adapte a ti",
      image: "/src/assets/icons/card4.png",
      color: "greenCard",
    },
  ];

  return (
    <div>
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  "
        id="product"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12  ">
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5  ">
              Controla eficientemente la planilla de tu empresa con{" "}
              <span className="font-mbf-canno text-brandPrimary">amaxonia</span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 ">
              En el mundo empresarial, la gestión precisa de la nómina es
              fundamental. Con amaxonia, ofrecemos una solución diseñada
              específicamente para empresas privadas, brindándote las
              herramientas necesarias para administrar la planilla de manera
              precisa y eficiente. Desde la elaboración de planillas hasta el
              cálculo de beneficios, nuestra plataforma te permite mantener un
              control completo y cumplir con las obligaciones legales sin
              complicaciones.
            </p>
            <button className="btn-primary">Conoce más</button>
          </div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
      {/* AQUI QUIERO PONER LAS CARDS*/}
      <div className="px-4 lg:px-14 max-w-screen-3xl mx-auto bg-neutralSilver py-16">
        <div className="text-center">
          <h2 className="text-4xl text-brandPrimary font-semibold mb-3">
            ¿Por qué somos la mejor opción?
          </h2>
          <a className="text-3xl text-neutralDGrey font-semibold">
            Los beneficios de escogernos como Software
          </a>
        </div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8 " // Cambia "gap-12" por "gap-8"
        >
          {products.map((products) => (
            <div
              key={products.id}
              className={`flex flex-col items-start justify-between px-4 py-8 text-left md:w-[300px] mx-auto md:h-75 rounded-md shadow cursor-pointer border-t-4 border-brandPrimary hover:-translate-y-5 hover:border-t-4 hover:border-black transition-all duration-300 h-full bg-[#FFFFFF]`}
            >
              <div>
                <div className="mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img src={products.image} alt="" className="-ml-24" />
                </div>

                <h4 className="text-1xl font-bold text-black mb-2 px-2 ">
                  {products.title}
                </h4>
                <p className="text-sm text-neutralGrey ">
                  {products.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
