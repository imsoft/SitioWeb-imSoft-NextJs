import React from "react";
import Head from "next/head";

import {
  FeaturesSection,
  IntroductorySection,
  PricesSection,
  CallToActionSection,
} from "../../../components/ui/services";

import {
  ICallToActionSection,
  IFeaturesSection,
  IIntroductorySection,
  IMetatags,
  IPricesSection,
} from "../../../interfaces";

import {
  BoltIcon,
  PencilSquareIcon,
  MagnifyingGlassCircleIcon,
  ArrowTrendingUpIcon,
  PencilIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const index = () => {
  const infoIntroductorySection: IIntroductorySection = {
    title: "Sitio Web Pro",
    description:
      "Utilizamos las mejores tecnologías para que tu empresa llegue al siguiente nivel",
  };

  const infoFeaturesSection: IFeaturesSection = {
    topic: "Sitio Web Pro",
    title: "Caracteristicas del servicio",
    description:
      "Un sitio web bien administrado es el arma más poderosa de una empresa y con la utilización de estas herramientas podrás hacer de tu empresa algo más profesional",
    serviceFeatures: [
      {
        title: "Sitio Web Ultra Rápido",
        description:
          "Con este servicio la velocidad de tu sitio web cambiara drásticamente y así tener una mejor retención del usuario.",
        icon: BoltIcon,
      },
      {
        title: "Personalizable",
        description:
          "Este servicio te ayudara a aterrizar tus ideas para que tus clientes tengan una mejor experiencia de usuario.",
        icon: PencilSquareIcon,
      },
      {
        title: "SEO Friendly",
        description:
          "El SEO es fundamental para las empresas que buscan ser encontradas, y por eso esta tecnología es la mejor para ti.",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        title: "De las tecnologías web más populares",
        description:
          "Las mejores empresas utilizan Next.js porque saben el poder y los resultados a los que se pueden llegar.",
        icon: ArrowTrendingUpIcon,
      },
      {
        title: "Rápido de trabajar",
        description:
          "Cada empresa es diferente y con ello llegan muchas ideas, te ayudaremos a plasmar esas ideas de manera fácil y rápida.",
        icon: PencilIcon,
      },
      {
        title: "Sitio web ligero",
        description:
          "Google se fija mucho en la velocidad y peso de los sitios web, por eso esta es la mejor opción para ti.",
        icon: ComputerDesktopIcon,
      },
    ],
  };

  const infoPricesSection: IPricesSection = {
    topic: "Sitio Web",
    description:
      "Experiencia y profesionalismo en cada proyecto de desarrollo web",
    listOfPackages: [
      {
        title: "Paquete de Sitio Web Pro #1",
        description: "Te acompañamos en el crecimiento de tu negocio en línea.",
        featuresOfPackage: [
          "Hasta 4 secciones",
          "Adaptación de dispositivos móviles",
          "Formulario de contacto",
          "Mapa de ubicación",
          "Enlaces a redes sociales",
          "Enlace a número de WhatsApp",
          "Dos Correos electrónicos",
          "Certificado de seguridad",
          "Un solo idioma",
          "Dominio",
          "Hosting",
          "Alta en Google negocios",
        ],
        price: "13,999",
      },
      {
        title: "Paquete de Sitio Web Pro #2",
        description:
          "Soluciones web personalizadas y a medida para tu negocio.",
        featuresOfPackage: [
          "Hasta 6 secciones",
          "Adaptación de dispositivos móviles",
          "Formulario de contacto",
          "Mapa de ubicación",
          "Enlaces a redes sociales",
          "Enlace a número de WhatsApp",
          "Cuatro Correos electrónicos",
          "Certificado de seguridad",
          "Un solo idioma",
          "Dominio",
          "Hosting",
          "SEO básico",
          "Alta en Google negocios",
        ],
        price: "15,999",
      },
      {
        title: "Paquete de Sitio Web Pro #3",
        description: "Sitios web de alta calidad y diseño atractivo.",
        featuresOfPackage: [
          "Hasta 8 secciones",
          "Adaptación de dispositivos móviles",
          "Formulario de contacto",
          "Mapa de ubicación",
          "Enlaces a redes sociales",
          "Enlace a número de WhatsApp",
          "Seis Correos electrónicos",
          "Certificado de seguridad",
          "Un solo idioma",
          "Escaneo de amenazas “SG Site Scanner”",
          "Dominio",
          "Hosting",
          "SEO básico",
          "Generación de código de Google Analytics",
          "Alta en Google negocios",
        ],
        price: "17,999",
      },
    ],
  };

  const infoCallToActionSection: ICallToActionSection = {
    image:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20Pro%20imSoft.jpg?alt=media&token=4f1763f4-fa51-4485-a8f9-d99aa7e23b2a",
    topic: "Sitio Web Pro",
    title: "Soluciones web personalizadas y a medida para tu negocio",
    description:
      "Diseñamos y desarrollamos sitios web que se adaptan a tus necesidades y a las de tu audiencia, y que reflejan la esencia de tu negocio. Además, utilizamos tecnología de vanguardia para garantizar que tu sitio web sea atractivo, responsivo y fácil de usar. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Con mi experiencia y conocimientos en el campo del desarrollo web, estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital.",
  };
  
  const metatagsInfo: IMetatags = {
    title: "Sitio Web Pro | imSoft",
    description:
      "Diseñamos y desarrollamos sitios web que se adaptan a tus necesidades y a las de tu audiencia, y que reflejan la esencia de tu negocio. Además, utilizamos tecnología de vanguardia para garantizar que tu sitio web sea atractivo, responsivo y fácil de usar. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Con mi experiencia y conocimientos en el campo del desarrollo web, estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital",
    keywords: "Pagina Web Pro, Sitio Web Pro, imSoft",
    author: "Brandon Uriel García Ramos",
    subject: "Sitio Web Pro",
    date: "01/01/2023",
    type: "Sitio Web Pro",
    source: "https://www.imsoft.io/sitio-web-pro",
    image:
      "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20Pro%20imSoft.jpg?alt=media&token=4f1763f4-fa51-4485-a8f9-d99aa7e23b2",
    url: "https://www.imsoft.io/sitio-web-pro",
    robots: "index,follow",
  };

  return (
    <>
      <Head>
        {/* MetaEtiquetas Básicas */}
        <title>{metatagsInfo.title}</title>
        <meta name="title" content={metatagsInfo.title} />
        <meta httpEquiv="title" content={metatagsInfo.title} />
        <meta name="description" lang="es" content={metatagsInfo.description} />
        <meta name="keywords" lang="es" content={metatagsInfo.keywords} />

        {/* Informacion del autor */}
        <meta name="author" content={metatagsInfo.author} />

        {/* Dublincore */}
        <meta name="DC.title" lang="es-MX" content={metatagsInfo.title} />
        <meta name="DC.creator" lang="es-MX" content={metatagsInfo.author} />
        <meta name="DC.subject" lang="es-MX" content={metatagsInfo.subject} />
        <meta
          name="DC.description"
          lang="es-MX"
          content={metatagsInfo.description}
        />
        <meta name="DC.publisher" lang="es-MX" content={metatagsInfo.author} />
        <meta name="DC.date" lang="es-MX" content={metatagsInfo.date} />
        <meta name="DC.type" lang="es-MX" content={metatagsInfo.type} />
        <meta name="DC.identifier" lang="es-MX" content={metatagsInfo.title} />
        <meta name="DC.source" lang="es-MX" content={metatagsInfo.source} />
        <meta name="DC.relation" lang="es-MX" content={metatagsInfo.source} />

        {/* Twitter */}
        <meta name="twitter:title" content={metatagsInfo.title} />
        <meta name="twitter:description" content={metatagsInfo.description} />
        <meta name="twitter:image:src" content={metatagsInfo.image} />
        <meta name="twitter:image:alt" content={metatagsInfo.title} />

        {/* Facebook */}
        <meta property="og:title" content={metatagsInfo.title} />
        <meta property="og:type" content={metatagsInfo.type} />
        <meta
          property="og:url"
          content={`https://www.imsoft.io${metatagsInfo.url}`}
        />
        <meta property="og:image" content={metatagsInfo.image} />
        <meta property="og:description" content={metatagsInfo.description} />

        {/* Google + / Pinterest */}
        <meta itemProp="description" content={metatagsInfo.description} />
        <meta itemProp="image" content={metatagsInfo.image} />

        {/* Robots */}
        <meta name="robots" content={metatagsInfo.robots} />
      </Head>

      <main>
        <IntroductorySection
          title={infoIntroductorySection.title}
          description={infoIntroductorySection.description}
        />

        <FeaturesSection
          topic={infoFeaturesSection.topic}
          title={infoFeaturesSection.title}
          description={infoFeaturesSection.description}
          serviceFeatures={infoFeaturesSection.serviceFeatures}
        />

        <PricesSection
          topic={infoPricesSection.topic}
          description={infoPricesSection.description}
          listOfPackages={infoPricesSection.listOfPackages}
        />

        <CallToActionSection
          image={infoCallToActionSection.image}
          topic={infoCallToActionSection.topic}
          title={infoCallToActionSection.title}
          description={infoCallToActionSection.description}
        />
      </main>
    </>
  );
};

export default index;
