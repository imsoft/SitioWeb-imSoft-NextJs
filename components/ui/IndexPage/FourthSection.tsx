import React from "react";
import Link from "next/link";

import { Services } from "../../../interfaces";

import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const infoServices: Services[] = [
  {
    nameOfService: "Consultoria de sitio web 🤓",
    description:
      "Un sitio web o tienda en línea siempre cuenta con áreas de oportunidad, nosotros las ubicaremos, analizaremos y las mejoraremos para que así puedas generar mayores ganancias en tu empresa.",
    href: "/servicios/consultoria",
    icon: PresentationChartBarIcon,
  },
  {
    nameOfService: "Sitio Web 👨‍💻",
    description:
      "Esta opción es excelente para cualquier emprendedor o empresa que quiera tener presencia en la internet, llegar a más clientes y generar más ingresos.",
    href: "/servicios/sitio-web",
    icon: CodeBracketSquareIcon,
  },
  {
    nameOfService: "Sitio Web Pro ⚡🧑‍💻🔥",
    description:
      "Un sitio web bien administrado es el arma más poderosa de una empresa y con la utilización de estas herramientas podrás hacer de tu empresa algo más profesional.",
    href: "/servicios/sitio-web-pro",
    icon: CodeBracketIcon,
  },
  {
    nameOfService: "E-commerce 🛍️",
    description:
      "Tu empresa tiene que modernizarse con una tienda en línea para poder llegar a clientes de todas partes, al alcance de un solo clic.",
    href: "/servicios/e-commerce",
    icon: ShoppingBagIcon,
  },
  {
    nameOfService: "Posicionamiento SEO 🔝",
    description:
      "Las personas únicamente les hace caso a los primeros enlaces de Google.",
    href: "/servicios/posicionamiento-seo",
    icon: MagnifyingGlassIcon,
  },
];

export const FourthSection = () => {
  return (
    <>
      <div className="bg-primary-500">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:max-w-7xl lg:px-8 lg:py-40">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Nuestros Servicios
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
            Nuestra metodología de trabajo es colaborativa, trabajamos de la
            mano con nuestros clientes para asegurar que el software cumpla con
            sus objetivos de negocio.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {infoServices.map((service) => (
              <div key={service.nameOfService}>
                <div>
                  <Link href={service.href}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white bg-opacity-10">
                      <service.icon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                        aria-describedby={`${service.nameOfService}`}
                      />
                    </span>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link href={service.href}>
                    <h3 className="flex items-center text-lg font-semibold leading-8 text-white">
                      {service.nameOfService}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </h3>
                  </Link>
                  <p className="mt-2 text-base leading-7 text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
