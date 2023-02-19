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
  BoltIcon,
  PencilSquareIcon,
  MagnifyingGlassCircleIcon,
  ArrowTrendingUpIcon,
  PencilIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { CallToActionSection } from "../../../components/ui/services/CallToActionSection";

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
      price: "10,000",
    },
    {
      title: "Paquete de Sitio Web Pro #2",
      description: "Soluciones web personalizadas y a medida para tu negocio.",
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
      price: "30,000",
    },
  ],
};

const infoCallToActionSection: ICallToActionSection = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Sitio%20web%20pro%20imSoft.jpg?alt=media&token=e8b38dea-4bd1-43d4-b754-bdb17c4ef37d",
  topic: "Sitio Web Pro",
  title: "Soluciones web personalizadas y a medida para tu negocio",
  description:
    "Diseñamos y desarrollamos sitios web que se adaptan a tus necesidades y a las de tu audiencia, y que reflejan la esencia de tu negocio. Además, utilizamos tecnología de vanguardia para garantizar que tu sitio web sea atractivo, responsivo y fácil de usar. Si quieres que tu negocio tenga presencia en línea y alcance nuevos clientes, no dudes en contactarme y solicitar una cotización. Con mi experiencia y conocimientos en el campo del desarrollo web, estoy seguro de que podemos ayudarte a alcanzar tus objetivos y a tener éxito en el mundo digital.",
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
