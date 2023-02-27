import React from "react";
import Link from "next/link";

export const SixthSection = () => {

  const linkWhatsappBusiness = process.env.NEXT_PUBLIC_LINK_WHATSAPP_BUSINESS;

  return (
    <>
      <div className="bg-primary-500">
        <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Impulsemos tu empresa</span>
            <span className="block">Cuentanos tu siguiente gran idea</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-100">
            Nuestra experiencia en el desarrollo de sitios web asegurará que su
            sitio web sea fácil de usar y se vea genial en todos los
            dispositivos.
          </p>
          <Link
            href={`${linkWhatsappBusiness}`}
            target="_blank"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-primary-500 sm:w-auto"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </>
  );
};
