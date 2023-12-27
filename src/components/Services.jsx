import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
("../variants.js");

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Asistencia empleados",
      description:
        "Nuestro sistema permite organizar la asistencia de cada empleado a través del software de reconocimiento facial",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "Punto de venta",
      description:
        "Con nuestro software de Punto de venta, se podrá administrar todo tu ciclo comercial de negocio. Teniendo como: Lector de etiquetas y controlador fiscal.",
      image: "/src/assets/icons/associations.png",
    },
    {
      id: 3,
      title: "Facturación POS",
      description:
        "Un POS es una herramienta esencial para cualquier negocio que busque optimizar sus procesos de ventas, gestión y atención al cliente",
      image: "/src/assets/icons/group-clubs.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8 "
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2  ">
          Nuestros clientes
        </h2>
        <p className="text-neutralGrey">
          Hemos tenido la fortuna de trabajar con más de 500 empresas
        </p>

        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
          <img src="/src/assets/companys/company.png" alt="" />
        </div>
      </motion.div>

      {/* services card */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 md:w-1/2 mx-auto text-center   "
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3  ">
          Maneja todo sobre tú negocio a través de nuestro sistema
        </h2>
        <p className="text-neutralGrey">
          ¿Para qué funciona <span className="text-brandPrimary">Amaxonia</span>
          ?
        </p>
      </motion.div>

      {/* cards */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 "
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-lg cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full  "
          >
            <div>
              <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl  ">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2 ">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey ">{service.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
