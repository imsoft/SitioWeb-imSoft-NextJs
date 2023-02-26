import React from "react";

import { PortfolioCard } from "../../components/ui/portfolio";

import { IPortfolioCard } from "../../interfaces";

const portfolio: IPortfolioCard[] = [
  {
    name: "Club De Estirpe",
    type: "Sitio Web 👨‍💻",
    href: "http://clubdeestirpe.com/",
    alt: "Sitio Web - Club de Estirpe - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%2FSitio%20Web%20-%20Club%20de%20Estirpe%20-%20imSoft.png?alt=media&token=cabaae1a-6cd5-4f72-af16-2ff9d6007149",
  },
  {
    name: "Construcción Inteligente",
    type: "Sitio Web 👨‍💻",
    href: "https://construccioninteligente.mx/",
    alt: "Sitio Web - Construccion Inteligente - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%2FSitio%20Web%20-%20Construccion%20Inteligente%20-%20imSoft.png?alt=media&token=e5779f91-4e40-4c84-bbc7-0aa334047fe9",
  },
  {
    name: "Ferreacabados Jalisco",
    type: "Sitio Web 👨‍💻",
    href: "https://ferrejalisco.mx/",
    alt: "Sitio Web - Ferreacabdos Jalisco - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%2FSitio%20Web%20-%20Ferreacabdos%20Jalisco%20-%20imSoft.png?alt=media&token=b6790604-5784-4559-ac68-32d07faa4270",
  },
  {
    name: "Red Municipal de Abogados",
    type: "Sitio Web 👨‍💻",
    href: "https://redmunicipaldeabogados.com/",
    alt: "Sitio Web - Red Municipal de Abogados - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%2FSitio%20Web%20-%20Red%20Municipal%20de%20Abogados%20-%20imSoft.png?alt=media&token=be9f2750-11bd-4d50-a0ed-68d5d3df9be2",
  },
  {
    name: "Unlimited Imports",
    type: "Sitio Web 👨‍💻",
    href: "https://unlimitedimports.com.mx/",
    alt: "Sitio Web - Unlimited Imports - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%2FSitio%20Web%20-%20Unlimited%20Imports%20-%20imSoft.png?alt=media&token=af713b25-5b45-431f-b118-1539cf6bf0bb",
  },
  {
    name: "Santa Maria Del Oro Jalisco",
    type: "Sitio Web Pro ⚡🧑‍💻🔥",
    href: "http://santamariadelorojal.com/",
    alt: "Sitio Web Pro - Santa Maria Del Oro Jalisco - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%20Pro%2FSitio%20Web%20Pro%20-%20Santa%20Maria%20Del%20Oro%20Jalisco%20-%20imSoft.png?alt=media&token=02b6bcff-8531-41cd-97ad-6472f9e4853b",
  },
  {
    name: "San Sebastián Del Oeste",
    type: "Sitio Web Pro ⚡🧑‍💻🔥",
    href: "https://sansebastiandeloeste.gob.mx/#/",
    alt: "Sitio Web Pro - Santa Sebastian Del Oeste - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%20Pro%2FSitio%20Web%20Pro%20-%20Santa%20Sebastian%20Del%20Oeste%20-%20imSoft.png?alt=media&token=f5653292-0b7c-4f41-8942-0a16c1115aa2",
  },
  {
    name: "Tuxcacuesco",
    type: "Sitio Web Pro ⚡🧑‍💻🔥",
    href: "https://tuxcacuesco.gob.mx/#/",
    alt: "Sitio Web Pro - Tuxcacuesco - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FSitio%20Web%20Pro%2FSitio%20Web%20Pro%20-%20Tuxcacuesco%20-%20imSoft.png?alt=media&token=6a5fb1ed-fed6-4f63-907c-e378b72034fb",
  },
  {
    name: "Pastería La Hidalguense",
    type: "Aplicación Web 🖥️📊",
    href: "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FAplicaci%C3%B3n%20Web%2FAplicaciones%20Web%20-%20Pasteria%20La%20Hidalguense%20-%20imSoft.png?alt=media&token=7afb97ed-7f79-483e-9cf6-3e73a849714c",
    alt: "Aplicación Web - Pastería La Hidalguense - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FAplicaci%C3%B3n%20Web%2FAplicaciones%20Web%20-%20Pasteria%20La%20Hidalguense%20-%20imSoft.png?alt=media&token=7afb97ed-7f79-483e-9cf6-3e73a849714c",
  },
  {
    name: "Club De Estirpe",
    type: "Aplicación Móvil 📱📊",
    href: "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FAplicaciones%20M%C3%B3viles%2FClub%20de%20Estirpe%20-%20Aplicacio%CC%81n%20Mo%CC%81vil%20-%20imSoft.png?alt=media&token=157f20b5-cb0e-4c59-8ff8-bd422c268c7d",
    alt: "Aplicación Móvil - Club De Estirpe - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FAplicaciones%20M%C3%B3viles%2FClub%20de%20Estirpe%20-%20Aplicacio%CC%81n%20Mo%CC%81vil%20-%20imSoft.png?alt=media&token=157f20b5-cb0e-4c59-8ff8-bd422c268c7d",
  },
  {
    name: "¡Contactanos!",
    type: "¡Sigues tu! 💻🏆",
    href: "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FAplicaci%C3%B3n%20Web%2FAplicaciones%20Web%20-%20Pasteria%20La%20Hidalguense%20-%20imSoft.png?alt=media&token=7afb97ed-7f79-483e-9cf6-3e73a849714c",
    alt: "Contactanos - imSoft",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Portafolio%20de%20trabajos%2FOtros%2FAqui%CC%81%20va%20el%20siguiente%20paso%20para%20tu%20negocio%20-%20imSoft.png?alt=media&token=eb2aa2e4-92b5-4fe6-a237-61d63b731bbc",
  },
];

const portafolio = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">
                Nuestros Trabajos
              </h2>
              <p className="text-xl text-gray-500">
                Bienvenidos a nuestro portafolio de trabajos. Aquí podrán
                encontrar una muestra de nuestros proyectos más recientes y
                destacados en el campo del desarrollo de software. Cada uno de
                estos proyectos ha sido realizado con dedicación y atención a
                los detalles.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {portfolio.map((portfolio) => (
                <PortfolioCard
                  key={portfolio.alt}
                  name={portfolio.name}
                  type={portfolio.type}
                  href={portfolio.href}
                  alt={portfolio.alt}
                  imageUrl={portfolio.imageUrl}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default portafolio;
