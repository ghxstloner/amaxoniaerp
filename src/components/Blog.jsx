import React from "react";
import right from "../assets/icons/rightblue.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Clave para el Éxito Empresarial",
      image: "/src/assets/blog/image1.png",
    },
    {
      id: 2,
      title: "Estrategias para el Desarrollo Organizacional",
      image: "/src/assets/blog/image2.png",
    },
    {
      id: 3,
      title: " Innovación para el Éxito Sostenible",
      image: "/src/assets/blog/image3.png",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 " id="blog">
      <div className="text-center md:w-1/2 mx-auto ">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 ">
          Explora Nuestro Mundo Empresarial
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto  ">
          Descubre artículos informativos y prácticos que te ayudarán a
          potenciar tu empresa con las últimas tendencias y consejos
          empresariales.
        </p>
      </div>
      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mx-auto relative mb-12 cursor-pointer  "
          >
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300 "
            />
            <div
              className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
                absolute left-0 right-0 -bottom-12   "
            >
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8 ">
                <a
                  href="/"
                  className="font-bold  text-brandPrimary hover:text-neutral-700 items-center sm:flex "
                >
                  Leer más <img src={right} alt="Icon" className="mr-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
