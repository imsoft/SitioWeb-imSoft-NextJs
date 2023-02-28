import React from "react";
import Head from "next/head";

import { Metatags } from "../../../components/metatags";

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
  IPricesSection,
} from "../../../interfaces";

import {
  UserGroupIcon,
  ClockIcon,
  PresentationChartBarIcon,
  ArrowUpIcon,
  ArrowTrendingUpIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const infoIntroductorySection: IIntroductorySection = {
  title: "E-Commerce",
  description: "Vender en línea es como tener una sucursal 24/7",
};

const infoFeaturesSection: IFeaturesSection = {
  topic: "E-Commerce",
  title: "Caracteristicas del servicio",
  description:
    "Tu empresa tiene que modernizarse con una tienda en línea para poder llegar a clientes de todas partes, al alcance de un solo clic",
  serviceFeatures: [
    {
      title: "Generación de competitividad",
      description:
        "Al tener una tienda en línea ya estarás un paso delante de tu competencia.",
      icon: UserGroupIcon,
    },
    {
      title: "Atiende 24/7",
      description:
        "Recuerda, las tiendas en línea no cierran y todo esta al alcance de un clic.",
      icon: ClockIcon,
    },
    {
      title: "Genera más ventas",
      description: "Lleva a la gente a tu sitio web para generar ventas.",
      icon: PresentationChartBarIcon,
    },
    {
      title: "Potencia tus redes sociales",
      description:
        "Al llegar a tu tienda en línea, las personas te querrán conocer más.",
      icon: ArrowUpIcon,
    },
    {
      title: "Escalabilidad",
      description:
        "Elige un ecommerce escalable para un crecimiento sin límites.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "Compra fácil",
      description:
        "A tus clientes no les costara llegar al paso final, que es la compra.",
      icon: ShoppingBagIcon,
    },
  ],
};

const infoPricesSection: IPricesSection = {
  topic: "E-Commerce",
  description:
    "Un e-commerce escalable es la mejor inversión para tu negocio en línea",
  listOfPackages: [
    {
      title: "Paquete de E-Commerce #1",
      description:
        "Con un e-commerce escalable, tu tienda en línea está preparada para el futuro.",
      featuresOfPackage: [
        "Hasta cuatro secciones",
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
      price: "9,999",
    },
    {
      title: "Paquete de E-Commerce #2",
      description:
        "Nuestro equipo de desarrolladores de ecommerce te llevará al éxito.",
      featuresOfPackage: [
        "Hasta seis secciones",
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
      price: "12,999",
    },
    {
      title: "Paquete de E-Commerce #3",
      description:
        "Hacemos que tus compras en línea sean fáciles y seguras para tus clientes.",
      featuresOfPackage: [
        "Hasta ocho secciones",
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
      price: "15,999",
    },
  ],
};

const infoCallToActionSection: ICallToActionSection = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FTienda%20en%20linea%20imSoft.jpg?alt=media&token=e712fe2d-418b-4915-87de-f6906f79b588",
  topic: "E-Commerce",
  title: "Tu tienda en línea hecha a medida",
  description:
    "Si estás buscando expandir tu negocio y llevar tus productos o servicios a una audiencia más amplia, una tienda en línea es una excelente opción. Si estás listo para llevar tu negocio al siguiente nivel, no dudes en contactarme y solicitar una cotización. Estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo del e-commerce.",
};

const index = () => {
  return (
    <>
      <Head>
        <title>E-Commerce | imSoft</title>
        <Metatags
          title={"E-Commerce | imSoft"}
          description={
            "Si estás buscando expandir tu negocio y llevar tus productos o servicios a una audiencia más amplia, una tienda en línea es una excelente opción. Si estás listo para llevar tu negocio al siguiente nivel, no dudes en contactarme y solicitar una cotización. Estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo del e-commerce."
          }
          keywords={"Tienda en linea, E-Commerce, imSoft"}
          author={"Brandon Uriel García Ramos"}
          subject={"E-Commerce"}
          date={"01/01/2023"}
          type={"E-Commerce"}
          source={"https://www.imsoft.io/e-commerce"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FTienda%20en%20linea%20imSoft.jpg?alt=media&token=e712fe2d-418b-4915-87de-f6906f79b588"
          }
          url={"https://www.imsoft.io/e-commerce"}
        />
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
