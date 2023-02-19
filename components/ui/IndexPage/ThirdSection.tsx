import React from "react";
import Link from "next/link";
import Image from "next/image";

export const ThirdSection = () => {

  const linkWhatsappGeneral = process.env.NEXT_PUBLIC_LINK_WHATSAPP_GENERAL;
  
  return (
    <>
      <div className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Diseñamos sitios web para</span>{" "}
              <span className="block text-primary-500 xl:inline">
                aumentar las ventas
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Nuestro equipo de profesionales está comprometido a brindar un
              servicio excepcional y trabajará con usted para asegurar que su
              sitio web cumpla con sus objetivos de negocio.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href={`${linkWhatsappGeneral}`}
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-8 py-3 text-base font-medium text-white hover:bg-primary-500 md:py-4 md:px-10 md:text-lg"
                >
                  Contactanos
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="/servicios"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-primary-500 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Nosotros%20imSoft.jpg?alt=media&token=ac7d54a0-7048-4856-9230-b3a8ded8b04f"
            alt=""
            width={2102}
            height={1401}
          />
        </div>
      </div>
    </>
  );
};
