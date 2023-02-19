import React from "react";
import {
  FeaturesSection,
  IntroductorySection,
  PricesSection,
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
import { CallToActionSection } from "../../../components/ui/services/CallToActionSection";

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
      price: "10,000",
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
      price: "20,000",
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
      price: "30,000",
    },
  ],
};

const infoCallToActionSection: ICallToActionSection = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Sitio%20Web%20imSoft.jpg?alt=media&token=24876c4a-b461-47d4-be61-67c4cff32881",
  topic: "Sitio Web",
  title:
    "Hacemos que tu negocio tenga presencia en línea con nuestros sitios web",
  description:
    "Si quieres que tu negocio tenga éxito en línea, es esencial contar con un sitio web atractivo y funcional. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital.",
};

const index = () => {
  return (
    <>
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
    </>
  );
};

export default index;
