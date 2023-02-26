import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IFooter } from "../../../interfaces";
import SocialMediaBar from "./SocialMediaBar";
import ContactInfo from "./ContactInfo";

const footerNavigation: IFooter = {
  services: [
    { name: "Consultoria de sitio web 🤓", href: "/servicios/consultoria" },
    { name: "Sitio Web 👨‍💻", href: "/servicios/sitio-web" },
    { name: "Sitio Web Pro ⚡🧑‍💻🔥", href: "/servicios/sitio-web-pro" },
    { name: "E-commerce 🛍️", href: "/servicios/e-commerce" },
    { name: "Posicionamiento SEO 🔝", href: "/servicios/posicionamiento-seo" },
  ],
  company: [
    { name: "Historia de imSoft", href: "/nosotros" },
    { name: "Clientes", href: "/portafolio" },
    { name: "¿Tienes alguna duda?", href: "/contacto" },
  ],
  articles: [
    { name: "Nuestros Artículos", href: "/articulos" },
  ],
  legal: [{ name: "Aviso de privacidad", href: "/avisoDePrivacidad" }],
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                className="h-10"
                src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FimSoft_Transparente_Azul_Optimizado.png?alt=media&token=3c214a9a-25d1-47b4-b594-dfcb61bf14bc"
                alt="imSoft"
                height={500}
                width={115}
              />
              <p className="text-base text-gray-500">
                Soluciones de software a medida para empresas innovadoras.
              </p>

              <ContactInfo textStyle={"text-gray-500"} />

              <SocialMediaBar
                iconStyle={"text-gray-400 hover:text-primary-500"}
              />
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-primary-500">
                    Servicios
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-primary-500">
                    Empresa
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-primary-500">
                    Artículos
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.articles.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-primary-500">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 imSoft. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
