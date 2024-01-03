import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/icono-footer.png";

const MyFooter = () => {
  return (
    <footer className="bg-brandPrimary text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="font-mbf-canno ">Amaxonia ERP</span>
            </a>
            <div className="my-8">
              <p className="mb-1"> Copyright © 2023 Amaxonia ERP.</p>
              <p>Todos los derechos reservados</p>
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Amaxonia" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Acerca de nosotros
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Contáctanos
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Servicios
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Aplicaciones
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Soporte" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Centro de ayuda
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Términos y condiciones
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Política de privacidad
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="¡Manténgase actualizado!"
                className="text-white"
              />
              <div className="max-w-md">
                <div className="mb-2 block"></div>
                <TextInput
                  id="email4"
                  type="email"
                  icon={HiMail}
                  placeholder="nombre@amaxoniaerp.com"
                  required
                  color="white"
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
