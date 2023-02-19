import React from "react";

import {
  IntroductorySection,
  FeaturesSection,
  PricesSection,
} from "../../../components/ui/services";

import {
  ICallToActionSection,
  IFeaturesSection,
  IIntroductorySection,
  IPricesSection,
} from "../../../interfaces";

import {
  EyeIcon,
  DocumentTextIcon,
  DocumentChartBarIcon,
  PresentationChartLineIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { CallToActionSection } from "../../../components/ui/services/CallToActionSection";

const infoIntroductorySection: IIntroductorySection = {
  title: "Consultoría de Sitio Web",
  description:
    "Nuestro enfoque en la calidad y la eficiencia en el desarrollo de software nos permite brindar soluciones excepcionales a nuestros clientes",
};

const infoFeaturesSection: IFeaturesSection = {
  topic: "Consultoría de sitio web",
  title: "Caracteristicas del servicio",
  description:
    "Maximizamos el rendimiento y la productividad de su empresa con software diseñado específicamente para usted",
  serviceFeatures: [
    {
      title: "Análisis profundo",
      description:
        "Nos adentraremos a lo mas profundo de tu sitio web para conocer sus áreas de oportunidad.",
      icon: EyeIcon,
    },
    {
      title: "Reporte del estado actual",
      description:
        "Redactaremos un reporte donde te describamos el estado actual de tu sitio web.",
      icon: DocumentTextIcon,
    },
    {
      title: "Reporte de mejoras",
      description:
        "Haremos una lista de las mejoras que te recomendaremos para que el estado de tu sitio web mejore considerablemente.",
      icon: DocumentChartBarIcon,
    },
    {
      title: "Asesoramiento de las tecnologías",
      description:
        "Te diremos como funcionan ciertas tecnologías de tu sitio web y el como sacarles provecho.",
      icon: PresentationChartLineIcon,
    },
    {
      title: "Plan de Marketing",
      description:
        "Realizaremos una buena estrategia de marketing para que más clientes compren o contraten tus servicios.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Honestidad",
      description:
        "Tendrás lo que realmente necesitas porque entendemos perfectamente lo importante y difícil que es tener una empresa.",
      icon: CheckCircleIcon,
    },
  ],
};

const infoPricesSection: IPricesSection = {
  topic: "Consultoría de sitio web",
  description:
    "Diseñamos y desarrollamos soluciones de software que impulsan el crecimiento de su empresa",
  listOfPackages: [
    {
      title: "Paquete de consultoria #1",
      description:
        "Nuestro enfoque en la calidad y la eficiencia en el desarrollo de software nos permite brindar soluciones excepcionales a nuestros clientes.",
      featuresOfPackage: [
        "Reporte del estado actual",
        "Reporte de mejoras",
        "Asesoramiento del uso de las tecnologías",
        "Plan de marketing",
        "Cuatro sesiones mensuales con duración de 1hr",
      ],
      price: "10,000",
    },
  ],
};

const infoCallToActionSection: ICallToActionSection = {
  image:
    "https://firebasestorage.googleapis.com/v0/b/imsoft-website.appspot.com/o/Consultorio%20Web%20imSoft.jpg?alt=media&token=199421d1-a218-469c-bc3a-7375f385d947",
  topic: "Consultoría de sitio web",
  title: "Estamos aquí para ayudar",
  description:
    "Somos una empresa altamente calificada y con experiencia en la creación de sitios web y aplicaciones web. Estamos seguro de poder brindarle a su empresa un servicio de alta calidad y entregar un producto final que cumpla con sus expectativas y necesidades.",
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
