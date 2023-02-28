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
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const infoIntroductorySection: IIntroductorySection = {
  title: "Sitio Web",
  description:
    "Ya disté el primer paso, permítenos acompañarte a dar el siguiente",
};

const infoFeaturesSection: IFeaturesSection = {
  topic: "Sitio Web",
  title: "Caracteristicas del servicio",
  description:
    "Esta opción es excelente para cualquier emprendedor o empresa que quiera tener presencia en la internet, llegar a más clientes y generar más ingresos",
  serviceFeatures: [
    {
      title: "Diseño web amigable",
      description:
        "Recuerda que solo tenemos 10 segundos para llamar la atención de tus futuros clientes.",
      icon: ComputerDesktopIcon,
    },
    {
      title: "Económico",
      description:
        "Wordpress al ser tan amigable y moldeable utilizarlo es una opción muy económica.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Herramienta popular",
      description:
        "Con solo el 43% del internet wordpress se convierte en una herramienta muy popular.",
      icon: GlobeAltIcon,
    },
    {
      title: "Mantenimiento optimo",
      description:
        "Wordpress es muy amigable para realizar cualquier tipo de mantenimiento o actualizaciones.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Escalabilidad",
      description:
        "Wordpress crece con tu empresa, cada idea que tengas en mente, nosotros la aterrizaremos.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "SEO Friendly",
      description:
        "Para llegar a las primeras búsquedas de Google, esta es tu mejor opción.",
      icon: MagnifyingGlassIcon,
    },
  ],
};

const infoPricesSection: IPricesSection = {
  topic: "Sitio Web",
  description:
    "Hacemos que tu negocio tenga presencia en línea con nuestros sitios web",
  listOfPackages: [
    {
      title: "Paquete de Sitio Web #1",
      description:
        "Diseñamos y desarrollamos sitios web personalizados a tu medida.",
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
      price: "8,999",
    },
    {
      title: "Paquete de Sitio Web #2",
      description:
        "Brindamos soluciones de desarrollo web profesionales y eficientes.",
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
      price: "10,999",
    },
    {
      title: "Paquete de Sitio Web #3",
      description:
        "Nuestros sitios web son atractivos, responsivos y fáciles de usar.",
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
      price: "12,999",
    },
  ],
};

const infoCallToActionSection: ICallToActionSection = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20imSoft.jpg?alt=media&token=62e43360-f03f-4996-9008-07a5c03b22e8",
  topic: "Sitio Web",
  title:
    "Hacemos que tu negocio tenga presencia en línea con nuestros sitios web",
  description:
    "Si quieres que tu negocio tenga éxito en línea, es esencial contar con un sitio web atractivo y funcional. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital.",
};

const index = () => {
  return (
    <>
      <Head>
        <title>Sitio Web | imSoft</title>
        <Metatags
          title={"Sitio Web | imSoft"}
          description={
            "Si quieres que tu negocio tenga éxito en línea, es esencial contar con un sitio web atractivo y funcional. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital."
          }
          keywords={"Sitio Web, imSoft"}
          author={"Brandon Uriel García Ramos"}
          subject={"Sitio Web"}
          date={"01/01/2023"}
          type={"Sitio Web"}
          source={"https://www.imsoft.io/sitio-web"}
          image={
            "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Servicios%2FSitio%20Web%20imSoft.jpg?alt=media&token=62e43360-f03f-4996-9008-07a5c03b22e8"
          }
          url={"https://www.imsoft.io/sitio-web"}
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
