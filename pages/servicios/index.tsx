import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Metatags } from "../../components/metatags";

const collections = [
  {
    name: "Consultoria de sitio web 🤓",
    description:
      "Un sitio web o tienda en línea siempre cuenta con áreas de oportunidad, nosotros las ubicaremos, analizaremos y las mejoraremos para que así puedas generar mayores ganancias en tu empresa.",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FConsultoria%20imSoft.jpg.jpg?alt=media&token=ee427b3a-06b4-40e0-abb6-ad79f0f3b31f",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/servicios/consultoria",
  },
  {
    name: "Sitio Web 👨‍💻",
    description:
      "Esta opción es excelente para cualquier emprendedor o empresa que quiera tener presencia en la internet, llegar a más clientes y generar más ingresos.",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20imSoft.jpg?alt=media&token=62e43360-f03f-4996-9008-07a5c03b22e8",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/servicios/sitio-web",
  },
  {
    name: "Sitio Web Pro ⚡🧑‍💻🔥",
    description:
      "Un sitio web bien administrado es el arma más poderosa de una empresa y con la utilización de estas herramientas podrás hacer de tu empresa algo más profesional.",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20Pro%20imSoft.jpg?alt=media&token=4f1763f4-fa51-4485-a8f9-d99aa7e23b2a",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/servicios/sitio-web-pro",
  },
  {
    name: "E-commerce 🛍️",
    description:
      "Tu empresa tiene que modernizarse con una tienda en línea para poder llegar a clientes de todas partes, al alcance de un solo clic.",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FTienda%20en%20linea%20imSoft.jpg?alt=media&token=e712fe2d-418b-4915-87de-f6906f79b588",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/servicios/e-commerce",
  },
  {
    name: "Posicionamiento SEO 🔝",
    description:
      "Las personas únicamente les hace caso a los primeros enlaces de Google.",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FPosicionamiento%20SEO%20imSoft.jpg?alt=media&token=7b9ea347-50a6-478b-b629-9c67f1f32222",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/servicios/posicionamiento-seo",
  },
];

const index = () => {
  return (
    <>
      <Head>
        <title>Servicios | imSoft</title>
        <Metatags
          title={"Servicios | imSoft"}
          description={
            "Diseñamos y desarrollamos sitios web que se adaptan a tus necesidades y a las de tu audiencia, y que reflejan la esencia de tu negocio. Además, utilizamos tecnología de vanguardia para garantizar que tu sitio web sea atractivo, responsivo y fácil de usar. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Con mi experiencia y conocimientos en el campo del desarrollo web, estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital."
          }
          keywords={"Servicios, imSoft, Sitio Web, Sitios web, Pagina Web, Paginas Web, ecommerce, tienda en linea, Posicionamiento SEO"}
          author={"Brandon Uriel García Ramos"}
          subject={"Servicios"}
          date={"01/01/2023"}
          type={"Servicios"}
          source={"https://www.imsoft.io/servicios"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Logos%20Empresa%2FLogotipo%20imSoft.png?alt=media&token=4b71448f-4047-402f-8b41-82a6c5e59ec4"
          }
          url={"https://www.imsoft.io/servicios"}
        />
      </Head>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
            <h2
              id="collections-heading"
              className="text-5xl pb-8 text-center font-bold text-primary-500"
            >
              Nuestros Servicios
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {collections.map((collection) => (
                <div key={collection.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      className="h-full w-full object-cover object-center"
                      width={6720}
                      height={4480}
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-gray-900">
                    <Link href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </Link>
                  </h3>
                  <p className="mb-6 text-sm text-gray-500">
                    {collection.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
