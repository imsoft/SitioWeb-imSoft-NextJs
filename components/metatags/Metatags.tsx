import React from "react";

interface IMetatags {
  title: string;
  description: string;
  keywords: string;
  author: string;
  subject: string;
  date: string;
  type: string;
  source: string;
  image: string;
  url: string;
}

export const Metatags = ({
  title,
  description,
  keywords,
  author,
  subject,
  date,
  type,
  source,
  image,
  url,
}: IMetatags) => {
  return (
    <>
      {/* MetaEtiquetas Básicas */}
      {/* Generales */}
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      {/* Título de la página. Longitud aproximada de 65 caracteres */}
      
      {/* <title>{`${title}`}</title> */}
      <title>{title}</title>

      <meta name="Title" content={`${title}`} />
      <meta httpEquiv="title" content={`${title}`} />

      {/* Descripcion de página. Longitud aproximada de 155 caracteres. */}
      <meta name="description" lang="es" content={`${description}`} />
      {/* <meta
  name="description"
  lang="en"
  content="imSoft: A leading software development company that offers innovative and customized solutions to meet the needs of its clients."
/> */}

      {/* Palabras clave de la página. Cantidad de palabras clave autorizadas de 5 o 6. */}
      <meta name="keywords" lang="es" content={`${keywords}`} />
      {/* <meta
  name="keywords"
  lang="en"
  content="software development, web design, search engine optimization (SEO), e-commerce, web development, interface design."
/> */}

      {/* Robots */}
      <meta name="robots" content="index,follow" />

      {/* Idioma */}
      <meta name="language" content="Spanish" />
      <meta httpEquiv="content-language" content="es-MX, en-US" />
      <meta name="google" content="translate" />
      {/* <meta name="language" content="English" /> */}

      {/* Verificación de Google */}
      <meta
        name="google-site-verification"
        content="pvyVE_CtvBayRNtgHKflmg3alt70Jg21otjzmB0xL-w"
      />

      {/* Periodos de chequeo */}
      <meta name="revisit-after" content="1 week" />

      {/* GeoLocalización */}
      <meta name="DC.title" content={`${title}`} />
      <meta name="geo.region" content="MX-JAL" />
      <meta name="geo.placename" content="Guadalajara" />
      <meta name="geo.position" content="20.672038;-103.338396" />
      <meta name="ICBM" content="20.672038, -103.338396" />

      {/* Informacion del autor */}
      <meta name="author" content={`${author}`} />
      <meta name="copyright" content="Brandon Uriel García Ramos | imSoft" />
      <meta name="generator" content="nextjs 13" />

      {/* Cache */}
      <meta content="no-cache" name="Pragma" />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="cache-control" content="no-cache" />

      {/* Dublincore */}
      <meta name="DC.title" lang="es-MX" content={`${title}`} />
      <meta name="DC.creator" lang="es-MX" content={`${author}`} />
      <meta name="DC.subject" lang="es-MX" content={`${subject}`} />
      <meta name="DC.description" lang="es-MX" content={`${description}`} />
      <meta name="DC.publisher" lang="es-MX" content={`${author}`} />
      <meta name="DC.contributor" lang="es-MX" content="imSoft" />
      <meta name="DC.date" lang="es-MX" content={`${date}`} />
      <meta name="DC.type" lang="es-MX" content={`${type}`} />
      <meta name="DC.format" lang="es-MX" content="text/html" />
      <meta name="DC.identifier" lang="es-MX" content={`${title}`} />
      <meta name="DC.source" lang="es-MX" content={`${source}`} />
      <meta name="DC.language" lang="es-MX" content="es" />
      <meta name="DC.relation" lang="es-MX" content={`${source}`} />
      <meta name="DC.coverage" lang="es-MX" content="Jalisco, México" />
      <meta
        name="DC.rights"
        lang="es-MX"
        content="Brandon Uriel García Ramos | imSoft"
      />

      {/* Bots no usaran yahoo ni DMOZ */}
      <meta name="robots" content="noodp,noydir" />
      {/* Bot yahoo no usara dir yahoo */}
      <meta name="slurp" content="noydir" />
      {/* Bot msn no usara DMOZ */}
      <meta name="msnbot" content="noodp" />
      {/* Bot Google no usara DMOZ */}
      <meta name="googlebot" content="noodp" />

      {/* Twitter */}

      <meta name="twitter:card" content="imSoft" />
      <meta name="twitter:site" content="@weareimsoft" />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:creator" content="@weareimsoft" />
      <meta name="twitter:site:id" content="1287151557197418496" />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image:src" content={`${image}`} />
      <meta name="twitter:image:alt" content={`${title}`} />

      {/* Facebook */}

      <meta property="og:title" content={`${title}`} />
      <meta property="og:type" content={`${type}`} />
      <meta property="og:url" content={`https://www.imsoft.io${url}`} />
      <meta property="og:image" content={`${image}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:site_name" content="imSoft" />
      <meta property="og:latitude" content="20.672038" />
      <meta property="og:longitude" content="-103.338396" />
      <meta
        property="og:street-address"
        content="Guadalajara, Jalisco, México"
      />
      <meta property="og:locality" content="Guadalajara" />
      <meta property="og:region" content="Jalisco" />
      <meta property="og:postal-code" content="44860" />
      <meta property="og:country-name" content="Mexico" />
      <meta property="fb:admins" content="100064776523522" />

      {/* Google + / Pinterest */}

      <meta itemProp="name" content="imSoft" />
      <meta itemProp="description" content={`${description}`} />
      {/* Facebook image must be at least 600x315px */}
      <meta itemProp="image" content={`${image}`} />
    </>
  );
};
